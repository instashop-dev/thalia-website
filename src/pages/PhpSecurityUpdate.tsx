import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const actions = [
  {
    icon: ServerCog,
    eyebrow: "Runtime",
    title: "PHP version upgraded",
    description: "The application runtime was updated from PHP 8.3.22 to PHP 8.3.36.",
  },
  {
    icon: LockKeyhole,
    eyebrow: "Protection",
    title: "Security fixes applied",
    description: "The necessary patches were installed to address the reported vulnerabilities.",
  },
  {
    icon: FileCheck2,
    eyebrow: "Validation",
    title: "Application functionality verified",
    description: "We confirmed that the fixes are active and that the application loads and operates normally.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Review",
    title: "Security checks completed",
    description: "Available server logs were reviewed for attempted exploitation or suspicious activity. None was identified during our investigation.",
  },
];

const faqs = [
  [
    "Do I need to take any action?",
    "No. The security update has been completed on our end. You can continue using the application as usual.",
  ],
  [
    "Did the update change my store or data?",
    "No. The update did not change your existing data, login credentials, or application settings.",
  ],
  [
    "What vulnerabilities were addressed?",
    "We addressed the two reported PHP security vulnerabilities CVE-2026-109618 and CVE-2026-109619, also referred to as PHP2Shell.",
  ],
  [
    "Was any merchant data leaked?",
    "Based on our investigation of the available server logs, we found no evidence that merchant data was accessed or leaked in connection with this issue. The review also found no signs of attempted exploitation or suspicious activity.",
  ],
];

const PhpSecurityUpdate = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Security Update: PHP Vulnerabilities Resolved",
    dateModified: "2026-10-22",
    description: "Security update covering the remediation of CVE-2026-109618 and CVE-2026-109619.",
    author: { "@type": "Organization", name: "Thalia Technologies" },
  };

  return (
    <Layout>
      <Seo
        title="Security Update: PHP Vulnerabilities Resolved | Thalia Technologies"
        description="Read the October 22, 2026 security update from Thalia Technologies covering PHP vulnerabilities CVE-2026-109618 and CVE-2026-109619."
        keywords="Thalia Technologies security update, PHP vulnerabilities, CVE-2026-109618, CVE-2026-109619, PHP2Shell"
        path="/security/php-vulnerabilities-resolved"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden hero-dot-grid" style={{ background: "hsl(var(--hero-bg))", paddingTop: 92, paddingBottom: 92 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 75% at 50% 0%, rgba(0,192,255,0.18) 0%, transparent 68%)" }} />
        <div className="section-container relative">
          <div className="flex items-center gap-2 text-sm text-white/45 mb-10">
            <Link to="/" className="hover:text-white transition-colors">Thalia Technologies</Link>
            <span aria-hidden>/</span>
            <span>Security update</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Resolved and verified
              </div>
              <h1 className="mt-6 max-w-3xl font-heading font-extrabold text-white" style={{ fontSize: "clamp(44px, 6.2vw, 78px)", lineHeight: 1.01, letterSpacing: "-0.055em" }}>
                PHP vulnerabilities resolved.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68">
                We addressed two reported security vulnerabilities and upgraded the PHP runtime supporting our application. The application is running normally, and no action is required from you.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">
                <span><span className="text-white/80">Last updated</span> · October 22, 2026</span>
                <span><span className="text-white/80">Status</span> · Complete</span>
              </div>
              <div className="mt-3 text-sm text-white/50"><span className="text-white/80">Coverage</span> · Shopify apps + other products</div>
              <a href="#what-changed" className="btn-primary mt-9 inline-flex items-center gap-2">See what changed <ArrowRight className="h-4 w-4" /></a>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/12 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300"><ShieldCheck className="h-6 w-6" /></div>
                    <div><div className="font-heading font-bold text-white">Security status</div><div className="text-xs text-white/45">Application environment</div></div>
                  </div>
                  <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-bold text-emerald-300">Healthy</span>
                </div>
                <div className="py-7">
                  <div className="mb-3 flex items-end justify-between"><span className="text-sm text-white/55">PHP runtime</span><span className="font-mono text-sm text-cyan-300">8.3.36</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" /></div>
                </div>
                <div className="space-y-3 border-t border-white/10 pt-5">
                  {["Patches applied", "Application verified", "Logs reviewed"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/70"><Check className="h-4 w-4 text-emerald-300" /> {item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ paddingTop: 84, paddingBottom: 84 }}>
        <div className="section-container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">Coverage across our products</span>
              <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">One security update across the product suite.</h2>
            </div>
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary"><ShieldCheck className="h-6 w-6" /></div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Remediation completed across our Shopify apps and other products</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The required PHP upgrade and security patches were completed across the applications and products covered by this environment. We also verified that the updated applications load and operate normally after the change.</p>
                </div>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["Shopify apps", "Other products", "Shared security review"].map((item) => <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm font-semibold text-foreground"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />{item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-changed" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="section-container">
          <div className="max-w-2xl">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">What security measures were taken?</span>
            <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">A focused update, checked from runtime to application.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">Our technical team applied the required changes, then verified the application and reviewed available evidence for signs of exploitation.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {actions.map(({ icon: Icon, eyebrow, title, description }, index) => (
              <div key={title} className="card-elevated group flex gap-5 p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Icon className="h-6 w-6" /></div>
                <div><div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">0{index + 1} · {eyebrow}</div><h3 className="font-heading text-xl font-bold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ paddingTop: 86, paddingBottom: 86 }}>
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">For your store</span><h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">No action required.</h2></div>
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm sm:p-9">
              <p className="text-lg leading-relaxed text-foreground">The security update has been completed on our end, and the application is running normally.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {["Your existing data", "Login credentials", "Application settings"].map((item) => <div key={item} className="rounded-2xl border border-border bg-muted/50 p-4"><CheckCircle2 className="h-5 w-5 text-emerald-500" /><div className="mt-3 text-sm font-semibold text-foreground">Unchanged</div><div className="mt-1 text-xs leading-relaxed text-muted-foreground">{item}</div></div>)}
              </div>
              <p className="mt-7 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">You can continue using the application as usual.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="section-container">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-7 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-200/35 blur-2xl" />
            <div className="relative grid items-start gap-8 lg:grid-cols-[auto_1fr]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm"><LockKeyhole className="h-7 w-7" /></div>
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">Your data and privacy</span>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl">Merchant data was not exposed in this incident.</h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-emerald-900/75">The PHP upgrade and security patches remove the reported vulnerabilities and help protect merchant data. Based on our investigation of the available server logs, we found no evidence that merchant data was accessed or leaked in connection with this issue.</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-emerald-900/65">This conclusion is based on the evidence available to us during the investigation. Your existing data, login credentials, and application settings were not changed by this update, and we will continue monitoring our infrastructure and applying necessary security updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="section-container max-w-4xl">
          <div className="text-center"><span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">Questions</span><h2 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">A few clear answers.</h2></div>
          <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-white px-6 sm:px-8">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading font-bold text-foreground [&::-webkit-details-marker]:hidden">{question}<ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" /></summary><p className="max-w-3xl pt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground" style={{ paddingTop: 82, paddingBottom: 82 }}>
        <div className="section-container relative text-center"><div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary"><ShieldCheck className="h-7 w-7" /></div><h2 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">Security is ongoing work.</h2><p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">We continue to monitor our infrastructure, review potential risks, and apply necessary updates to help keep the application secure and reliable.</p><Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">Contact support <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </Layout>
  );
};

export default PhpSecurityUpdate;
