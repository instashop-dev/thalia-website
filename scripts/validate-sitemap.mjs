import { readFile } from "node:fs/promises";

const sitemapPath = new URL("../public/sitemap.xml", import.meta.url);
const xml = await readFile(sitemapPath, "utf8");
if (!xml.includes("<urlset") || !xml.includes("</urlset>")) {
  console.error("Invalid sitemap XML: missing urlset element");
  process.exit(1);
}
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const canonicalHost = "https://www.thaliatechnologies.com";
const staticRoutes = new Set([
  "/",
  "/about",
  "/apps",
  "/blog",
  "/case-studies",
  "/faq",
  "/contact",
  "/careers",
  "/partnerships",
  "/partnerships/all-partners",
  "/privacy-policy",
  "/terms",
]);
const appSlugs = new Set([
  "spreadr", "probulkpriceeditor", "watchlyst", "connectr", "bolt-bulk-editor",
  "dual-price-display", "outlink", "robo-product-importer", "t2-product-icons", "shipr",
  "duplicate-sku-sync", "sleek-gst-invoicing", "clever-variant-images", "super-product-badges",
  "clean-info-tables", "prime-product-badges", "fetchr", "csvbox", "fylebox", "product-data-exporter",
]);

const isKnownRoute = (pathname) => {
  if (staticRoutes.has(pathname)) return true;
  if (pathname === "/apps/shipr/amazon-mcf-migration") return true;
  const [section, slug, extra] = pathname.split("/").filter(Boolean);
  if (extra) return false;
  if (section === "apps") return appSlugs.has(slug);
  return section === "blog" || section === "case-studies" ? Boolean(slug) : false;
};

const errors = [];
const seen = new Set();
for (const value of urls) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    errors.push(`Invalid URL: ${value}`);
    continue;
  }
  if (seen.has(value)) errors.push(`Duplicate URL: ${value}`);
  seen.add(value);
  if (!value.startsWith(`${canonicalHost}/`) || parsed.hostname !== "www.thaliatechnologies.com") {
    errors.push(`Non-canonical host or protocol: ${value}`);
  }
  if (parsed.pathname !== "/" && parsed.pathname.endsWith("/")) {
    errors.push(`Trailing slash: ${value}`);
  }
  if (parsed.pathname !== parsed.pathname.toLowerCase()) {
    errors.push(`Uppercase path: ${value}`);
  }
  if (!isKnownRoute(parsed.pathname)) errors.push(`Unknown route: ${value}`);
}

if (!urls.length) errors.push("No sitemap URLs found");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Sitemap valid: ${urls.length} canonical URLs`);
