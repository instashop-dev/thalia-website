import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Star, ExternalLink, MapPin, Tag, Calendar, Package } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { caseStudies } from "@/data/caseStudies";
import firstvibeLogoSrc from "@/assets/firstvibe-logo.png";
import sndyCoffeeLogoSrc from "@/assets/sndy-coffee-logo.png";
import waywardLogoSrc from "@/assets/wayward logo.avif";
import saazLogoSrc from "@/assets/saaz_1.avif";
import herbalistsLogoSrc from "@/assets/theherbalists logo.avif";
import outlinkLogoSrc from "@/assets/Outlink Logo.webp";
import sleekLogoSrc from "@/assets/sleek.png";

/* ──────────────────────────────────────────────────────────
   App store URLs (UTM-ready)
────────────────────────────────────────────────────────── */
const APP_STORE_URLS: Record<string, string> = {
  "bulk-price-editor-pro":
    "https://apps.shopify.com/pro-bulk-price-editor",
  "external-affiliate-product-links":
    "https://apps.shopify.com/external-affiliate-product-links",
  "gst-invoices-india":
    "https://apps.shopify.com/gst-invoices-india",
};

const withUtm = (base: string, content: string) =>
  `${base}?utm_source=thaliatechnologies.com&utm_medium=website&utm_campaign=case_study&utm_content=${content}`;

