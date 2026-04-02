import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Bot, Link2, Globe, Smartphone, Code2, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import featuresImg from "@/assets/features-platforms.jpg";

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
];

const platforms = [
  { name: "Shopify", color: "#96bf48" },
  { name: "Amazon", color: "#FF9900" },
  { name: "BigCommerce", color: "#34648C" },
  { name: "REST API", color: "#8B7CF6" },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-alt relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="section-container relative text-center">
          <SectionHeading title="Built for the Modern Merchant" description="Our platform is designed from the ground up to deliver reliability, speed, and simplicity for businesses of every size." />
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-elevated p-8">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
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
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((p) => (
                  <div key={p.name} className="card-elevated px-6 py-5 flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="font-heading font-bold text-foreground">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={featuresImg} alt="Platform integration showing Shopify, Amazon, and BigCommerce connected in a tech ecosystem" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
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
