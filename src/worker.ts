interface Env {
  ASSETS: { fetch(req: Request): Promise<Response> };
}

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@thaliatechnologies.com";

const ROUTE_SEO: Record<string, { title: string; description: string; h1: string; intro: string }> = {
  "/": {
    title: "Thalia Technologies — Ecommerce Apps for Shopify & Amazon",
    description: "Thalia Technologies builds focused ecommerce apps for Shopify, Amazon, and BigCommerce merchants.",
    h1: "Ecommerce Apps for Shopify, Amazon & BigCommerce",
    intro: "Focused SaaS tools that help ecommerce teams manage pricing, products, inventory, fulfillment, and affiliate selling.",
  },
  "/apps": {
    title: "Shopify, Amazon & BigCommerce Apps | Thalia Technologies",
    description: "Explore Thalia's ecommerce apps for Shopify, Amazon, and BigCommerce, including bulk price editing, product importing, inventory sync, and affiliate links.",
    h1: "Ecommerce Apps for Shopify, Amazon & BigCommerce",
    intro: "Browse practical tools for product importing, pricing, inventory, affiliate links, fulfillment, and store operations.",
  },
  "/apps/probulkpriceeditor": {
    title: "Bulk Price Editor Pro | Shopify Price Editor",
    description: "Edit Shopify prices in bulk with scheduling, pricing rules, collection targeting, rollback, and price history. Save hours on every promotion.",
    h1: "Bulk Price Editor Pro — Bulk Edit Shopify Product Prices",
    intro: "Schedule price changes, target collections, apply pricing rules, and roll back promotions across large Shopify catalogs.",
  },
  "/apps/spreadr": {
    title: "Spreadr: Amazon to Shopify Importer | Thalia",
    description: "Import Amazon products into Shopify, build affiliate stores, or dropship with Spreadr. Sync pricing, images, and availability across your catalog.",
    h1: "Spreadr — Import Amazon Products to Shopify",
    intro: "Import Amazon products, build affiliate stores, or dropship with synced product data, pricing, images, and availability.",
  },
  "/apps/outlink": {
    title: "Outlink: Affiliate Links for Shopify Products",
    description: "Add external and affiliate buy buttons to Shopify products, manage destination URLs, and track clicks across your catalog with Outlink.",
    h1: "Outlink — External & Affiliate Links for Shopify Products",
    intro: "Add external buy buttons, manage destination URLs, and track outbound clicks for affiliate and multi-vendor Shopify stores.",
  },
  "/apps/robo-product-importer": {
    title: "Robo Product Importer | Import Products to Shopify",
    description: "Import products from almost any ecommerce website into Shopify. Robo extracts titles, images, variants, descriptions, and pricing to speed up setup.",
    h1: "Robo Product Importer — Import Products to Shopify",
    intro: "Import product titles, images, variants, descriptions, and pricing from almost any ecommerce website into Shopify.",
  },
  "/apps/shipr/amazon-mcf-migration": {
    title: "Amazon MCF Migration Guide | Shipr for Shopify",
    description: "Move your Shopify fulfillment workflow to Amazon Multi-Channel Fulfillment with Shipr. Follow the migration checklist for products, inventory, orders, and tracking.",
    h1: "Move Shopify fulfillment to Amazon MCF with Shipr",
    intro: "A practical migration guide for connecting your Shopify store to Amazon Multi-Channel Fulfillment, validating the setup, and switching over with confidence.",
  },
  "/blog": {
    title: "Thalia Blog — Ecommerce Tips for Shopify, Amazon & BigCommerce",
    description: "Practical ecommerce guides for Shopify, Amazon, and BigCommerce merchants covering pricing, inventory, apps, and multi-channel growth.",
    h1: "Ecommerce Guides for Shopify, Amazon & BigCommerce",
    intro: "Practical tutorials and strategies for pricing, inventory, product data, apps, and multi-channel ecommerce growth.",
  },
  "/case-studies": {
    title: "Case Studies — Real Results from Thalia's Shopify Apps",
    description: "See how ecommerce merchants use Thalia apps to improve pricing, product operations, affiliate links, and multi-channel selling.",
    h1: "Real Results from Thalia Ecommerce Apps",
    intro: "See how merchants use Thalia products to streamline pricing, catalog operations, affiliate links, and fulfillment.",
  },
  "/about": {
    title: "About Thalia Technologies | Ecommerce Software Company",
    description: "Learn how Thalia Technologies builds practical ecommerce software for Shopify, Amazon, and BigCommerce merchants, from our Mumbai-based team.",
    h1: "About Thalia Technologies",
    intro: "We build focused ecommerce software that helps merchants work smarter and grow faster.",
  },
};

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

