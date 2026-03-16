import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";

const platforms = ["All", "Shopify", "Amazon+Shopify", "BigCommerce", "API"];

const Apps = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? apps : apps.filter((a) => a.platform === filter || (filter === "Shopify" && a.platform.includes("Shopify")));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: 100, paddingBottom: 60 }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(41,201,240,0.06) 0%, transparent 70%)"
        }} />
        <div className="section-container relative text-center">
          <SectionHeading title="20 Apps. One Mission." description="Every app we build solves a real commerce challenge — from dropshipping and inventory sync to invoicing and price optimization." />
        </div>
      </section>

      {/* Filter & Grid */}
      <section style={{ paddingBottom: 100 }}>
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {platforms.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className="px-5 py-2.5 rounded-full text-sm font-bold font-heading transition-all"
                style={{
                  background: filter === p ? "#29C9F0" : "#fff",
                  color: filter === p ? "#0D0D14" : "#8888A0",
                  border: filter === p ? "none" : "1px solid #E4EAF0",
                }}
              >
                {p === "Amazon+Shopify" ? "Amazon + Shopify" : p}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((app, i) => (
              <AppCard key={app.slug} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
