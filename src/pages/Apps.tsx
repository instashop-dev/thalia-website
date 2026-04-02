import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";
import appsImg from "@/assets/apps-mosaic.jpg";

const platforms = ["All", "Shopify", "Amazon", "BigCommerce", "API"];

const Apps = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All"
    ? apps
    : apps.filter((a) => {
        if (filter === "Amazon") return a.platform.includes("Amazon");
        if (filter === "Shopify") return a.platform.includes("Shopify");
        return a.platform === filter;
      });

  return (
    <Layout>
      {/* Hero */}
      <section className="section-alt relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <SectionHeading center={false} title="Every App. One Mission." description="We build focused, powerful tools for ecommerce merchants. No bloat, no noise — just software that works." />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={appsImg} alt="Colorful mosaic of app icons representing different ecommerce SaaS tools" className="w-full rounded-2xl" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section style={{ paddingTop: 48, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {platforms.map((p) => (
              <button key={p} onClick={() => setFilter(p)}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold font-heading transition-all ${
                  filter === p ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border hover:border-primary"
                }`}>
                {p === "Amazon" ? "Amazon" : p}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={filter} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((app, i) => (
                <AppCard key={app.slug} app={app} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
