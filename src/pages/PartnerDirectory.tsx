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

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5">
          <article className="card-elevated flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8" style={{ borderTop: "2px solid rgba(0,192,255,0.22)" }}>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-border bg-white p-3">
              <img
                src="/fiidom-logo.png"
                alt="Fiidom Dropship logo"
                className="max-h-full max-w-full object-contain"
                width={80}
                height={80}
              />
            </div>
            <div className="flex-1">
              <h2 className="mb-2 font-heading text-xl font-bold text-foreground">Fiidom Dropship</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                Find winning AliExpress products, import them instantly, optimize with AI, and automate fulfillment - all in one place.
              </p>
            </div>
            <a
              href="https://apps.shopify.com/fiidomds?utm_medium=Robo-thalia-website&utm_source=fiidomds-partnership&utm_campaign=fiidomds"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              Install Now <ArrowRight className="ml-2 h-4 w-4" />
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
