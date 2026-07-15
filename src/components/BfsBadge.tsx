import bfsLight from "@/assets/bfs-badge/badge-built-for-shopify-light.svg";
import bfsDark from "@/assets/bfs-badge/badge-built-for-shopify-dark.svg";

interface BfsBadgeProps {
  /** Use "dark" on dark backgrounds, "light" on light backgrounds (per Shopify's usage guidelines). */
  variant?: "light" | "dark";
  className?: string;
}

/** Shopify's official "Built for Shopify" badge. Never alter its proportions, colors, or styling. */
const BfsBadge = ({ variant = "light", className = "" }: BfsBadgeProps) => (
  <img
    src={variant === "dark" ? bfsDark : bfsLight}
    alt="Built for Shopify"
    width={166}
    height={44}
    className={`h-8 w-auto select-none ${className}`}
  />
);

export default BfsBadge;
