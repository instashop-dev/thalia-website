import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Quote,
  TrendingUp,
  ShoppingBag,
  Coffee,
  Tag,
  AlertCircle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { caseStudies } from "@/data/caseStudies";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const industryIcons: Record<string, React.ElementType> = {
  "Fashion & Apparel": ShoppingBag,
  "Food & Beverage": Coffee,
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const IndustryIcon = industryIcons[cs.industry] ?? Tag;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://www.thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.thaliatechnologies.com/case-studies" },
      { "@type": "ListItem", position: 3, name: cs.merchant,    item: `https://www.thaliatechnologies.com/case-studies/${cs.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.headline,
    description: cs.summary,
    author: { "@type": "Organization", name: "Thalia Technologies" },
    publisher: { "@type": "Organization", name: "Thalia Technologies", url: "https://www.thaliatechnologies.com" },
    url: `https://www.thaliatechnologies.com/case-studies/${cs.slug}`,
  };

  const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);

  return (
    <Layout>
      <Seo
        title={`${cs.merchant} Case Study — ${cs.app} | Thalia Technologies`}
        description={cs.summary.slice(0, 160)}
        keywords={`${cs.app}, ${cs.industry} Shopify, Shopify case study, ${cs.merchant}, promotional pricing Shopify, bulk price editor`}
        path={`/case-studies/${cs.slug}`}
        structuredData={[articleSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
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
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-body font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00c0ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-body"
                style={{
                  border: "1px solid rgba(0,192,255,0.28)",
                  background: "rgba(0,192,255,0.08)",
                  color: "#00c0ff",
                }}
              >
                <IndustryIcon className="w-3 h-3" />
                {cs.industry}
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-body"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {cs.app}
              </span>
            </motion.div>

            <h1 className="sr-only">{cs.headline} — {cs.merchant} Case Study</h1>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-5"
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              {cs.headline
                .split(/(hours|minutes|one-click|faster)/i)
                .map((part, i) =>
                  /hours|minutes|one-click|faster/i.test(part) ? (
                    <span key={i} className="gradient-text-cyan">{part}</span>
                  ) : (
                    part
                  )
                )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="font-body text-base mb-8"
              style={{ color: "rgba(255,255,255,0.62)" }}
            >
              {cs.merchant} · {cs.location}
              {cs.merchantUrl && (
                <>
                  {" · "}
                  <a
                    href={`https://${cs.merchantUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    style={{ color: "rgba(0,192,255,0.8)" }}
                  >
                    {cs.merchantUrl}
                  </a>
                </>
              )}
            </motion.p>

            {/* Key result chips */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              {cs.results.map((r) => (
                <div
                  key={r.label}
                  className="flex items-baseline gap-2 px-4 py-2.5 rounded-full font-body"
                  style={{
                    background: r.accent ? "rgba(0,192,255,0.12)" : "rgba(255,255,255,0.05)",
                    border: r.accent ? "1px solid rgba(0,192,255,0.35)" : "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span
                    className="text-base font-heading font-bold"
                    style={{ color: r.accent ? "#00c0ff" : "white" }}
                  >
                    {r.metric}
                  </span>
                  <span className="text-xs uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {r.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MERCHANT SNAPSHOT TABLE
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container">
          <div className="max-w-2xl">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                AT A GLANCE
              </span>
            </motion.div>
            <motion.div
              {...inView(0.06)}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid hsl(var(--border))" }}
            >
              {[
                { label: "Industry",        value: cs.industry },
                { label: "Catalogue size",  value: cs.catalogueSize },
                { label: "Time with app",   value: cs.timeWithApp },
                { label: "Primary use",     value: cs.primaryUse },
                { label: "Featured by",     value: cs.featuredBy },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-start gap-6 px-6 py-4 text-sm font-body"
                  style={{
                    borderTop: i > 0 ? "1px solid hsl(var(--border))" : undefined,
                    background: i % 2 === 0 ? "hsl(var(--section-alt))" : "white",
                  }}
                >
                  <span className="font-semibold text-primary w-36 flex-shrink-0">{row.label}</span>
                  <span className="text-muted-foreground">{row.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE CHALLENGE
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <div className="max-w-3xl">
            <motion.div {...inView(0)} className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                <AlertCircle className="h-5 w-5" style={{ color: "#ef4444" }} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] font-body" style={{ color: "#ef4444" }}>
                THE CHALLENGE
              </span>
            </motion.div>

            <motion.p
              {...inView(0.06)}
              className="text-muted-foreground font-body leading-relaxed mb-8"
              style={{ fontSize: 16 }}
            >
              {cs.challenge.body}
            </motion.p>

            <div className="flex flex-col gap-3">
              {cs.challenge.bullets.map((b, i) => (
                <motion.div
                  key={i}
                  {...inView(0.06 + i * 0.06)}
                  className="flex items-start gap-3 p-4 rounded-xl font-body text-sm"
                  style={{
                    background: "rgba(239,68,68,0.04)",
                    border: "1px solid rgba(239,68,68,0.12)",
                  }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(239,68,68,0.15)" }}
                  >
                    <span style={{ color: "#ef4444", fontSize: 10, fontWeight: 700 }}>✕</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE SOLUTION
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <div className="max-w-3xl">
            <motion.div {...inView(0)} className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.2)" }}
              >
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary font-body">
                THE SOLUTION
              </span>
            </motion.div>

            <motion.p
              {...inView(0.06)}
              className="text-muted-foreground font-body leading-relaxed mb-8"
              style={{ fontSize: 16 }}
            >
              {cs.solution.body}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cs.solution.bullets.map((b, i) => (
                <motion.div
                  key={i}
                  {...inView(0.06 + i * 0.06)}
                  className="card-elevated p-5 flex gap-4"
                  style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-heading font-bold text-sm text-foreground mb-1">{b.title}</div>
                    <div className="text-xs font-body text-muted-foreground leading-relaxed">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE RESULTS
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 88, paddingBottom: 88 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,192,255,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="section-container relative">
          <motion.div {...inView(0)} className="flex items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.25)" }}
            >
              <BarChart3 className="h-5 w-5" style={{ color: "#00c0ff" }} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] font-body" style={{ color: "#00c0ff" }}>
              THE RESULTS
            </span>
          </motion.div>

          {/* Big metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {cs.results.map((r, i) => (
              <motion.div
                key={r.label}
                {...inView(i * 0.08)}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: r.accent
                    ? "linear-gradient(135deg, rgba(0,192,255,0.15) 0%, rgba(124,58,237,0.1) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: r.accent
                    ? "1px solid rgba(0,192,255,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="font-heading font-extrabold leading-none mb-3"
                  style={{
                    fontSize: "clamp(36px, 5vw, 56px)",
                    color: r.accent ? "#00c0ff" : "white",
                  }}
                >
                  {r.metric}
                </div>
                <div
                  className="text-xs font-body uppercase tracking-[0.12em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {r.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Result narrative */}
          <motion.div
            {...inView(0.2)}
            className="max-w-3xl"
          >
            <p
              className="font-body leading-relaxed mb-10"
              style={{ color: "rgba(255,255,255,0.68)", fontSize: 16 }}
            >
              {cs.resultBody}
            </p>

            {/* Blockquote */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,192,255,0.2)",
                borderLeft: "4px solid #00c0ff",
              }}
            >
              <Quote className="h-6 w-6 mb-4" style={{ color: "rgba(0,192,255,0.5)" }} />
              <blockquote
                className="font-body italic leading-relaxed mb-5 text-white"
                style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
              >
                "{cs.quote}"
              </blockquote>
              <div>
                <div className="font-heading font-bold text-white text-sm">{cs.quoteName}</div>
                <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {cs.quoteRole}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRY THE APP CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <motion.div
            {...inView(0)}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-8 md:p-10 rounded-2xl"
            style={{
              background: "hsl(var(--section-alt))",
              border: "1px solid hsl(var(--border))",
              borderTop: "3px solid #00c0ff",
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                  GET STARTED
                </span>
              </div>
              <h2
                className="font-heading font-extrabold text-foreground mb-2"
                style={{ fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.02em" }}
              >
                Try {cs.app} on Your Store
              </h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-lg">
                See why merchants like {cs.merchant} trust {cs.app} to save time and launch
                promotions faster — install it on your Shopify store today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                to={`/apps/${cs.appSlug}`}
                className="btn-primary text-sm whitespace-nowrap"
              >
                View App Details <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                to="/case-studies"
                className="btn-outline text-sm whitespace-nowrap"
              >
                More Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED STORIES
      ════════════════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section style={{ background: "hsl(var(--section-alt))", paddingTop: 80, paddingBottom: 80 }}>
          <div className="section-container">
            <motion.div {...inView(0)} className="mb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-2">
                MORE STORIES
              </span>
              <h2
                className="font-heading font-extrabold text-foreground"
                style={{ fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.02em" }}
              >
                More Merchant Wins
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r, i) => {
                const RelIcon = industryIcons[r.industry] ?? Tag;
                return (
                  <motion.div
                    key={r.slug}
                    {...inView(i * 0.08)}
                    className="card-elevated p-6"
                    style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                      >
                        <RelIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-body text-muted-foreground">{r.industry} · {r.app}</span>
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-3" style={{ fontSize: 15, lineHeight: 1.4 }}>
                      {r.headline}
                    </h3>
                    <div className="flex gap-4 mb-4">
                      {r.results.slice(0, 2).map((res) => (
                        <div key={res.label}>
                          <div className="font-heading font-extrabold text-primary text-lg leading-none">{res.metric}</div>
                          <div className="text-[10px] font-body text-muted-foreground">{res.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/case-studies/${r.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-primary hover:underline"
                    >
                      Read Story <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default CaseStudyDetail;