function withRouteCanonical(response: Response, url: URL): Response {
  const canonicalUrl = `https://www.thaliatechnologies.com${url.pathname}`;
  const seo = ROUTE_SEO[url.pathname] ?? ROUTE_SEO["/"];
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: canonicalUrl,
    isPartOf: { "@type": "WebSite", name: "Thalia Technologies", url: "https://www.thaliatechnologies.com" },
  });

  // Keep the canonical available in the first HTML response. React Helmet will
  // reconcile this same managed tag after hydration, so crawlers do not need to
  // wait for the client bundle to discover the route-specific canonical.
  return new HTMLRewriter()
    .on('link[data-react-helmet="true"][rel="canonical"]', {
      element(element) {
        element.setAttribute("href", canonicalUrl);
      },
    })
    .on("title", {
      text(text) {
        if (!text.lastInTextNode) text.replace(seo.title);
      },
    })
    .on('meta[name="description"]', {
      element(element) {
        element.setAttribute("content", seo.description);
      },
    })
    .on('meta[property="og:title"]', {
      element(element) {
        element.setAttribute("content", seo.title);
      },
    })
    .on('meta[property="og:description"]', {
      element(element) {
        element.setAttribute("content", seo.description);
      },
    })
    .on('meta[property="og:url"]', {
      element(element) {
        element.setAttribute("content", canonicalUrl);
      },
    })
    .on("head", {
      element(element) {
        element.append(`<script type="application/ld+json">${structuredData}</script>`, { html: true });
      },
    })
    .on("#root", {
      element(element) {
        element.setInnerContent(`<main><h1>${seo.h1}</h1><p>${seo.intro}</p></main>`, { html: true });
      },
    })
    .transform(response);
}

async function handleContactRequest(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204 });
  if (request.method !== "POST") return jsonResponse({ success: false, message: "Method not allowed" }, 405);

  try {
    const input = (await request.json()) as { name?: string; email?: string; subject?: string; message?: string };
    const name = input.name?.trim() || "";
    const email = input.email?.trim() || "";
    const subject = input.subject?.trim() || "General Inquiry";
    const message = input.message?.trim() || "";

    if (!name || !email || !message) {
      return jsonResponse({ success: false, message: "Please complete all required fields." }, 400);
    }

    const upstream = await fetch(FORM_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, subject, message, _subject: `[Thalia Website] ${subject} — ${name}` }),
    });
    const responseText = await upstream.text();
    let responseData: { success?: boolean | string; message?: string } = {};
    try { responseData = JSON.parse(responseText) as typeof responseData; } catch { /* Keep the API response JSON-only. */ }

    const success = upstream.ok && (responseData.success === true || responseData.success === "true");
    if (!success) {
      return jsonResponse({ success: false, message: responseData.message || "The message service could not accept the submission. Please email us directly." }, 502);
    }
    return jsonResponse({ success: true, message: "Message sent" });
  } catch {
    return jsonResponse({ success: false, message: "Unable to send the message right now. Please try again." }, 502);
  }
}

// 301 redirects for app slugs renamed for better SEO
const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
  "/pro-bulk-price-editor": "/apps/probulkpriceeditor",
  "/amazon-to-shopify": "/apps/spreadr",
  "/external-affiliate-product-links": "/apps/outlink",
  "/robo-product-importer": "/apps/robo-product-importer",
  "/connectr-for-amazon-sellers": "/apps/connectr",
  "/gst-invoices-india": "/apps/sleek-gst-invoicing",
  "/the-watchlyst": "/apps/watchlyst",
  "/stories/guide-built-for-shopify": "/case-studies",
  "/apps/bolt": "/apps/bolt-bulk-editor",
  "/apps/dual": "/apps/dual-price-display",
  "/apps/robo": "/apps/robo-product-importer",
  "/apps/t2icons": "/apps/t2-product-icons",
  "/apps/duplicate": "/apps/duplicate-sku-sync",
  "/apps/sleek": "/apps/sleek-gst-invoicing",
  "/apps/clever": "/apps/clever-variant-images",
  "/apps/super": "/apps/super-product-badges",
  "/apps/clean": "/apps/clean-info-tables",
  "/apps/prime": "/apps/prime-product-badges",
};

