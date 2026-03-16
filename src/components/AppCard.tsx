import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { AppData } from "@/data/apps";

const AppCard = ({ app, index }: { app: AppData; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link to={`/${app.slug}`} className="block card-elevated p-6 h-full group">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
          style={{ backgroundColor: `hsl(${app.color} / 0.12)` }}
        >
          {app.icon}
        </div>
        <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
          {app.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{app.tagline}</p>
        <span className="inline-block mt-3 text-xs font-medium text-primary bg-accent px-2 py-1 rounded-md">
          {app.platform}
        </span>
      </Link>
    </motion.div>
  );
};

export default AppCard;
