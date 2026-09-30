import { motion } from "framer-motion";
import { ArrowRight, Handshake, Megaphone, MonitorSmartphone, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const opportunities = [
  { icon: Megaphone, title: "Co-Marketing Efforts", desc: "Create useful content together, including webinars, guides, social campaigns, newsletters, and customer stories that reach both of our audiences." },
  { icon: MonitorSmartphone, title: "In-app Promotion", desc: "Put complementary tools in front of the right merchants through contextual recommendations, partner offers, and thoughtful in-app placements." },
  { icon: Users, title: "Referral Partnerships", desc: "Help your customers discover tools that solve their next ecommerce challenge while building a long-term, transparent referral relationship." },
  { icon: Handshake, title: "Technology Partnerships", desc: "Connect your platform with Thalia apps to create smoother workflows for Shopify, Amazon, BigCommerce, and ecommerce teams." },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const BecomeAPartner = () => (
  <Layout>
    <Seo
      title="Become a Partner | Thalia Technologies"
      description="Partner with Thalia Technologies through co-marketing, in-app promotion, referrals, and technology partnerships for ecommerce teams."
      keywords="Thalia Technologies partner, ecommerce partnership, Shopify app partnership, co-marketing"
      path="/become-a-partner"
    />

    <section className="relative overflow-hidden hero-dot-grid" style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 96 }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 65% at 50% -10%, rgba(0,192,255,0.16) 0%, transparent 68%)" }} />
      <div className="section-container relative text-center max-w-4xl">
        <motion.div {...inView()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold font-body" style={{ border: "1px solid rgba(0,192,255,0.28)", background: "rgba(0,192,255,0.08)", color: "#00c0ff" }}>
          <Handshake className="h-4 w-4" /> PARTNER WITH THALIA
        </motion.div>
        <motion.h1 {...inView(0.08)} className="font-heading font-extrabold text-white mb-6" style={{ fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.06, letterSpacing: "-0.03em" }}>
          Build Something <span className="gradient-text-cyan">Meaningful Together.</span>
        </motion.h1>
        <motion.p {...inView(0.16)} className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
          We work with agencies, technology companies, creators, and ecommerce experts to make better tools easier to discover and use.
        </motion.p>
      </div>
    </section>

    <section className="bg-white" style={{ paddingTop: 88, paddingBottom: 96 }}>
      <div className="section-container">
        <div className="max-w-2xl mb-12">
          <motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">WAYS TO WORK TOGETHER</motion.span>
          <motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-foreground mb-4">A partnership that fits your strengths.</motion.h2>
          <motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">Whether you bring an audience, a platform, or deep ecommerce expertise, we can shape a partnership around shared value and a better merchant experience.</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((item, index) => (
            <motion.article key={item.title} {...inView(Math.min(index * 0.06, 0.2))} className="card-elevated p-7" style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}><item.icon className="h-5 w-5 text-primary" /></div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: "hsl(var(--section-alt))", paddingTop: 88, paddingBottom: 96 }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">WHY THALIA</motion.span>
            <motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-foreground mb-5">A practical partner for growing ecommerce teams.</motion.h2>
            <motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">Our apps serve merchants across Shopify, Amazon, BigCommerce, and beyond. We bring product expertise, responsive collaboration, and a growing ecosystem of focused ecommerce tools.</motion.p>
          </div>
          <motion.div {...inView(0.12)} className="card-elevated bg-white p-7">
            <ul className="space-y-4">
              {["Clear goals and shared success metrics", "Dedicated communication throughout the collaboration", "Flexible campaigns built around your audience", "Merchant-first experiences with no unnecessary noise"].map((point) => <li key={point} className="flex items-start gap-3 text-sm text-foreground font-body"><Check className="h-5 w-5 text-primary shrink-0" />{point}</li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-white" style={{ paddingTop: 88, paddingBottom: 96 }}>
      <div className="section-container">
        <motion.div {...inView()} className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)", boxShadow: "0 24px 60px rgba(0,192,255,0.22)" }}>
          <h2 className="relative font-heading font-extrabold text-white mb-4" style={{ fontSize: "clamp(28px, 3.6vw, 42px)" }}>Let’s explore a partnership.</h2>
          <p className="relative text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">Tell us what you have in mind, who you serve, and what success looks like. We’ll get back to you within one business day.</p>
          <Link to="/contact" className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body" style={{ color: "hsl(220 44% 8%)" }}>Start a conversation <ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default BecomeAPartner;
