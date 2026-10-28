import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const PartnerDirectory = () => (
  <Layout>
    <Seo
      title="Our Partners | Thalia Technologies"
      description="Discover trusted ecommerce partners and explore tools that help businesses grow."
      keywords="Thalia partners, ecommerce partners, Shopify apps"
      path="/partnerships/all-partners"
    />

    <section className="bg-white" style={{ paddingTop: 86, paddingBottom: 92 }}>
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.12em] text-primary">OUR PARTNERS</p>
          <h1 className="mb-4 font-heading text-h2 font-extrabold text-foreground">
            Tools that help ecommerce businesses grow.
          </h1>
          <p className="font-body leading-relaxed text-muted-foreground">
            Discover our partners and explore the tools they offer to ecommerce businesses.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="card-elevated flex h-full flex-col p-6" style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-2">
              <img
                src="/fiidom-logo.png"
                alt="Fiidom Dropship logo"
                className="max-h-full max-w-full object-contain"
                width={64}
                height={64}
              />
              </div>
              <h2 className="font-heading text-lg font-bold text-foreground">Fiidom Dropship</h2>
            </div>
            <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
              Find winning AliExpress products, import them instantly, optimize with AI, and automate fulfillment - all in one place.
            </p>
            <a
              href="https://apps.shopify.com/fiidomds?utm_medium=Robo-thalia-website&utm_source=fiidomds-partnership&utm_campaign=fiidomds"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex w-fit items-center"
            >
              Try it Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </article>
          <article className="card-elevated flex h-full flex-col p-6" style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-white">
              <img
                src="/upsell-cross-sell-logo.png"
                alt="Upsell logo"
                className="h-full w-full object-contain"
                width={64}
                height={64}
                loading="lazy"
              />
              </div>
              <h2 className="font-heading text-lg font-bold text-foreground">Upsell &amp; Cross-Sell</h2>
            </div>
            <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
              Boost AOV with post-purchase upsells, cross-sells, and bundles built for Shopify.
            </p>
            <a
              href="https://apps.shopify.com/reconvert-upsell-cross-sell?utm_source=thalia_website&utm_medium=website_recommendation&utm_campaign=spreadr_partnership"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex w-fit items-center"
            >
              Try it Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </article>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Link to="/partnerships" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to Partnerships
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default PartnerDirectory;
