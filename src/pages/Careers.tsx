import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building,
  Rocket,
  Brain,
  Heart,
  GraduationCap,
  HeartPulse,
  Plane,
  Coffee,
  Gift,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

/** External careers / job listings (opens in new tab from Apply CTAs). */
const JOB_LISTINGS_URL = "https://wellfound.com/company/thalia-technologies-1";

const perks = [
  { icon: Building, title: "Hybrid & Flexible", desc: "We work in a hybrid model with flexible hours. Work from office or home — whatever helps you do your best work." },
  { icon: Rocket,   title: "Ship Constantly",   desc: "We move fast. You'll see your work live in days, not months. No endless approval chains." },
  { icon: Brain,    title: "Real Ownership",    desc: "You're not a cog in a machine. You'll own features, make decisions, and see their direct impact." },
  { icon: Heart,    title: "Merchant-First",    desc: "We obsess over our customers. Every decision starts with: does this make our merchants more successful?" },
];

const benefits = [
  { icon: HeartPulse,    title: "Health Insurance",     desc: "Comprehensive health insurance for you and your family including dental and vision coverage." },
  { icon: GraduationCap, title: "Learning Budget",      desc: "Annual learning allowance for courses, conferences, books, and certifications to grow your skills." },
  { icon: Plane,         title: "Paid Time Off",        desc: "Generous paid leave policy including vacation days, sick leave, and personal days. Recharge when you need to." },
  { icon: Coffee,        title: "Team Offsites",        desc: "Regular team offsites and retreats to bond, brainstorm, and have fun together outside of work." },
  { icon: Gift,          title: "Performance Bonuses",  desc: "Competitive salary with performance-based bonuses and equity options for long-term wealth building." },
  { icon: Clock,         title: "Flexible Hours",       desc: "No rigid 9-to-5. Work during your most productive hours as long as you deliver results and collaborate." },
];

type Job = { title: string; type: string; location: string; dept: string };

const openings: Job[] = [
  { title: "Senior Full-Stack Engineer",         type: "Full-time", location: "Hybrid – India",    dept: "Engineering" },
  { title: "Product Designer (UX/UI)",           type: "Full-time", location: "Hybrid / Remote",   dept: "Design" },
  { title: "Growth Marketing Manager",           type: "Full-time", location: "Hybrid – India",    dept: "Marketing" },
  { title: "Customer Success Specialist",        type: "Full-time", location: "Hybrid / Remote",   dept: "Support" },
  { title: "DevOps / Site Reliability Engineer", type: "Full-time", location: "Hybrid / Remote",   dept: "Infrastructure" },
];

