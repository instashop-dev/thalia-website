import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Rocket, Brain, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import careersImg from "@/assets/careers-workspace.jpg";

const perks = [
  { icon: Globe, title: "Fully Remote", desc: "Work from wherever you do your best work. We are 100% remote and have been since day one." },
  { icon: Rocket, title: "Ship Constantly", desc: "We move fast. You'll see your work live in days, not months. No endless approval chains." },
  { icon: Brain, title: "Real Ownership", desc: "You're not a cog in a machine. You'll own features, make decisions, and see their direct impact." },
  { icon: Heart, title: "Merchant-First Culture", desc: "We obsess over our customers. Every decision starts with: does this make our merchants more successful?" },
];

const openings = [
  { title: "Senior Full-Stack Engineer", type: "Full-time", location: "Remote – India", dept: "Engineering" },
  { title: "Product Designer (UX/UI)", type: "Full-time", location: "Remote", dept: "Design" },
  { title: "Growth Marketing Manager", type: "Full-time", location: "Remote – India", dept: "Marketing" },
  { title: "Customer Success Specialist", type: "Full-time", location: "Remote", dept: "Support" },
  { title: "DevOps / Site Reliability Engineer", type: "Full-time", location: "Remote", dept: "Infrastructure" },
];

const Careers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.06) 0%, transparent 70%)" }} />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-h1 font-extrabold text-foreground mb-6">
                Build Things That Matter. With People Who Care.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
                At Thalia, you'll work on products that real businesses depend on every day. No bureaucracy, no politics — just focused work and a great team.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <a href="#openings" className="btn-primary text-sm">See Open Positions <ArrowRight className="ml-2 h-4 w-4 inline" /></a>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={careersImg} alt="Modern remote workspace with laptop, coffee, and plant on a clean desk" className="w-full rounded-2xl" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Thalia */}
      <section className="section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading label="WHY THALIA" title="Why You'll Love Working Here" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <SectionHeading title="Current Openings" />
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="card-elevated p-5 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-foreground">{job.title}</h4>
                  <p className="text-sm text-muted-foreground font-body">{job.dept} · {job.type} · {job.location}</p>
                </div>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-lg font-heading font-bold">
                  Apply Now <ArrowRight className="ml-1.5 h-3 w-3" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your role */}
      <section className="bg-foreground" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container text-center">
          <h2 className="font-heading text-h2 font-extrabold text-primary-foreground mb-4">Don't See Your Role?</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 font-body">
            We love meeting talented people. If you think you'd be a great fit for our team, drop us a line with your resume and a note about what you'd love to work on.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center font-heading font-bold text-sm px-8 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-all">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
