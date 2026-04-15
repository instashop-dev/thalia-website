import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, RefreshCcw, Handshake, Flame, Target, Wrench, BarChart3,
  Users, LayoutGrid, Star, Clock,
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import shopifyLogo from "@/assets/shopify_logo_black.png";
import wixLogo from "@/assets/wix logo.png";
import wordpressLogo from "@/assets/Wordpress_logo-removebg-preview.png";
import bigCommerceLogo from "@/assets/icons8-bigcommerce-48.png";
import shopifyPlusLogo from "@/assets/shopify-plus-seeklogo.png";
import amazonLogo from "@/assets/Amazon_logo-removebg-preview.png";
import Seo from "@/components/Seo";

/* ─── Data ────────────────────────────────────────────────────────── */

const stats = [
  { value: "100K+", label: "Merchants Trust Us",    desc: "Worldwide & growing",        icon: Users },
  { value: "14+",   label: "Apps Published",         desc: "Across major platforms",     icon: LayoutGrid },
  { value: "5★",    label: "Average App Rating",     desc: "Consistently top-rated",     icon: Star },
  { value: "10+",   label: "Years of Experience",    desc: "Building ecommerce tools",   icon: Clock },
];

const features = [
  {
    icon: Wrench,
    title: "Purpose-Built Tools",
    desc: "Every product starts with a real merchant problem. We don't build features — we build solutions that eliminate friction.",
  },
  {
    icon: BarChart3,
    title: "Proven at Scale",
    desc: "Our apps are trusted by over 100,000 businesses globally, processing millions of transactions every single day.",
  },
  {
    icon: RefreshCcw,
    title: "Constantly Evolving",
    desc: "We ship improvements constantly. Your feedback directly shapes what we build next — always getting better.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Trust",
    desc: "We operate with radical transparency — with our team, our customers, and our partners.",
  },
  {
    icon: Flame,
    title: "Passion",
    desc: "We care deeply about what we build. Every pixel, every feature, every line of code is crafted with intention.",
  },
  {
    icon: Target,
    title: "Focus",
    desc: "We say no to distractions and yes to building world-class, focused tools that genuinely matter.",
  },
];

const testimonials = [
  {
    quote: "Spreadr transformed our business. We went from zero to dropshipping 10,000+ Amazon products in just one week.",
    author: "James M.",
    role: "Shopify Merchant, USA",
    rating: 5,
  },
  {
    quote: "Watchlyst brought back over 200 lost customers in the first month alone. The ROI is incredible.",
    author: "Sarah L.",
    role: "eCommerce Owner, UK",
    rating: 5,
  },
  {
    quote: "Pro Bulk Editor saved us 20+ hours per week. Scheduling discounts is now completely automated.",
    author: "Raj K.",
    role: "Shopify Plus Merchant, India",
    rating: 5,
  },
];

const platformLogos = [
  { src: shopifyLogo,      alt: "Shopify" },
  { src: bigCommerceLogo,  alt: "BigCommerce" },
  { src: amazonLogo,       alt: "Amazon" },
  { src: shopifyPlusLogo,  alt: "Shopify Plus" },
  { src: wixLogo,          alt: "Wix" },
  { src: wordpressLogo,    alt: "WordPress" },
];

/* ─── Animation helpers ───────────────────────────────────────────── */

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

/* ─── Hero Visual — glassmorphic dashboard mockup ────────────────── */

const appBadges = [
  { letter: "S", label: "Spreadr" },
  { letter: "W", label: "Watchlyst" },
  { letter: "B", label: "Bolt" },
  { letter: "P", label: "Pro Bulk Editor" },
];

const sparkPoints = "M0,52 C20,48 38,38 62,30 C86,22 102,32 128,22 C154,12 170,18 196,10 L220,6";

