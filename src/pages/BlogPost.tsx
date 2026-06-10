import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Tag, User } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => (slug ? getBlogPostBySlug(slug) : undefined), [slug]);
  const relatedPosts = useMemo(() => (slug ? getRelatedPosts(slug, 3) : []), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.thaliatechnologies.com/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.thaliatechnologies.com/blog/${post.slug}`,
      },
    ],
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    url: `https://www.thaliatechnologies.com/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Thalia Technologies",
      logo: "https://www.thaliatechnologies.com/thalia-logo.jpg",
    },
    keywords: post.tags.join(", "),
  };

  // Parse markdown-like content into structured elements
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let key = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${key++}`} className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground font-body leading-relaxed">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(
          <h2
            key={`h2-${key++}`}
            className="font-heading font-bold text-foreground text-2xl mb-4 mt-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(
          <h3
            key={`h3-${key++}`}
            className="font-heading font-bold text-foreground text-xl mb-3 mt-8"
            style={{ letterSpacing: "-0.01em" }}
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("- ")) {
        inList = true;
        listItems.push(trimmed.replace("- ", ""));
      } else if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length < 100) {
        flushList();
        elements.push(
          <p key={`bold-${key++}`} className="font-body font-semibold text-foreground mb-4">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      } else if (trimmed.length > 0) {
        flushList();
        // Inline bold formatting
        const formatted = trimmed
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/`(.+?)`/g, "<code>$1</code>");
        elements.push(
          <p
            key={`p-${key++}`}
            className="text-muted-foreground font-body leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  // Find previous and next posts by date
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : undefined;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : undefined;

  return (
    <Layout>
      <Seo
        title={post.seoTitle || post.title}
        description={post.seoDescription || post.excerpt}
        keywords={post.tags.join(", ")}
        path={`/blog/${post.slug}`}
        structuredData={[blogPostingSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark navy, post meta
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 88 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,192,255,0.13) 0%, transparent 65%)",
          }}
        />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium font-body transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.08em] font-body"
                  style={{
                    background: "rgba(0,192,255,0.1)",
                    color: "#00c0ff",
                    border: "1px solid rgba(0,192,255,0.25)",
                  }}
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-6"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg leading-relaxed mb-8 font-body"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              {post.excerpt}
            </motion.p>

            {/* Author + date row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-6 text-sm font-body"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-xs text-white"
                  style={{ background: "#00c0ff" }}
                >
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="text-white/80 font-medium">{post.author}</span>
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ARTICLE CONTENT
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <motion.article {...inView(0)} className="prose-custom">
              {renderContent(post.content)}
            </motion.article>

            {/* Tags bottom */}
            <motion.div {...inView(0.1)} className="mt-12 pt-8" style={{ borderTop: "1px solid hsl(220 15% 90%)" }}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground font-body mr-2">Tagged:</span>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.08em] font-body transition-colors hover:bg-primary/10"
                    style={{
                      background: "rgba(0,192,255,0.08)",
                      color: "#0099cc",
                      border: "1px solid rgba(0,192,255,0.18)",
                    }}
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PREV / NEXT NAVIGATION
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group card-elevated p-5 flex flex-col"
                  style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                >
                  <span className="text-xs text-muted-foreground font-body uppercase tracking-[0.12em] mb-2 flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" />
                    Previous
                  </span>
                  <h4 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {prevPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group card-elevated p-5 flex flex-col md:text-right md:items-end"
                  style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                >
                  <span className="text-xs text-muted-foreground font-body uppercase tracking-[0.12em] mb-2 flex items-center gap-1 md:flex-row-reverse">
                    Next
                    <ArrowRight className="h-3 w-3" />
                  </span>
                  <h4 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {nextPost.title}
                  </h4>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED POSTS
      ════════════════════════════════════════════════════════════════ */}
      {relatedPosts.length > 0 && (
        <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="section-container">
            <motion.div {...inView(0)} className="max-w-3xl mx-auto mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-3 font-body">
                Keep Reading
              </span>
              <h2 className="font-heading text-h2 font-bold text-foreground" style={{ letterSpacing: "-0.02em" }}>
                Related Articles
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {relatedPosts.map((related, i) => (
                <motion.div key={related.slug} {...inView(Math.min(i * 0.08, 0.2))}>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group flex items-start gap-5 card-elevated p-5"
                    style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0,192,255,0.08)",
                        border: "1px solid rgba(0,192,255,0.15)",
                      }}
                    >
                      <BookOpen className="h-6 w-6 text-primary/60" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-2 mb-1.5">
                        {related.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold uppercase tracking-[0.08em] font-body text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors truncate"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body mt-1 line-clamp-1">
                        {related.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 0, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div
            {...inView(0)}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)",
              boxShadow: "0 24px 60px rgba(0,192,255,0.25)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative">
              <h2
                className="font-heading font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Power Up Your Ecommerce Store
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                Discover 18+ apps designed to help Shopify, Amazon, and BigCommerce merchants
                save time, reduce errors, and grow revenue.
              </p>
              <Link
                to="/apps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                style={{ color: "hsl(220 44% 8%)" }}
              >
                Browse Our Apps
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
