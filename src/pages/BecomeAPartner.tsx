import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Code2,
  Globe2,
  Handshake,
  Mail,
  Megaphone,
  MonitorSmartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const opportunities = [
  { icon: Megaphone, eyebrow: "Reach more people", title: "Co-Marketing Efforts", desc: "Create useful content together, including webinars, guides, social campaigns, newsletters, and customer stories that reach both of our audiences.", accent: "#00c0ff" },
  { icon: MonitorSmartphone, eyebrow: "Help merchants discover", title: "In-app Promotion", desc: "Put complementary tools in front of the right merchants through contextual recommendations, partner offers, and thoughtful in-app placements.", accent: "#7c55ff" },
  { icon: Users, eyebrow: "Grow together", title: "Referral Partnerships", desc: "Help your customers discover tools that solve their next ecommerce challenge while building a transparent, long-term referral relationship.", accent: "#00c896" },
  { icon: Code2, eyebrow: "Connect better workflows", title: "Technology Partnerships", desc: "Connect your platform with Thalia apps to create smoother workflows for Shopify, Amazon, BigCommerce, and ecommerce teams.", accent: "#ff9900" },
];

const partnerTypes = [
  { icon: Globe2, title: "Agencies & consultants", desc: "Recommend reliable tools to the merchants you advise and give clients a stronger technology stack." },
  { icon: Sparkles, title: "Creators & communities", desc: "Bring genuinely useful ecommerce solutions to an audience that trusts your perspective." },
  { icon: BarChart3, title: "Technology companies", desc: "Combine complementary products and help customers get more value from every workflow." },
];

const steps = [
  { number: "01", title: "Share your idea", desc: "Tell us about your audience, platform, or the customer problem you want to solve together." },
  { number: "02", title: "Shape the opportunity", desc: "We will identify the right app, audience, format, and success measures for the collaboration." },
  { number: "03", title: "Launch thoughtfully", desc: "Our teams align on creative, messaging, timelines, and a merchant-first launch plan." },
  { number: "04", title: "Learn and grow", desc: "We review results together, share insights, and build on what works." },
];

