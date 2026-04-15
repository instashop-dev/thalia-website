import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Building2,
  Globe,
  Clock,
  Ticket,
  MapPin,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/** Delivers to info@thaliatechnologies.com via FormSubmit. */
const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@thaliatechnologies.com";

const OFFICE_MAP_URL = "https://maps.app.goo.gl/kFtQe6m18qMZF7zH7";
const OFFICE_ADDRESS =
  "Naman Midtown, 1702, Senapati Bapat Marg, Dadar West, Prabhadevi, Mumbai, Maharashtra 400013";
const SUPPORT_TICKET_URL = "https://thaliaapps.freshdesk.com/support/tickets/new";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "General Inquiry",
  message: "",
};

const channels = [
  {
    icon: Mail,
    label: "General Inquiries",
    desc: "Sales, partnerships, press, and anything else.",
    href: "mailto:info@thaliatechnologies.com",
    value: "info@thaliatechnologies.com",
    external: false,
  },
  {
    icon: Ticket,
    label: "App Support",
    desc: "Technical issues with one of our apps.",
    href: SUPPORT_TICKET_URL,
    value: "Raise a ticket →",
    external: true,
  },
  {
    icon: MapPin,
    label: "Visit Our Office",
    desc: "Drop by our Mumbai HQ — Dadar West, Prabhadevi.",
    href: OFFICE_MAP_URL,
    value: "Open in Maps →",
    external: true,
  },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();
      const res = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: form.email.trim(),
          subject: form.subject,
          message: [
            `Topic: ${form.subject}`,
            "",
            form.message.trim(),
            "",
            "---",
            `Name: ${fullName}`,
            `Reply-To: ${form.email.trim()}`,
          ].join("\n"),
          _subject: `[Thalia Website] ${form.subject} — ${fullName}`,
        }),
      });
      const data = (await res.json()) as { success?: boolean | string; message?: string };
      const ok =
        res.ok &&
        (data.success === true ||
          data.success === "true" ||
          (data as { ok?: boolean }).ok === true);
      if (!ok) {
        throw new Error(
          data.message || "Could not send message. Please try again or email us directly."
        );
      }
      toast({
        title: "Message sent",
        description: "Thank you! We'll get back to you within 1 business day.",
      });
      setForm(initialForm);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast({ title: "Could not send", description: msg, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="Contact Thalia Technologies | Support and Sales"
        description="Get in touch with Thalia Technologies for product support, questions, and business inquiries."
        keywords="contact Thalia Technologies, app support, ecommerce software support, merchant help, product inquiries, Thalia contact"
        path="/contact"
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
              GET IN TOUCH
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
              Let's Talk.{" "}
              <span className="gradient-text-cyan">We're Listening.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed mb-10 font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Whether you have a question about one of our apps, want to partner with us, or just
              want to say hi — our inbox is always open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {[
                { value: "<24h",   label: "Response" },
                { value: "100k+",  label: "Merchants" },
                { value: "100+",   label: "Countries" },
                { value: "1 BD",   label: "Typical Reply" },
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
          CHANNELS — 3 cards
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                {...inView(Math.min(i * 0.06, 0.18))}
                className="card-elevated p-6 block group"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                >
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{c.label}</h3>
                <p className="text-sm text-muted-foreground font-body mb-3 leading-relaxed">{c.desc}</p>
                <span className="text-sm font-medium text-primary font-body group-hover:underline">
                  {c.value}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FORM + INFO SIDEBAR
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white" style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

            {/* Sidebar — office card */}
            <motion.aside {...inView(0)} className="lg:col-span-2 space-y-5">
              <div
                className="card-elevated p-6"
                style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,192,255,0.1)", border: "1px solid rgba(0,192,255,0.18)" }}
                >
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">Thalia Technologies Pvt. Ltd.</h3>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground font-body mb-4">
                  Mumbai HQ
                </p>
                <a
                  href={OFFICE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-muted-foreground font-body hover:text-primary transition-colors leading-relaxed"
                >
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{OFFICE_ADDRESS}</span>
                </a>
              </div>

              {/* Quick facts */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(0,192,255,0.05)",
                  border: "1px solid rgba(0,192,255,0.15)",
                  borderTop: "2px solid rgba(0,192,255,0.22)",
                }}
              >
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">Response within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">Serving 100,000+ businesses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-body text-foreground">Real humans, no chatbots</span>
                  </li>
                </ul>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.form
              {...inView(0.1)}
              onSubmit={handleSubmit}
              className="card-elevated p-8 lg:col-span-3 space-y-5"
              style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}
              aria-label="Contact form"
            >
              <div className="mb-2">
                <h2
                  className="font-heading font-extrabold text-foreground mb-1"
                  style={{ fontSize: 24, letterSpacing: "-0.02em" }}
                >
                  Send us a message
                </h2>
                <p className="text-sm text-muted-foreground font-body">
                  Fill out the form and we'll get back to you within 1 business day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-sm font-semibold text-foreground mb-1.5 block font-body"
                  >
                    First Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="John"
                    autoComplete="given-name"
                    required
                    className="rounded-xl h-11"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-sm font-semibold text-foreground mb-1.5 block font-body"
                  >
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Doe"
                    autoComplete="family-name"
                    required
                    className="rounded-xl h-11"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground mb-1.5 block font-body"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                  className="rounded-xl h-11"
                />
                <p className="text-xs text-muted-foreground font-body mt-1.5">
                  We'll only use this to reply to your message.
                </p>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-foreground mb-1.5 block font-body"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                >
                  <option>General Inquiry</option>
                  <option>App Support</option>
                  <option>API/Developer</option>
                  <option>Partnerships</option>
                  <option>Press &amp; Media</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground mb-1.5 block font-body"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help?"
                  rows={5}
                  required
                  className="rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full rounded-xl h-12 bg-primary text-primary-foreground hover:bg-primary-dark font-heading font-bold disabled:opacity-70"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
                {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA — careers cross-link
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
                Want to Join Us Instead?
              </h2>
              <p className="text-white/85 font-body max-w-xl mx-auto mb-8 leading-relaxed">
                We're always looking for talented people who love building great products.
                See what roles we're hiring for right now.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sm font-semibold font-body transition-transform hover:scale-[1.02]"
                style={{ color: "hsl(220 44% 8%)" }}
              >
                View Open Roles
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
