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
  Star,
  Clock,
  Zap,
  Target,
  RefreshCw,
  Calendar,
  Package,
  Layers,
  Percent,
  DollarSign,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { caseStudies } from "@/data/caseStudies";

/* ── UTM helpers ─────────────────────────────────────────────── */
const APP_STORE_URLS: Record<string, string> = {
  "bulk-price-editor-pro": "https://apps.shopify.com/pro-bulk-price-editor",
};

const withUtm = (url: string, content: string) => {
  const u = new URL(url);
  u.searchParams.set("utm_source", "thaliatechnologies.com");
  u.searchParams.set("utm_medium", "website");
  u.searchParams.set("utm_campaign", "case_study");
  u.searchParams.set("utm_content", content);
  return u.toString();
};

/* ── Animation preset ────────────────────────────────────────── */
const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

/* ── Icon maps ───────────────────────────────────────────────── */
const industryIcons: Record<string, React.ElementType> = {
  "Fashion & Apparel": ShoppingBag,
  "Food & Beverage": Coffee,
};

const featureIcons: Record<string, React.ElementType> = {
  "Bulk Price Updates":              Layers,
  "Percentage Price Changes":        Percent,
  "Fixed Amount Adjustments":        DollarSign,
  "Collection-Based Updates":        Target,
  "Price Rollback":                  RefreshCw,
  "Scheduled Pricing":               Calendar,
};

/* ── Star rating component ───────────────────────────────────── */
const StarRating = ({ score, max = 5 }: { score: number; max?: number }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: max }).map((_, i) => (
      <Star
        key={i}
        className="h-5 w-5"
        style={{
          fill: i < score ? "#00c0ff" : "transparent",
          color: i < score ? "#00c0ff" : "hsl(var(--border))",
        }}
      />
    ))}
    <span className="ml-2 font-heading font-bold text-foreground" style={{ fontSize: 16 }}>
      {score} / {max}
    </span>
  </div>
);

