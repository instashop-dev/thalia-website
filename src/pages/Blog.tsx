import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import blogHero from "@/assets/blog-hero.jpg";

const categories = ["All", "Dropshipping", "Pricing", "Compliance", "Retention", "Multichannel"];

const posts = [
  { title: "How to Start Amazon Dropshipping on Shopify in Under an Hour", date: "May 12, 2025", category: "Dropshipping", app: "Spreadr", excerpt: "A step-by-step guide to launching your Amazon dropship business using Spreadr — from installation to your first sale.", featured: true, emoji: "🛒" },
  { title: "Price Drop Alerts: The Underused Retention Tool That Prints Money", date: "Apr 28, 2025", category: "Retention", app: "Watchlyst", excerpt: "Discover how automated price alerts can bring back customers who left empty-handed and turn them into loyal buyers.", emoji: "🔔" },
  { title: "The Complete Guide to Bulk Pricing for Shopify Stores", date: "Apr 10, 2025", category: "Pricing", app: "Pro", excerpt: "Learn how to schedule discounts, run flash sales, and manage pricing across thousands of products effortlessly.", emoji: "💰" },
  { title: "GST Invoicing for Shopify Merchants: Everything You Need to Know", date: "Mar 22, 2025", category: "Compliance", app: "Sleek", excerpt: "Navigate India's GST requirements with ease. Automate invoice generation and stay 100% compliant.", emoji: "📄" },
  { title: "Do Product Badges Actually Increase Conversions? We Tested It.", date: "Mar 5, 2025", category: "Retention", app: "Prime", excerpt: "We ran a 3-month A/B test on product badges. The results? An 18% increase in conversion rates.", emoji: "🏷️" },
  { title: "Amazon + Shopify: The Complete Multichannel Selling Playbook", date: "Feb 18, 2025", category: "Multichannel", app: "Connectr + Shipr", excerpt: "Everything you need to know about selling on both Amazon and Shopify simultaneously.", emoji: "🌐" },
];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? posts : posts.filter(p => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-alt relative overflow-hidden" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <SectionHeading center={false} title="Insights for Commerce Builders" description="Deep dives, tutorials, and merchant success stories from the Thalia team." />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <img src={blogHero} alt="Content creation and blogging with floating article cards and ecommerce themes" className="w-full rounded-2xl" width={800} height={600} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{ paddingTop: 48 }}>
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold font-heading transition-all ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border hover:border-primary"
                }`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {filter === "All" && (
        <section style={{ paddingBottom: 24 }}>
          <div className="section-container">
            <div className="card-elevated p-8 md:p-12 bg-secondary">
              <span className="text-xs font-bold font-body text-primary uppercase tracking-[0.12em]">{posts[0].category}</span>
              <h2 className="font-heading text-h3 font-bold text-foreground mt-3 mb-3">{posts[0].title}</h2>
              <p className="text-muted-foreground font-body mb-4 max-w-2xl">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground font-body">{posts[0].date}</span>
                <span className="text-sm font-bold text-primary font-body cursor-pointer">Read Article →</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid */}
      <section style={{ paddingTop: 24, paddingBottom: 96 }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="card-elevated p-6 cursor-pointer group">
                <div className="h-32 rounded-xl bg-secondary flex items-center justify-center text-5xl mb-4">{post.emoji}</div>
                <span className="text-xs font-bold text-primary bg-secondary px-2 py-1 rounded-md font-body">{post.category}</span>
                <h3 className="font-heading font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                  <span className="text-sm font-bold text-primary font-body">Read →</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
