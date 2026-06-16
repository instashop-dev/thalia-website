import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Tag,
  ChevronRight,
  Quote,
  ShoppingBag,
  Coffee,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";
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

const CaseStudies = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: "https://www.thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.thaliatechnologies.com/case-studies" },
    ],
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies — Thalia Technologies",
    description: "Real results from real merchants using Thalia's Shopify apps.",
    url: "https://www.thaliatechnologies.com/case-studies",
    publisher: {
      "@type": "Organization",
      name: "Thalia Technologies",
      url: "https://www.thaliatechnologies.com",
    },
  };

  const [featured, ...rest] = caseStudies;
  const FeaturedIcon = industryIcons[featured.industry] ?? Tag;

  return (
    <Layout>
      <Seo
        title="Case Studies — Real Results from Thalia's Shopify Apps"
        description="See how merchants use Pro Bulk Price Editor and other Thalia Technologies apps to save hours, slash effort, and launch promotions faster."
        keywords="Shopify app case studies, bulk price editor results, ecommerce success stories, Thalia Technologies, promotional pricing Shopify"
        path="/case-studies"
        structuredData={[pageSchema, breadcrumbSchema]}
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
          <div className="max-w-3xl mx-auto text-center">
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
              <TrendingUp className="w-3.5 h-3.5" />
              CUSTOMER SUCCESS STORIES
            </motion.div>

            <h1 className="sr-only">Case Studies — Real Results from Thalia's Shopify Apps</h1>

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
              Real Merchants.{" "}
              <span className="gradient-text-cyan">Real Results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              See exactly how merchants use Thalia's apps to save hours, cut pricing effort, and
              launch promotions faster — with the numbers to prove it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {[
                { value: "50–75%",  label: "Less manual effort" },
                { value: "<30 min", label: "Pricing updates" },
                { value: "5 / 5",   label: "Likelihood to recommend" },
                { value: "100K+",   label: "Merchants served" },
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
                  <span className="text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              <a href="#stories" className="btn-primary text-sm">
                Read the Stories <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FEATURED CASE STUDY
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div {...inView(0)} className="mb-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
              FEATURED STORY
            </span>
          </motion.div>
          <motion.h2
            {...inView(0.06)}
            className="font-heading font-extrabold text-foreground mb-10"
            style={{ fontSize: "clamp(22px, 2.8vw, 32px)", letterSpacing: "-0.02em" }}
          >
            How {featured.merchant} Transformed Their Pricing Workflow
          </motion.h2>

          <motion.div
            {...inView(0.1)}
            className="card-elevated overflow-hidden"
            style={{ borderTop: "3px solid #00c0ff" }}
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left panel — dark with metrics */}
              <div
                className="lg:col-span-2 relative flex flex-col justify-between p-10 lg:p-12"
                style={{
                  background: "linear-gradient(150deg, hsl(var(--hero-bg)) 0%, #0a1628 100%)",
                  minHeight: 380,
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage: "radial-gradient(rgba(0,192,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 text-xs font-semibold font-body"
                    style={{
                      background: "rgba(0,192,255,0.15)",
                      border: "1px solid rgba(0,192,255,0.3)",
                      color: "#00c0ff",
                    }}
                  >
                    <FeaturedIcon className="w-3 h-3" />
                    {featured.industry}
                  </div>

                  <div className="flex flex-col gap-6">
                    {featured.results.map((r) => (
                      <div key={r.label}>
                        <div
                          className="font-heading font-extrabold leading-none mb-1"
                          style={{
                            fontSize: "clamp(28px, 3.5vw, 40px)",
                            color: r.accent ? "#00c0ff" : "white",
                          }}
                        >
                          {r.metric}
                        </div>
                        <div
                          className="text-xs font-body uppercase tracking-wide"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative mt-10">
                  <Quote className="h-5 w-5 mb-3" style={{ color: "rgba(0,192,255,0.45)" }} />
                  <p className="text-white/75 font-body leading-relaxed text-sm italic mb-3">
                    "{featured.quote}"
                  </p>
                  <div className="text-white font-heading font-semibold text-sm">{featured.quoteName}</div>
                  <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {featured.quoteRole}
                  </div>
                </div>
              </div>

              {/* Right panel — story */}
              <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="mb-1 text-xs font-body text-muted-foreground uppercase tracking-[0.1em]">
                    {featured.app} · {featured.location}
                  </div>
                  <h3
                    className="font-heading font-extrabold text-foreground mb-4"
                    style={{ fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.25 }}
                  >
                    {featured.headline}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6 text-sm">
                    {featured.summary}
                  </p>

                  {/* Snapshot */}
                  <div
                    className="rounded-xl overflow-hidden mb-8"
                    style={{ border: "1px solid hsl(var(--border))" }}
                  >
                    {[
                      { label: "Industry",       value: featured.industry },
                      { label: "Catalogue size", value: featured.catalogueSize },
                      { label: "Time with app",  value: featured.timeWithApp },
                      { label: "Primary use",    value: featured.primaryUse },
                    ].map((row, i) => (
                      <div
                        key={row.label}
                        className="flex items-start gap-4 px-4 py-3 text-sm font-body"
                        style={{
                          borderTop: i > 0 ? "1px solid hsl(var(--border))" : undefined,
                          background: i % 2 === 0 ? "hsl(var(--section-alt))" : "white",
                        }}
                      >
                        <span className="font-semibold text-primary w-32 flex-shrink-0">{row.label}</span>
                        <span className="text-muted-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/case-studies/${featured.slug}`}
                  className="inline-flex items-center gap-2 btn-primary text-sm self-start"
                >
                  Read Full Story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MORE CASE STUDIES GRID
      ════════════════════════════════════════════════════════════════ */}
      <section id="stories" style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          {rest.length > 0 && (
            <>
              <SectionHeading
                label="MORE STORIES"
                title="More Merchant Wins"
                description="Every business is different — but the impact is consistent."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {rest.map((cs, i) => {
                  const Icon = industryIcons[cs.industry] ?? Tag;
                  return (
                    <motion.div
                      key={cs.slug}
                      {...inView(i * 0.08)}
                      className="card-elevated flex flex-col"
                      style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                    >
                      {/* Header */}
                      <div className="p-6 pb-0">
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                          >
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span
                            className="text-[10px] font-semibold uppercase tracking-[0.1em] font-body px-2.5 py-1 rounded-full"
                            style={{
                              background: "rgba(0,192,255,0.08)",
                              color: "#00c0ff",
                              border: "1px solid rgba(0,192,255,0.2)",
                            }}
                          >
                            {cs.industry}
                          </span>
                        </div>
                        <div className="mb-1 text-xs font-body text-muted-foreground">{cs.app}</div>
                        <h3
                          className="font-heading font-bold text-foreground mb-1"
                          style={{ fontSize: 17, lineHeight: 1.35 }}
                        >
                          {cs.headline}
                        </h3>
                        <div className="text-xs font-body text-muted-foreground mb-4">
                          {cs.merchant} · {cs.location}
                        </div>
                      </div>

                      {/* Metrics strip */}
                      <div
                        className="mx-6 mb-5 rounded-xl p-4 grid grid-cols-3 gap-2"
                        style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
                      >
                        {cs.results.map((r) => (
                          <div key={r.label} className="text-center">
                            <div
                              className="font-heading font-extrabold text-lg leading-none mb-0.5"
                              style={{ color: r.accent ? "#00c0ff" : "hsl(var(--foreground))" }}
                            >
                              {r.metric}
                            </div>
                            <div className="text-[10px] font-body text-muted-foreground leading-tight">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
                        <div
                          className="rounded-xl p-4 mb-5"
                          style={{
                            background: "rgba(0,192,255,0.04)",
                            border: "1px solid rgba(0,192,255,0.1)",
                          }}
                        >
                          <Quote className="h-4 w-4 mb-2" style={{ color: "rgba(0,192,255,0.4)" }} />
                          <p className="text-xs font-body text-muted-foreground leading-relaxed italic">
                            "{cs.quote}"
                          </p>
                          <div className="mt-3">
                            <div className="text-xs font-heading font-semibold text-foreground">{cs.quoteName}</div>
                            <div className="text-[10px] font-body text-muted-foreground">{cs.quoteRole}</div>
                          </div>
                        </div>

                        <Link
                          to={`/case-studies/${cs.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-primary hover:underline"
                        >
                          Read Full Story <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </>
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
                Ready to Write Your Own Success Story?
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                Join 100,000+ merchants who use Thalia's apps to save time, reduce effort, and
                launch promotions faster — tools built for real business challenges.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/apps"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                  style={{ color: "hsl(220 44% 8%)" }}
                >
                  Explore Our Apps <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-body text-white transition-opacity hover:opacity-80"
                  style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
