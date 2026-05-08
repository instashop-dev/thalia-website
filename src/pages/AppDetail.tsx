import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import Layout from "@/components/Layout";
import AppCard from "@/components/AppCard";
import Seo from "@/components/Seo";
import type { AppData } from "@/data/apps";
import { apps, getPlatformColor, getPlatformLabel, getAppImage, getAppLogo } from "@/data/apps";
import NotFound from "./NotFound";

const getPrimaryCtaLabel = (app: AppData) => {
  if (app.platform === "BigCommerce") return "Install on BigCommerce";
  if (app.platform === "API") return "Visit website";
  return "Install on Shopify";
};

const getWebsiteUrl = (app: AppData): string | undefined => {
  if (app.slug === "spreadr") return "https://spreadr.co/";
  if (app.slug === "csvbox") return "https://csvbox.io/";
  return undefined;
};

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const AppDetail = () => {
  const { slug } = useParams();
  const app = apps.find((a) => a.slug === slug);
  const [notifyEmail, setNotifyEmail] = useState("");

  if (!app) return <NotFound />;

  const relatedApps = apps.filter(a => a.slug !== app.slug && a.platform === app.platform && !a.comingSoon).slice(0, 3);
  const platformColor = getPlatformColor(app.platform);
  const appLogo = getAppLogo(app.slug);
  const websiteUrl = getWebsiteUrl(app);
  const showWebsiteSecondary = Boolean(websiteUrl && app.slug !== "csvbox");
  const appImage = getAppImage(app.slug);
  const primaryCtaLabel = getPrimaryCtaLabel(app);
  const primaryCtaClass = primaryCtaLabel === "Install on Shopify" ? "btn-shopify" : "btn-primary";
  const appPageName =
    app.slug === "duplicate"
      ? "Duplicate SKU Sync Master"
      : app.slug === "clever"
        ? "Clever Variant Images"
        : app.slug === "clean"
          ? "Clean Info Tables & Charts"
          : app.slug === "prime"
            ? "Prime Product Badges Stickers"
            : app.slug === "csvbox"
              ? "CSV Box"
        : app.name;
  // Parse rating like "4.9★" → 4.9
  const ratingStat = app.stats.find((s) => /★|star|rating/i.test(s.label) || /★/.test(s.value));
  const ratingValue = ratingStat ? parseFloat(ratingStat.value.replace(/[^0-9.]/g, "")) : undefined;
  // Parse installs like "50K+" → 50000
  const installStat = app.stats.find((s) => /install|user|merchant/i.test(s.label));
  const parseCount = (v?: string): number | undefined => {
    if (!v) return undefined;
    const match = v.match(/([0-9.]+)\s*([KMB]?)/i);
    if (!match) return undefined;
    const n = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    const mult = unit === "K" ? 1_000 : unit === "M" ? 1_000_000 : unit === "B" ? 1_000_000_000 : 1;
    return Math.round(n * mult);
  };
  const installCount = parseCount(installStat?.value);
  const reviewCountFromStats = app.reviews.length;

  const appStructuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: appPageName,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: `${app.platform} App`,
    operatingSystem: "Web",
    description: app.description,
    url: `https://www.thaliatechnologies.com/apps/${app.slug}`,
    ...(appImage ? { image: appImage.startsWith("http") ? appImage : `https://www.thaliatechnologies.com${appImage}` } : {}),
    brand: {
      "@type": "Brand",
      name: "Thalia Technologies",
    },
    publisher: {
      "@type": "Organization",
      name: "Thalia Technologies",
      url: "https://www.thaliatechnologies.com",
    },
    author: {
      "@type": "Organization",
      name: "Thalia Technologies",
      url: "https://www.thaliatechnologies.com",
    },
    ...(app.plans.length
      ? {
          offers: app.plans.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            price: plan.price.replace(/[^0-9.]/g, "") || "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: app.externalUrl !== "#" ? app.externalUrl : `https://www.thaliatechnologies.com/apps/${app.slug}`,
          })),
        }
      : {}),
    ...(ratingValue && !Number.isNaN(ratingValue)
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: ratingValue.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: installCount ?? Math.max(reviewCountFromStats, 10),
            reviewCount: reviewCountFromStats || undefined,
          },
        }
      : {}),
    ...(app.reviews.length
      ? {
          review: app.reviews.map((r) => ({
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating: "5",
            },
            author: { "@type": "Person", name: r.author },
            reviewBody: r.quote,
            datePublished: r.date,
          })),
        }
      : {}),
  };
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.thaliatechnologies.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Apps",
        item: "https://www.thaliatechnologies.com/apps",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: appPageName,
        item: `https://www.thaliatechnologies.com/apps/${app.slug}`,
      },
    ],
  };

  return (
    <Layout>
      <Seo
        title={app.seoTitle || `${appPageName} | Thalia Technologies`}
        description={app.seoDescription || app.description}
        keywords={`${appPageName}, ${app.platform} app, ${app.features.slice(0, 4).join(", ")}, Thalia Technologies`}
        path={`/apps/${app.slug}`}
        structuredData={[appStructuredData, breadcrumbStructuredData]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark navy, 2-column layout, app image/logo
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 96 }}
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
            {/* Text & CTA — Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Platform badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold font-body select-none"
                style={{
                  backgroundColor: `${platformColor}15`,
                  color: platformColor,
                  border: `1px solid ${platformColor}40`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: platformColor }} />
                {getPlatformLabel(app.platform)}
              </motion.div>

              {/* Hidden SEO H1 */}
              <h1 className="sr-only">{app.h1 || appPageName}</h1>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="font-heading font-extrabold text-white mb-6"
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                }}
              >
                {appPageName}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-lg leading-relaxed mb-4 font-body mx-auto max-w-2xl"
                style={{ color: "rgba(255,255,255,0.68)" }}
              >
                {app.description}
              </motion.p>

              {/* Long description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base leading-relaxed mb-8 font-body mx-auto max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {app.longDescription}
              </motion.p>

              {/* CTA & Stats */}
              {app.comingSoon ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                  className="flex gap-3"
                >
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 h-11 rounded-lg border border-white/20 font-body text-sm bg-white/10 text-white placeholder:text-white/40"
                  />
                  <button className="btn-primary h-11 px-6">Notify Me</button>
                </motion.div>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.24 }}
                    className="flex flex-col sm:flex-row gap-3 mb-6 justify-center"
                  >
                    {app.externalUrl !== "#" && (
                      <a
                        href={app.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${primaryCtaClass} text-base px-8 h-12 inline-flex items-center justify-center gap-2`}
                      >
                        {primaryCtaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                    {showWebsiteSecondary ? (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-base px-8 h-12 inline-flex items-center justify-center"
                      >
                        View website
                      </a>
                    ) : (
                      app.slug !== "csvbox" && (
                        <Link
                          to="/contact"
                          className="btn-outline text-base px-8 h-12 inline-flex items-center justify-center"
                        >
                          Contact Sales
                        </Link>
                      )
                    )}
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.28 }}
                    className="flex items-center gap-4 text-sm font-body justify-center"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      {app.stats[1]?.value || "4.8★"} rating
                    </span>
                    <span>·</span>
                    <span>{app.stats[0]?.value || "10,000+"} installs</span>
                  </motion.div>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {!app.comingSoon && (
        <>
          {/* ═══════════════════════════════════════════════════════════════
              BENEFITS — section-alt, 3-column grid with checkmarks
          ════════════════════════════════════════════════════════════════ */}
          {app.benefits.length > 0 && (
            <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">
                    WHY CHOOSE {appPageName.toUpperCase()}
                  </span>
                  <h2 className="font-heading font-extrabold text-foreground" style={{ fontSize: 40, letterSpacing: "-0.02em", marginBottom: 0 }}>
                    Key Benefits
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {app.benefits.map((b, i) => (
                    <motion.div
                      key={i}
                      {...inView(Math.min(i * 0.06, 0.3))}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <p className="text-sm font-body text-foreground leading-relaxed">{b}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              FEATURES DETAIL — white bg, 3-col cards with cyan borders
          ════════════════════════════════════════════════════════════════ */}
          {app.featureDetails.length > 0 && (
            <section style={{ background: "white", paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">
                    KEY FEATURES
                  </span>
                  <h2 className="font-heading font-extrabold text-foreground" style={{ fontSize: 40, letterSpacing: "-0.02em", marginBottom: 0 }}>
                    Everything You Need
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {app.featureDetails.map((f, i) => (
                    <motion.div
                      key={f.title}
                      {...inView(Math.min(i * 0.06, 0.3))}
                      className="card-elevated p-6"
                      style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${app.color}15` }}
                      >
                        <Check className="h-5 w-5" style={{ color: app.color }} />
                      </div>
                      <h3 className="font-heading font-bold text-base mb-2 text-foreground">{f.title}</h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              HOW IT WORKS — section-alt, 3-step centered with arrows
          ════════════════════════════════════════════════════════════════ */}
          {app.howItWorks.length > 0 && (
            <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">
                    HOW IT WORKS
                  </span>
                  <h2 className="font-heading font-extrabold text-foreground" style={{ fontSize: 40, letterSpacing: "-0.02em", marginBottom: 0 }}>
                    Get Started in Minutes
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {app.howItWorks.map((s, i) => (
                    <motion.div key={s.step} {...inView(i * 0.1)} className="text-center relative">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-extrabold text-xl bg-primary text-white">
                        {s.step}
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                      {i < 2 && (
                        <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-2xl text-border">
                          →
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              STATS — dark navy section, 3-column centered
          ════════════════════════════════════════════════════════════════ */}
          {app.stats.length > 0 && (
            <section style={{ background: "hsl(220 35% 10%)", paddingTop: 72, paddingBottom: 72 }}>
              <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  {app.stats.map((s) => (
                    <motion.div key={s.label} {...inView()}>
                      <div className="gradient-text-cyan font-heading font-extrabold text-4xl">{s.value}</div>
                      <div className="text-sm font-body mt-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              PRICING — white bg, responsive grid with popular badge & ring
          ════════════════════════════════════════════════════════════════ */}
          {app.plans.length > 0 && (
            <section style={{ background: "white", paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">
                    PRICING
                  </span>
                  <h2 className="font-heading font-extrabold text-foreground" style={{ fontSize: 40, letterSpacing: "-0.02em", marginBottom: 12 }}>
                    Simple, Transparent Pricing
                  </h2>
                  <p className="text-muted-foreground font-body">
                    Start free. Upgrade as you grow. No hidden fees.
                  </p>
                </div>
                <div
                  className={`grid grid-cols-1 gap-6 mx-auto ${
                    app.plans.length === 5
                      ? "md:grid-cols-2 lg:grid-cols-5 max-w-[96rem]"
                      : app.plans.length >= 4
                        ? "md:grid-cols-2 lg:grid-cols-4 max-w-7xl"
                        : app.plans.length === 3
                          ? "md:grid-cols-3 max-w-6xl"
                          : app.plans.length === 2
                            ? "md:grid-cols-2 max-w-4xl"
                            : "max-w-2xl"
                  }`}
                >
                  {app.plans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      {...inView(Math.min(i * 0.08, 0.3))}
                      className={`card-elevated p-8 relative h-full flex flex-col ${
                        plan.highlighted ? "ring-2" : ""
                      }`}
                      style={{
                        ringColor: plan.highlighted ? "rgba(0,192,255,0.5)" : undefined,
                      }}
                    >
                      {plan.highlighted && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold font-heading px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2 text-center">
                        {plan.name}
                      </h3>
                      <div className="mb-6 text-center">
                        <span className="font-heading font-extrabold text-4xl text-foreground">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <div className="text-muted-foreground font-body text-sm">{plan.period}</div>
                        )}
                        {plan.note && (
                          <div className="mt-2 text-[10px] tracking-[0.08em] uppercase text-muted-foreground font-heading font-semibold">
                            {plan.note}
                          </div>
                        )}
                      </div>
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((f, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm font-body text-muted-foreground text-left leading-relaxed"
                          >
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {app.externalUrl !== "#" ? (
                        <a
                          href={app.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={plan.highlighted ? "btn-primary w-full text-center block" : "btn-outline w-full text-center block"}
                        >
                          Get Started
                        </a>
                      ) : (
                        <button
                          className={plan.highlighted ? "btn-primary w-full" : "btn-outline w-full"}
                        >
                          Get Started
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              REVIEWS — section-alt, 3-column cards with colored top border
          ════════════════════════════════════════════════════════════════ */}
          {app.reviews.length > 0 && (
            <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">
                    REVIEWS
                  </span>
                  <h2 className="font-heading font-extrabold text-foreground" style={{ fontSize: 40, letterSpacing: "-0.02em", marginBottom: 0 }}>
                    What Merchants Say
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {app.reviews.map((r, i) => (
                    <motion.div
                      key={i}
                      {...inView(Math.min(i * 0.08, 0.3))}
                      className="card-elevated p-6"
                      style={{ borderTop: `2px solid ${app.color}` }}
                    >
                      <div className="flex gap-0.5 mb-3">
                        {Array(r.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className="h-4 w-4 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                      </div>
                      <p className="text-sm font-body text-foreground italic leading-relaxed mb-4">
                        "{r.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs text-white"
                          style={{ backgroundColor: app.color }}
                        >
                          {r.author
                            .split(" ")
                            .map((w) => w[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-heading font-bold text-sm text-foreground">
                            {r.author}
                          </div>
                          <div className="text-xs font-body text-muted-foreground">
                            {r.role} · {r.date}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              RELATED APPS — white bg, 3-column card grid
          ════════════════════════════════════════════════════════════════ */}
          {relatedApps.length > 0 && (
            <section style={{ background: "white", paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <motion.h2
                  {...inView()}
                  className="font-heading font-extrabold text-foreground text-center mb-8"
                  style={{ fontSize: 36 }}
                >
                  You Might Also Like
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {relatedApps.map((a, i) => (
                    <motion.div key={a.slug} {...inView(Math.min(i * 0.1, 0.3))}>
                      <AppCard app={a} index={i} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ═══════════════════════════════════════════════════════════════
              FINAL CTA — gradient background, white text
          ════════════════════════════════════════════════════════════════ */}
          <section
            style={{
              background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)",
              paddingTop: 96,
              paddingBottom: 96,
            }}
          >
            <div className="section-container text-center">
              <motion.h2
                {...inView()}
                className="font-heading font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(28px, 3.6vw, 40px)", lineHeight: 1.15 }}
              >
                Ready to Try {appPageName}?
              </motion.h2>
              <motion.p
                {...inView(0.1)}
                className="font-body text-lg mb-8"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Free to install. No credit card required.
              </motion.p>
              {app.externalUrl !== "#" && (
                <motion.a
                  {...inView(0.2)}
                  href={app.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    primaryCtaLabel === "Install on Shopify"
                      ? "btn-shopify"
                      : "inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-4 rounded-lg bg-white text-primary transition-all hover:scale-[1.02]"
                  }`}
                >
                  {primaryCtaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              )}
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default AppDetail;
