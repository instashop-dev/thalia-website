import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.thaliatechnologies.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Terms of Service",
      item: "https://www.thaliatechnologies.com/terms",
    },
  ],
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: (
      <>
        These Terms of Service ("Terms") govern your access to and use of the Shopify apps
        published by Thalia Technologies Private Limited ("Thalia Technologies", "we", "us",
        "our") — including Spreadr, Pro Bulk Price Editor, Watchlyst, Outlink, Prime Product
        Badges, Shipr, Connectr, Robo Product Importer, and our other apps (collectively, the
        "Apps") — and our website at{" "}
        <Link to="/" className="text-primary underline underline-offset-2 hover:opacity-80">
          thaliatechnologies.com
        </Link>{" "}
        (the "Site"). By installing an App or using the Site, you ("You", "Your") agree to be
        bound by these Terms. If you do not agree, please do not install or use our Apps.
      </>
    ),
  },
  {
    heading: "2. Use of the Apps",
    body: (
      <>
        Our Apps are provided for use with your Shopify store in accordance with Shopify's own
        terms of service and app policies. You agree to use the Apps only for lawful purposes and
        in a manner that does not infringe the rights of, or restrict or inhibit the use and
        enjoyment of, the Apps by any third party. You are responsible for the accuracy of any
        content, pricing, or product data you configure through an App.
      </>
    ),
  },
  {
    heading: "3. Accounts and Access",
    body: (
      <>
        Access to an App is tied to your Shopify store's installation. You are responsible for
        maintaining the security of your Shopify admin account and for all activity that occurs
        under it. We are not liable for any loss or damage arising from unauthorized access to
        your Shopify account.
      </>
    ),
  },
  {
    heading: "4. Subscriptions and Billing",
    body: (
      <>
        Paid plans are billed through Shopify's native billing system and appear on your Shopify
        invoice. You may upgrade, downgrade, or cancel a subscription at any time from your
        Shopify admin; cancellations take effect at the end of the current billing cycle. We do
        not process payments directly and do not store your payment card details.
      </>
    ),
  },
  {
    heading: "5. Intellectual Property",
    body: (
      <>
        The Apps, the Site, and all associated software, designs, and content are owned by Thalia
        Technologies and are protected by applicable intellectual property laws. We grant you a
        limited, non-exclusive, non-transferable license to use the Apps solely in connection with
        your Shopify store for as long as the relevant App remains installed and your subscription
        (if any) is active.
      </>
    ),
  },
  {
    heading: "6. Data and Privacy",
    body: (
      <>
        Our collection and use of personal data in connection with the Apps is described in our{" "}
        <Link
          to="/privacy-policy"
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          Privacy Policy
        </Link>
        , which forms part of these Terms.
      </>
    ),
  },
  {
    heading: "7. Disclaimer of Warranties",
    body: (
      <>
        The Apps are provided "as is" and "as available" without warranties of any kind, express
        or implied, including but not limited to warranties of merchantability, fitness for a
        particular purpose, or non-infringement. We do not warrant that the Apps will be
        uninterrupted, error-free, or fully compatible with every Shopify theme or third-party
        integration.
      </>
    ),
  },
  {
    heading: "8. Limitation of Liability",
    body: (
      <>
        To the maximum extent permitted by law, Thalia Technologies shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or any loss of profits
        or revenue, arising out of or in connection with your use of the Apps or the Site, even if
        we have been advised of the possibility of such damages.
      </>
    ),
  },
  {
    heading: "9. Termination",
    body: (
      <>
        You may stop using an App at any time by uninstalling it from your Shopify admin. We may
        suspend or terminate your access to an App if we reasonably believe you have violated
        these Terms, Shopify's policies, or applicable law.
      </>
    ),
  },
  {
    heading: "10. Changes to These Terms",
    body: (
      <>
        We may update these Terms from time to time to reflect changes in our practices or for
        legal, operational, or regulatory reasons. Material changes will be reflected by updating
        the "Last updated" date below. Your continued use of an App after an update takes effect
        constitutes acceptance of the revised Terms.
      </>
    ),
  },
  {
    heading: "11. Governing Law",
    body: (
      <>
        These Terms are governed by the laws of India, without regard to its conflict of law
        principles. Any disputes arising under these Terms shall be subject to the exclusive
        jurisdiction of the courts of Mumbai, Maharashtra.
      </>
    ),
  },
  {
    heading: "12. Contact Us",
    body: (
      <>
        If you have any questions about these Terms, please contact us at{" "}
        <a
          href="mailto:info@thaliatechnologies.com"
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          info@thaliatechnologies.com
        </a>{" "}
        or through our{" "}
        <Link to="/contact" className="text-primary underline underline-offset-2 hover:opacity-80">
          Contact page
        </Link>
        . You can also write to us at Thalia Technologies Private Limited, Naman Midtown, Senapati
        Bapat Marg, Dadar West, Prabhadevi, Mumbai 400013, India.
      </>
    ),
  },
];

const TermsOfService = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Service — Thalia Technologies"
        description="Read the Terms of Service governing use of Thalia Technologies' Shopify apps and website."
        keywords="Thalia Technologies terms of service, Shopify app terms, terms of use"
        path="/terms"
        structuredData={[breadcrumbSchema]}
      />

      {/* HERO */}
      <section
        className="relative overflow-hidden hero-dot-grid"
        style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 72 }}
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
              <FileText className="w-3.5 h-3.5" aria-hidden />
              LEGAL
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-heading font-extrabold text-white mb-6"
              style={{
                fontSize: "clamp(34px, 5vw, 54px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Terms of <span className="gradient-text-cyan">Service</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              The terms that govern your use of Thalia Technologies' Shopify apps and website.
            </motion.p>
            <p className="text-sm mt-4 font-body" style={{ color: "rgba(255,255,255,0.45)" }}>
              Last updated: July 6, 2026
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="bg-white" style={{ paddingTop: 72, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {sections.map((s, idx) => (
              <motion.section key={s.heading} {...inView(idx === 0 ? 0 : 0.04)} style={{ marginBottom: 40 }}>
                <h2
                  className="font-heading font-extrabold text-foreground mb-3"
                  style={{ fontSize: 22, letterSpacing: "-0.02em" }}
                >
                  {s.heading}
                </h2>
                <div className="text-[15px] leading-relaxed text-muted-foreground font-body">
                  {s.body}
                </div>
              </motion.section>
            ))}

            <p className="text-sm text-muted-foreground font-body mt-16 pt-8 border-t border-border">
              Looking for our data practices? See our{" "}
              <Link
                to="/privacy-policy"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                Privacy Policy
              </Link>
              . This page describes our company-wide terms across all Thalia Technologies apps.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
