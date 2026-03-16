import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AppCard from "@/components/AppCard";
import { apps, getPlatformColor, getPlatformLabel } from "@/data/apps";
import NotFound from "./NotFound";
import { useState } from "react";

const howItWorks = [
  { step: "01", title: "Install the App", desc: "Add to your store in one click from the app store" },
  { step: "02", title: "Configure Settings", desc: "Set up your preferences in under 5 minutes" },
  { step: "03", title: "Watch It Work", desc: "Sit back as the app automates everything for you" },
];

const AppDetail = () => {
  const { slug } = useParams();
  const app = apps.find((a) => a.slug === slug);
  const [notifyEmail, setNotifyEmail] = useState("");

  if (!app) return <NotFound />;

  const relatedApps = apps.filter(a => a.slug !== app.slug && a.platform === app.platform && !a.comingSoon).slice(0, 3);
  const platformColor = getPlatformColor(app.platform);
  const installLabel = app.platform.includes("Shopify") ? "Shopify" : app.platform.includes("Amazon") ? "Shopify" : app.platform;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="section-container pt-6">
        <nav className="text-sm font-body" style={{ color: "#8888A0" }}>
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/apps" className="hover:underline">Apps</Link>
          <span className="mx-2">›</span>
          <span style={{ color: "#0D0D14" }}>{app.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 60, paddingBottom: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(41,201,240,0.06) 0%, transparent 70%)"
        }} />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-xs font-bold font-body px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: `${platformColor}14`, color: platformColor }}>
                {getPlatformLabel(app.platform)}
              </span>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4" style={{ color: "#0D0D14", letterSpacing: "-2px" }}>
                {app.name}
              </h1>
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "#3D3D4E" }}>
                {app.description}
              </p>

              {app.comingSoon ? (
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={e => setNotifyEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-xl border font-body text-sm"
                    style={{ borderColor: "#E4EAF0" }}
                  />
                  <button className="btn-primary">Notify Me</button>
                </div>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    {app.externalUrl !== "#" && (
                      <a href={app.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                        Install Free →
                      </a>
                    )}
                    <Link to="/contact" className="btn-outline text-base px-8 py-4">Contact Sales</Link>
                  </div>
                  <p className="text-sm font-body" style={{ color: "#8888A0" }}>
                    ⭐ {app.stats[1]?.value || "4.8★"} rating · {app.stats[0]?.value || "10,000+"} installs
                  </p>
                </>
              )}
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-3xl flex items-center justify-center"
                style={{ background: `${app.color}10`, boxShadow: `0 20px 60px ${app.color}20` }}>
                <span className="text-8xl">{app.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!app.comingSoon && (
        <>
          {/* Features */}
          <section className="section-alt" style={{ paddingTop: 100, paddingBottom: 100 }}>
            <div className="section-container">
              <div className="text-center mb-12">
                <span className="inline-block font-heading font-bold text-xs uppercase tracking-[2px] mb-3" style={{ color: "#29C9F0" }}>KEY FEATURES</span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl" style={{ color: "#0D0D14", letterSpacing: "-1px" }}>Everything You Need</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {app.features.map(f => (
                  <div key={f} className="card-elevated p-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3" style={{ background: "rgba(41,201,240,0.1)" }}>✓</div>
                    <h3 className="font-heading font-bold text-base mb-1" style={{ color: "#0D0D14" }}>{f}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section style={{ paddingTop: 100, paddingBottom: 100 }}>
            <div className="section-container">
              <div className="text-center mb-12">
                <span className="inline-block font-heading font-bold text-xs uppercase tracking-[2px] mb-3" style={{ color: "#29C9F0" }}>HOW IT WORKS</span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl" style={{ color: "#0D0D14", letterSpacing: "-1px" }}>Get Started in Minutes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howItWorks.map((s, i) => (
                  <div key={s.step} className="text-center relative">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-extrabold text-xl" style={{ background: "rgba(41,201,240,0.1)", color: "#29C9F0" }}>
                      {s.step}
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "#0D0D14" }}>{s.title}</h3>
                    <p className="text-sm font-body" style={{ color: "#8888A0" }}>{s.desc}</p>
                    {i < 2 && <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-2xl" style={{ color: "#E4EAF0" }}>→</div>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          {app.stats.length > 0 && (
            <section style={{ background: "rgba(41,201,240,0.06)", paddingTop: 60, paddingBottom: 60 }}>
              <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                  {app.stats.map(s => (
                    <div key={s.label}>
                      <div className="font-heading font-extrabold text-4xl" style={{ color: "#29C9F0" }}>{s.value}</div>
                      <div className="text-sm font-body mt-1" style={{ color: "#8888A0" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonial */}
          {app.testimonial.quote && (
            <section style={{ paddingTop: 80, paddingBottom: 80 }}>
              <div className="section-container max-w-2xl text-center">
                <div className="card-elevated p-8" style={{ borderTop: "3px solid #29C9F0" }}>
                  <div className="flex gap-0.5 justify-center mb-4">{Array(5).fill(0).map((_, i) => <span key={i} style={{ color: "#F5A623" }}>★</span>)}</div>
                  <p className="font-body text-lg italic leading-relaxed mb-6" style={{ color: "#3D3D4E" }}>"{app.testimonial.quote}"</p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm" style={{ background: "#29C9F0", color: "#0D0D14" }}>
                      {app.testimonial.author.split(" ").map(w => w[0]).join("")}
                    </div>
                    <div className="text-left">
                      <div className="font-heading font-bold text-sm" style={{ color: "#0D0D14" }}>{app.testimonial.author}</div>
                      <div className="text-xs font-body" style={{ color: "#8888A0" }}>{app.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Related */}
          {relatedApps.length > 0 && (
            <section className="section-alt" style={{ paddingTop: 80, paddingBottom: 80 }}>
              <div className="section-container">
                <h2 className="font-heading font-extrabold text-2xl text-center mb-8" style={{ color: "#0D0D14" }}>You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {relatedApps.map((a, i) => <AppCard key={a.slug} app={a} index={i} />)}
                </div>
              </div>
            </section>
          )}

          {/* Install CTA */}
          <section style={{ background: "linear-gradient(135deg, #29C9F0, #0A97BF)", paddingTop: 80, paddingBottom: 80 }}>
            <div className="section-container text-center">
              <h2 className="font-heading font-extrabold text-3xl text-white mb-4">Ready to Try {app.name}?</h2>
              <p className="font-body text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>Free to install. No credit card required.</p>
              {app.externalUrl !== "#" && (
                <a href={app.externalUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-4 rounded-full bg-background" style={{ color: "#29C9F0" }}>
                  Install Free on {installLabel} →
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