const faqs = [
  { q: "Who can become a Thalia partner?", a: "We work with agencies, consultants, creators, communities, technology companies, and ecommerce service providers." },
  { q: "Do I need a large audience?", a: "No. Relevance and trust matter more than audience size. A focused audience with a real ecommerce need can be a great fit." },
  { q: "Can we partner on more than one app?", a: "Yes. We can explore a single-app campaign or a broader collaboration across the Thalia app portfolio." },
  { q: "How do we get started?", a: "Send us a short overview of your business and partnership idea. Our team will reply within one business day." },
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

    <section className="relative overflow-hidden hero-dot-grid" style={{ background: "hsl(var(--hero-bg))", paddingTop: 88, paddingBottom: 92 }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 72% 70% at 50% -15%, rgba(0,192,255,0.18) 0%, transparent 68%)" }} />
      <div className="section-container relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <motion.div {...inView()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold font-body" style={{ border: "1px solid rgba(0,192,255,0.28)", background: "rgba(0,192,255,0.08)", color: "#00c0ff" }}>
              <Handshake className="h-4 w-4" /> PARTNER WITH THALIA
            </motion.div>
            <motion.h1 {...inView(0.08)} className="font-heading font-extrabold text-white mb-6" style={{ fontSize: "clamp(40px, 5.7vw, 68px)", lineHeight: 1.06, letterSpacing: "-0.03em" }}>
              Better tools. <span className="gradient-text-cyan">Better together.</span>
            </motion.h1>
            <motion.p {...inView(0.16)} className="text-lg leading-relaxed max-w-xl mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              We partner with the people and platforms helping ecommerce businesses grow. Together, we can make useful technology easier to discover, adopt, and succeed with.
            </motion.p>
            <motion.div {...inView(0.22)} className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <a href="#partnerships" className="btn-ghost-dark">Explore partnerships</a>
            </motion.div>
          </div>
          <motion.div {...inView(0.16)} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] opacity-30 blur-2xl" style={{ background: "linear-gradient(135deg, #00c0ff, #7c3aed)" }} />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 md:p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><Handshake className="h-5 w-5" /></div><span className="font-heading font-bold text-white">Partnership snapshot</span></div>
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[{ value: "100k+", label: "Businesses served" }, { value: "14+", label: "Focused apps" }, { value: "100+", label: "Countries reached" }, { value: "24h", label: "Typical reply" }].map((stat) => <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/10 p-4"><p className="font-heading text-2xl font-extrabold text-white">{stat.value}</p><p className="mt-1 text-xs text-white/55 font-body">{stat.label}</p></div>)}
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3"><div className="h-2 w-2 rounded-full bg-primary animate-pulse" /><span className="text-sm text-white/75 font-body">Open to new partnership ideas</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="bg-white" style={{ paddingTop: 86, paddingBottom: 92 }}>
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center mb-12"><motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">WHO WE WORK WITH</motion.span><motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-foreground mb-4">Built for complementary strengths.</motion.h2><motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">You do not need to fit into a rigid program. We start with what you do best and find the most useful way to connect it with Thalia.</motion.p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {partnerTypes.map((type, index) => <motion.article key={type.title} {...inView(index * 0.08)} className="card-elevated p-6 text-center" style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}><type.icon className="h-5 w-5 text-primary" /></div><h3 className="font-heading font-bold text-lg text-foreground mb-2">{type.title}</h3><p className="text-sm text-muted-foreground font-body leading-relaxed">{type.desc}</p></motion.article>)}
        </div>
      </div>
    </section>

    <section id="partnerships" style={{ background: "hsl(var(--section-alt))", paddingTop: 88, paddingBottom: 96 }}>
      <div className="section-container">
        <div className="max-w-2xl mb-12"><motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">WAYS TO WORK TOGETHER</motion.span><motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-foreground mb-4">A partnership with a clear purpose.</motion.h2><motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">From a one-off campaign to an ongoing technology relationship, we focus on work that creates a better outcome for merchants.</motion.p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((item, index) => <motion.article key={item.title} {...inView(Math.min(index * 0.06, 0.2))} className="group card-elevated bg-white p-7" style={{ borderTop: `2px solid ${item.accent}55` }}><div className="flex items-start justify-between gap-4 mb-6"><div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}><item.icon className="h-5 w-5" style={{ color: item.accent }} /></div><span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body">{item.eyebrow}</span></div><h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3><p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p><div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary font-body">Explore the fit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div></motion.article>)}
        </div>
      </div>
    </section>

    <section className="bg-white" style={{ paddingTop: 88, paddingBottom: 96 }}>
      <div className="section-container">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <div><motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">HOW IT WORKS</motion.span><motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-foreground mb-4">Simple to start. Built to last.</motion.h2><motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">A good partnership should feel clear from the first conversation. We keep the process focused, collaborative, and easy to move forward.</motion.p></div>
          <div className="space-y-5">{steps.map((step, index) => <motion.div key={step.number} {...inView(Math.min(index * 0.07, 0.2))} className="flex gap-5 rounded-2xl border border-border p-5 transition-shadow hover:shadow-[0_10px_30px_rgba(0,192,255,0.09)]"><span className="font-heading text-sm font-extrabold text-primary pt-1">{step.number}</span><div><h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3><p className="text-sm leading-relaxed text-muted-foreground font-body">{step.desc}</p></div></motion.div>)}</div>
        </div>
      </div>
    </section>

    <section style={{ background: "hsl(var(--hero-bg))", paddingTop: 84, paddingBottom: 88 }}>
      <div className="section-container"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">THE THALIA DIFFERENCE</motion.span><motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-white mb-5">Useful collaboration over empty promotion.</motion.h2><motion.p {...inView(0.16)} className="leading-relaxed font-body" style={{ color: "rgba(255,255,255,0.65)" }}>We care about whether a partnership genuinely helps merchants. That means clear expectations, practical communication, and campaigns that earn attention by being useful.</motion.p></div><motion.div {...inView(0.12)} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7"><ul className="space-y-5">{["Clear goals and shared success metrics", "Dedicated communication throughout the collaboration", "Flexible campaigns built around your audience", "Merchant-first experiences with no unnecessary noise"].map((point) => <li key={point} className="flex items-start gap-3 text-sm text-white/85 font-body"><Check className="h-5 w-5 text-primary shrink-0" />{point}</li>)}</ul></motion.div></div></div>
    </section>

    <section className="bg-white" style={{ paddingTop: 88, paddingBottom: 88 }}>
      <div className="section-container"><div className="mx-auto max-w-2xl text-center mb-12"><motion.span {...inView()} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body mb-4">COMMON QUESTIONS</motion.span><motion.h2 {...inView(0.08)} className="font-heading text-h2 font-extrabold text-foreground">Before we get started.</motion.h2></div><div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">{faqs.map((faq, index) => <motion.article key={faq.q} {...inView(Math.min(index * 0.06, 0.18))} className="rounded-2xl border border-border p-6"><h3 className="font-heading font-bold text-foreground mb-2">{faq.q}</h3><p className="text-sm leading-relaxed text-muted-foreground font-body">{faq.a}</p></motion.article>)}</div></div>
    </section>

    <section style={{ background: "hsl(var(--section-alt))", paddingTop: 80, paddingBottom: 96 }}>
      <div className="section-container"><motion.div {...inView()} className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center" style={{ background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)", boxShadow: "0 24px 60px rgba(0,192,255,0.22)" }}><div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)", backgroundSize: "22px 22px" }} /><div className="relative"><div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Mail className="h-5 w-5 text-white" /></div><h2 className="font-heading font-extrabold text-white mb-4" style={{ fontSize: "clamp(28px, 3.6vw, 42px)" }}>Have an idea? Let&apos;s talk.</h2><p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">Tell us what you have in mind, who you serve, and what success looks like. We&apos;ll get back to you within one business day.</p><Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body" style={{ color: "hsl(220 44% 8%)" }}>Start a conversation <ArrowRight className="h-4 w-4" /></Link></div></motion.div></div>
    </section>
  </Layout>
);

export default BecomeAPartner;
