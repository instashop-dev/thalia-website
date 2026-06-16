import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  ShoppingBag,
  BarChart3,
  Package,
  Tag,
  Star,
  Quote,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import SectionHeading from "@/components/SectionHeading";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const CATEGORIES = ["All", "Price Management", "Dropshipping", "Conversions", "Fulfillment", "Product Display"];

const caseStudies = [
  {
    id: "bulkprice-timesavings",
    category: "Price Management",
    app: "Bulk Price Editor Pro",
    appSlug: "bulk-price-editor-pro",
    merchant: "StyleHaven Boutique",
    location: "Austin, TX",
    icon: Tag,
    headline: "Saved 20+ Hours a Week on Pricing Workflows",
    summary:
      "StyleHaven Boutique was spending entire weekends manually updating prices across 4,000+ SKUs for seasonal sales. After switching to Bulk Price Editor Pro, they automated their entire pricing workflow.",
    results: [
      { metric: "20+ hrs", label: "saved per week" },
      { metric: "4,200", label: "SKUs managed" },
      { metric: "0 errors", label: "pricing mistakes" },
    ],
    quote:
      "We used to dread sale season. Now our entire pricing strategy for Black Friday is set up in under an hour. It's honestly changed how we run the business.",
    quoteName: "Jamie R.",
    quoteRole: "Operations Manager, StyleHaven Boutique",
    featured: true,
  },
  {
    id: "spreadr-catalog-growth",
    category: "Dropshipping",
    app: "Spreadr",
    appSlug: "spreadr",
    merchant: "TechGadgets Direct",
    location: "London, UK",
    icon: Package,
    headline: "Scaled from 500 to 10,000 Products in 3 Months",
    summary:
      "TechGadgets Direct needed to rapidly expand their product catalog without taking on inventory risk. Spreadr let them import and sync Amazon products instantly — turning a niche shop into a full-range tech store.",
    results: [
      { metric: "20x", label: "catalog growth" },
      { metric: "3 months", label: "to scale up" },
      { metric: "0 inventory", label: "held in-house" },
    ],
    quote:
      "Spreadr is the reason we exist at scale. We went from a small side project to a serious business without renting a single warehouse shelf.",
    quoteName: "Marcus T.",
    quoteRole: "Founder, TechGadgets Direct",
    featured: false,
  },
  {
    id: "prime-badges-conversion",
    category: "Conversions",
    app: "Prime Product Badges",
    appSlug: "prime-product-badges",
    merchant: "GlowLab Skincare",
    location: "Singapore",
    icon: Star,
    headline: "Conversion Rate Up 23% with Strategic Badging",
    summary:
      "GlowLab Skincare added urgency and social-proof badges to their bestsellers and low-stock items. The result was a measurable uplift in add-to-cart rates within the first two weeks.",
    results: [
      { metric: "+23%", label: "conversion rate" },
      { metric: "+18%", label: "add-to-cart rate" },
      { metric: "2 weeks", label: "to see results" },
    ],
    quote:
      "We A/B tested badges against no badges. The numbers were undeniable — customers respond to 'Low Stock' and 'Bestseller' labels. Prime Badges made it dead simple.",
    quoteName: "Priya N.",
    quoteRole: "Head of Growth, GlowLab Skincare",
    featured: false,
  },
  {
    id: "shipr-fulfillment-errors",
    category: "Fulfillment",
    app: "Shipr for Amazon FBA",
    appSlug: "shipr-amazon-fba",
    merchant: "HomeNest Essentials",
    location: "Toronto, Canada",
    icon: ShoppingBag,
    headline: "Reduced Fulfillment Errors by 89%",
    summary:
      "HomeNest Essentials was losing 3–5% of revenue to misfulfilled orders synced manually between Shopify and Amazon FBA. Shipr automated the sync and virtually eliminated the error rate.",
    results: [
      { metric: "−89%", label: "fulfillment errors" },
      { metric: "3–5%", label: "revenue recovered" },
      { metric: "Real-time", label: "order sync" },
    ],
    quote:
      "Before Shipr, our customer service team spent half their week handling wrong shipments. Now those tickets have almost completely disappeared.",
    quoteName: "Daniel K.",
    quoteRole: "CEO, HomeNest Essentials",
    featured: false,
  },
  {
    id: "outlink-affiliate-revenue",
    category: "Conversions",
    app: "Outlink",
    appSlug: "outlink",
    merchant: "GearGuide Reviews",
    location: "Melbourne, Australia",
    icon: TrendingUp,
    headline: "Affiliate Revenue Tripled in One Quarter",
    summary:
      "GearGuide Reviews runs a content-first store that earns from affiliate links. Outlink let them add clean, trackable external buy buttons across hundreds of product pages — unlocking revenue they couldn't capture before.",
    results: [
      { metric: "3x", label: "affiliate revenue" },
      { metric: "450+", label: "products linked" },
      { metric: "1 quarter", label: "to scale" },
    ],
    quote:
      "Outlink filled a gap that Shopify's native tools just don't cover. Our readers trust our recommendations, and now we can monetize that trust cleanly.",
    quoteName: "Sophie L.",
    quoteRole: "Publisher, GearGuide Reviews",
    featured: false,
  },
  {
    id: "clever-variants-returns",
    category: "Product Display",
    app: "Clever Variant Images",
    appSlug: "clever-variant-images",
    merchant: "CraftWear Co.",
    location: "Berlin, Germany",
    icon: BarChart3,
    headline: "Return Rate Down 31% with Accurate Variant Images",
    summary:
      "CraftWear Co. sold apparel in 12+ color variants per style. Customers were ordering the wrong color because product images didn't update on variant selection. Clever Variant Images solved this instantly.",
    results: [
      { metric: "−31%", label: "return rate" },
      { metric: "12+", label: "variants per product" },
      { metric: "+9%", label: "repeat purchase rate" },
    ],
    quote:
      "The number of 'this isn't what I expected' returns dropped dramatically once customers could actually see what they were buying. It sounds obvious, but the impact was huge.",
    quoteName: "Anna W.",
    quoteRole: "E-commerce Director, CraftWear Co.",
    featured: false,
  },
];