const DEPT_COLORS: Record<string, string> = {
  Engineering:    "#00c0ff",
  Design:         "#7c55ff",
  Marketing:      "#00C896",
  Support:        "#FF9900",
  Infrastructure: "#8B7CF6",
};

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const Careers = () => {
  const departments = useMemo(() => {
    const set = new Set<string>();
    openings.forEach((j) => set.add(j.dept));
    return ["All", ...Array.from(set)];
  }, []);
  const [dept, setDept] = useState<string>("All");
  const filtered = dept === "All" ? openings : openings.filter((j) => j.dept === dept);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thaliatechnologies.com/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://thaliatechnologies.com/careers" },
    ],
  };

  const careersItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Open Positions at Thalia Technologies",
    numberOfItems: openings.length,
    itemListElement: openings.map((job, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: job.title,
      url: JOB_LISTINGS_URL,
    })),
  };

  return (
    <Layout>
      <Seo
        title="Careers at Thalia Technologies | Join Our Team"
        description="Explore career opportunities at Thalia Technologies and help build ecommerce software used by businesses worldwide."
        keywords="Thalia careers, ecommerce jobs, SaaS jobs, software engineer jobs, product design jobs, remote jobs, tech careers India"
        path="/careers"
        structuredData={[breadcrumbSchema, careersItemListSchema]}
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
              WE'RE HIRING
            </motion.div>

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
              Build Things That Matter.{" "}
              <span className="gradient-text-cyan">With People Who Care.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              At Thalia, you'll work on products that real businesses depend on every day.
              No bureaucracy, no politics — just focused work and a great team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {[
                { value: `${openings.length}+`, label: "Open Roles" },
                { value: `${departments.length - 1}`, label: "Departments" },
                { value: "Hybrid",               label: "Work Style" },
                { value: "100k+",                label: "Users We Serve" },
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

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
            >
              <a href="#openings" className="btn-primary text-sm">
                See Open Positions <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY THALIA — 4 pillars
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                WHY THALIA
              </span>
            </motion.div>
            <motion.h2
              {...inView(0.08)}
              className="font-heading text-h2 font-extrabold text-foreground mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why You'll Love Working Here
            </motion.h2>
            <motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">
              We hire people who are great at what they do — then give them space to do it. No politics. No red tape.
              Just real work with real impact.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                {...inView(Math.min(i * 0.06, 0.25))}
                className="card-elevated p-6"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                >
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BENEFITS — 3-col grid
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                PERKS &amp; BENEFITS
              </span>
            </motion.div>
            <motion.h2
              {...inView(0.08)}
              className="font-heading text-h2 font-extrabold text-foreground mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Great Benefits. Greater Culture.
            </motion.h2>
            <motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">
              We believe happy, supported team members build the best products. Here's what we offer.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                {...inView(Math.min(i * 0.05, 0.3))}
                className="card-elevated p-5 flex gap-4"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                >
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OPENINGS — filterable list
      ════════════════════════════════════════════════════════════════ */}
      <section id="openings" className="bg-white" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="max-w-2xl mb-10">
            <motion.div {...inView(0)} className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary font-body">
                OPEN ROLES
              </span>
            </motion.div>
            <motion.h2
              {...inView(0.08)}
              className="font-heading text-h2 font-extrabold text-foreground mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Current Openings
            </motion.h2>
            <motion.p {...inView(0.16)} className="text-muted-foreground leading-relaxed font-body">
              Filter by department to find your fit. Don't see your role? Scroll down — we still want to hear from you.
            </motion.p>
          </div>

          {/* Filter tabs */}
          <motion.div
            {...inView(0.2)}
            className="flex flex-wrap gap-2 mb-8"
            role="tablist"
            aria-label="Filter openings by department"
          >
            {departments.map((d) => {
              const active = dept === d;
              const count = d === "All" ? openings.length : openings.filter((j) => j.dept === d).length;
              return (
                <button
                  key={d}
                  onClick={() => setDept(d)}
                  aria-pressed={active}
                  role="tab"
                  className="inline-flex items-center gap-2 px-4 h-10 rounded-full text-sm font-semibold font-body transition-all"
                  style={{
                    background: active ? "rgba(0,192,255,0.1)" : "white",
                    color: active ? "#0099cc" : "hsl(220 10% 35%)",
                    border: active ? "1px solid rgba(0,192,255,0.4)" : "1px solid hsl(220 15% 90%)",
                    boxShadow: active ? "0 2px 12px rgba(0,192,255,0.12)" : "none",
                  }}
                >
                  {d}
                  <span
                    className="text-[11px] font-bold px-1.5 rounded-md"
                    style={{
                      background: active ? "rgba(0,192,255,0.15)" : "hsl(220 20% 96%)",
                      color: active ? "#0099cc" : "hsl(220 10% 48%)",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Job cards */}
          <div className="max-w-4xl space-y-4">
            {filtered.map((job, i) => (
              <motion.div
                key={job.title}
                {...inView(Math.min(i * 0.06, 0.3))}
                className="card-elevated p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                >
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-foreground text-base mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-body text-muted-foreground">
                    <span
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-semibold"
                      style={{
                        background: `${DEPT_COLORS[job.dept] ?? "#00c0ff"}14`,
                        color: DEPT_COLORS[job.dept] ?? "#00c0ff",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: DEPT_COLORS[job.dept] ?? "#00c0ff" }}
                      />
                      {job.dept}
                    </span>
                    <span>·</span>
                    <span>{job.type}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                  </div>
                </div>
                <a
                  href={JOB_LISTINGS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm shrink-0"
                >
                  Apply Now <ArrowRight className="ml-1.5 h-3 w-3 inline" />
                </a>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="card-elevated p-10 text-center">
                <p className="text-muted-foreground font-body">No openings in this department right now.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DON'T SEE YOUR ROLE — gradient CTA
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "hsl(var(--section-alt))", paddingTop: 96, paddingBottom: 96 }}>
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
                Don't See Your Role?
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                We love meeting talented people. If you think you'd be a great fit, drop us a line with your resume and
                a note about what you'd love to work on.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                style={{ color: "hsl(220 44% 8%)" }}
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
