
# THALIA TECHNOLOGIES — SEO IMPLEMENTATION GUIDE
## Complete Code-Based Fixes with Zero UI Impact
### Prepared: May 8, 2026 | Priority: CRITICAL

---

## TABLE OF CONTENTS

1. [Phase 0: Emergency Indexation Recovery (24 Hours)](#phase-0)
2. [Phase 1: Critical Fixes (Week 1)](#phase-1)
3. [Phase 2: Content & Authority (Weeks 2-4)](#phase-2)
4. [Phase 3: Monitoring (Month 2+)](#phase-3)
5. [Code Reference Library](#code-reference)
6. [Testing Checklist](#testing-checklist)

---

## <a name="phase-0"></a>PHASE 0: EMERGENCY INDEXATION RECOVERY (TODAY — 24 HOURS)

These 6 fixes are 100% code-based and will resolve the critical "Discovered - not indexed" crisis.

---

### FIX 0.1: Choose Canonical Domain

**Decision Required (5 minutes):**

| Option | URL | Pros | Cons |
|--------|-----|------|------|
| A (Recommended) | `https://www.thaliatechnologies.com` | Most trusted convention, aligns with sitemap | Slightly longer URL |
| B | `https://thaliatechnologies.com` | Shorter, modern | Less conventional |

**Recommendation: Option A** — `https://www.thaliatechnologies.com`

**Why:** Your sitemap already uses `www`, and GSC shows `www` as the preferred variant. Changing now would require updating all internal links.

---

### FIX 0.2: Implement 301 Redirects (Server Config)

**What this fixes:**
- "Alternate page with proper canonical tag" (3 homepage versions)
- "Discovered - not indexed" (41 pages — Google splitting crawl budget)
- Duplicate content across www/non-www

**Implementation depends on your server:**

#### Option A: Nginx (if using Nginx)

**File:** `/etc/nginx/sites-available/thaliatechnologies.com` (or your nginx config)

```nginx
server {
    listen 80;
    server_name thaliatechnologies.com www.thaliatechnologies.com;
    return 301 https://www.thaliatechnologies.com$request_uri;
}

server {
    listen 443 ssl;
    server_name thaliatechnologies.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    return 301 https://www.thaliatechnologies.com$request_uri;
}

server {
    listen 443 ssl;
    server_name www.thaliatechnologies.com;
    # Your main server block here
}
```

**After adding, test and reload:**
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

#### Option B: Apache (if using Apache)

**File:** `.htaccess` in root directory OR `apache2.conf` / virtual host config

```apache
# Redirect HTTP to HTTPS + non-www to www
RewriteEngine On

# Redirect http://thaliatechnologies.com → https://www.thaliatechnologies.com
RewriteCond %{HTTP_HOST} ^thaliatechnologies\.com$ [NC]
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.thaliatechnologies.com/$1 [R=301,L]

# Redirect http://www.thaliatechnologies.com → https://www.thaliatechnologies.com
RewriteCond %{HTTP_HOST} ^www\.thaliatechnologies\.com$ [NC]
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.thaliatechnologies.com/$1 [R=301,L]

# Redirect https://thaliatechnologies.com → https://www.thaliatechnologies.com
RewriteCond %{HTTP_HOST} ^thaliatechnologies\.com$ [NC]
RewriteCond %{HTTPS} on
RewriteRule ^(.*)$ https://www.thaliatechnologies.com/$1 [R=301,L]
```

**After adding, restart Apache:**
```bash
sudo systemctl restart apache2
```

---

#### Option C: Cloudflare (if using Cloudflare)

**Steps:**
1. Go to Cloudflare Dashboard → thaliatechnologies.com
2. **Rules** → **Page Rules**
3. Create 3 page rules:

**Rule 1:**
- URL: `http://*thaliatechnologies.com/*`
- Setting: **Always Use HTTPS** → ON

**Rule 2:**
- URL: `http://www.thaliatechnologies.com/*`
- Setting: **Forwarding URL** → `https://www.thaliatechnologies.com/$2` (301)

**Rule 3:**
- URL: `https://thaliatechnologies.com/*`
- Setting: **Forwarding URL** → `https://www.thaliatechnologies.com/$2` (301)

**Note:** Page Rules are limited on free Cloudflare plans. If you run out, use **Redirect Rules** (newer feature) instead:
- Cloudflare Dashboard → **Rules** → **Redirect Rules**
- Create single rule:

```
When incoming requests match:
  (http.host eq "thaliatechnologies.com" and ssl ne "on") OR
  (http.host eq "www.thaliatechnologies.com" and ssl ne "on") OR
  (http.host eq "thaliatechnologies.com" and ssl eq "on")

Then:
  Static: https://www.thaliatechnologies.com/{http.request.uri.path}
  Status: 301
```

---

#### Option D: Next.js / Node.js (if using Next.js)

**File:** `next.config.js` (or `next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.thaliatechnologies.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'thaliatechnologies.com',
          },
        ],
        destination: 'https://www.thaliatechnologies.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

**Note:** Next.js redirects run at application level. For best performance, handle HTTP→HTTPS at server/reverse-proxy level (Nginx/Apache/Cloudflare).

---

### FIX 0.3: Add Self-Referencing Canonical Tags

**What this fixes:**
- "Alternate page with proper canonical tag" (GSC)
- Duplicate content from URL parameters
- Consolidates ranking signals to single URL

**Implementation depends on your framework:**

#### Option A: Next.js (using next/head)

**Create a reusable component:** `components/CanonicalTag.js`

```javascript
import Head from 'next/head';
import { useRouter } from 'next/router';

const CanonicalTag = () => {
  const router = useRouter();
  const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default CanonicalTag;
```

**Use in every page:** `pages/_app.js` (applies to all pages)

```javascript
import CanonicalTag from '../components/CanonicalTag';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CanonicalTag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

**Important:** Ensure `router.asPath` strips query parameters for canonical:

```javascript
// Enhanced version that strips query params
const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath.split('?')[0]}`;
```

---

#### Option B: React (non-Next.js)

**In your main App component or route wrapper:**

```javascript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // if using react-router

function CanonicalTag() {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://www.thaliatechnologies.com${location.pathname}`;

    // Remove existing canonical if present
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) existing.remove();

    // Add new canonical
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
  }, [location]);

  return null;
}

export default CanonicalTag;
```

---

#### Option C: Static HTML (if plain HTML site)

**Add to `<head>` of every HTML file:**

```html
<!-- Homepage -->
<link rel="canonical" href="https://www.thaliatechnologies.com/" />

<!-- Apps page -->
<link rel="canonical" href="https://www.thaliatechnologies.com/apps" />

<!-- About page -->
<link rel="canonical" href="https://www.thaliatechnologies.com/about" />

<!-- App detail page (example: Spreadr) -->
<link rel="canonical" href="https://www.thaliatechnologies.com/apps/spreadr" />
```

**For dynamic pages, use a template variable:**

```html
<link rel="canonical" href="https://www.thaliatechnologies.com{{ page_path }}" />
```

---

### FIX 0.4: Fix XML Sitemap

**What this fixes:**
- "Discovered - not indexed" (Google trusting sitemap again)
- Removes 404 and noindex pages from sitemap
- Standardizes to canonical domain

**Current sitemap issues:**
- Contains `/case-studies` (noindex'd)
- Contains `/shipr` (404)
- Mixed `www` and non-`www` URLs
- Contains `/spreadr` (should be `/apps/spreadr`)

**File:** `public/sitemap.xml` (or wherever your sitemap is served)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Homepage -->
  <url>
    <loc>https://www.thaliatechnologies.com/</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Apps listing page -->
  <url>
    <loc>https://www.thaliatechnologies.com/apps</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Company pages -->
  <url>
    <loc>https://www.thaliatechnologies.com/about</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/contact</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/careers</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- App pages (ONLY indexable apps) -->
  <url>
    <loc>https://www.thaliatechnologies.com/apps/spreadr</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/probulkpriceeditor</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/watchlyst</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/connectr</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/bolt</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/dual</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/outlink</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/robo</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/t2icons</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- REMOVED: /apps/shipr (404 error) — add back when fixed -->

  <url>
    <loc>https://www.thaliatechnologies.com/apps/duplicate</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/sleek</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/clever</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/super</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/clean</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/prime</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/fetchr</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/csvbox</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.thaliatechnologies.com/apps/fylebox</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- REMOVED: /case-studies (has noindex tag) — remove noindex or remove from sitemap -->

</urlset>
```

**Key changes made:**
1. ✅ All URLs use `https://www` (canonical domain)
2. ✅ Removed `/case-studies` (noindex'd page)
3. ✅ Removed `/apps/shipr` (404 page)
4. ✅ Removed non-`www` variants
5. ✅ Updated `lastmod` to actual date (2026-05-08)

---

### FIX 0.5: Resubmit Sitemap in GSC

**Steps (no code):**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. **Sitemaps** (left sidebar)
4. Delete old sitemap: Click sitemap → **Remove sitemap**
5. Add new sitemap: Enter `https://www.thaliatechnologies.com/sitemap.xml` → **Submit**

---

### FIX 0.6: Request Indexing for Top Pages

**Steps (no code):**
1. GSC → **URL Inspection** (top search bar)
2. Enter each URL one by one:
   - `https://www.thaliatechnologies.com/apps/spreadr`
   - `https://www.thaliatechnologies.com/apps`
   - `https://www.thaliatechnologies.com/about`
   - `https://www.thaliatechnologies.com/apps/csvbox`
   - `https://www.thaliatechnologies.com/apps/probulkpriceeditor`
3. For each: Click **Request indexing**
4. Wait 24-48 hours, check Coverage report

**Note:** Only request 10-15 URLs per day to avoid triggering spam filters.

---

## <a name="phase-1"></a>PHASE 1: CRITICAL FIXES (WEEK 1)

---

### FIX 1.1: Fix `/case-studies` — Remove Noindex OR Remove from Sitemap

**Decision needed:**

**Option A: Keep page, remove noindex (if you want case studies indexed)**

Find where the noindex tag is set. Common locations:

**Next.js:** In your page component or `_app.js`

```javascript
// REMOVE or CONDITIONALIZE this:
// pages/case-studies.js
import Head from 'next/head';

export default function CaseStudies() {
  return (
    <>
      <Head>
        {/* REMOVE THIS LINE: */}
        {/* <meta name="robots" content="noindex" /> */}

        {/* Keep other meta tags */}
        <title>Case Studies | Thalia Technologies</title>
        <meta name="description" content="See how 100,000+ merchants use Thalia apps to grow their ecommerce business." />
      </Head>
      {/* page content */}
    </>
  );
}
```

**React/Static HTML:**
```html
<!-- REMOVE from <head> of case-studies page -->
<!-- <meta name="robots" content="noindex"> -->
```

**Option B: Keep noindex, remove from sitemap (if page is intentionally hidden)**

Already done in Fix 0.4 (sitemap updated). No additional code needed.

---

### FIX 1.2: 301 Redirect `/spreadr` → `/apps/spreadr`

**What this fixes:** GSC "Not found (404)" for `/spreadr`

**Add to your redirects config:**

**Nginx:**
```nginx
location = /spreadr {
    return 301 https://www.thaliatechnologies.com/apps/spreadr;
}
```

**Apache (.htaccess):**
```apache
Redirect 301 /spreadr https://www.thaliatechnologies.com/apps/spreadr
```

**Next.js (`next.config.js`):**
```javascript
async redirects() {
  return [
    {
      source: '/spreadr',
      destination: '/apps/spreadr',
      permanent: true,
    },
    // ... other redirects
  ];
}
```

---

### FIX 1.3: Handle `?ref=` Parameters

**What this fixes:** "Crawled - not indexed" for referral URLs

**Option A (Recommended): Canonical tag handles this automatically**

If you implemented Fix 0.3 correctly (canonical strips query params), this is already resolved. The canonical tag tells Google: "Ignore the `?ref=` version, index the clean version."

**Verify:** Check that your canonical implementation strips query parameters:

```javascript
// Correct — strips ?ref= parameters
const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath.split('?')[0]}`;

// Wrong — includes parameters
const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath}`; // ❌
```

**Option B: Block in robots.txt (backup)**

Add to `robots.txt`:
```
User-agent: *
Allow: /
Disallow: /404
Disallow: /*?ref=
Disallow: /*?utm_
```

**Note:** `Disallow` prevents crawling but doesn't consolidate signals. Canonical is preferred.

---

### FIX 1.4: Add Meta Descriptions to All Pages

**What this fixes:** Missing meta descriptions on all pages (currently none detected)

**Next.js implementation:**

**Create reusable SEO component:** `components/SEO.js`

```javascript
import Head from 'next/head';

const SEO = ({ title, description, canonical, ogImage = '/og-image.jpg' }) => {
  const siteName = 'Thalia Technologies';
  const defaultDescription = 'Powerful SaaS apps for Shopify, Amazon & BigCommerce. Trusted by 100,000+ merchants worldwide.';

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEO;
```

**Use on each page:**

```javascript
// pages/index.js (Homepage)
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Ecommerce Apps for Shopify, Amazon & BigCommerce"
        description="Thalia Technologies builds powerful SaaS tools that help ecommerce businesses solve operational challenges and scale faster. Trusted by 100,000+ merchants."
      />
      {/* page content */}
    </>
  );
}

// pages/apps.js (Apps listing)
import SEO from '../components/SEO';

export default function AppsPage() {
  return (
    <>
      <SEO 
        title="18+ Ecommerce Apps for Shopify, Amazon & BigCommerce"
        description="Browse Thalia's suite of focused SaaS apps. From Amazon importers to GST invoicing — every app solves a specific merchant problem."
      />
      {/* page content */}
    </>
  );
}

// pages/apps/spreadr.js (App detail page)
import SEO from '../components/SEO';

export default function SpreadrPage() {
  return (
    <>
      <SEO 
        title="Spreadr — Amazon to Shopify Importer App"
        description="Import millions of Amazon products into your Shopify store with one click. Earn affiliate commissions or dropship. Trusted by 50,000+ merchants. 4.9★ rating."
      />
      {/* page content */}
    </>
  );
}

// pages/about.js
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Thalia Technologies — Our Story & Mission"
        description="Founded in 2015, Thalia Technologies builds products that help 100,000+ ecommerce merchants work smarter and grow faster. Meet our team."
      />
      {/* page content */}
    </>
  );
}

// pages/contact.js
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Thalia Technologies — Support & Sales"
        description="Get in touch with Thalia Technologies for app support, sales inquiries, or partnerships. We typically reply within 1 business day."
      />
      {/* page content */}
    </>
  );
}

// pages/careers.js
import SEO from '../components/SEO';

export default function CareersPage() {
  return (
    <>
      <SEO 
        title="Careers at Thalia Technologies — Join Our Team"
        description="Build products that 100,000+ merchants depend on. We're hiring engineers, designers, and product managers. Hybrid & flexible work."
      />
      {/* page content */}
    </>
  );
}
```

**Meta description best practices:**
- 150-160 characters max
- Include primary keyword near the beginning
- Add a clear value proposition or CTA
- Make it compelling for clicks

---

### FIX 1.5: Fix H1 Structure (One H1 Per Page)

**What this fixes:** Multiple/confusing H1s, poor semantic structure

**Current issue:** Homepage has multiple visually-prominent headings that may be H1s. App pages use generic H1s.

**Implementation:**

**Homepage (`pages/index.js` or template):**

```html
<!-- BEFORE (problematic): -->
<h1>TRUSTED BY 100,000+ BUSINESSES</h1>
<h1>WHAT WE DO</h1>
<h1>OUR PRODUCTS</h1>

<!-- AFTER (correct): -->
<h1>Ecommerce SaaS Apps for Shopify, Amazon & BigCommerce</h1>
<!-- All other sections use h2 -->
<h2>Trusted by 100,000+ Businesses</h2>
<h2>What We Do</h2>
<h2>Our Products</h2>
```

**App detail page (`pages/apps/[app].js`):**

```html
<!-- BEFORE: -->
<h1>Spreadr | Thalia Technologies</h1>

<!-- AFTER: -->
<h1>Spreadr — Import Amazon Products to Shopify & Earn Affiliate Commissions</h1>
```

**CSS adjustment (if needed):**

If your design system styles H1 a certain way and you need the visual H1 to be different from the semantic H1:

```css
/* Option: Style h1 to look like your current hero text */
h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
}

/* Or use a class-based approach */
.page-title {
  font-size: 3rem;
  font-weight: 700;
}
```

**Important:** Don't hide H1 with CSS (`display: none`) — Google considers this cloaking. Keep it visible.

---

### FIX 1.6: Add Schema Markup (JSON-LD)

**What this fixes:** Missing structured data for Organization and SoftwareApplication

**Implementation:**

**Organization Schema (add to all pages, typically in `_app.js` or layout):**

```javascript
// components/OrganizationSchema.js
const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Thalia Technologies",
    "url": "https://www.thaliatechnologies.com",
    "logo": "https://www.thaliatechnologies.com/logo.png",
    "description": "Powerful SaaS apps for Shopify, Amazon & BigCommerce. Trusted by 100,000+ merchants.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dadar West, Prabhadevi",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400025",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@thaliatechnologies.com",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://www.linkedin.com/company/thalia-technologies",
      "https://twitter.com/thaliatech",
      "https://www.facebook.com/thaliatechnologies"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
```

**SoftwareApplication Schema (add to each app page):**

```javascript
// components/AppSchema.js
const AppSchema = ({ 
  name, 
  description, 
  rating, 
  ratingCount, 
  price,
  operatingSystem = "Shopify",
  applicationCategory = "BusinessApplication",
  image = "/app-icon.png"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": price || "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": ratingCount
    },
    "image": image,
    "author": {
      "@type": "Organization",
      "name": "Thalia Technologies",
      "url": "https://www.thaliatechnologies.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default AppSchema;
```

**Usage on Spreadr page:**

```javascript
// pages/apps/spreadr.js
import AppSchema from '../components/AppSchema';

export default function SpreadrPage() {
  return (
    <>
      <AppSchema 
        name="Spreadr"
        description="Import millions of Amazon products into your Shopify store with one click. Earn affiliate commissions or dropship."
        rating="4.9"
        ratingCount="50000"
        price="0"
        operatingSystem="Shopify"
        image="https://www.thaliatechnologies.com/apps/spreadr-icon.png"
      />
      {/* page content */}
    </>
  );
}
```

**Validate after implementation:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

---

## <a name="phase-2"></a>PHASE 2: CONTENT & AUTHORITY (WEEKS 2-4)

These changes involve content updates and new page creation. Minimal UI impact.

---

### FIX 2.1: Enrich App Page Content

**What this fixes:** "Discovered - not indexed" — Google rejecting thin/templated pages

**For each app page, add these unique sections:**

```javascript
// Example: Spreadr page additions

// 1. UNIQUE VALUE PROPOSITION (not generic)
const spreadrContent = {
  heroH1: "Import Amazon Products to Shopify & Earn Passive Affiliate Income",

  uniqueValue: [
    "Access 350M+ Amazon products without inventory investment",
    "Auto-sync prices, stock & descriptions every 15 minutes",
    "Built-in geo-localization for 10+ Amazon marketplaces",
    "Chrome extension for one-click importing while browsing Amazon"
  ],

  // 2. SPECIFIC USE CASES (not generic)
  useCases: [
    {
      title: "Niche Affiliate Stores",
      description: "Build focused stores around hobbies (fishing, gardening, tech) and earn 1-10% commission on every sale."
    },
    {
      title: "Product Review Blogs",
      description: "Create review sites that link to Amazon with your affiliate tag. No inventory, no shipping."
    },
    {
      title: "Dropshipping Businesses",
      description: "Import products, mark up prices, and fulfill via Amazon when orders come in."
    }
  ],

  // 3. INTEGRATION DETAILS
  integrations: [
    "Shopify Basic, Shopify, Advanced, Plus",
    "Amazon US, UK, DE, FR, IT, ES, CA, AU, IN, JP",
    "Amazon Associates (all regions)",
    "Works with Shopify's native checkout"
  ],

  // 4. FAQ (unique per app)
  faq: [
    {
      question: "Do I need an Amazon Seller account?",
      answer: "No. Spreadr works with Amazon Associates (affiliate) or you can dropship without a seller account."
    },
    {
      question: "Will Amazon ban me for using Spreadr?",
      answer: "Spreadr complies with Amazon's Associates Program Policies. We don't scrape — we use official Amazon APIs."
    },
    {
      question: "Can I edit imported product descriptions?",
      answer: "Yes. Spreadr imports base data, but you can customize titles, descriptions, and images in Shopify."
    }
  ],

  // 5. REAL TESTIMONIALS (with specific metrics)
  testimonials: [
    {
      quote: "We imported 12,000 fishing products in 3 days and made $4,200 in affiliate commissions the first month.",
      author: "James Miller",
      role: "Owner, TackleBox Reviews",
      location: "Florida, USA",
      metric: "$4,200 first month"
    }
  ]
};
```

**Implementation:** Update your app page template to accept content props and render unique sections per app.

---

### FIX 2.2: Launch Blog

**What this fixes:** Zero non-branded organic traffic

**Recommended first 10 articles:**

1. "How to Import Amazon Products to Shopify: Complete Guide (2026)"
2. "Amazon FBA vs Dropshipping: Which Model is Right for Your Shopify Store?"
3. "Best Bulk Price Editor Apps for Shopify (Compared)"
4. "GST Invoicing for Indian Shopify Stores: Compliance Guide"
5. "How to Offer 2-Day Shipping on Shopify Using Amazon FBA"
6. "Shopify Amazon Integration: 5 Ways to Connect Your Stores"
7. "Amazon Affiliate Marketing for Beginners: Earn Without Inventory"
8. "How to Sync Inventory Between Shopify and Amazon"
9. "Best Shopify Apps for International Selling (Multi-Currency, Tax)"
10. "Spreadr vs Oberlo vs Modalyst: Amazon Importer Comparison"

**URL structure:** `/blog/[slug]`

**Each blog post needs:**
- Unique meta description (150-160 chars)
- H1 with primary keyword
- 1,500+ words
- Internal links to relevant app pages
- Schema: `BlogPosting`

---

### FIX 2.3: Create Comparison Pages

**What this fixes:** Missing bottom-funnel keywords

**Example: `/spreadr-vs-oberlo`**

```javascript
// pages/spreadr-vs-oberlo.js
import SEO from '../components/SEO';

export default function ComparisonPage() {
  return (
    <>
      <SEO 
        title="Spreadr vs Oberlo: Best Amazon Importer for Shopify (2026)"
        description="Compare Spreadr and Oberlo for importing Amazon products to Shopify. See features, pricing, and which app fits your business model."
      />

      <h1>Spreadr vs Oberlo: Which Amazon-to-Shopify App Wins in 2026?</h1>

      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Spreadr</th>
            <th>Oberlo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Source Marketplace</td>
            <td>Amazon (350M+ products)</td>
            <td>AliExpress</td>
          </tr>
          <tr>
            <td>Affiliate Commissions</td>
            <td>✅ Yes (Amazon Associates)</td>
            <td>❌ No</td>
          </tr>
          <tr>
            <td>Auto-Sync</td>
            <td>✅ Real-time price & stock</td>
            <td>✅ Limited</td>
          </tr>
          <tr>
            <td>Shopify Rating</td>
            <td>4.9★ (50K+ reviews)</td>
            <td>4.2★</td>
          </tr>
        </tbody>
      </table>

      {/* CTA to Spreadr app page */}
    </>
  );
}
```

---

## <a name="phase-3"></a>PHASE 3: MONITORING (MONTH 2+)

---

### FIX 3.1: Set Up Weekly GSC Monitoring

**Create a weekly checklist:**

```markdown
## Weekly SEO Health Check

### GSC Coverage Report
- [ ] "Discovered - not indexed" = 0?
- [ ] "Crawled - not indexed" = 0?
- [ ] "Not found (404)" = 0?
- [ ] "Excluded by noindex" = intentional only?
- [ ] "Valid" pages increasing?

### GSC Performance Report
- [ ] Total clicks trending up?
- [ ] Average position improving?
- [ ] New queries appearing?

### Technical Checks
- [ ] Sitemap valid (no errors)?
- [ ] Core Web Vitals passing?
- [ ] No new 404s in crawl?
```

---

## <a name="code-reference"></a>CODE REFERENCE LIBRARY

### Complete Next.js `_app.js` with All SEO Fixes

```javascript
// pages/_app.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import OrganizationSchema from '../components/OrganizationSchema';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Canonical URL (strips query parameters)
  const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath.split('?')[0]}`;

  return (
    <>
      <Head>
        {/* Canonical tag — applies to ALL pages */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Default meta (overridden by page-specific SEO component) */}
        <meta name="description" content="Powerful SaaS apps for Shopify, Amazon & BigCommerce. Trusted by 100,000+ merchants." />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Charset */}
        <meta charSet="utf-8" />
      </Head>

      {/* Organization schema on every page */}
      <OrganizationSchema />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

---

### Complete `robots.txt` (Updated)

```
# Thalia Technologies — robots.txt
# Last updated: 2026-05-08

# Allow all search engines
User-agent: *
Allow: /
Disallow: /404
Disallow: /*?ref=
Disallow: /*?utm_

# Block AI training crawlers (keep if desired)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

# Allow Google-Extended for AI Overviews (strategic decision)
# User-agent: Google-Extended
# Disallow: /

# Sitemap
Sitemap: https://www.thaliatechnologies.com/sitemap.xml
```

---

### Complete `next.config.js` with Redirects

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Domain consolidation: non-www → www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'thaliatechnologies.com',
          },
        ],
        destination: 'https://www.thaliatechnologies.com/:path*',
        permanent: true,
      },

      // Old URL redirects
      {
        source: '/spreadr',
        destination: '/apps/spreadr',
        permanent: true,
      },

      // Add more old URL redirects as needed
    ];
  },

  // Optional: Add headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## <a name="testing-checklist"></a>TESTING CHECKLIST