const stats = [
  { value: "100K+", label: "Merchants Served" },
  { value: "14+",   label: "Apps in Market" },
  { value: "4.8★",  label: "Average App Rating" },
  { value: "$10M+", label: "Merchant Revenue Unlocked" },
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === activeCategory);

  const featured = caseStudies.find((cs) => cs.featured);
  const grid = filtered.filter((cs) => !cs.featured || activeCategory !== "All");

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

  return (
    <Layout>
      <Seo
        title="Case Studies — Real Results from Thalia's Shopify Apps"
        description="See how 100,000+ merchants use Thalia Technologies apps to save time, grow revenue, and scale their Shopify stores. Real metrics, real merchants."
        keywords="Shopify app case studies, ecommerce success stories, Thalia Technologies results, Shopify merchant stories, bulk price editor results, Spreadr success"
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
              CASE STUDIES
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
              See exactly how merchants across the world use Thalia's apps to save hours, cut errors,
              and grow their Shopify stores — with the numbers to prove it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {stats.map((s) => (
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
      {featured && activeCategory === "All" && (
        <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <div className="section-container">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                FEATURED STORY
              </span>
            </motion.div>

            <motion.div
              {...inView(0.08)}
              className="card-elevated overflow-hidden"
              style={{ borderTop: "3px solid #00c0ff" }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: gradient visual panel */}
                <div
                  className="relative flex flex-col justify-between p-10 lg:p-14"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--hero-bg)) 0%, #0a1628 100%)",
                    minHeight: 380,
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(rgba(0,192,255,0.25) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold font-body"
                      style={{ background: "rgba(0,192,255,0.15)", border: "1px solid rgba(0,192,255,0.3)", color: "#00c0ff" }}
                    >
                      {featured.category}
                    </div>
                    <div className="flex items-baseline gap-6 mb-2">
                      {featured.results.map((r) => (
                        <div key={r.label}>
                          <div className="gradient-text-cyan font-heading font-extrabold text-3xl">{r.metric}</div>
                          <div className="text-xs font-body uppercase tracking-wide mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-10">
                    <Quote className="h-6 w-6 mb-3" style={{ color: "rgba(0,192,255,0.5)" }} />
                    <p className="text-white/80 font-body leading-relaxed text-sm italic mb-4">
                      "{featured.quote}"
                    </p>
                    <div>
                      <div className="text-white font-heading font-semibold text-sm">{featured.quoteName}</div>
                      <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.5)" }}>{featured.quoteRole}</div>
                    </div>
                  </div>
                </div>

                {/* Right: story content */}
                <div className="p-10 lg:p-14 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.2)" }}
                      >
                        <featured.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-body text-muted-foreground">{featured.app}</div>
                        <div className="text-xs font-body font-semibold text-foreground">{featured.merchant} · {featured.location}</div>
                      </div>
                    </div>

                    <h2
                      className="font-heading font-extrabold text-foreground mb-4"
                      style={{ fontSize: "clamp(22px, 2.6vw, 30px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                    >
                      {featured.headline}
                    </h2>
                    <p className="text-muted-foreground font-body leading-relaxed mb-8">
                      {featured.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={`/apps/${featured.appSlug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:underline"
                    >
                      View {featured.app} <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          CASE STUDY GRID
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="stories"
        style={{ background: "hsl(var(--section-alt))", paddingTop: activeCategory === "All" ? 0 : 96, paddingBottom: 96 }}
      >
        <div className="section-container" style={{ paddingTop: activeCategory === "All" ? 0 : undefined }}>
          {activeCategory !== "All" && (
            <SectionHeading
              label="MERCHANT STORIES"
              title="Proven Impact Across Every Use Case"
              description="From automating tedious tasks to unlocking new revenue streams — here's what merchants are achieving with Thalia's apps."
            />
          )}

          {/* Category filters */}
          <motion.div {...inView(0.04)} className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold font-body transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "#00c0ff", color: "#0a1628" }
                    : {
                        background: "white",
                        color: "hsl(var(--muted-foreground))",
                        border: "1px solid hsl(var(--border))",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((cs, i) => (
              <motion.div
                key={cs.id}
                {...inView(Math.min(i * 0.07, 0.28))}
                className="card-elevated flex flex-col"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                {/* Card header */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                    >
                      <cs.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.1em] font-body px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,192,255,0.08)", color: "#00c0ff", border: "1px solid rgba(0,192,255,0.2)" }}
                    >
                      {cs.category}
                    </span>
                  </div>

                  <div className="mb-1 text-xs font-body text-muted-foreground">{cs.app}</div>
                  <h3 className="font-heading font-bold text-foreground mb-1" style={{ fontSize: 17, lineHeight: 1.3 }}>
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
                      <div className="font-heading font-extrabold text-primary text-lg leading-none mb-0.5">{r.metric}</div>
                      <div className="text-[10px] font-body text-muted-foreground leading-tight">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
                  <div
                    className="rounded-xl p-4 mb-5"
                    style={{ background: "rgba(0,192,255,0.04)", border: "1px solid rgba(0,192,255,0.1)" }}
                  >
                    <Quote className="h-4 w-4 mb-2" style={{ color: "rgba(0,192,255,0.45)" }} />
                    <p className="text-xs font-body text-muted-foreground leading-relaxed italic">
                      "{cs.quote}"
                    </p>
                    <div className="mt-3">
                      <div className="text-xs font-heading font-semibold text-foreground">{cs.quoteName}</div>
                      <div className="text-[10px] font-body text-muted-foreground">{cs.quoteRole}</div>
                    </div>
                  </div>

                  <Link
                    to={`/apps/${cs.appSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-body text-primary hover:underline"
                  >
                    Try {cs.app} <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {grid.length === 0 && (
            <motion.div {...inView(0)} className="text-center py-24">
              <p className="text-muted-foreground font-body">No case studies in this category yet.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          IMPACT NUMBERS
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="OUR IMPACT"
            title="The Numbers Behind the Stories"
            description="Across every app and every merchant category, the aggregate impact of Thalia's tools keeps growing."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { metric: "100K+", label: "Active merchants", sub: "across 14+ Shopify apps" },
              { metric: "98%",   label: "Customer satisfaction", sub: "average across app reviews" },
              { metric: "50M+",  label: "Products managed", sub: "using our bulk tools monthly" },
              { metric: "4.8★",  label: "Shopify App Store rating", sub: "average across our portfolio" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                {...inView(Math.min(i * 0.07, 0.25))}
                className="card-elevated p-6 text-center"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div className="gradient-text-cyan font-heading font-extrabold mb-2" style={{ fontSize: "clamp(28px, 3vw, 38px)" }}>
                  {s.metric}
                </div>
                <div className="font-heading font-semibold text-foreground text-sm mb-1">{s.label}</div>
                <div className="text-xs font-body text-muted-foreground">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
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
                Join 100,000+ merchants who use Thalia's apps to save time, reduce errors, and grow their
                Shopify stores — with tools built for real business challenges.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/apps"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                  style={{ color: "hsl(220 44% 8%)" }}
                >
                  Explore Our Apps
                  <ArrowRight className="h-4 w-4" />
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
