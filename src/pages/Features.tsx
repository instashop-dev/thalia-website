import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Bot, Link2, Globe, Smartphone, Code2, Headphones, Clock, Database, Layers, Settings, Lock, Gauge } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import platformImg from "@/assets/platform-integration.jpg";

const features = [
  { icon: Zap, title: "Instant Sync", desc: "Real-time product, inventory and order synchronization across platforms with zero lag." },
  { icon: Shield, title: "Security First", desc: "SOC 2 compliant, encrypted at rest and in transit, with full audit logs for every action." },
  { icon: BarChart3, title: "Rich Analytics", desc: "Dashboards showing exactly how each app is performing with actionable insights." },
  { icon: Bot, title: "Automation Engine", desc: "Schedule tasks, set rules, and automate repetitive operations to save hours weekly." },
  { icon: Link2, title: "Deep Integrations", desc: "Native Shopify, BigCommerce, Amazon + third-party tools for seamless workflows." },
  { icon: Globe, title: "Global Scale", desc: "Multi-currency, multi-language, and multi-region support for worldwide commerce." },
  { icon: Smartphone, title: "Mobile Ready", desc: "Fully responsive on phones, tablets, and desktops — manage your store anywhere." },
  { icon: Code2, title: "API Access", desc: "REST APIs for custom workflows, integrations, and developer-friendly extensions." },
  { icon: Headphones, title: "Priority Support", desc: "Dedicated support team, onboarding assistance, and SLA guarantees included." },
  { icon: Clock, title: "Scheduled Operations", desc: "Schedule bulk edits, price changes, and imports to run automatically at specific times." },
  { icon: Database, title: "Data Backup", desc: "Automatic backups of all your data with one-click restore. Never lose critical information." },
  { icon: Layers, title: "Multi-Store Support", desc: "Manage multiple Shopify or BigCommerce stores from a single dashboard seamlessly." },
  { icon: Settings, title: "No-Code Setup", desc: "Install and configure any app in under 5 minutes. No technical expertise required." },
  { icon: Lock, title: "GDPR Compliant", desc: "Full compliance with GDPR, CCPA, and global data protection regulations built in." },
  { icon: Gauge, title: "Performance Optimized", desc: "Lightweight code that never slows down your store. Sub-second load times guaranteed." },
];

const platforms = [
  { name: "Shopify", color: "#96bf48", desc: "Native integration with Shopify and Shopify Plus stores" },
  { name: "Amazon", color: "#FF9900", desc: "Full Amazon Seller Central and FBA integration" },
  { name: "BigCommerce", color: "#34648C", desc: "Deep integration with BigCommerce ecosystem" },
  { name: "REST API", color: "#8B7CF6", desc: "Developer-friendly APIs for custom integrations" },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.06) 0%, transparent 70%)"
        }} />
        <div className="section-container relative text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">PLATFORM CAPABILITIES</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-h1 font-extrabold text-foreground mb-6 max-w-3xl mx-auto">
            Built for the Modern Merchant
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Our platform is designed from the ground up to deliver reliability, speed, and simplicity for businesses of every size.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="card-elevated p-7 group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading center={false} title="Works With Your Favorite Platforms" description="Our apps integrate natively with the world's leading ecommerce platforms, giving you seamless data flow and unified management." />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((p) => (
                  <div key={p.name} className="card-elevated px-6 py-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.color }} />
                      <span className="font-heading font-bold text-foreground">{p.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={platformImg} alt="Ecommerce platform integration hub showing Shopify, Amazon, and BigCommerce connected through data flows" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
            <h2 className="font-heading text-h2 font-extrabold text-primary-foreground mb-4">Start for Free</h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 font-body">All apps offer a free trial. No credit card required.</p>
            <Link to="/apps" className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-3.5 rounded-lg bg-background text-primary transition-all hover:scale-102">
              Browse All Apps <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
