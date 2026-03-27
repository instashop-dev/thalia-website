import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.12em] text-primary mb-3 font-body">
          {label}
        </span>
      )}
      <h2 className="font-heading text-h2 font-bold text-foreground mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl leading-relaxed mx-auto font-body">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
