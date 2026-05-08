import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutGrid, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import AppCard from "@/components/AppCard";
import Seo from "@/components/Seo";
import { apps } from "@/data/apps";

type FilterKey = "all" | "shopify" | "amazon" | "bigcommerce" | "api";

const FILTERS: { key: FilterKey; label: string; match: (p: string) => boolean; color: string }[] = [
  { key: "all",         label: "All Apps",    match: () => true,                                  color: "#00c0ff" },
  { key: "shopify",     label: "Shopify",     match: (p) => p.includes("Shopify"),                color: "#00C896" },
  { key: "amazon",      label: "Amazon",      match: (p) => p.includes("Amazon"),                 color: "#FF9900" },
  { key: "bigcommerce", label: "BigCommerce", match: (p) => p === "BigCommerce",                  color: "#3482C4" },
  { key: "api",         label: "Developer APIs", match: (p) => p === "API",                       color: "#8B7CF6" },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const Apps = () => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const liveApps = useMemo(() => apps.filter((a) => !a.comingSoon), []);
  const comingSoonApps = useMemo(() => apps.filter((a) => a.comingSoon), []);

  const counts = useMemo(() => {
    const c: Record<FilterKey, number> = { all: liveApps.length, shopify: 0, amazon: 0, bigcommerce: 0, api: 0 };
    for (const a of liveApps) {
      for (const f of FILTERS) {
        if (f.key !== "all" && f.match(a.platform)) c[f.key]++;
      }
    }
    return c;
  }, [liveApps]);

  const filteredApps = useMemo(() => {
    const active = FILTERS.find((f) => f.key === filter)!;
    return liveApps.filter((a) => active.match(a.platform));
  }, [filter, liveApps]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "Apps", item: "https://www.thaliatechnologies.com/apps" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Thalia Technologies — Ecommerce Apps",
    description: "Complete catalog of Thalia Technologies SaaS apps for Shopify, Amazon, and BigCommerce merchants.",
    numberOfItems: liveApps.length,
    itemListElement: liveApps.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.thaliatechnologies.com/apps/${a.slug}`,
      name: a.name,
    })),
  };

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Thalia Apps | Ecommerce Tools for Shopify, Amazon, and More",
    url: "https://www.thaliatechnologies.com/apps",
    isPartOf: { "@type": "WebSite", url: "https://www.thaliatechnologies.com" },
    about: "Ecommerce SaaS apps for Shopify, Amazon, and BigCommerce merchants.",
  };

  return (
    <Layout>
      <Seo
        title="18+ Ecommerce Apps for Shopify, Amazon & BigCommerce"
        description="Browse Thalia's suite of focused SaaS apps. From Amazon importers to GST invoicing — every app solves a specific merchant problem."
        keywords="Thalia apps, ecommerce tools, Shopify app collection, Amazon sync app, bulk editor app, product badges app, pricing app, merchant productivity"
        path="/apps"
        structuredData={[collectionPageSchema, breadcrumbSchema, itemListSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark navy, gradient headline, filter-aware intro
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
              OUR APP LIBRARY
            </motion.div>

            {/* Headline */}
            <motion.h1
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
              18+ Ecommerce Apps for Shopify, Amazon &amp; BigCommerce
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Focused, powerful tools for ecommerce merchants on Shopify, Amazon, and
              BigCommerce. No bloat, no noise — just software that works.
            </motion.p>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { value: `${liveApps.length}+`, label: "Live Apps" },
                { value: "4",                    label: "Platforms" },
                { value: "100k+",                label: "Merchants" },
                { value: "4.7★",                 label: "Avg Rating" },
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
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FILTER BAR — sticky-ish platform tabs
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-border sticky top-[68px] z-30">
        <div className="section-container py-4">
          <div
            className="flex items-center gap-3 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <LayoutGrid className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground shrink-0 font-body mr-2">
              Filter by platform
            </span>
            {FILTERS.map((f) => {
              const active = filter === f.key;
              const count = counts[f.key];
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  aria-pressed={active}
                  className="shrink-0 inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-body transition-all"
                  style={{
                    background: active ? "rgba(0,192,255,0.1)" : "white",
                    color: active ? "#0099cc" : "hsl(220 10% 35%)",
                    border: active
                      ? "1px solid rgba(0,192,255,0.4)"
                      : "1px solid hsl(220 15% 90%)",
                    boxShadow: active ? "0 2px 12px rgba(0,192,255,0.12)" : "none",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: f.color }}
                  />
                  {f.label}
                  <span
                    className="text-[11px] font-bold px-1.5 rounded-md"
                    style={{
                      background: active ? "rgba(0,192,255,0.15)" : "hsl(220 20% 96%)",
                      color: active ? "#0099cc" : "hsl(220 10% 48%)",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          GRID — filtered app cards on off-white
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 72, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-2">
                {FILTERS.find((f) => f.key === filter)!.label}
              </div>
              <h2 className="font-heading font-bold text-foreground" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>
                {filteredApps.length} {filteredApps.length === 1 ? "app" : "apps"} available
              </h2>
            </div>
          </div>

          {filteredApps.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredApps.map((app, i) => (
                <motion.div
                  key={app.slug}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.4), ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <AppCard app={app} index={i} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="card-elevated p-12 text-center">
              <p className="text-muted-foreground font-body">No apps match this filter yet.</p>
            </div>
          )}

          {/* Coming Soon */}
          {comingSoonApps.length > 0 && filter === "all" && (
            <div className="mt-20">
              <motion.div {...inView(0)} className="flex items-center gap-3 mb-8">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-bold text-foreground" style={{ fontSize: 22 }}>
                  In the lab
                </h3>
                <div className="flex-1 h-px bg-border" />
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {comingSoonApps.map((app, i) => (
                  <motion.div
                    key={app.slug}
                    {...inView(i * 0.08)}
                  >
                    <AppCard app={app} index={i} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER — gradient, matches Careers/Contact pattern
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
                Don't see what you need?
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                We build custom ecommerce tooling for merchants who need something beyond
                the shelf. Tell us what you're trying to solve.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                style={{ color: "hsl(220 44% 8%)" }}
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
