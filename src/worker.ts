interface Env {
  ASSETS: { fetch(req: Request): Promise<Response> };
}

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@thaliatechnologies.com";

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
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
    const legacyTarget = LEGACY_SLUG_REDIRECTS[url.pathname];
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

    return new Response(spaResponse.body, {
      status,
      headers: spaResponse.headers,
    });
  },
};
