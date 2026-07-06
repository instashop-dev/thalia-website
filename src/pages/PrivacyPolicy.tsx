import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
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
      name: "Privacy Policy",
      item: "https://www.thaliatechnologies.com/privacy-policy",
    },
  ],
};

const sections = [
  {
    heading: "1. Introduction",
    body: (
      <>
        This Privacy and Data Protection Policy ("Policy") explains how Thalia Technologies
        Private Limited ("Thalia Technologies", "we", "us", "our") collects, uses, stores, and
        protects personal data in connection with our Shopify apps — including Spreadr, Pro Bulk
        Price Editor, Watchlyst, Outlink, Prime Product Badges, Shipr, Connectr, Robo Product
        Importer, and our other apps (collectively, the "Apps") — as well as our website at{" "}
        <Link to="/" className="text-primary underline underline-offset-2 hover:opacity-80">
          thaliatechnologies.com
        </Link>{" "}
        (the "Site"). This Policy applies to merchants who install our Apps ("You", "Your") and,
        where relevant, to the end customers of those merchants.
      </>
    ),
  },
  {
    heading: "2. Data We Collect",
    body: (
      <>
        Depending on which App you use, we may collect:
        <ul className="list-disc pl-5 mt-3 space-y-2">
          <li>
            <strong>Merchant account data</strong> — name, email address, and Shopify store
            details (store URL, plan, and shop ID) provided during app installation.
          </li>
          <li>
            <strong>Store data</strong> — product, pricing, inventory, order, and collection data
            that the App needs to read or write in order to function, accessed strictly through
            the Shopify API scopes each App requests.
          </li>
          <li>
            <strong>Customer data</strong> — for Apps with customer-facing features (for example,
            back-in-stock alerts), we may collect a customer's email address or other contact
            details they voluntarily submit through your storefront.
          </li>
          <li>
            <strong>Usage and support data</strong> — app configuration settings, support tickets,
            and basic analytics used to diagnose issues and improve the App.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "3. How We Use Data",
    body: (
      <>
        We use the data described above to: provide and operate the App you have installed;
        authenticate your store and maintain your app settings; process the specific function of
        the App (e.g. updating prices, importing products, sending stock alerts, displaying
        badges); respond to support requests; and monitor, maintain, and improve the security,
        performance, and reliability of our Apps. We do not use your data for any purpose beyond
        what is necessary to deliver the App's functionality.
      </>
    ),
  },
  {
    heading: "4. Data Storage and Security",
    body: (
      <>
        Personal and store data is transmitted over encrypted (HTTPS) connections and stored on
        secure, access-controlled infrastructure. We apply industry-standard technical and
        organizational safeguards to protect data against accidental or unlawful destruction,
        loss, alteration, unauthorized disclosure, or access, and we limit internal access to data
        strictly to personnel who need it to provide support or maintain the Apps.
      </>
    ),
  },
  {
    heading: "5. Data Sharing and Disclosure",
    body: (
      <>
        We do not sell, rent, or trade Your personal data or Your customers' personal data to any
        third party. We may share data only: with service providers and infrastructure partners
        (such as hosting and email-delivery providers) who process data solely on our behalf to
        deliver the App's functionality; with Shopify, as required for the App to operate within
        the Shopify platform; or where required to comply with a legal obligation, court order, or
        governmental request.
      </>
    ),
  },
  {
    heading: "6. Data Retention",
    body: (
      <>
        We retain data for as long as the relevant App remains installed on your store and for a
        limited period afterward, as needed to comply with legal obligations, resolve disputes,
        and enforce our agreements. If you uninstall an App, app-specific data (such as saved
        configurations or subscriber lists) is deleted from our systems within a reasonable period
        following uninstall, in line with Shopify's data protection requirements for partner apps.
      </>
    ),
  },
  {
    heading: "7. Your Rights",
    body: (
      <>
        Depending on your location, you may have the right to access, correct, export, restrict,
        or request deletion of the personal data we hold about you, and to object to certain
        processing. We are committed to supporting these rights for merchants and customers in the
        European Union, United Kingdom, and other applicable jurisdictions under GDPR and similar
        data protection laws. To exercise any of these rights, contact us using the details in
        Section 9 below.
      </>
    ),
  },
  {
    heading: "8. Changes to This Policy",
    body: (
      <>
        We may update this Policy from time to time to reflect changes in our practices or for
        legal, operational, or regulatory reasons. Material changes will be reflected by updating
        the "Last updated" date below. Your continued use of an App after an update takes effect
        constitutes acceptance of the revised Policy.
      </>
    ),
  },
  {
    heading: "9. Contact Us",
    body: (
      <>
        If you have any questions, concerns, or requests regarding this Policy or our data
        practices, please contact us at{" "}
        <a
          href="mailto:info@thaliatechnologies.com"
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          info@thaliatechnologies.com
        </a>{" "}
        or raise a ticket through our{" "}
        <a
          href="https://thaliaapps.freshdesk.com/support/tickets/new"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80"
        >
          support portal
        </a>
        . You can also write to us at Thalia Technologies Private Limited, Naman Midtown, Senapati
        Bapat Marg, Dadar West, Prabhadevi, Mumbai 400013, India.
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy — Thalia Technologies"
        description="Read Thalia Technologies' Privacy and Data Protection Policy covering how our Shopify apps collect, use, store, and protect merchant and customer data."
        keywords="Thalia Technologies privacy policy, Shopify app privacy policy, data protection, GDPR"
        path="/privacy-policy"
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
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden />
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
              Privacy <span className="gradient-text-cyan">Policy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="text-lg leading-relaxed font-body mx-auto max-w-2xl"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              How Thalia Technologies collects, uses, and protects data across all of our Shopify
              apps.
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
              Looking for an app-specific privacy policy? Individual app listings on the{" "}
              <a
                href="https://apps.shopify.com/partners/thalia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                Shopify App Store
              </a>{" "}
              link to their respective policies where applicable. This page describes our
              company-wide data practices across all Thalia Technologies apps.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
