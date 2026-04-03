import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench, BarChart3, RefreshCcw, Handshake, Flame, Target } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import heroImg from "@/assets/hero-dashboard.jpg";
import ecommerceImg from "@/assets/ecommerce-tools.jpg";
import valuesImg from "@/assets/values-illustration.jpg";
import statsBg from "@/assets/stats-bg.jpg";

const stats = [
  { value: "100K+", label: "Merchants Trust Us" },
  { value: "14+", label: "Apps Published" },
  { value: "5★", label: "Average App Rating" },
  { value: "10+", label: "Years of Experience" },
];

const features = [
  { icon: Wrench, title: "Purpose-Built Tools", desc: "Every product we build starts with a real merchant problem. We don't build features; we build solutions." },
  { icon: BarChart3, title: "Proven at Scale", desc: "Our apps are trusted by over 100,000 businesses globally, processing millions of transactions every day." },
  { icon: RefreshCcw, title: "Constantly Evolving", desc: "We ship improvements constantly. Your feedback shapes what we build next." },
];

const values = [
  { icon: Handshake, title: "Trust", desc: "We operate with radical transparency — with our team, our customers, and our partners." },
  { icon: Flame, title: "Passion", desc: "We care deeply about the products we build. Every pixel, every feature, every line of code is crafted with intention." },
  { icon: Target, title: "Focus", desc: "We work on things that matter. We say no to distractions and yes to building world-class, focused tools." },
];

const testimonials = [
  { quote: "Spreadr transformed our business. We went from zero to dropshipping 10,000+ Amazon products in just one week.", author: "James M.", role: "Shopify Merchant, USA", rating: 5 },
  { quote: "Watchlyst brought back over 200 lost customers in the first month alone. The ROI is incredible.", author: "Sarah L.", role: "eCommerce Owner, UK", rating: 5 },
  { quote: "Pro Bulk Editor saved us 20+ hours per week. Scheduling discounts is now completely automated.", author: "Raj K.", role: "Shopify Plus Merchant, India", rating: 5 },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.06) 0%, transparent 70%)"
        }} />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span {...fadeUp(0)} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">
                TRUSTED BY 100,000+ BUSINESSES
              </motion.span>
              <motion.h1 {...fadeUp(0.1)} className="font-heading text-h1 font-extrabold text-foreground mb-6">
                Software That Makes a Real Difference
              </motion.h1>
              <motion.p {...fadeUp(0.2)} className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg font-body">
                We build powerful SaaS tools that help ecommerce businesses on Shopify, Amazon, and BigCommerce solve their most pressing challenges — and scale faster.
              </motion.p>
              <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3 mb-8">
                <Link to="/apps" className="btn-primary text-sm">
                  Explore Our Products <ArrowRight className="ml-2 h-4 w-4 inline" />
                </Link>
                <Link to="/about" className="btn-outline text-sm">Learn About Us</Link>
              </motion.div>
              <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 text-sm font-body text-muted-foreground">
                <span>✓ 100,000+ Merchants</span>
                <span>✓ 14+ Apps Published</span>
                <span>✓ Shopify Partner</span>
              </motion.div>
            </div>
            <motion.div {...fadeUp(0.2)}>
              <img src={heroImg} alt="SaaS dashboard illustration showing ecommerce analytics and product management" className="w-full rounded-2xl" width={1200} height={800} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="section-alt py-12">
        <div className="section-container text-center">
          <p className="text-sm font-body text-muted-foreground mb-6">Powering businesses on the world's top ecommerce platforms</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-50">
            <span className="font-heading font-bold text-xl text-foreground">Shopify</span>
            <span className="font-heading font-bold text-xl text-foreground">Amazon</span>
            <span className="font-heading font-bold text-xl text-foreground">BigCommerce</span>
            <span className="font-heading font-bold text-xl text-foreground">Shopify Plus</span>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading center={false} label="WHAT WE DO" title="Built for Ecommerce, Trusted by Merchants" description="Our mission is simple — build technology that helps online businesses work smarter, grow faster, and solve real operational problems." />
              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{f.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={ecommerceImg} alt="Ecommerce tools ecosystem showing Shopify store dashboard, inventory sync, and analytics connected together" className="w-full rounded-2xl" loading="lazy" width={1200} height={800} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="OUR LABOUR OF LOVE" title="Our Apps — Built With Love" description="A growing suite of SaaS applications that solve specific, painful ecommerce problems. Each app is focused, powerful, and constantly improved." />
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

      {/* Stats */}
      <section className="relative" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="absolute inset-0">
          <img src={statsBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="section-container relative">
          <h2 className="font-heading text-h2 font-extrabold text-primary-foreground text-center mb-12">The Numbers Speak for Themselves</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="font-heading text-h1 font-extrabold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground opacity-70 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={valuesImg} alt="Team values illustration showing innovation, collaboration and strategic thinking" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
            </motion.div>
            <div>
              <SectionHeading center={false} label="OUR VALUES" title="What Drives Us Every Day" description="We are a small, passionate team. Different backgrounds, one shared obsession — building products that genuinely matter." />
              <div className="space-y-6">
                {values.map((v, i) => (
                  <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <v.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">{v.title}</h3>
                      <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="TESTIMONIALS" title="Loved by Merchants Worldwide" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-elevated p-6" style={{ borderTop: "3px solid hsl(var(--primary))" }}>
                <div className="flex gap-0.5 mb-4">{Array(t.rating).fill(0).map((_, j) => <span key={j} className="text-yellow-400">★</span>)}</div>
                <p className="text-sm font-body text-foreground italic leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-sm text-primary-foreground">
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

      {/* Careers CTA */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="rounded-2xl p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}>
            <h2 className="font-heading text-h2 font-extrabold text-primary-foreground mb-4">We're Hiring — Come Build With Us</h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 font-body">Join a team that cares deeply about craft, ships constantly, and works on real-world problems.</p>
            <Link to="/careers" className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-3.5 rounded-lg bg-background text-primary transition-all hover:scale-102">
              View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container text-center">
          <SectionHeading title="Let's Talk" description="Have a question, a partnership idea, or just want to say hello? We'd love to hear from you." />
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary text-sm">Get in Touch <ArrowRight className="ml-2 h-4 w-4 inline" /></Link>
            <a href="mailto:hello@thaliatechnologies.com" className="btn-outline text-sm">hello@thaliatechnologies.com</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
