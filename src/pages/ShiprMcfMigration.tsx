import { ArrowRight, Check, ChevronDown, CircleCheck, ClipboardCheck, PackageCheck, RefreshCw, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const steps = [
  {
    number: "01",
    title: "Audit your current fulfillment setup",
    description: "List the products and Shopify order flows you want Amazon to fulfill. Confirm that the matching inventory is already stored in Amazon fulfillment centers and identify any products that should stay with your existing 3PL or in-house process.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Prepare SKUs and product mappings",
    description: "Use one dependable SKU relationship between Shopify and the Amazon inventory you want to use. Resolve duplicates, missing SKUs, bundles, and variants before switching order routing on.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Connect Shipr to Amazon",
    description: "Install Shipr, connect the relevant Amazon Seller Central account, and map your Shopify products to their FBA inventory. Start with a small, representative product group if you are testing a larger catalog.",
    icon: RefreshCw,
  },
  {
    number: "04",
    title: "Test the complete order loop",
    description: "Place a test order and verify the fulfillment request, inventory adjustment, shipping status, and tracking number from Amazon back in Shopify. Check cancellations and returns before expanding the rollout.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Switch over in controlled stages",
    description: "Enable automatic fulfillment for the products and order types you have validated. Keep a manual fallback for exceptions while you monitor the first live orders and inventory syncs.",
    icon: CircleCheck,
  },
];

const benefits = [
  "Use inventory already positioned in Amazon fulfillment centers for Shopify orders",
  "Automate order submission instead of re-entering orders in Seller Central",
  "Keep Shopify inventory aligned with Amazon fulfillment availability",
  "Bring shipment status and tracking back into your Shopify workflow",
  "Separate MCF-ready products from products that need another fulfillment route",
  "Create a repeatable fulfillment process that is easier to scale",
];

const faqs = [
  ["What is Amazon MCF?", "Amazon Multi-Channel Fulfillment (MCF) uses Amazon's fulfillment network to pick, pack, and ship orders placed on sales channels outside Amazon, including Shopify."],
  ["Do I need inventory in Amazon FBA first?", "Yes. MCF fulfills from inventory stored in Amazon's fulfillment network. Before migration, confirm that the products you plan to route through MCF have sellable inventory and consistent identifiers."],
  ["Will every Shopify order go to Amazon?", "Not necessarily. Shipr can support rules and exclusions so you can route only the products or orders that make sense for Amazon fulfillment while keeping exceptions on another workflow."],
  ["What should I test before going live?", "Test SKU mapping, available inventory, order submission, shipping speed selection, tracking sync, cancellations, and returns. A small controlled rollout makes issues easier to isolate."],
];

const ShiprMcfMigration = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to migrate Shopify fulfillment to Amazon MCF with Shipr",
    description: "A practical migration checklist for Shopify merchants moving fulfillment to Amazon Multi-Channel Fulfillment.",
    step: steps.map((step) => ({ "@type": "HowToStep", name: step.title, text: step.description })),
  };

  return (
    <Layout>
      <Seo
        title="Amazon MCF Migration Guide | Shipr for Shopify"
        description="Move your Shopify fulfillment workflow to Amazon Multi-Channel Fulfillment with Shipr. Follow the migration checklist for products, inventory, orders, and tracking."
        keywords="Amazon MCF migration, Shopify Amazon MCF, Amazon Multi-Channel Fulfillment, Shipr migration guide, FBA fulfillment Shopify"
        path="/apps/shipr/amazon-mcf-migration"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden hero-dot-grid" style={{ background: "hsl(var(--hero-bg))", paddingTop: 96, paddingBottom: 88 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,153,0,0.17) 0%, transparent 65%)" }} />
        <div className="section-container relative">
          <Link to="/apps/shipr" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-10">
            <ArrowRight className="h-4 w-4 rotate-180" /> Back to Shipr
          </Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff9900]/40 bg-[#ff9900]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ffb84d] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#ff9900]" /> Shipr migration guide
            </div>
            <h1 className="font-heading font-extrabold text-white" style={{ fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.045em", maxWidth: 850 }}>
              Move Shopify fulfillment to Amazon MCF with confidence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
              A practical path from manual or third-party fulfillment to Amazon Multi-Channel Fulfillment. Prepare your catalog, connect Shipr, test the full order loop, and roll out in stages.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="https://apps.shopify.com/amazon-fba-shipr?utm_source=thaliatechnologies.com&utm_medium=website&utm_campaign=shipr_mcf_migration&utm_content=hero" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
                Start with Shipr <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#migration-plan" className="btn-ghost-dark inline-flex items-center justify-center gap-2">View the migration plan <ChevronDown className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {["Catalog first", "Test before switch", "Monitor after launch"].map((label, index) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <div className="mb-3 text-2xl font-extrabold text-[#ffb84d]">0{index + 1}</div>
                <div className="font-heading font-bold text-white">{label}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">A focused checkpoint keeps migration work measurable and reversible.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">Why move to MCF</span>
              <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">Turn Amazon inventory into a Shopify fulfillment engine.</h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">MCF can give growing brands access to Amazon’s fulfillment network beyond the Amazon marketplace. Shipr connects the operational pieces so your team can spend less time copying orders and reconciling stock.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl border border-border bg-white p-5 shadow-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="migration-plan" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">The migration plan</span>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">Five checkpoints from setup to steady state.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Use the order below to reduce surprises. Each checkpoint answers one question before the next stage begins.</p>
          </div>
          <div className="mx-auto mt-14 max-w-4xl space-y-5">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="card-elevated flex gap-5 p-6 sm:p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ff9900]/10 text-[#d97706]"><Icon className="h-6 w-6" /></div>
                <div>
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">Checkpoint {number}</div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">Before you switch</span>
              <h2 className="mt-3 font-heading text-4xl font-extrabold text-foreground">Use this go-live checklist.</h2>
            </div>
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm">
              {["FBA inventory is available for the products being migrated", "Shopify and Amazon SKUs have been checked and mapped", "A test order has returned a valid status and tracking number", "Exceptions, cancellations, and returns have an owner", "The team knows how to pause or manually fulfill an exception"].map((item) => (
                <div key={item} className="flex gap-3 border-b border-border py-4 first:pt-0 last:border-0 last:pb-0">
                  <CircleCheck className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 92, paddingBottom: 92 }}>
        <div className="section-container max-w-4xl">
          <div className="text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-primary">Common questions</span>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-foreground">What merchants ask before migrating.</h2>
          </div>
          <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-white px-6 sm:px-8">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-heading font-bold text-foreground [&::-webkit-details-marker]:hidden">
                  {question}<ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl pt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-foreground" style={{ paddingTop: 82, paddingBottom: 82 }}>
        <div className="section-container relative text-center">
          <h2 className="font-heading text-4xl font-extrabold text-white sm:text-5xl">Ready to make fulfillment less manual?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">Connect Shopify to Amazon FBA/MCF with Shipr and start with the products you know best.</p>
          <a href="https://apps.shopify.com/amazon-fba-shipr?utm_source=thaliatechnologies.com&utm_medium=website&utm_campaign=shipr_mcf_migration&utm_content=footer_cta" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex items-center gap-2">Explore Shipr on Shopify <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </Layout>
  );
};

export default ShiprMcfMigration;
