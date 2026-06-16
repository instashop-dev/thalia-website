interface Env {
  ASSETS: { fetch(req: Request): Promise<Response> };
}

// 301 redirects for app slugs renamed for better SEO
const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
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

// All static routes in the SPA
const STATIC_ROUTES = new Set([
  "/",
  "/about",
  "/apps",
  "/contact",
  "/careers",
  "/blog",
  "/case-studies",
]);

// Dynamic route prefixes — a single path segment must follow the slash
const DYNAMIC_PREFIXES = ["/apps/", "/blog/", "/case-studies/"];

function isKnownRoute(pathname: string): boolean {
  const normalized = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;

  if (STATIC_ROUTES.has(normalized)) return true;

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
    const legacyTarget = LEGACY_SLUG_REDIRECTS[url.pathname];
    if (legacyTarget) {
      url.pathname = legacyTarget;
      return Response.redirect(url.toString(), 301);
    }

    // Try to serve the request directly from static assets
    // (handles .js, .css, images, robots.txt, sitemap.xml, og-image.png, etc.)
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

    return new Response(spaResponse.body, {
      status,
      headers: spaResponse.headers,
    });
  },
};
