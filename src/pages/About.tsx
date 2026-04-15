import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Lightbulb, Users, Globe, Palette, Linkedin, Zap, Briefcase, MapPin, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import workingCultureImg from "@/assets/About-team.jpg";
import pawanMorePhoto from "@/assets/Pawan More.jpg";
import aniketRanePhoto from "@/assets/Aniket Rane.jpg";
import ankitManePhoto from "@/assets/Ankit Mane.png";
import ankitKothariPhoto from "@/assets/Ankit Kothari.jpg";
import tejasSangoiPhoto from "@/assets/Tejas Sangoi.jpg";
import Seo from "@/components/Seo";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We explore new ways to solve commerce problems. Innovation isn't a buzzword — it's how we operate every day." },
  { icon: Heart, title: "Customer Obsession", desc: "Every decision we make starts with one question: will this make our merchants more successful?" },
  { icon: Target, title: "Engineering Excellence", desc: "We don't cut corners. Our code, our architecture, and our infrastructure are built to last." },
  { icon: Users, title: "Growth Mindset", desc: "We learn constantly. Every challenge is an opportunity to improve as a team and as individuals." },
  { icon: Globe, title: "Global Impact", desc: "Our apps serve merchants from 100+ countries. We build with a global perspective from day one." },
  { icon: Palette, title: "Craft & Design", desc: "We believe great software must be beautiful, intuitive, and a joy to use. Design is not decoration — it's function." },
];

const teamMembers = [
  { name: "Tejas Sangoi", role: "Founder & CEO", bio: "Tejas founded Thalia Technologies with a vision to solve real ecommerce problems with elegant software. He leads product vision and company strategy, driving the team to build products that truly make a difference.", initials: "TS", linkedinUrl: "https://www.linkedin.com/in/sangoitejas/", photo: tejasSangoiPhoto },
  { name: "Pawan More", role: "Tech Lead", bio: "Pawan leads core engineering across Thalia's product suite. He's passionate about building scalable, reliable systems and ensuring every product meets the highest standards of code quality.", initials: "PM", linkedinUrl: "https://www.linkedin.com/in/pawan-more/", photo: pawanMorePhoto },
  { name: "Ankit Kothari", role: "Product Manager", bio: "Ankit ensures every merchant gets the help they need. He's the voice of the customer inside Thalia, translating feedback into product improvements.", initials: "AK", linkedinUrl: "https://www.linkedin.com/in/ankit-kothari93/", photo: ankitKothariPhoto },
  { name: "Aniket Rane", role: "Lead Software Engineer", bio: "Aniket builds and maintains key features across Thalia's apps. He's dedicated to writing clean, efficient code and delivering seamless user experiences.", initials: "AR", linkedinUrl: "https://www.linkedin.com/in/aniketrane/", photo: aniketRanePhoto },
  { name: "Ankit Mane", role: "Support Lead", bio: "Ankit Mane provides expert application support, helping merchants troubleshoot issues and get the most out of Thalia's products.", initials: "AM", linkedinUrl: "https://www.linkedin.com/in/ankit-mane-1880aa146/", photo: ankitManePhoto },
];