/* ══════════════════════════════════════════════════════════════ */
const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const IndustryIcon = industryIcons[cs.industry] ?? Tag;
  const shopifyUrl = APP_STORE_URLS[cs.appSlug]
    ? withUtm(APP_STORE_URLS[cs.appSlug], `case_study_cta_${cs.slug}`)
    : null;

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
    headline: cs.headline ?? `${cs.merchant} — ${cs.app} Case Study`,
    description: cs.aboutMerchant.slice(0, 160),
    author: { "@type": "Organization", name: "Thalia Technologies" },
    publisher: { "@type": "Organization", name: "Thalia Technologies", url: "https://www.thaliatechnologies.com" },
    url: `https://www.thaliatechnologies.com/case-studies/${cs.slug}`,
  };

  const related = caseStudies.filter((c) => c.slug !== cs.slug);

  /* ── Derived headline ── */
  const headline =
    cs.slug === "firstvibe-bulk-pricing"
      ? "Firstvibe replaces hours of manual price edits with one-click promo launches"
      : "SNDY Coffee cuts EOFY pricing effort by up to 75% with scheduled bulk updates";

  return (
    <Layout>
      <Seo
        title={`${cs.merchant} Case Study — ${cs.app} | Thalia Technologies`}
        description={cs.aboutMerchant.slice(0, 155)}
        keywords={`${cs.app}, ${cs.industry} Shopify case study, ${cs.merchant}, bulk price editor Shopify, promotional pricing, ${cs.location} Shopify`}
        path={`/case-studies/${cs.slug}`}
        structuredData={[articleSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 88, paddingBottom: 80 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,192,255,0.13) 0%, transparent 65%)",
          }}
        />
        <div className="section-container relative">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-body font-medium transition-colors hover:text-primary"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
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
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {cs.app}
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold font-body"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {cs.location}
              </span>
            </motion.div>

            {/* Hidden SEO h1 */}
            <h1 className="sr-only">{headline} — {cs.merchant} Case Study</h1>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-5"
              style={{
                fontSize: "clamp(30px, 4vw, 50px)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
              }}
            >
              {headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-base mb-8"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {cs.merchant} · {cs.location}
              {cs.merchantUrl && (
                <>
                  {" · "}
                  <a
                    href={`https://${cs.merchantUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-primary"
                    style={{ color: "rgba(0,192,255,0.75)" }}
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
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              {cs.keyResults.map((r) => (
                <div
                  key={r.label}
                  className="flex items-baseline gap-2 px-4 py-2.5 rounded-full font-body"
                  style={{
                    background: r.accent ? "rgba(0,192,255,0.12)" : "rgba(255,255,255,0.05)",
                    border: r.accent ? "1px solid rgba(0,192,255,0.35)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="text-base font-heading font-bold"
                    style={{ color: r.accent ? "#00c0ff" : "white" }}
                  >
                    {r.metric}
                  </span>
                  <span
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {r.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MERCHANT SNAPSHOT + ABOUT
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: snapshot table */}
            <motion.div {...inView(0)}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">
                AT A GLANCE
              </span>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid hsl(var(--border))" }}
              >
                {[
                  { label: "Industry",            value: cs.industry },
                  { label: "Catalogue size",      value: cs.catalogueSize },
                  { label: "Time with app",       value: cs.timeWithApp },
                  { label: "Usage frequency",     value: cs.usageFrequency },
                  { label: "Products updated",    value: cs.productsUpdated },
                  { label: "Primary use",         value: cs.primaryUse },
                  { label: "Featured by",         value: cs.featuredBy },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-4 px-5 py-3.5 text-sm font-body"
                    style={{
                      borderTop: i > 0 ? "1px solid hsl(var(--border))" : undefined,
                      background: i % 2 === 0 ? "hsl(var(--section-alt))" : "white",
                    }}
                  >
                    <span className="font-semibold text-primary w-36 flex-shrink-0 text-xs uppercase tracking-wide">
                      {row.label}
                    </span>
                    <span className="text-muted-foreground leading-snug">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: about the merchant */}
            <motion.div {...inView(0.08)}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">
                ABOUT THE MERCHANT
              </span>
              <h2
                className="font-heading font-extrabold text-foreground mb-4"
                style={{ fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.25 }}
              >
                Meet {cs.merchant}
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6" style={{ fontSize: 15 }}>
                {cs.aboutMerchant}
              </p>

              {/* Sales events */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground font-body mb-3">
                  Sales events powered by the app
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.salesEvents.map((e) => (
                    <span
                      key={e}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-body"
                      style={{
                        background: "rgba(0,192,255,0.08)",
                        border: "1px solid rgba(0,192,255,0.22)",
                        color: "#00c0ff",
                      }}
                    >
                      <Zap className="h-3 w-3" />
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* "Helped us" sentence completion */}
              <div
                className="rounded-xl p-4"
                style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground font-body mb-2">
                  Pro Bulk Price Editor helped {cs.merchant}…
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.helpedWith.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-body bg-white text-foreground"
                      style={{ border: "1px solid hsl(var(--border))" }}
                    >
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE OLD WAY — before the app
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <motion.div {...inView(0)} className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
            >
              <AlertCircle className="h-5 w-5" style={{ color: "#ef4444" }} />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] font-body"
              style={{ color: "#ef4444" }}
            >
              THE CHALLENGE
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Narrative */}
            <div>
              <motion.h2
                {...inView(0.06)}
                className="font-heading font-extrabold text-foreground mb-5"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)", letterSpacing: "-0.02em", lineHeight: 1.25 }}
              >
                Manual pricing was costing hours every promotion
              </motion.h2>
              <motion.p
                {...inView(0.1)}
                className="text-muted-foreground font-body leading-relaxed mb-8"
                style={{ fontSize: 15 }}
              >
                {cs.challengeBody}
              </motion.p>

              {/* Old workflow */}
              <motion.div {...inView(0.14)}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground font-body mb-3">
                  How pricing was managed before
                </p>
                <div className="flex flex-wrap gap-3">
                  {cs.previousMethods.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-medium text-foreground"
                      style={{
                        background: "white",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderLeft: "3px solid #ef4444",
                      }}
                    >
                      <Clock className="h-4 w-4" style={{ color: "#ef4444" }} />
                      {m}
                    </div>
                  ))}
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-medium"
                    style={{
                      background: "rgba(239,68,68,0.06)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      color: "#ef4444",
                    }}
                  >
                    <Clock className="h-4 w-4" />
                    {cs.timeBeforeApp}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Pain point bullets */}
            <motion.div {...inView(0.08)} className="flex flex-col gap-3">
              {cs.challengeBullets.map((b, i) => (
                <motion.div
                  key={i}
                  {...inView(0.08 + i * 0.05)}
                  className="flex items-start gap-3 p-4 rounded-xl font-body text-sm bg-white"
                  style={{ border: "1px solid rgba(239,68,68,0.12)" }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(239,68,68,0.1)" }}
                  >
                    <span style={{ color: "#ef4444", fontSize: 11, fontWeight: 700, lineHeight: 1 }}>✕</span>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE SOLUTION — features used
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
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

          <div className="grid lg:grid-cols-5 gap-12 items-start mb-12">
            <div className="lg:col-span-2">
              <motion.h2
                {...inView(0.06)}
                className="font-heading font-extrabold text-foreground mb-4"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)", letterSpacing: "-0.02em", lineHeight: 1.25 }}
              >
                One workflow. Every promotion.
              </motion.h2>
              <motion.p
                {...inView(0.1)}
                className="text-muted-foreground font-body leading-relaxed"
                style={{ fontSize: 15 }}
              >
                {cs.solutionBody}
              </motion.p>
            </div>

            <div className="lg:col-span-3">
              <motion.p
                {...inView(0.06)}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground font-body mb-4"
              >
                Features rated most valuable by {cs.merchant}
              </motion.p>
              <div className="flex flex-col gap-3">
                {cs.topFeatures.map((f, i) => {
                  const FIcon = featureIcons[f.title] ?? CheckCircle2;
                  return (
                    <motion.div
                      key={f.title}
                      {...inView(0.06 + i * 0.05)}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white"
                      style={{
                        border: "1px solid hsl(var(--border))",
                        borderLeft: "3px solid #00c0ff",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(0,192,255,0.08)", border: "1px solid rgba(0,192,255,0.18)" }}
                      >
                        <FIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-foreground text-sm mb-1">{f.title}</div>
                        <div className="text-xs font-body text-muted-foreground leading-relaxed">{f.desc}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* App link inline */}
          <motion.div {...inView(0.2)} className="flex items-center gap-3">
            {shopifyUrl ? (
              <a
                href={shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:underline"
              >
                Explore all features of {cs.app} on Shopify
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                to={`/apps/${cs.appSlug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:underline"
              >
                Explore all features of {cs.app}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE RESULTS — dark hero panel
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 88, paddingBottom: 88 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 105%, rgba(0,192,255,0.09) 0%, transparent 65%)",
          }}
        />
        <div className="section-container relative">
          <motion.div {...inView(0)} className="flex items-center gap-3 mb-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.25)" }}
            >
              <BarChart3 className="h-5 w-5" style={{ color: "#00c0ff" }} />
            </div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] font-body"
              style={{ color: "#00c0ff" }}
            >
              THE RESULTS
            </span>
          </motion.div>

          {/* Big metric blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {cs.keyResults.map((r, i) => (
              <motion.div
                key={r.label}
                {...inView(i * 0.08)}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: r.accent
                    ? "linear-gradient(135deg, rgba(0,192,255,0.14) 0%, rgba(124,58,237,0.09) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: r.accent ? "1px solid rgba(0,192,255,0.28)" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="font-heading font-extrabold leading-none mb-3"
                  style={{
                    fontSize: "clamp(34px, 4.5vw, 52px)",
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

          {/* Result narrative + outcomes grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <motion.div {...inView(0.16)}>
              <p
                className="font-body leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.68)", fontSize: 15 }}
              >
                {cs.resultBody}
              </p>

              {/* Effort reduction callout */}
              {cs.effortReduction && (
                <div
                  className="rounded-xl p-5 flex items-center gap-4"
                  style={{
                    background: "rgba(0,192,255,0.08)",
                    border: "1px solid rgba(0,192,255,0.22)",
                  }}
                >
                  <TrendingUp className="h-6 w-6 flex-shrink-0" style={{ color: "#00c0ff" }} />
                  <div>
                    <div className="font-heading font-bold text-white text-sm mb-0.5">
                      Pricing management effort reduced
                    </div>
                    <div
                      className="font-heading font-extrabold"
                      style={{ color: "#00c0ff", fontSize: "clamp(18px, 2vw, 24px)" }}
                    >
                      {cs.effortReduction}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div {...inView(0.2)}>
              {/* Business outcomes */}
              <p
                className="text-xs font-semibold uppercase tracking-[0.12em] font-body mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Business outcomes achieved
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {cs.businessOutcomes.map((o) => (
                  <div
                    key={o}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: "#00c0ff" }} />
                    <span className="text-sm font-body" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {o}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ratings */}
              <p
                className="text-xs font-semibold uppercase tracking-[0.12em] font-body mb-4"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Merchant ratings
              </p>
              <div className="flex flex-col gap-4">
                <div
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-sm font-body font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Overall satisfaction
                  </span>
                  <StarRating score={cs.satisfactionScore} />
                </div>
                <div
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="text-sm font-body font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Likelihood to recommend
                  </span>
                  <StarRating score={cs.recommendScore} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote — only if available */}
          {cs.quote && (
            <motion.div
              {...inView(0.24)}
              className="max-w-3xl rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,192,255,0.2)",
                borderLeft: "4px solid #00c0ff",
              }}
            >
              <Quote className="h-7 w-7 mb-5" style={{ color: "rgba(0,192,255,0.45)" }} />
              <blockquote
                className="font-body italic leading-relaxed text-white mb-5"
                style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
              >
                "{cs.quote}"
              </blockquote>
              {cs.quoteName && (
                <div>
                  <div className="font-heading font-bold text-white text-sm">{cs.quoteName}</div>
                  {cs.quoteRole && (
                    <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {cs.quoteRole}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INSTALL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container">
          <motion.div
            {...inView(0)}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)",
              boxShadow: "0 24px 60px rgba(0,192,255,0.22)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="h-5 w-5 text-white opacity-80" />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80 font-body">
                    TRY {cs.app.toUpperCase()}
                  </span>
                </div>
                <h2
                  className="font-heading font-extrabold text-white mb-3"
                  style={{ fontSize: "clamp(22px, 2.8vw, 32px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                >
                  Run your next promotion the way {cs.merchant} does
                </h2>
                <p className="text-white/80 font-body text-sm leading-relaxed">
                  Install{" "}
                  {shopifyUrl ? (
                    <a
                      href={shopifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold underline underline-offset-2 hover:no-underline"
                    >
                      {cs.app}
                    </a>
                  ) : (
                    <strong className="text-white">{cs.app}</strong>
                  )}{" "}
                  on your Shopify store and replace hours of manual pricing work with
                  one-click bulk updates, scheduled sales, and instant rollback.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                {shopifyUrl ? (
                  <a
                    href={shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02] whitespace-nowrap"
                    style={{ color: "hsl(220 44% 8%)" }}
                  >
                    Install on Shopify <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    to={`/apps/${cs.appSlug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02] whitespace-nowrap"
                    style={{ color: "hsl(220 44% 8%)" }}
                  >
                    View App Details <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-body text-white transition-opacity hover:opacity-80 whitespace-nowrap"
                  style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
                >
                  More Case Studies
                </Link>
              </div>
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
                const relUrl = APP_STORE_URLS[r.appSlug]
                  ? withUtm(APP_STORE_URLS[r.appSlug], `related_cta_${r.slug}`)
                  : null;
                return (
                  <motion.div
                    key={r.slug}
                    {...inView(i * 0.08)}
                    className="card-elevated p-6 flex flex-col"
                    style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                      >
                        <RelIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-body text-muted-foreground">{r.industry}</span>
                        <span className="text-muted-foreground text-xs font-body"> · {r.app}</span>
                      </div>
                    </div>
                    <h3
                      className="font-heading font-bold text-foreground mb-3"
                      style={{ fontSize: 15, lineHeight: 1.4 }}
                    >
                      {r.slug === "firstvibe-bulk-pricing"
                        ? "Firstvibe replaces hours of manual price edits with one-click promo launches"
                        : "SNDY Coffee cuts EOFY pricing effort by up to 75% with scheduled bulk updates"}
                    </h3>
                    <div className="flex gap-5 mb-4">
                      {r.keyResults.slice(0, 2).map((res) => (
                        <div key={res.label}>
                          <div
                            className="font-heading font-extrabold text-lg leading-none"
                            style={{ color: res.accent ? "#00c0ff" : "hsl(var(--foreground))" }}
                          >
                            {res.metric}
                          </div>
                          <div className="text-[10px] font-body text-muted-foreground mt-0.5 leading-tight max-w-[120px]">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <Link
                        to={`/case-studies/${r.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-primary hover:underline"
                      >
                        Read Story <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      {relUrl && (
                        <a
                          href={relUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Try on Shopify <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
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
