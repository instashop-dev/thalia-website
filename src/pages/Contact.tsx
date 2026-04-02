import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Building2, Globe, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import contactImg from "@/assets/contact-support.jpg";

const contactCards = [
  { icon: Mail, label: "General Inquiries", value: "hello@thaliatechnologies.com" },
  { icon: Building2, label: "Partnerships", value: "partnerships@thaliatechnologies.com" },
  { icon: Globe, label: "App Support", value: "Visit our App Store pages" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent! ✓", description: "Thank you! We'll get back to you within 1 business day." });
    setForm({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-alt relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="section-container relative text-center">
          <SectionHeading title="We'd Love to Hear From You" description="Whether you have a question about one of our apps, want to explore a partnership, or just want to say hi — our inbox is always open." />
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ paddingTop: 48, paddingBottom: 0 }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {contactCards.map((c, i) => (
              <motion.div key={c.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-elevated p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1">{c.label}</h3>
                <p className="text-sm text-muted-foreground font-body">{c.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={contactImg} alt="Customer support agent helping customers with friendly chat interface" className="w-full rounded-2xl" loading="lazy" width={800} height={600} />
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span className="text-sm font-body text-muted-foreground">hello@thaliatechnologies.com</span></div>
                <div className="flex items-center gap-3"><Building2 className="h-5 w-5 text-primary" /><span className="text-sm font-body text-muted-foreground">Thalia Technologies Private Limited</span></div>
                <div className="flex items-center gap-3"><Globe className="h-5 w-5 text-primary" /><span className="text-sm font-body text-muted-foreground">Serving 100,000+ businesses globally</span></div>
                <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /><span className="text-sm font-body text-muted-foreground">Response time: Usually within 24 hours</span></div>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              onSubmit={handleSubmit} className="card-elevated p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block font-body">First Name</label>
                  <Input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="John" required className="rounded-xl" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Last Name</label>
                  <Input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Doe" required className="rounded-xl" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" required className="rounded-xl" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm font-body">
                  <option>General Inquiry</option>
                  <option>App Support</option>
                  <option>Partnership</option>
                  <option>API/Developer</option>
                  <option>Press & Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block font-body">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5} required className="rounded-xl" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark font-heading font-bold">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