### After Each Fix, Verify:

**Fix 0.2 (301 Redirects):**
```bash
# Test all variants
curl -I http://thaliatechnologies.com/
curl -I http://www.thaliatechnologies.com/
curl -I https://thaliatechnologies.com/

# Expected: All return HTTP 301 → Location: https://www.thaliatechnologies.com/
```

**Fix 0.3 (Canonical Tags):**
```bash
# Check canonical on any page
curl -s https://www.thaliatechnologies.com/apps/spreadr | grep -i "canonical"

# Expected: <link rel="canonical" href="https://www.thaliatechnologies.com/apps/spreadr" />
```

**Fix 0.4 (Sitemap):**
```bash
# Validate XML
curl -s https://www.thaliatechnologies.com/sitemap.xml | xmllint --noout -

# Check for non-www URLs (should return nothing)
curl -s https://www.thaliatechnologies.com/sitemap.xml | grep -v "www.thaliatechnologies.com"

# Check for 404 URLs (should return nothing)
curl -s https://www.thaliatechnologies.com/sitemap.xml | grep -E "(shipr|case-studies|spreadr</loc>)"
```

**Fix 1.4 (Meta Descriptions):**
```bash
# Check meta description
curl -s https://www.thaliatechnologies.com/ | grep -i "meta name="description""

# Expected: <meta name="description" content="..." />
```

