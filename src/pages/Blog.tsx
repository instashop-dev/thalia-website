import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts, getAllTags } from "@/data/blog";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTag, setSelectedTag] = useState<string | null>(searchParams.get("tag"));
  const tags = getAllTags();

  useEffect(() => {
    const tag = searchParams.get("tag");
    if (tag && tags.includes(tag)) {
      setSelectedTag(tag);
    }
  }, [searchParams, tags]);

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return blogPosts;
    return blogPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag]);

  const featuredPost = blogPosts[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.thaliatechnologies.com/blog" },
    ],
  };

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Thalia Technologies Blog",
    url: "https://www.thaliatechnologies.com/blog",
    description:
      "Insights, tutorials, and strategies for ecommerce merchants on Shopify, Amazon, and BigCommerce. From the team behind 18+ merchant-focused apps.",
    publisher: {
      "@type": "Organization",
      name: "Thalia Technologies",
      logo: "https://www.thaliatechnologies.com/thalia-logo.jpg",
    },
  };

  return (
    <Layout>
      <Seo
        title="Thalia Blog — Ecommerce Tips for Shopify, Amazon & BigCommerce"
        description="Insights, tutorials, and strategies for ecommerce merchants. Learn about bulk editing, inventory sync, pricing strategies, and multi-channel selling."
        keywords="ecommerce blog, Shopify tips, Amazon selling, bulk price editing, inventory sync, dropshipping guide, GST invoicing"
        path="/blog"
        structuredData={[blogPageSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark navy, gradient headline
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
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold font-body select-none"
              style={{
                border: "1px solid rgba(0,192,255,0.28)",
                background: "rgba(0,192,255,0.08)",
                color: "#00c0ff",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00c0ff" }} />
              Ecommerce Insights
            </motion.div>

            {/* Hidden SEO H1 */}
            <h1 className="sr-only">Thalia Blog — Ecommerce Tips for Shopify, Amazon & BigCommerce</h1>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-6"
              style={{
                fontSize: "clamp(40px, 5.5vw, 64px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Insights for{" "}
              <span className="gradient-text-cyan">Ecommerce Merchants.</span>
            </motion.h2>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Practical guides, growth strategies, and product tips from the team building
              ecommerce tools for 100,000+ merchants worldwide.
            </motion.p>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { value: `${blogPosts.length}+`, label: "Articles" },
                { value: "100K+", label: "Merchants Helped" },
                { value: "10+", label: "Years Experience" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-2 px-4 py-2 rounded-full font-body"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="gradient-text-cyan text-base font-heading font-bold">{s.value}</span>
                  <span
                    className="text-xs uppercase tracking-[0.12em]"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FEATURED POST — prominent card
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <div className="section-container">
          <SectionHeading
            label="Featured"
            title="Latest from the Blog"
            description="Deep dives into the topics that matter most to ecommerce merchants."
          />

          <motion.div {...inView(0)}>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block card-elevated overflow-hidden"
              style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-[0.08em] font-body"
                        style={{
                          background: "rgba(0,192,255,0.08)",
                          color: "#0099cc",
                          border: "1px solid rgba(0,192,255,0.18)",
                        }}
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-2xl md:text-3xl mb-4 group-hover:text-primary transition-colors"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-body">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold group-hover:underline">
                      Read article
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center p-10"
                  style={{ background: "hsl(var(--section-alt))" }}
                >
                  <div
                    className="w-full h-full rounded-2xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,192,255,0.08) 0%, rgba(124,58,237,0.06) 100%)",
                      border: "1px solid rgba(0,192,255,0.12)",
                    }}
                  >
                    <BookOpen className="h-20 w-20 text-primary/30" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FILTER + POST GRID
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 72, paddingBottom: 96 }}>
        <div className="section-container">
          {/* Tag filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <button
              onClick={() => {
                setSelectedTag(null);
                setSearchParams({});
              }}
              className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-body transition-all"
              style={{
                background: selectedTag === null ? "rgba(0,192,255,0.1)" : "white",
                color: selectedTag === null ? "#0099cc" : "hsl(220 10% 35%)",
                border: selectedTag === null
                  ? "1px solid rgba(0,192,255,0.4)"
                  : "1px solid hsl(220 15% 90%)",
                boxShadow: selectedTag === null ? "0 2px 12px rgba(0,192,255,0.12)" : "none",
              }}
            >
              All Topics
            </button>
            {tags.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => {
                    if (active) {
                      setSelectedTag(null);
                      setSearchParams({});
                    } else {
                      setSelectedTag(tag);
                      setSearchParams({ tag });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-body transition-all"
                  style={{
                    background: active ? "rgba(0,192,255,0.1)" : "white",
                    color: active ? "#0099cc" : "hsl(220 10% 35%)",
                    border: active
                      ? "1px solid rgba(0,192,255,0.4)"
                      : "1px solid hsl(220 15% 90%)",
                    boxShadow: active ? "0 2px 12px rgba(0,192,255,0.12)" : "none",
                  }}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Post grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  {...inView(Math.min(i * 0.06, 0.25))}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block card-elevated h-full flex flex-col"
                    style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                  >
                    {/* Cover image / placeholder */}
                    {post.coverImage ? (
                      <div
                        className="h-44 w-full overflow-hidden"
                        style={{ borderBottom: "1px solid hsl(220 15% 90%)" }}
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div
                        className="h-44 w-full flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(0,192,255,0.06) 0%, rgba(124,58,237,0.04) 100%)",
                          borderBottom: "1px solid hsl(220 15% 90%)",
                        }}
                      >
                        <BookOpen className="h-10 w-10 text-primary/25" />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-[0.08em] font-body"
                            style={{
                              background: "rgba(0,192,255,0.08)",
                              color: "#0099cc",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-heading font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {post.title}
                      </h3>

                      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground font-body pt-4"
                        style={{ borderTop: "1px solid hsl(220 15% 90%)" }}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="card-elevated p-12 text-center">
              <p className="text-muted-foreground font-body">No articles match this topic yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
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
                Want to See Our Products in Action?
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                Explore our suite of 18+ ecommerce apps designed to help merchants
                work smarter and grow faster across Shopify, Amazon, and BigCommerce.
              </p>
              <Link
                to="/apps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                style={{ color: "hsl(220 44% 8%)" }}
              >
                Explore Our Apps
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