/* ──────────────────────────────────────────────────────────
   Inline app name → hyperlink helper
────────────────────────────────────────────────────────── */
const linkifyAppName = (text: string, appSlug: string, slug: string, appName?: string) => {
  const url = APP_STORE_URLS[appSlug];
  if (!url) return <>{text}</>;
  const APP_NAME = appName ?? "Pro Bulk Price Editor";
  const parts = text.split(new RegExp(`(${APP_NAME})`, "g"));
  return (
    <>
      {parts.map((part, i) =>
        part === APP_NAME ? (
          <a
            key={i}
            href={withUtm(url, `inline_${slug}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 decoration-[#00c0ff]/60 hover:decoration-[#00c0ff] transition-colors"
            style={{ color: "#00c0ff" }}
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </>
  );
};

/* ──────────────────────────────────────────────────────────
   Star rating
────────────────────────────────────────────────────────── */
const StarRating = ({ score, max = 5 }: { score: number; max?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <Star
        key={i}
        className="h-4 w-4"
        fill={i < score ? "#00c0ff" : "none"}
        stroke={i < score ? "#00c0ff" : "#94a3b8"}
      />
    ))}
  </div>
);

/* ──────────────────────────────────────────────────────────
   Section label chip
────────────────────────────────────────────────────────── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-block text-xs font-semibold uppercase tracking-[0.14em] font-body mb-3"
    style={{ color: "#00c0ff" }}
  >
    {children}
  </span>
);

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const HEADLINES: Record<string, string> = {
  "firstvibe-bulk-pricing":
    "Firstvibe Replaces Hours of Manual Price Edits with One-Click Promo Launches",
  "sndy-coffee-eofy":
    "SNDY Coffee Cuts EOFY Pricing Effort by Up to 75% with Scheduled Bulk Updates",
  "wayward-bulk-pricing":
    "Wayward Unlocks Store-Wide Pricing That Was Previously Impossible — Saving 6+ Hours Per Update",
  "saaz-bulk-pricing":
    "SAAZ Slashes Flash Sale Prep Time by 50–75% with Bulk Pricing Automation",
  "herbalists-seasonal-pricing":
    "The Herbalists Schedules Seasonal Sales with Per-Product Bulk Pricing — No Percentage Rules Required",
  "sokobox-flash-sale-pricing":
    "Sokobox Powers Black Friday Campaigns Across 1,000–5,000 Products with Scheduled Pricing",
  "ultimatestorefront-supplier-pricing":
    "Ultimatestorefront Manages 50,000+ Supplier Price Updates Monthly with Pro Bulk Price Editor",
  "synergywoman-affiliate-links":
    "Synergywoman Unlocks Affiliate Revenue with Zero-Code Product Link Setup — Up to 10 Minutes to Go Live",
  "online-dreams-retailers-affiliate-links":
    "Online Dreams Retailers Powers Amazon Affiliate Links Through Shopify with Outlink",
  "echo-bunnymen-affiliate-links":
    "Official Echo & The Bunnymen Merchandise Drives 15% Revenue Growth and 25% More Affiliate Clicks with Outlink",
  "gaima-label-gst-invoicing":
    "The Gaima Label Saves 5 Hours Every Week by Automating GST Invoicing with Sleek",
  "bruijn-gst-invoicing":
    "Bruijn Eliminates Manual GST Invoice Creation for B2B and D2C Orders with Sleek",
};

const merchantLogos: Record<string, string> = {
  "Firstvibe":      firstvibeLogoSrc,
  "SNDY Coffee":    sndyCoffeeLogoSrc,
  "Wayward":        waywardLogoSrc,
  "SAAZ":           saazLogoSrc,
  "The Herbalists": herbalistsLogoSrc,
  "Synergywoman":                              outlinkLogoSrc,
  "Online Dreams Retailers":                   outlinkLogoSrc,
  "Official Echo & The Bunnymen Merchandise":  outlinkLogoSrc,
  "The Gaima Label":                           sleekLogoSrc,
  "Bruijn":                                    sleekLogoSrc,
};


/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const storeUrl = APP_STORE_URLS[cs.appSlug];
  const ctaUrl   = storeUrl ? withUtm(storeUrl, `case_study_cta_${slug}`) : `/apps/${cs.appSlug}`;
  const logo     = merchantLogos[cs.merchant];
  const headline = HEADLINES[cs.slug] ?? `How ${cs.merchant} Transformed Their Pricing Workflow`;

  const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);

  return (
    <Layout>
      <Seo
        title={`${cs.merchant} Case Study — ${cs.app} | Thalia Technologies`}
        description={`How ${cs.merchant} used ${cs.app} to streamline promotional pricing on Shopify. ${cs.resultBody.slice(0, 120)}…`}
        keywords={`${cs.merchant}, ${cs.app}, Shopify case study, bulk pricing Shopify, ${cs.industry}`}
        path={`/case-studies/${cs.slug}`}
      />

      {/* ════════════════════════════════════════════════
          HERO — dark navy, Thalia branded
      ════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 80 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% -5%, rgba(0,192,255,0.12) 0%, transparent 65%)",
          }}
        />
        <div className="section-container relative">
          {/* Back link */}
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-xs font-body font-medium mb-8 transition-opacity hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Case Studies
          </Link>

          <div className="max-w-3xl">
            {/* Tags row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {[cs.industry, cs.category, "Shopify"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider font-body"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.25)", color: "#00c0ff" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="font-heading font-extrabold text-white mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
            >
              {headline}
            </motion.h1>

            {/* Merchant badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-14 h-10 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
                style={{ background: "rgba(255,255,255,0.95)" }}
              >
                {logo ? (
                  <img src={logo} alt={`${cs.merchant} logo`} className="w-full h-full object-contain p-1.5" />
                ) : (
                  <span className="text-foreground font-heading font-extrabold">{cs.merchant[0]}</span>
                )}
              </div>
              <div>
                <div className="text-sm font-heading font-bold text-white">{cs.merchant}</div>
                <div className="text-xs font-body flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <MapPin className="h-3 w-3" /> {cs.location}
                  {cs.merchantUrl && (
                    <>
                      <span className="opacity-40 mx-1">·</span>
                      <a
                        href={`https://${cs.merchantUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {cs.merchantUrl}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          METRICS ROW — three-column horizontal strip
      ════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ borderBottom: "1px solid hsl(var(--border))" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {cs.keyResults.map((r) => (
              <div key={r.label} className="py-8 px-6 first:pl-0 last:pr-0">
                <div
                  className="font-heading font-extrabold leading-none mb-2"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 42px)",
                    color: r.accent ? "#00c0ff" : "hsl(var(--foreground))",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {r.metric}
                </div>
                <div className="text-sm font-body text-muted-foreground leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          EDITORIAL BODY — centered single-column prose
      ════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 72, paddingBottom: 80 }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto">

            {/* ── At a Glance ─────────────────────── */}
            <motion.div {...inView(0)} className="mb-16">
              <SectionLabel>At a Glance</SectionLabel>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid hsl(var(--border))" }}
              >
                {[
                  { icon: Tag,      label: "App",           value: cs.app },
                  { icon: Package,  label: "Catalogue",     value: cs.catalogueSize },
                  { icon: MapPin,   label: "Location",      value: `${cs.merchant}, ${cs.location}` },
                  { icon: Calendar, label: "Time with app", value: cs.timeWithApp },
                  { icon: Tag,      label: "Usage",         value: cs.usageFrequency },
                  { icon: Tag,      label: "Primary use",   value: cs.primaryUse },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-4 px-5 py-3.5"
                    style={{
                      borderBottom: i < arr.length - 1 ? "1px solid hsl(var(--border))" : undefined,
                      background: i % 2 === 0 ? "transparent" : "hsl(var(--section-alt))",
                    }}
                  >
                    <row.icon
                      className="h-3.5 w-3.5 mt-0.5 flex-shrink-0"
                      style={{ color: "#00c0ff" }}
                    />
                    <span className="text-xs font-semibold font-body text-muted-foreground w-28 flex-shrink-0 uppercase tracking-wider">
                      {row.label}
                    </span>
                    <span className="text-sm font-body text-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── About the Merchant ──────────────── */}
            <motion.div {...inView(0)} className="mb-14">
              <SectionLabel>About the Merchant</SectionLabel>
              <h2
                className="font-heading font-bold text-foreground mb-4"
                style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.02em" }}
              >
                Who is {cs.merchant}?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base">
                {cs.aboutMerchant}
              </p>
            </motion.div>

            {/* Divider */}
            <div
              className="mb-14"
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--border)) 30%, hsl(var(--border)) 70%, transparent)",
              }}
            />

            {/* ── The Challenge (Before) ──────────── */}
            <motion.div {...inView(0)} className="mb-14">
              <SectionLabel>Before the App</SectionLabel>
              <h2
                className="font-heading font-bold text-foreground mb-4"
                style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.02em" }}
              >
                The Old Way Wasn't Working
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base mb-6">
                {linkifyAppName(cs.challengeBody, cs.appSlug, cs.slug, cs.app)}
              </p>
              <ul className="space-y-3">
                {cs.challengeBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(248,113,113,0.12)" }}
                    >
                      <span className="text-[10px] font-bold" style={{ color: "#f87171" }}>✕</span>
                    </div>
                    <span className="text-sm font-body text-muted-foreground leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Previous tools */}
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="text-xs text-muted-foreground font-body">Previous tools:</span>
                {cs.previousMethods.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-0.5 rounded text-xs font-body font-medium"
                    style={{ background: "hsl(var(--section-alt))", color: "hsl(var(--muted-foreground))" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div
              className="mb-14"
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--border)) 30%, hsl(var(--border)) 70%, transparent)",
              }}
            />

            {/* ── The Solution ─────────────────────── */}
            <motion.div {...inView(0)} className="mb-14">
              <SectionLabel>The Solution</SectionLabel>
              <h2
                className="font-heading font-bold text-foreground mb-4"
                style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.02em" }}
              >
                Streamlined with{" "}
                <a
                  href={storeUrl ? withUtm(storeUrl, `solution_heading_${cs.slug}`) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:underline underline-offset-2"
                  style={{ color: "#00c0ff" }}
                >
                  {cs.app}
                </a>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base mb-8">
                {linkifyAppName(cs.solutionBody, cs.appSlug, cs.slug, cs.app)}
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.topFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="p-4 rounded-xl"
                    style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#00c0ff" }} />
                      <div>
                        <div className="text-sm font-heading font-bold text-foreground mb-1">{f.title}</div>
                        <div className="text-xs font-body text-muted-foreground leading-relaxed">{f.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div
              className="mb-14"
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--border)) 30%, hsl(var(--border)) 70%, transparent)",
              }}
            />

            {/* ── The Results ──────────────────────── */}
            <motion.div {...inView(0)} className="mb-14">
              <SectionLabel>The Results</SectionLabel>
              <h2
                className="font-heading font-bold text-foreground mb-4"
                style={{ fontSize: "clamp(20px, 2.4vw, 26px)", letterSpacing: "-0.02em" }}
              >
                What Changed
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-base mb-8">
                {linkifyAppName(cs.resultBody, cs.appSlug, cs.slug, cs.app)}
              </p>

              {/* Sales events */}
              {cs.salesEvents.length > 0 && (
                <div className="mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body mb-3">
                    Sales events powered
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.salesEvents.map((e) => (
                      <span
                        key={e}
                        className="px-3 py-1.5 rounded-lg text-xs font-body font-medium"
                        style={{ background: "rgba(0,192,255,0.08)", color: "#00c0ff", border: "1px solid rgba(0,192,255,0.2)" }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Business outcomes */}
              <div className="grid grid-cols-2 gap-3">
                {cs.businessOutcomes.map((o) => (
                  <div
                    key={o}
                    className="flex items-center gap-2.5 p-3 rounded-xl"
                    style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: "#00c0ff" }} />
                    <span className="text-xs font-body font-medium text-foreground">{o}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Satisfaction scores ──────────────── */}
            <motion.div
              {...inView(0)}
              className="rounded-2xl p-6 mb-14"
              style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body mb-2">
                    Overall Satisfaction
                  </div>
                  <StarRating score={cs.satisfactionScore} />
                  <div
                    className="text-2xl font-heading font-extrabold mt-2 leading-none"
                    style={{ color: "#00c0ff", letterSpacing: "-0.04em" }}
                  >
                    {cs.satisfactionScore} / 5
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body mb-2">
                    Likelihood to Recommend
                  </div>
                  <StarRating score={cs.recommendScore} />
                  <div
                    className="text-2xl font-heading font-extrabold mt-2 leading-none"
                    style={{ color: "#00c0ff", letterSpacing: "-0.04em" }}
                  >
                    {cs.recommendScore} / 5
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Quote ────────────────────────────── */}
            {cs.quote && (
              <motion.blockquote
                {...inView(0)}
                className="relative rounded-2xl p-8 mb-14 overflow-hidden"
                style={{
                  background: "hsl(var(--hero-bg))",
                  border: "1px solid rgba(0,192,255,0.2)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-[3px]"
                  style={{ background: "linear-gradient(90deg, #00c0ff, #7c3aed)" }}
                />
                <div
                  className="text-5xl font-heading font-extrabold leading-none mb-4 select-none"
                  style={{ color: "rgba(0,192,255,0.3)" }}
                >
                  "
                </div>
                <p
                  className="font-body text-lg leading-relaxed mb-5"
                  style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}
                >
                  {cs.quote}
                </p>
                {cs.quoteName && (
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-8 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.9)" }}
                    >
                      {logo ? (
                        <img src={logo} alt={cs.merchant} className="w-full h-full object-contain p-1" />
                      ) : (
                        <span className="text-foreground text-xs font-heading font-bold">{cs.quoteName[0]}</span>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-heading font-bold text-white">{cs.quoteName}</div>
                      {cs.quoteRole && (
                        <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {cs.quoteRole}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.blockquote>
            )}

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          INSTALL CTA — dark panel
      ════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 0, paddingBottom: 80 }}>
        <div className="section-container">
          <motion.div
            {...inView(0)}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "hsl(var(--hero-bg))",
              border: "1px solid rgba(0,192,255,0.2)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(0,192,255,0.12) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] font-body mb-4" style={{ color: "#00c0ff" }}>
                TRY IT FREE
              </div>
              <h2
                className="font-heading font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.03em", lineHeight: 1.15 }}
              >
                Ready to Streamline Your Pricing?
              </h2>
              <p className="font-body mb-8 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                Install{" "}
                <a
                  href={storeUrl ? withUtm(storeUrl, `cta_inline_${cs.slug}`) : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00c0ff" }}
                  className="font-semibold hover:underline"
                >
                  {cs.app}
                </a>{" "}
                on your Shopify store and run your next promotion in a fraction of the time.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold font-body transition-transform hover:scale-[1.03]"
                  style={{ background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)", color: "#fff" }}
                >
                  Install on Shopify <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-body transition-opacity hover:opacity-80"
                  style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)" }}
                >
                  <ArrowLeft className="h-4 w-4" /> All Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          RELATED STORIES
      ════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="bg-white" style={{ paddingTop: 72, paddingBottom: 80 }}>
          <div className="section-container">
            <motion.div {...inView(0)} className="mb-8">
              <SectionLabel>More Stories</SectionLabel>
              <h2
                className="font-heading font-bold text-foreground"
                style={{ fontSize: "clamp(20px, 2.4vw, 28px)", letterSpacing: "-0.02em" }}
              >
                More Customer Success Stories
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r, i) => {
                const rLogo = merchantLogos[r.merchant];
                return (
                  <motion.div key={r.slug} {...inView(i * 0.1)}>
                    <Link
                      to={`/case-studies/${r.slug}`}
                      className="group flex flex-col h-full rounded-2xl p-6 transition-shadow bg-white"
                      style={{
                        border: "1px solid hsl(var(--border))",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.09)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                      }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-14 h-10 rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden"
                          style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
                        >
                          {rLogo ? (
                            <img src={rLogo} alt={`${r.merchant} logo`} className="w-full h-full object-contain p-1.5" />
                          ) : (
                            <span className="text-foreground font-heading font-extrabold">{r.merchant[0]}</span>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-heading font-bold text-foreground">{r.merchant}</div>
                          <div className="text-xs font-body text-muted-foreground">{r.location} · {r.industry}</div>
                        </div>
                      </div>
                      <h3
                        className="font-heading font-bold text-foreground text-sm leading-snug mb-3 group-hover:text-primary transition-colors flex-1"
                      >
                        {HEADLINES[r.slug]}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-primary group-hover:underline mt-2">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </span>
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
