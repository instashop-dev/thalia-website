import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Tag, User } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const textFromHtml = (value: string) => value.replace(/<[^>]+>/g, "").replace(/&mdash;/g, "—").trim();

const getLegacyFaqs = (html: string) => {
  const section = html.match(/<h2>(?:FAQ|Frequently Asked Questions)<\/h2>([\s\S]*?)(?=<h2>|$)/i);
  if (!section) return { section: undefined, faqs: [] as { question: string; answer: string }[] };

  const headingPairs = [...section[1].matchAll(/<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)];
  const strongPairs = [...section[1].matchAll(/<p><strong>([\s\S]*?)<\/strong><\/p>\s*<p>([\s\S]*?)<\/p>/gi)];
  const pairs = headingPairs.length ? headingPairs : strongPairs;

  return {
    section: section[0],
    faqs: pairs.map((pair) => ({ question: textFromHtml(pair[1]), answer: textFromHtml(pair[2]) })),
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => (slug ? getBlogPostBySlug(slug) : undefined), [slug]);
  const relatedPosts = useMemo(() => (slug ? getRelatedPosts(slug, 3) : []), [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const legacyFaq = getLegacyFaqs(post.contentHtml);
  const faqItems = post.faqs?.length ? post.faqs : legacyFaq.faqs;
  const articleContent = legacyFaq.section
    ? post.contentHtml.replace(legacyFaq.section, "")
    : post.contentHtml;

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
      "@type": post.author === "Thalia Technologies" ? "Organization" : "Person",
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
        structuredData={[blogPostingSchema, breadcrumbSchema, ...(faqItems.length ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }] : [])]}
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
            <motion.article
              {...inView(0)}
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />

            {faqItems.length ? (
              <motion.section
                {...inView(0.08)}
                aria-labelledby="blog-faq-heading"
                className="mt-14"
              >
                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                    Quick answers
                  </span>
                  <h2
                    id="blog-faq-heading"
                    className="font-heading text-h3 font-bold text-foreground mt-2"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Frequently asked questions
                  </h2>
                </div>

                <div
                  className="overflow-hidden rounded-2xl bg-white"
                  style={{ border: "1px solid hsl(220 15% 88%)" }}
                >
                  <div
                    className="hidden sm:grid grid-cols-[minmax(0,1fr)_136px] gap-4 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] font-body text-muted-foreground"
                    style={{ background: "hsl(220 25% 97%)", borderBottom: "1px solid hsl(220 15% 88%)" }}
                  >
                    <span>Question</span>
                    <span className="text-right">Answer</span>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((faq, index) => (
                      <AccordionItem
                        key={faq.question}
                        value={`faq-${index}`}
                        className="border-b-0 [&+&]:border-t"
                        style={{ borderColor: "hsl(220 15% 88%)" }}
                      >
                        <AccordionTrigger className="gap-4 px-5 py-4 text-left font-heading font-semibold text-foreground no-underline hover:bg-slate-50 hover:no-underline [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary">
                          <span>{faq.question}</span>
                          <span className="ml-auto mr-2 hidden shrink-0 text-[11px] font-body font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:block">
                            View answer
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-5 pb-5 pt-0 text-[15px] leading-relaxed text-muted-foreground font-body">
                          <div className="border-l-2 border-primary/40 pl-4">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.section>
            ) : null}

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
