import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import caseStudiesImg from "@/assets/case-studies-hero.jpg";

const studies = [
  { num: "01", app: "Spreadr", title: "US Fashion Retailer Launches Amazon Dropship in 3 Days", desc: "A mid-sized Shopify store used Spreadr to import 5,000+ Amazon products, launching a dropship revenue stream with zero upfront inventory cost.", metric: "+$240K", metricLabel: "Additional Annual Revenue" },
  { num: "02", app: "Watchlyst", title: "UK Electronics Store Recovers Lost Customers at Scale", desc: "Automated price drop alerts via Watchlyst brought back 1,800 customers in Q4 who had previously abandoned their wishlists.", metric: "43%", metricLabel: "Win-back Conversion Rate" },
  { num: "03", app: "Pro", title: "Apparel Brand Runs 50 Simultaneous Discount Campaigns", desc: "A 10,000 SKU store now runs automated seasonal pricing with rollback protection — saving the team 25 hours every week.", metric: "25hrs", metricLabel: "Saved Per Week" },
  { num: "04", app: "Connectr", title: "Multi-channel Seller Achieves Perfect Inventory Sync", desc: "Connectr helped manage 8,000+ SKUs across Amazon and Shopify simultaneously, eliminating overselling entirely.", metric: "0", metricLabel: "Oversell Incidents After Launch" },
  { num: "05", app: "Sleek", title: "Indian D2C Brand Automates GST Compliance", desc: "Sleek automated GST invoice generation for 3,000+ monthly orders, ensuring 100% tax compliance with zero manual effort.", metric: "100%", metricLabel: "GST Compliance Achieved" },
  { num: "06", app: "Prime", title: "Shopify Store Boosts Conversions with Product Badges", desc: "Strategic badge placement using Prime resulted in a significant uplift in click-through and purchase conversion rates.", metric: "+18%", metricLabel: "Conversion Rate Increase" },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-alt relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <SectionHeading center={false} title="Real Results from Real Merchants" description="See how businesses like yours use Thalia apps to drive measurable growth and efficiency." />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={caseStudiesImg} alt="Merchant store with floating metric cards showing growth and success indicators" className="w-full rounded-2xl" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {studies.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="card-elevated p-8 relative" style={{ borderTop: "3px solid hsl(var(--primary))" }}>
                <span className="absolute top-6 right-6 font-heading text-6xl font-extrabold text-muted/40">{s.num}</span>
                <span className="inline-block text-xs font-bold font-body text-primary bg-secondary px-2.5 py-1 rounded-md mb-4">{s.app}</span>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3 pr-16">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">{s.desc}</p>
                <div>
                  <div className="font-heading text-3xl font-extrabold text-primary">{s.metric}</div>
                  <div className="text-sm text-muted-foreground font-body">{s.metricLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