const HeroVisual = () => (
  <div className="relative px-6 py-8" aria-hidden="true">
    {/* Ambient glow behind the card */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,192,255,0.14) 0%, transparent 70%)",
      }}
    />

    {/* ── Main dashboard card ── */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(0,192,255,0.2)",
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.2)" }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(40,201,64,0.7)" }} />
        <span
          className="ml-3 text-xs font-body"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Store Analytics · Thalia Dashboard
        </span>
        {/* Live indicator */}
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00c0ff" }} />
          <span className="text-xs font-body" style={{ color: "#00c0ff" }}>Live</span>
        </div>
      </div>

      {/* Metric row */}
      <div className="grid grid-cols-2 p-5 pb-4">
        <div className="pr-5">
          <div className="text-xs font-body mb-1" style={{ color: "rgba(255,255,255,0.38)" }}>
            Monthly Revenue
          </div>
          <div className="font-heading font-extrabold text-white mb-1" style={{ fontSize: 26, letterSpacing: "-0.03em" }}>
            $248,500
          </div>
          <div className="text-xs font-body font-semibold" style={{ color: "#00c0ff" }}>
            ↑ 24% vs last month
          </div>
        </div>
        <div
          className="pl-5"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="text-xs font-body mb-1" style={{ color: "rgba(255,255,255,0.38)" }}>
            Orders Processed
          </div>
          <div className="font-heading font-extrabold text-white mb-1" style={{ fontSize: 26, letterSpacing: "-0.03em" }}>
            12,470
          </div>
          <div className="text-xs font-body font-semibold" style={{ color: "#00c0ff" }}>
            ↑ 18% vs last month
          </div>
        </div>
      </div>

      {/* Sparkline chart */}
      <div className="px-5 pb-4">
        <svg
          viewBox="0 0 220 60"
          className="w-full"
          style={{ height: 56 }}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Subtle grid */}
          {[20, 40].map(y => (
            <line key={y} x1="0" y1={y} x2="220" y2={y}
              stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          {/* Fill under line */}
          <path
            d={`${sparkPoints} L220,60 L0,60 Z`}
            fill="url(#sparkFill)"
          />
          {/* Gradient def */}
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00c0ff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#00c0ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Main line */}
          <path
            d={sparkPoints}
            fill="none"
            stroke="#00c0ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* End dot */}
          <circle cx="220" cy="6" r="3.5" fill="#00c0ff" />
          <circle cx="220" cy="6" r="6" fill="rgba(0,192,255,0.2)" />
        </svg>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />

      {/* Active apps row */}
      <div className="px-5 py-4 flex items-center justify-between">
        <span className="text-xs font-body" style={{ color: "rgba(255,255,255,0.35)" }}>
          Active Apps
        </span>
        <div className="flex items-center gap-2">
          {appBadges.map(({ letter, label }) => (
            <div
              key={letter}
              title={label}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-heading font-bold text-white"
              style={{
                background: "rgba(0,192,255,0.1)",
                border: "1px solid rgba(0,192,255,0.25)",
              }}
            >
              {letter}
            </div>
          ))}
          <span className="text-xs font-body" style={{ color: "rgba(255,255,255,0.3)" }}>
            +10
          </span>
        </div>
      </div>
    </motion.div>

    {/* ── Floating chip: new sale ── */}
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="absolute -top-3 -right-2 px-3.5 py-2.5 rounded-xl"
      style={{
        background: "rgba(8,18,36,0.92)",
        border: "1px solid rgba(0,192,255,0.22)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
        <div>
          <div className="text-xs font-heading font-bold text-white leading-none mb-0.5">New Sale</div>
          <div className="text-xs font-body" style={{ color: "#00c0ff" }}>$329 · bag</div>
        </div>
      </div>
    </motion.div>

    {/* ── Floating chip: rating ── */}
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="absolute -bottom-3 -left-2 px-3.5 py-2.5 rounded-xl"
      style={{
        background: "rgba(8,18,36,0.92)",
        border: "1px solid rgba(0,192,255,0.22)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div>
          <div className="text-xs font-heading font-bold text-white leading-none mb-0.5">App Store</div>
          <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.45)" }}>5.0 avg rating</div>
        </div>
      </div>
    </motion.div>
  </div>
);

/* ─── Component ───────────────────────────────────────────────────── */

const Index = () => {
  const featuredApps = apps.filter((a) => !a.comingSoon).slice(0, 8);

  const featuredItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Thalia Apps",
    description: "A selection of our most popular SaaS apps for Shopify, Amazon, and BigCommerce merchants.",
    numberOfItems: featuredApps.length,
    itemListElement: featuredApps.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://thaliatechnologies.com/apps/${a.slug}`,
      name: a.name,
    })),
  };

  return (
    <Layout>
      <Seo
        title="Thalia Technologies | Ecommerce Apps for Growth"
        description="Thalia builds focused ecommerce apps for Shopify, Amazon, and BigCommerce to help merchants automate workflows, increase revenue, and grow faster."
        keywords="Thalia Technologies, ecommerce apps, Shopify apps, Amazon apps, BigCommerce apps, ecommerce automation, ecommerce growth tools, merchant software"
        path="/"
        structuredData={[featuredItemList]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark navy, gradient headline, inline stats
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 120 }}
      >
        {/* Cyan radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,192,255,0.13) 0%, transparent 65%)",
          }}
        />

        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              {/* Pulsing badge */}
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
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#00c0ff" }}
                />
                TRUSTED BY 100,000+ BUSINESSES
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
                Software That<br />
                <span className="gradient-text-cyan">Makes a Real</span><br />
                Difference
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-lg leading-relaxed mb-8 max-w-lg font-body"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                We build powerful SaaS tools that help ecommerce businesses on Shopify,
                Amazon, and BigCommerce solve their most pressing challenges — and scale faster.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/apps" className="btn-primary text-sm">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
                <Link to="/about" className="btn-ghost-dark text-sm">
                  Learn About Us
                </Link>
              </motion.div>

            </div>

            {/* Right — product UI mockup */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="hidden lg:block"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PLATFORM LOGOS — scrolling marquee
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-14 border-b border-border bg-background">
        <div className="section-container">
          <p className="text-center text-xs font-body font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-8">
            Powering businesses on the world's leading platforms
          </p>
          <div className="relative overflow-hidden">
            {/* Fade masks */}
            <div
              className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, white, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, white, transparent)" }}
            />
            <div className="flex animate-marquee gap-16 items-center" style={{ width: "max-content" }}>
              {[...platformLogos, ...platformLogos].map((logo, i) => (
                <div key={i} className="flex items-center justify-center h-10 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full w-auto max-w-[130px] object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-90 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT WE DO — 3-column feature cards
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="WHAT WE DO"
            title="Built for Ecommerce, Trusted by Merchants"
            description="Our mission is simple — build technology that helps online businesses work smarter, grow faster, and solve real operational problems."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...inView(i * 0.1)}
                className="card-elevated p-8"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(0,192,255,0.1)",
                    border: "1px solid rgba(0,192,255,0.18)",
                  }}
                >
                  <f.icon className="h-5 w-5" style={{ color: "#00c0ff" }} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{f.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRODUCTS GRID
      ════════════════════════════════════════════════════════════════ */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="OUR PRODUCTS"
            title="A Suite of Focused SaaS Apps"
            description="Each app solves a specific, painful ecommerce problem — focused, powerful, and constantly improved by a team that genuinely cares."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {apps.slice(0, 8).map((app, i) => (
              <AppCard key={app.slug} app={app} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/apps" className="btn-outline text-sm">
              View All {apps.length} Apps <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS — dark bg with gradient numbers
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 80, paddingBottom: 80 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,192,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="section-container relative text-center">
          <motion.h2
            {...inView()}
            className="font-heading font-extrabold text-white mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.025em" }}
          >
            The Numbers Speak for Themselves
          </motion.h2>
          <motion.p
            {...inView(0.08)}
            className="font-body text-sm mb-14"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            A decade of building, shipping, and growing alongside our merchants.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...inView(i * 0.1)}
                className="rounded-2xl p-8 text-center relative overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderTop: "2px solid rgba(0,192,255,0.45)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "rgba(0,192,255,0.12)",
                    border: "1px solid rgba(0,192,255,0.2)",
                  }}
                >
                  <stat.icon className="h-5 w-5" style={{ color: "#00c0ff" }} />
                </div>
                {/* Value */}
                <div
                  className="font-heading font-extrabold gradient-text-cyan leading-none mb-2"
                  style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
                >
                  {stat.value}
                </div>
                {/* Label */}
                <div
                  className="text-sm font-body font-semibold mb-1"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  {stat.label}
                </div>
                {/* Sub-description */}
                <div className="text-xs font-body" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VALUES — centered 3-column cards
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="OUR VALUES"
            title="What Drives Us Every Day"
            description="We are a small, passionate team — different backgrounds, one shared obsession: building products that genuinely matter."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...inView(i * 0.1)}
                className="card-elevated p-8 text-center group"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "rgba(0,192,255,0.1)",
                    border: "1px solid rgba(0,192,255,0.18)",
                  }}
                >
                  <v.icon className="h-5 w-5" style={{ color: "#00c0ff" }} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════ */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="TESTIMONIALS" title="Loved by Merchants Worldwide" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...inView(i * 0.1)}
                className="card-elevated p-8 flex flex-col relative overflow-hidden"
              >
                {/* Decorative quote mark — background accent */}
                <div
                  className="absolute -top-2 -right-1 font-heading font-extrabold select-none pointer-events-none"
                  style={{ fontSize: 96, color: "rgba(0,192,255,0.07)", lineHeight: 1 }}
                  aria-hidden
                >
                  &ldquo;
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-5 relative" aria-label={`${t.rating} stars`}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm font-body text-foreground leading-relaxed flex-1 mb-6 relative">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #00c0ff, #7c55ff)" }}
                  >
                    {t.author.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-foreground">{t.author}</div>
                    <div className="text-xs font-body text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CAREERS CTA — gradient banner
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)" }}
          >
            {/* Decorative bubbles */}
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.12)", transform: "translate(35%, -35%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.08)", transform: "translate(-35%, 35%)" }}
            />

            <div className="relative">
              <h2
                className="font-heading font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(26px, 3.5vw, 40px)", letterSpacing: "-0.025em" }}
              >
                We're Hiring — Come Build With Us
              </h2>
              <p className="text-white/80 max-w-lg mx-auto mb-8 font-body">
                Join a team that cares deeply about craft, ships constantly, and works on real-world problems.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-3.5 rounded-lg bg-white transition-all duration-200 hover:scale-105"
                style={{ color: "#7c3aed", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}
              >
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container text-center">
          <SectionHeading
            title="Let's Talk"
            description="Have a question, a partnership idea, or just want to say hello? We'd love to hear from you."
          />
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary text-sm">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <a href="mailto:supportteam@thaliatechnologies.com" className="btn-outline text-sm">
              Email Us →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
