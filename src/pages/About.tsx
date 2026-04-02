import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Lightbulb, Users, Globe, Palette } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-workspace.jpg";
import globalImg from "@/assets/global-team.jpg";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We explore new ways to solve commerce problems. Innovation isn't a buzzword — it's how we operate every day." },
  { icon: Heart, title: "Customer Obsession", desc: "Every decision we make starts with one question: will this make our merchants more successful?" },
  { icon: Target, title: "Engineering Excellence", desc: "We don't cut corners. Our code, our architecture, and our infrastructure are built to last." },
  { icon: Users, title: "Growth Mindset", desc: "We learn constantly. Every challenge is an opportunity to improve as a team and as individuals." },
  { icon: Globe, title: "Global Impact", desc: "Our apps serve merchants from 100+ countries. We build with a global perspective from day one." },
  { icon: Palette, title: "Craft & Design", desc: "We believe great software must be beautiful, intuitive, and a joy to use. Design is not decoration — it's function." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.06) 0%, transparent 70%)" }} />
        <div className="section-container relative text-center">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">OUR STORY</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-h1 font-extrabold text-foreground mb-6">
            We're Builders. And We Love What We Build.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Thalia Technologies is a product company. We don't do consulting. We don't do client work. We build products we believe in, and we make them exceptional.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-h2 font-bold text-foreground mb-6">How It All Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                Thalia Technologies was born out of a simple frustration — ecommerce merchants were struggling with gaps in their technology stack. The tools they needed either didn't exist or were too complicated and expensive. We decided to change that.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Starting with one app, we've now built a suite of 14+ products trusted by over 100,000 businesses worldwide. Every product we ship is born from a real pain point and refined through constant iteration with our merchant community.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={aboutImg} alt="Professional workspace with laptop showing SaaS dashboard and analytics" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">OUR MISSION</span>
          <div className="text-5xl text-primary mb-6">"</div>
          <h2 className="font-heading text-[36px] font-extrabold text-foreground leading-tight mb-4">
            To build technology products that help businesses solve their most pressing problems and make them more successful.
          </h2>
        </div>
      </section>

      {/* Values */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="OUR VALUES" title="What Drives Us" description="We are a lean, fully remote team of engineers, designers, and product managers. We move fast, care deeply, and celebrate our merchants' wins as our own." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={globalImg} alt="World map showing global team locations across India, US, Europe, and Asia" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
            </motion.div>
            <div>
              <h2 className="font-heading text-h2 font-bold text-foreground mb-6">A Small Team. A Big Impact.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                We are a lean, fully remote team of engineers, designers, and product managers spread across the globe. We move fast, care deeply, and celebrate our merchants' wins as our own.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Our apps serve merchants from 100+ countries. We build with a global perspective — multi-currency, multi-language, and compliant with tax regulations from India to the EU. Whether you're a first-time Shopify seller or a $10M merchant, our apps scale with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
            <h2 className="font-heading text-h2 font-extrabold text-primary-foreground mb-4">Join Our Team</h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 font-body">We're always looking for talented people who want to build products that matter.</p>
            <Link to="/careers" className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-3.5 rounded-lg bg-background text-primary transition-all hover:scale-102">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