const milestones = [
  { year: "2015", event: "Thalia Technologies founded with the first app — Spreadr" },
  { year: "2017", event: "Reached 10,000 active merchants globally" },
  { year: "2019", event: "Launched 10+ apps across Shopify and BigCommerce" },
  { year: "2021", event: "Crossed 50,000 merchant installations" },
  { year: "2023", event: "CSVbox reaches 100M+ rows imported for SaaS customers" },
  { year: "2025", event: "100,000+ businesses trust Thalia's suite of products" },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const About = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://thaliatechnologies.com/about" },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Thalia Technologies",
    url: "https://thaliatechnologies.com/about",
    description:
      "Learn about Thalia Technologies, our mission to solve real ecommerce problems, and the team behind our merchant-focused SaaS products.",
    mainEntity: {
      "@type": "Organization",
      name: "Thalia Technologies",
      legalName: "Thalia Technologies Private Limited",
      url: "https://thaliatechnologies.com",
      logo: "https://thaliatechnologies.com/thalia-logo.jpg",
      description:
        "Thalia Technologies builds focused SaaS apps for Shopify, Amazon, and BigCommerce merchants — trusted by 100,000+ businesses worldwide.",
      foundingDate: "2015",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    },
  };

  return (
    <Layout>
      <Seo
        title="About Thalia Technologies | Our Story, Team, and Mission"
        description="Learn about Thalia Technologies, our mission to solve real ecommerce problems, and the team behind our merchant-focused software products."
        keywords="about Thalia Technologies, Thalia team, ecommerce software company, merchant-first products, SaaS product company, ecommerce mission"
        path="/about"
        structuredData={[aboutPageSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — dark navy, gradient headline, stat chips
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 88 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -5%, rgba(0,192,255,0.13) 0%, transparent 65%)",
          }}
        />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow badge */}
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
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00c0ff" }} />
              OUR STORY
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
              We're Builders.{" "}
              <span className="gradient-text-cyan">We Love What We Build.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Thalia Technologies is a product company. We don't do consulting. We don't do client work.
              We build products we believe in, and we make them exceptional.
            </motion.p>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { value: "100K+", label: "Merchants" },
                { value: "14+",   label: "Products" },
                { value: "10+",   label: "Years" },
                { value: "100+",  label: "Countries" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline gap-2 px-4 py-2 rounded-full font-body"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <span className="gradient-text-cyan text-base font-heading font-bold">{s.value}</span>
                  <span className="text-xs uppercase tracking-[0.12em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TIMELINE — journey milestones
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="OUR JOURNEY"
            title="How It All Started"
            description="From one app to a suite of 14+ products trusted by 100,000+ businesses — here's our story."
          />
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                {...inView(Math.min(i * 0.08, 0.35))}
                className="flex gap-6 mb-8 relative"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs text-white z-10"
                  style={{ background: "#00c0ff" }}
                >
                  {m.year}
                </div>
                <div className="card-elevated p-5 flex-1" style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}>
                  <p className="text-sm font-body text-foreground leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MISSION — why we exist, embedded values preview
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                OUR MISSION
              </span>
            </motion.div>
            <motion.h2
              {...inView(0.08)}
              className="font-heading text-h2 font-extrabold text-foreground mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why We Exist
            </motion.h2>
            <motion.div
              {...inView(0.16)}
              className="relative pl-6 border-l-4 border-primary mb-8"
            >
              <p className="font-heading text-xl font-bold text-foreground leading-relaxed italic">
                "To build technology products that help businesses solve their most pressing problems
                and make them more successful."
              </p>
            </motion.div>
            <motion.p
              {...inView(0.24)}
              className="text-muted-foreground leading-relaxed font-body"
            >
              We focus relentlessly on understanding the day-to-day challenges merchants face and building tools that
              remove friction, save time, and increase revenue. Every app we build begins with a real merchant pain
              point. We obsess over simplicity — if it takes more than 5 minutes to set up, we rethink it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VALUES — what drives us
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="OUR VALUES"
            title="What Drives Us"
            description="We are a passionate team of engineers, designers, and product managers. We move fast, care deeply, and celebrate our merchants' wins as our own."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...inView(Math.min(i * 0.05, 0.25))}
                className="card-elevated p-6"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                >
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TEAM — meet the builders
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading
            label="OUR TEAM"
            title="Meet the People Behind Thalia"
            description="A lean, talented team of builders who are passionate about creating software that makes a difference."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                {...inView(Math.min(i * 0.06, 0.3))}
                className="card-elevated p-6 text-center group"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div className="mx-auto mb-4 h-24 w-24 shrink-0 overflow-hidden rounded-full shadow-sm transition-transform group-hover:scale-[1.05]"
                  style={{
                    background: "rgba(0,192,255,0.1)",
                    border: "2px solid rgba(0,192,255,0.2)",
                  }}
                >
                  {"photo" in member && member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      width={96}
                      height={96}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-heading text-xl font-bold text-primary">
                      {member.initials}
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-heading font-bold mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors"
                  style={{
                    background: "rgba(0,192,255,0.08)",
                    color: "#00c0ff",
                  }}
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CULTURE — team image + 4 pillars
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                OUR CULTURE
              </span>
            </motion.div>
            <motion.h2
              {...inView(0.08)}
              className="font-heading text-h2 font-extrabold text-foreground mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              A Small Team. A Big Impact.
            </motion.h2>
            <motion.p
              {...inView(0.16)}
              className="text-muted-foreground leading-relaxed font-body"
            >
              We work in a hybrid setup with a flexible, outcome-driven culture. Our team members collaborate
              seamlessly across continents to build products that serve 100+ countries.
            </motion.p>
          </div>

          {/* Image + Pillars Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch mb-12">
            {/* Image */}
            <motion.div
              {...inView(0)}
              className="overflow-hidden rounded-2xl shadow-lg lg:row-span-2"
              style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
            >
              <img
                src={workingCultureImg}
                alt="Thalia team — working culture"
                className="aspect-[4/3] w-full object-cover object-center sm:aspect-[5/4] lg:h-full"
                loading="lazy"
                width={1200}
                height={900}
              />
            </motion.div>

            {/* Pillars Grid - 2 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Zap,
                  title: "Fast & Agile",
                  desc: "We move quickly, iterate often, and adapt to merchant needs in real-time.",
                },
                {
                  icon: Briefcase,
                  title: "Outcome-Driven",
                  desc: "Every decision is measured by impact. We track results, not just effort.",
                },
                {
                  icon: MapPin,
                  title: "Hybrid & Flexible",
                  desc: "Work from anywhere. We trust our team to deliver great results their way.",
                },
                {
                  icon: TrendingUp,
                  title: "Always Learning",
                  desc: "We invest in growth, celebrate wins, and learn from every challenge.",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...inView(Math.min(i * 0.06, 0.25))}
                  className="card-elevated p-5"
                  style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                  >
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            {...inView(0.3)}
            className="p-6 rounded-2xl"
            style={{
              background: "rgba(0,192,255,0.05)",
              border: "1px solid rgba(0,192,255,0.15)",
              borderTop: "2px solid rgba(0,192,255,0.22)",
            }}
          >
            <p className="text-sm text-foreground font-body leading-relaxed mb-3">
              <span className="font-bold">Work with us:</span> Whether you're a first-time Shopify seller or a $10M merchant, our apps scale with you.
              Multi-currency, multi-language, and compliant with tax regulations worldwide.
            </p>
            <p className="text-xs text-muted-foreground font-body">
              Interested in joining our team? We're always looking for talented builders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER — join our team
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div
            {...inView(0)}
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, #00c0ff 0%, #7c3aed 100%)",
              boxShadow: "0 24px 60px rgba(0,192,255,0.25)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative">
              <h2
                className="font-heading font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
              >
                Ready to Make an Impact?
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                We're always looking for talented people who want to build products that matter. Join us and help shape
                the future of ecommerce.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                style={{ color: "hsl(220 44% 8%)" }}
              >
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
