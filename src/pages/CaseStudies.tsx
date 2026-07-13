import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, LayoutGrid, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { caseStudies } from "@/data/caseStudies";
import { getAppLogo } from "@/data/apps";
import firstvibeLogoSrc from "@/assets/firstvibe-logo.png";
import sndyCoffeeLogoSrc from "@/assets/sndy-coffee-logo.png";
import waywardLogoSrc from "@/assets/wayward logo.avif";
import saazLogoSrc from "@/assets/saaz_1.avif";
import herbalistsLogoSrc from "@/assets/theherbalists logo.avif";
import outlinkLogoSrc from "@/assets/Outlink Logo.webp";
import sleekLogoSrc from "@/assets/sleek.png";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

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

const APP_FILTER_COLORS = ["#00c0ff", "#00C896", "#8B7CF6", "#FF9900", "#F472B6"];

const CaseStudies = () => {
  const [searchParams] = useSearchParams();
  const appFilter = searchParams.get("app") ?? "all";

  // Only apps with at least one published case study appear here — apps
  // without one yet are simply left out of the filter list.
  const appFilters = useMemo(() => {
    const seen: string[] = [];
    for (const cs of caseStudies) {
      if (!seen.includes(cs.appSlug)) seen.push(cs.appSlug);
    }
    return seen.map((appSlug, i) => {
      const app = caseStudies.find((cs) => cs.appSlug === appSlug)!.app;
      return {
        app,
        appSlug,
        color: APP_FILTER_COLORS[i % APP_FILTER_COLORS.length],
        count: caseStudies.filter((cs) => cs.appSlug === appSlug).length,
      };
    });
  }, []);

  // Each filter has its own shareable URL — e.g. /case-studies?app=outlink —
  // so the selection can be linked to, bookmarked, or navigated to directly.
  const filteredCaseStudies = useMemo(() => {
    if (appFilter === "all") return caseStudies;
    return caseStudies.filter((cs) => cs.appSlug === appFilter);
  }, [appFilter]);

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
    publisher: { "@type": "Organization", name: "Thalia Technologies", url: "https://www.thaliatechnologies.com" },
  };

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
            background: "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,192,255,0.13) 0%, transparent 65%)",
          }}
        />
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold font-body select-none"
              style={{ border: "1px solid rgba(0,192,255,0.28)", background: "rgba(0,192,255,0.08)", color: "#00c0ff" }}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              CUSTOMER SUCCESS STORIES
            </motion.div>

            <h1 className="sr-only">Case Studies — Real Results from Thalia's Shopify Apps</h1>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(40px, 5.5vw, 64px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}
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
              See how merchants across industries use Thalia's Shopify apps to save hours, reduce manual
              effort, and launch promotions with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3"
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
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="gradient-text-cyan text-base font-heading font-bold">{s.value}</span>
                  <span className="text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CASE STUDY CARD GRID
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 96 }}>
        <div className="section-container">

          {/* Section label */}
          <motion.div {...inView(0)} className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.14em] text-primary font-body mb-3">
              ALL STORIES
            </span>
            <h2
              className="font-heading font-extrabold text-foreground"
              style={{ fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.02em" }}
            >
              Merchant Success Stories
            </h2>
          </motion.div>

          {/* Filter by app */}
          <motion.div {...inView(0.05)} className="mb-10">
            <div className="flex items-center flex-wrap gap-3">
              <LayoutGrid className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground shrink-0 font-body mr-1">
                Filter by app
              </span>

              <Link
                to="/case-studies"
                aria-current={appFilter === "all" ? "true" : undefined}
                className="shrink-0 inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-body transition-all"
                style={{
                  background: appFilter === "all" ? "rgba(0,192,255,0.1)" : "white",
                  color: appFilter === "all" ? "#0099cc" : "hsl(220 10% 35%)",
                  border: appFilter === "all" ? "1px solid rgba(0,192,255,0.4)" : "1px solid hsl(220 15% 90%)",
                  boxShadow: appFilter === "all" ? "0 2px 12px rgba(0,192,255,0.12)" : "none",
                }}
              >
                All Stories
                <span
                  className="text-[11px] font-bold px-1.5 rounded-md"
                  style={{
                    background: appFilter === "all" ? "rgba(0,192,255,0.15)" : "hsl(220 20% 96%)",
                    color: appFilter === "all" ? "#0099cc" : "hsl(220 10% 48%)",
                  }}
                >
                  {caseStudies.length}
                </span>
              </Link>

              {appFilters.map((f) => {
                const active = appFilter === f.appSlug;
                return (
                  <Link
                    key={f.appSlug}
                    to={`/case-studies?app=${f.appSlug}`}
                    aria-current={active ? "true" : undefined}
                    className="shrink-0 inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-body transition-all"
                    style={{
                      background: active ? "rgba(0,192,255,0.1)" : "white",
                      color: active ? "#0099cc" : "hsl(220 10% 35%)",
                      border: active ? "1px solid rgba(0,192,255,0.4)" : "1px solid hsl(220 15% 90%)",
                      boxShadow: active ? "0 2px 12px rgba(0,192,255,0.12)" : "none",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: f.color }} />
                    {f.app}
                    <span
                      className="text-[11px] font-bold px-1.5 rounded-md"
                      style={{
                        background: active ? "rgba(0,192,255,0.15)" : "hsl(220 20% 96%)",
                        color: active ? "#0099cc" : "hsl(220 10% 48%)",
                      }}
                    >
                      {f.count}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((cs, i) => {
              const logo = merchantLogos[cs.merchant];
              const appLogo = getAppLogo(cs.appSlug);

              return (
                <motion.div
                  key={cs.slug}
                  {...inView(i * 0.08)}
                >
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl transition-shadow duration-200"
                    style={{
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)";
                    }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Merchant identity */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-14 h-11 flex-shrink-0">
                          <div
                            className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden"
                            style={{ background: "hsl(var(--section-alt))", border: "1px solid hsl(var(--border))" }}
                          >
                            {logo ? (
                              <img
                                src={logo}
                                alt={`${cs.merchant} logo`}
                                className="w-full h-full object-contain p-1.5"
                              />
                            ) : (
                              <span className="text-foreground font-heading font-extrabold text-lg">
                                {cs.merchant[0]}
                              </span>
                            )}
                          </div>
                          {appLogo && (
                            <img
                              src={appLogo}
                              alt={`${cs.app} logo`}
                              className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-md object-contain bg-white p-0.5"
                              style={{ border: "1.5px solid white", boxShadow: "0 1px 3px rgba(0,0,0,0.18)" }}
                            />
                          )}
                        </div>
                        <div>
                          <div className="font-heading font-bold text-foreground text-sm leading-tight">
                            {cs.merchant}
                          </div>
                          <div className="text-xs font-body text-muted-foreground mt-0.5">
                            {cs.location}
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t mb-4" style={{ borderColor: "hsl(var(--border))" }} />

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider font-body"
                          style={{ background: "hsl(var(--section-alt))", color: "hsl(var(--muted-foreground))" }}
                        >
                          {cs.industry}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider font-body"
                          style={{ background: "hsl(var(--section-alt))", color: "hsl(var(--muted-foreground))" }}
                        >
                          {cs.category}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider font-body"
                          style={{ background: "rgba(0,192,255,0.08)", color: "#00c0ff" }}
                        >
                          Shopify
                        </span>
                      </div>

                      {/* Headline */}
                      <h3
                        className="font-heading font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors"
                        style={{ fontSize: 16 }}
                      >
                        {cs.headline}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5 flex-1">
                        {cs.excerpt}
                      </p>

                      {/* Key metrics strip */}
                      <div
                        className="flex gap-4 mb-5 pb-5"
                        style={{ borderBottom: "1px solid hsl(var(--border))" }}
                      >
                        {cs.keyResults.slice(0, 2).map((r) => (
                          <div key={r.label}>
                            <div
                              className="font-heading font-extrabold leading-none mb-0.5"
                              style={{ fontSize: 18, color: r.accent ? "#00c0ff" : "hsl(var(--foreground))" }}
                            >
                              {r.metric}
                            </div>
                            <div className="text-[10px] font-body text-muted-foreground leading-tight">
                              {r.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Read more */}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold font-body text-primary group-hover:underline">
                        Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 80, paddingBottom: 80 }}>
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
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
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
                launch promotions faster.
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
