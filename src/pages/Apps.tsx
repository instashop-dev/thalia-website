import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import appsImg from "@/assets/apps-showcase.jpg";

const Apps = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(231,91%,64%,0.06) 0%, transparent 70%)"
        }} />
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-4 font-body">OUR PRODUCTS</motion.span>
              <SectionHeading center={false} title="Every App. One Mission." description="We build focused, powerful tools for ecommerce merchants. No bloat, no noise — just software that works." />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={appsImg} alt="Showcase of ecommerce SaaS product interfaces and dashboards" className="w-full rounded-2xl" width={1200} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {apps.map((app, i) => (
              <AppCard key={app.slug} app={app} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
