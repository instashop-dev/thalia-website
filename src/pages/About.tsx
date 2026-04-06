import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Lightbulb, Users, Globe, Palette, Linkedin, Twitter } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-workspace.jpg";
import missionImg from "@/assets/mission-illustration.jpg";
import teamImg from "@/assets/team-photo.jpg";

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We explore new ways to solve commerce problems. Innovation isn't a buzzword — it's how we operate every day." },
  { icon: Heart, title: "Customer Obsession", desc: "Every decision we make starts with one question: will this make our merchants more successful?" },
  { icon: Target, title: "Engineering Excellence", desc: "We don't cut corners. Our code, our architecture, and our infrastructure are built to last." },
  { icon: Users, title: "Growth Mindset", desc: "We learn constantly. Every challenge is an opportunity to improve as a team and as individuals." },
  { icon: Globe, title: "Global Impact", desc: "Our apps serve merchants from 100+ countries. We build with a global perspective from day one." },
  { icon: Palette, title: "Craft & Design", desc: "We believe great software must be beautiful, intuitive, and a joy to use. Design is not decoration — it's function." },
];

const teamMembers = [
  { name: "Tejas Sangoi", role: "Founder & CEO", bio: "Tejas founded Thalia Technologies with a vision to solve real ecommerce problems with elegant software. He leads product vision and company strategy, driving the team to build products that truly make a difference.", initials: "TS" },
  { name: "Pawan More", role: "Senior Software Engineer", bio: "Pawan leads core engineering across Thalia's product suite. He's passionate about building scalable, reliable systems and ensuring every product meets the highest standards of code quality.", initials: "PM" },
  { name: "Ankit Kothari", role: "Customer Support Specialist", bio: "Ankit ensures every merchant gets the help they need. He's the voice of the customer inside Thalia, translating feedback into product improvements.", initials: "AK" },
  { name: "Aniket Rane", role: "Software Engineer", bio: "Aniket builds and maintains key features across Thalia's apps. He's dedicated to writing clean, efficient code and delivering seamless user experiences.", initials: "AR" },
  { name: "Ankit Mane", role: "Application Support Specialist", bio: "Ankit Mane provides expert application support, helping merchants troubleshoot issues and get the most out of Thalia's products.", initials: "AM" },
];

const milestones = [
  { year: "2015", event: "Thalia Technologies founded with the first app — Spreadr" },
  { year: "2017", event: "Reached 10,000 active merchants globally" },
  { year: "2019", event: "Launched 10+ apps across Shopify and BigCommerce" },
  { year: "2021", event: "Crossed 50,000 merchant installations" },
  { year: "2023", event: "CSVbox reaches 100M+ rows imported for SaaS customers" },
  { year: "2025", event: "100,000+ businesses trust Thalia's suite of products" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.06) 0%, transparent 70%)" }} />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">OUR STORY</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-h1 font-extrabold text-foreground mb-6">
                We're Builders. And We Love What We Build.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-6 font-body">
                Thalia Technologies is a product company. We don't do consulting. We don't do client work. We build products we believe in, and we make them exceptional.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-6 text-center">
                <div><span className="block font-heading font-extrabold text-3xl text-primary">100K+</span><span className="text-xs text-muted-foreground font-body">Merchants</span></div>
                <div><span className="block font-heading font-extrabold text-3xl text-primary">14+</span><span className="text-xs text-muted-foreground font-body">Products</span></div>
                <div><span className="block font-heading font-extrabold text-3xl text-primary">10+</span><span className="text-xs text-muted-foreground font-body">Years</span></div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={aboutImg} alt="Professional workspace with SaaS dashboard and analytics" className="w-full rounded-2xl" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="OUR JOURNEY" title="How It All Started" description="From one app to a suite of 14+ products trusted by 100,000+ businesses — here's our story." />
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 relative">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 font-heading font-bold text-xs text-primary-foreground z-10">
                  {m.year}
                </div>
                <div className="card-elevated p-5 flex-1">
                  <p className="text-sm font-body text-foreground leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission - Redesigned */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={missionImg} alt="Company mission illustration showing growth, direction and global ecommerce impact" className="w-full rounded-2xl" loading="lazy" width={1200} height={600} />
            </motion.div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">OUR MISSION</span>
              <h2 className="font-heading text-h2 font-extrabold text-foreground mb-6">Why We Exist</h2>
              <div className="relative pl-6 border-l-4 border-primary mb-6">
                <p className="font-heading text-xl font-bold text-foreground leading-relaxed italic">
                  "To build technology products that help businesses solve their most pressing problems and make them more successful."
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed font-body mb-4">
                We focus relentlessly on understanding the day-to-day challenges merchants face and building tools that remove friction, save time, and increase revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Every app we build begins with a real merchant pain point. We obsess over simplicity — if it takes more than 5 minutes to set up, we rethink it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="OUR VALUES" title="What Drives Us" description="We are a passionate team of engineers, designers, and product managers. We move fast, care deeply, and celebrate our merchants' wins as our own." />
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

      {/* Team Section */}
      <section style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="OUR TEAM" title="Meet the People Behind Thalia" description="A lean, talented team of builders who are passionate about creating software that makes a difference." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="card-elevated p-6 text-center group">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl text-primary-foreground group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-heading font-bold mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{member.bio}</p>
                <div className="flex gap-3 justify-center mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Small Team. A Big Impact. - No map, text only */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={teamImg} alt="Thalia Technologies team collaborating" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
            </motion.div>
            <div>
              <h2 className="font-heading text-h2 font-bold text-foreground mb-6">A Small Team. A Big Impact.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                We work in a hybrid setup with a flexible, outcome-driven culture. Our team members collaborate seamlessly to build products that serve 100+ countries.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Whether you're a first-time Shopify seller or a $10M merchant, our apps scale with you. Multi-currency, multi-language, and compliant with tax regulations worldwide.
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