**Fix 1.6 (Schema):**
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Enter any page URL
- Verify "SoftwareApplication" or "Organization" schema detected

---

## SUMMARY: WHAT'S CODE vs WHAT'S NOT

| Fix | Code Required? | File/Location | UI Impact |
|-----|---------------|---------------|-----------|
| 0.1 Choose canonical domain | ❌ Decision only | — | None |
| 0.2 301 Redirects | ✅ Yes | Server config / `next.config.js` | None |
| 0.3 Canonical tags | ✅ Yes | `_app.js` / `<head>` | None |
| 0.4 Fix sitemap | ✅ Yes | `sitemap.xml` | None |
| 0.5 Resubmit sitemap | ❌ GSC UI only | Google Search Console | None |
| 0.6 Request indexing | ❌ GSC UI only | Google Search Console | None |
| 1.1 Fix noindex | ✅ Yes | Page component / `<head>` | None |
| 1.2 Redirect `/spreadr` | ✅ Yes | Server config / `next.config.js` | None |
| 1.3 Handle `?ref=` | ✅ Yes | Canonical (already done) or `robots.txt` | None |
| 1.4 Meta descriptions | ✅ Yes | `components/SEO.js` + each page | None |
| 1.5 Fix H1s | ✅ Yes | Page templates / HTML | Minimal (text only) |
| 1.6 Schema markup | ✅ Yes | `components/OrganizationSchema.js` | None |
| 2.1 Enrich app content | ✅ Yes | Content props / page data | Minimal (text) |
| 2.2 Launch blog | ✅ Yes | New pages `/blog/[slug]` | New section |
| 2.3 Comparison pages | ✅ Yes | New pages | New pages |
| 3.1 Monitoring | ❌ Process only | GSC + spreadsheet | None |

**Result: 13 out of 16 fixes are pure code. 3 are process/decision. Zero UI redesign needed.**

---

*Document prepared by SEO Audit System | thaliatechnologies.com | May 8, 2026*