export const getLegacyRedirectTarget = (pathname: string): string | undefined =>
  LEGACY_SLUG_REDIRECTS[pathname];

// All static routes in the SPA
const STATIC_ROUTES = new Set([
  "/",
  "/about",
  "/apps",
  "/contact",
  "/become-a-partner",
  "/careers",
  "/blog",
  "/case-studies",
  "/faq",
  "/privacy-policy",
  "/terms",
]);

// Dynamic route prefixes — a single path segment must follow the slash
const DYNAMIC_PREFIXES = ["/apps/", "/blog/", "/case-studies/"];

export function isKnownRoute(pathname: string): boolean {
  const normalized = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;

  if (STATIC_ROUTES.has(normalized)) return true;

  if (normalized === "/apps/shipr/amazon-mcf-migration") return true;

  return DYNAMIC_PREFIXES.some((prefix) => {
    if (!pathname.startsWith(prefix)) return false;
    const rest = pathname.slice(prefix.length);
    // One non-empty segment with no further slashes
    return rest.length > 0 && !rest.includes("/");
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") return handleContactRequest(request);

    // Enforce HTTPS — redirect plain HTTP to HTTPS
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // Enforce www canonical — redirect non-www to www
    if (url.hostname === "thaliatechnologies.com") {
      url.hostname = "www.thaliatechnologies.com";
      return Response.redirect(url.toString(), 301);
    }

    // Remove trailing slashes to prevent duplicate-canonical alternate pages
    if (url.pathname !== "/" && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }

    // 301 redirects for renamed app slugs — preserve backlink equity
    const legacyTarget = getLegacyRedirectTarget(url.pathname);
    if (legacyTarget) {
      url.pathname = legacyTarget;
      return Response.redirect(url.toString(), 301);
    }

    // Serve robots.txt explicitly so Cloudflare's managed AI-blocker injection
    // (which prepends Disallow rules into asset responses) cannot override our intent.
    if (url.pathname === "/robots.txt") {
      const body = [
        "# Thalia Technologies — robots.txt",
        "# Last updated: 2026-06-24",
        "",
        "User-agent: *",
        "Allow: /",
        "Disallow: /404",
        "Disallow: /*?ref=",
        "Disallow: /*?utm_",
        "",
        "# Allow AI search crawlers — AI Overviews, Gemini, Siri, Meta AI",
        "User-agent: Google-Extended",
        "Allow: /",
        "",
        "User-agent: Applebot-Extended",
        "Allow: /",
        "",
        "User-agent: meta-externalagent",
        "Allow: /",
        "",
        "# Allow AI chatbot crawlers — ChatGPT, Claude, Perplexity, Bing AI, Grok",
        "User-agent: GPTBot",
        "Allow: /",
        "",
        "User-agent: OAI-SearchBot",
        "Allow: /",
        "",
        "User-agent: ChatGPT-User",
        "Allow: /",
        "",
        "User-agent: ClaudeBot",
        "Allow: /",
        "",
        "User-agent: anthropic-ai",
        "Allow: /",
        "",
        "User-agent: Claude-Web",
        "Allow: /",
        "",
        "User-agent: PerplexityBot",
        "Allow: /",
        "",
        "User-agent: Perplexity-User",
        "Allow: /",
        "",
        "User-agent: cohere-ai",
        "Allow: /",
        "",
        "User-agent: CCBot",
        "Allow: /",
        "",
        "User-agent: Diffbot",
        "Allow: /",
        "",
        "User-agent: YouBot",
        "Allow: /",
        "",
        "Sitemap: https://www.thaliatechnologies.com/sitemap.xml",
      ].join("\n");
      return new Response(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    // Try to serve the request directly from static assets
    // (handles .js, .css, images, sitemap.xml, og-image.png, etc.)
    const assetResponse = await env.ASSETS.fetch(request);

    // Asset found — return it as-is
    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    // No static asset matched — this is an HTML route.
    // Serve the SPA shell with the correct HTTP status.
    const spaRequest = new Request(new URL("/", url).href, {
      headers: request.headers,
      method: "GET",
    });
    const spaResponse = await env.ASSETS.fetch(spaRequest);
    const status = isKnownRoute(url.pathname) ? 200 : 404;

    const response = new Response(spaResponse.body, {
      status,
      headers: spaResponse.headers,
    });

    return withRouteCanonical(response, url);
  },
};
