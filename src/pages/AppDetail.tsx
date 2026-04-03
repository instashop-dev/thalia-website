import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AppCard from "@/components/AppCard";
import { apps, getPlatformColor, getPlatformLabel, getAppImage } from "@/data/apps";
import NotFound from "./NotFound";
import { useState } from "react";
import { ArrowRight, Check, Star } from "lucide-react";

const AppDetail = () => {
  const { slug } = useParams();
  const app = apps.find((a) => a.slug === slug);
  const [notifyEmail, setNotifyEmail] = useState("");

  if (!app) return <NotFound />;

  const relatedApps = apps.filter(a => a.slug !== app.slug && a.platform === app.platform && !a.comingSoon).slice(0, 3);
  const platformColor = getPlatformColor(app.platform);
  const installLabel = app.platform.includes("Shopify") ? "Shopify" : app.platform.includes("Amazon") ? "Shopify" : app.platform;
  const appImage = getAppImage(app.slug);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="section-container pt-6">
        <nav className="text-sm font-body text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/apps" className="hover:text-primary transition-colors">Apps</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{app.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.05) 0%, transparent 70%)"
        }} />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block text-xs font-bold font-body px-3 py-1 rounded-lg mb-4"
                style={{ backgroundColor: `${platformColor}14`, color: platformColor }}>
                {getPlatformLabel(app.platform)}
              </span>
              <h1 className="font-heading text-h1 font-extrabold text-foreground mb-4">{app.name}</h1>
              <p className="font-body text-lg leading-relaxed mb-4 text-muted-foreground">{app.description}</p>
              <p className="font-body text-sm leading-relaxed mb-8 text-muted-foreground">{app.longDescription}</p>

              {app.comingSoon ? (
                <div className="flex gap-3">
                  <input type="email" value={notifyEmail} onChange={e => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-xl border border-border font-body text-sm" />
                  <button className="btn-primary">Notify Me</button>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    {app.externalUrl !== "#" && (
                      <a href={app.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                        Install Free <ArrowRight className="ml-2 h-4 w-4 inline" />
                      </a>
                    )}
                    <Link to="/contact" className="btn-outline text-base px-8 py-4">Contact Sales</Link>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-body text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      {app.stats[1]?.value || "4.8★"} rating
                    </span>
                    <span>·</span>
                    <span>{app.stats[0]?.value || "10,000+"} installs</span>
                  </div>
                </>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
              className="flex items-center justify-center">
              {appImage ? (
                <img src={appImage} alt={`${app.name} — ${app.tagline}`} className="w-full max-w-lg rounded-2xl shadow-lg" loading="lazy" width={800} height={600} />
              ) : (
                <div className="w-full max-w-md aspect-square rounded-3xl flex items-center justify-center"
                  style={{ background: `${app.color}10`, boxShadow: `0 20px 60px ${app.color}20` }}>
                  <span className="text-8xl">{app.icon}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {!app.comingSoon && (
        <>
          {/* Benefits */}
          {app.benefits.length > 0 && (
            <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">WHY CHOOSE {app.name.toUpperCase()}</span>
                  <h2 className="font-heading font-extrabold text-h2 text-foreground">Key Benefits</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                  {app.benefits.map((b, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                      className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary-foreground" />
                      </div>
                      <p className="text-sm font-body text-foreground leading-relaxed">{b}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Features Detail */}
          {app.featureDetails.length > 0 && (
            <section style={{ paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">KEY FEATURES</span>
                  <h2 className="font-heading font-extrabold text-h2 text-foreground">Everything You Need</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {app.featureDetails.map((f, i) => (
                    <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                      className="card-elevated p-6">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3" style={{ backgroundColor: `${app.color}15` }}>
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

          {/* How It Works */}
          {app.howItWorks.length > 0 && (
            <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">HOW IT WORKS</span>
                  <h2 className="font-heading font-extrabold text-h2 text-foreground">Get Started in Minutes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {app.howItWorks.map((s, i) => (
                    <div key={s.step} className="text-center relative">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-extrabold text-xl bg-primary text-primary-foreground">
                        {s.step}
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{s.title}</h3>
                      <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.desc}</p>
                      {i < 2 && <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-2xl text-border">→</div>}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Stats */}
          {app.stats.length > 0 && (
            <section className="bg-foreground" style={{ paddingTop: 60, paddingBottom: 60 }}>
              <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  {app.stats.map(s => (
                    <div key={s.label}>
                      <div className="font-heading font-extrabold text-4xl text-primary">{s.value}</div>
                      <div className="text-sm font-body mt-1 text-primary-foreground/70">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Pricing Plans */}
          {app.plans.length > 0 && (
            <section style={{ paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">PRICING</span>
                  <h2 className="font-heading font-extrabold text-h2 text-foreground">Simple, Transparent Pricing</h2>
                  <p className="text-muted-foreground font-body mt-3">Start free. Upgrade as you grow. No hidden fees.</p>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-${Math.min(app.plans.length, 3)} gap-6 max-w-4xl mx-auto`}>
                  {app.plans.map((plan, i) => (
                    <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className={`card-elevated p-8 text-center relative ${plan.highlighted ? 'ring-2 ring-primary' : ''}`}>
                      {plan.highlighted && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold font-heading px-4 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">{plan.name}</h3>
                      <div className="mb-6">
                        <span className="font-heading font-extrabold text-4xl text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground font-body text-sm">{plan.period}</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                      {app.externalUrl !== "#" ? (
                        <a href={app.externalUrl} target="_blank" rel="noopener noreferrer"
                          className={plan.highlighted ? "btn-primary w-full text-center block" : "btn-outline w-full text-center block"}>
                          Get Started
                        </a>
                      ) : (
                        <button className={plan.highlighted ? "btn-primary w-full" : "btn-outline w-full"}>Get Started</button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Reviews */}
          {app.reviews.length > 0 && (
            <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
              <div className="section-container">
                <div className="text-center mb-12">
                  <span className="inline-block font-heading font-bold text-xs uppercase tracking-[0.12em] mb-3 text-primary">REVIEWS</span>
                  <h2 className="font-heading font-extrabold text-h2 text-foreground">What Merchants Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {app.reviews.map((r, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="card-elevated p-6" style={{ borderTop: `3px solid ${app.color}` }}>
                      <div className="flex gap-0.5 mb-3">
                        {Array(r.rating).fill(0).map((_, j) => <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />)}
                      </div>
                      <p className="text-sm font-body text-foreground italic leading-relaxed mb-4">"{r.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs text-primary-foreground"
                          style={{ backgroundColor: app.color }}>
                          {r.author.split(" ").map(w => w[0]).join("")}
                        </div>
                        <div>
                          <div className="font-heading font-bold text-sm text-foreground">{r.author}</div>
                          <div className="text-xs font-body text-muted-foreground">{r.role} · {r.date}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Related */}
          {relatedApps.length > 0 && (
            <section style={{ paddingTop: 80, paddingBottom: 80 }}>
              <div className="section-container">
                <h2 className="font-heading font-extrabold text-2xl text-center mb-8 text-foreground">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                  {relatedApps.map((a, i) => <AppCard key={a.slug} app={a} index={i} />)}
                </div>
              </div>
            </section>
          )}

          {/* Install CTA */}
          <section style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))", paddingTop: 80, paddingBottom: 80 }}>
            <div className="section-container text-center">
              <h2 className="font-heading font-extrabold text-3xl text-primary-foreground mb-4">Ready to Try {app.name}?</h2>
              <p className="font-body text-lg mb-8 text-primary-foreground/80">Free to install. No credit card required.</p>
              {app.externalUrl !== "#" && (
                <a href={app.externalUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-4 rounded-lg bg-background text-primary transition-all hover:scale-102">
                  Install Free on {installLabel} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default AppDetail;
