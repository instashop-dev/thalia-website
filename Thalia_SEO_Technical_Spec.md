
# THALIA TECHNOLOGIES — SEO TECHNICAL IMPLEMENTATION SPEC
## For AI Code Editor (Kimi Code / Cursor / GitHub Copilot)
### Domain: https://www.thaliatechnologies.com | Date: 2026-05-08

---

## 1. SERVER CONFIGURATION — 301 REDIRECTS

### 1.1 Nginx Configuration

**File:** `/etc/nginx/sites-available/thaliatechnologies.com`

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
    # Main server block — existing config continues here
}
```

**Reload:** `sudo nginx -t && sudo systemctl reload nginx`

---

### 1.2 Apache Configuration

**File:** `.htaccess` (root) or virtual host config

```apache
RewriteEngine On

# http://thaliatechnologies.com → https://www.thaliatechnologies.com
RewriteCond %{HTTP_HOST} ^thaliatechnologies\.com$ [NC]
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.thaliatechnologies.com/$1 [R=301,L]

# http://www.thaliatechnologies.com → https://www.thaliatechnologies.com
RewriteCond %{HTTP_HOST} ^www\.thaliatechnologies\.com$ [NC]
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://www.thaliatechnologies.com/$1 [R=301,L]

# https://thaliatechnologies.com → https://www.thaliatechnologies.com
RewriteCond %{HTTP_HOST} ^thaliatechnologies\.com$ [NC]
RewriteCond %{HTTPS} on
RewriteRule ^(.*)$ https://www.thaliatechnologies.com/$1 [R=301,L]
```

**Restart:** `sudo systemctl restart apache2`

---

### 1.3 Cloudflare Redirect Rules

**Dashboard:** Rules → Redirect Rules

```
When incoming requests match:
  (http.host eq "thaliatechnologies.com" and ssl ne "on") or
  (http.host eq "www.thaliatechnologies.com" and ssl ne "on") or
  (http.host eq "thaliatechnologies.com" and ssl eq "on")

Then:
  Static: https://www.thaliatechnologies.com/{http.request.uri.path}
  Status: 301
```

---

### 1.4 Next.js Redirects

**File:** `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'thaliatechnologies.com' },
        ],
        destination: 'https://www.thaliatechnologies.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

### 1.5 HSTS Security Header

**Nginx:**
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

**Apache:**
```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```

**Next.js headers:**
```javascript
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
}
```

---

### 1.6 Additional 301 Redirects

```
/spreadr → /apps/spreadr
```

**Nginx:**
```nginx
location = /spreadr {
    return 301 https://www.thaliatechnologies.com/apps/spreadr;
}
```

**Apache:**
```apache
Redirect 301 /spreadr https://www.thaliatechnologies.com/apps/spreadr
```

**Next.js:**
```javascript
{
  source: '/spreadr',
  destination: '/apps/spreadr',
  permanent: true,
}
```

---

## 2. CANONICAL TAGS

### 2.1 Next.js — Global Canonical Component

**File:** `components/CanonicalTag.jsx`

```jsx
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CanonicalTag() {
  const router = useRouter();
  const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath.split('?')[0]}`;

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
```

**Usage in `pages/_app.js`:**
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

---

### 2.2 React (non-Next.js)

**File:** `components/CanonicalTag.jsx`

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function CanonicalTag() {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `https://www.thaliatechnologies.com${location.pathname}`;
    const existing = document.querySelector('link[rel="canonical"]');
    if (existing) existing.remove();

    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
  }, [location]);

  return null;
}
```

---

### 2.3 Static HTML

Add to `<head>` of every page:
```html
<link rel="canonical" href="https://www.thaliatechnologies.com/" />
<link rel="canonical" href="https://www.thaliatechnologies.com/apps" />
<link rel="canonical" href="https://www.thaliatechnologies.com/about" />
<link rel="canonical" href="https://www.thaliatechnologies.com/apps/spreadr" />
```

---

## 3. XML SITEMAP

**File:** `public/sitemap.xml` (or equivalent)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.thaliatechnologies.com/</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.thaliatechnologies.com/apps</loc>
    <lastmod>2026-05-08</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
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
</urlset>
```

**Removed from previous sitemap:**
- `/case-studies` (has noindex tag)
- `/apps/shipr` (returns 404)
- `/spreadr` (non-apps path, 404)
- All non-www variants

---

## 4. ROBOTS.TXT

**File:** `public/robots.txt`

```
# Thalia Technologies — robots.txt
# Last updated: 2026-05-08

User-agent: *
Allow: /
Disallow: /404
Disallow: /*?ref=
Disallow: /*?utm_

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: https://www.thaliatechnologies.com/sitemap.xml
```

---

## 5. META DESCRIPTIONS

### 5.1 Reusable SEO Component

**File:** `components/SEO.jsx`

```jsx
import Head from 'next/head';

export default function SEO({ title, description, ogImage = '/og-image.jpg' }) {
  const siteName = 'Thalia Technologies';
  const defaultDescription = 'Powerful SaaS apps for Shopify, Amazon & BigCommerce. Trusted by 100,000+ merchants worldwide.';

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
```

---

### 5.2 Page-Specific Implementations

**Homepage:** `pages/index.js`
```jsx
<SEO 
  title="Ecommerce Apps for Shopify, Amazon & BigCommerce"
  description="Thalia Technologies builds powerful SaaS tools that help ecommerce businesses solve operational challenges and scale faster. Trusted by 100,000+ merchants."
/>
```

**Apps listing:** `pages/apps.js`
```jsx
<SEO 
  title="18+ Ecommerce Apps for Shopify, Amazon & BigCommerce"
  description="Browse Thalia's suite of focused SaaS apps. From Amazon importers to GST invoicing — every app solves a specific merchant problem."
/>
```

**About:** `pages/about.js`
```jsx
<SEO 
  title="About Thalia Technologies — Our Story & Mission"
  description="Founded in 2015, Thalia Technologies builds products that help 100,000+ ecommerce merchants work smarter and grow faster. Meet our team."
/>
```

**Contact:** `pages/contact.js`
```jsx
<SEO 
  title="Contact Thalia Technologies — Support & Sales"
  description="Get in touch with Thalia Technologies for app support, sales inquiries, or partnerships. We typically reply within 1 business day."
/>
```

**Careers:** `pages/careers.js`
```jsx
<SEO 
  title="Careers at Thalia Technologies — Join Our Team"
  description="Build products that 100,000+ merchants depend on. We're hiring engineers, designers, and product managers. Hybrid & flexible work."
/>
```

**Spreadr app:** `pages/apps/spreadr.js`
```jsx
<SEO 
  title="Spreadr — Amazon to Shopify Importer App"
  description="Import millions of Amazon products into your Shopify store with one click. Earn affiliate commissions or dropship. Trusted by 50,000+ merchants. 4.9★ rating."
/>
```

**Shipr app:** `pages/apps/shipr.js`
```jsx
<SEO 
  title="Shipr — Amazon FBA Fulfillment for Shopify"
  description="Connect Shopify with Amazon FBA for automated order fulfillment. Real-time inventory sync, multi-SKU support, and return management."
/>
```

**Watchlyst app:** `pages/apps/watchlyst.js`
```jsx
<SEO 
  title="Watchlyst — Price Drop Alerts for Shopify"
  description="Notify customers when product prices drop. Recover abandoned carts with automated price alert emails."
/>
```

**Connectr app:** `pages/apps/connectr.js`
```jsx
<SEO 
  title="Connectr — Shopify Amazon Integration"
  description="Sync inventory, orders, and products between Shopify and Amazon Seller Central. Multi-channel selling made simple."
/>
```

**Bolt app:** `pages/apps/bolt.js`
```jsx
<SEO 
  title="Bolt — Shopify Store Backup & Restore"
  description="Automated daily backups for your Shopify store. Restore products, themes, and data in one click."
/>
```

**Dual app:** `pages/apps/dual.js`
```jsx
<SEO 
  title="Dual — Shopify Product Duplicator"
  description="Duplicate products, variants, and images in bulk. Save hours on catalog management."
/>
```

**Outlink app:** `pages/apps/outlink.js`
```jsx
<SEO 
  title="Outlink — External Links Manager for Shopify"
  description="Add external/affiliate links to any product. Track clicks and manage outbound URLs at scale."
/>
```

**Robo app:** `pages/apps/robo.js`
```jsx
<SEO 
  title="Robo — Shopify Automation & Workflows"
  description="Automate repetitive Shopify tasks with rule-based workflows. Schedule updates, auto-tag orders, and more."
/>
```

**T2Icons app:** `pages/apps/t2icons.js`
```jsx
<SEO 
  title="T2Icons — Custom Icons for Shopify Stores"
  description="Add custom icons to product pages, collections, and navigation. SVG and icon font support."
/>
```

**Duplicate app:** `pages/apps/duplicate.js`
```jsx
<SEO 
  title="Duplicate — Shopify Store Cloner"
  description="Clone entire Shopify stores including products, collections, and settings. Perfect for multi-store operations."
/>
```

**Sleek app:** `pages/apps/sleek.js`
```jsx
<SEO 
  title="Sleek — Shopify Theme Customizer"
  description="Advanced theme customization without code. Edit CSS, inject scripts, and modify layouts visually."
/>
```

**Clever app:** `pages/apps/clever.js`
```jsx
<SEO 
  title="Clever — Smart Product Recommendations"
  description="AI-powered product recommendations for Shopify. Increase average order value with personalized upsells."
/>
```

**Super app:** `pages/apps/super.js`
```jsx
<SEO 
  title="Super — Shopify Bulk Actions"
  description="Perform bulk operations on products, orders, and customers. Filter, edit, and export at scale."
/>
```

**Clean app:** `pages/apps/clean.js`
```jsx
<SEO 
  title="Clean — Shopify Data Cleaner"
  description="Remove duplicate data, fix broken images, and optimize your Shopify store database."
/>
```

**Prime app:** `pages/apps/prime.js`
```jsx
<SEO 
  title="Prime — Shopify Subscription Manager"
  description="Manage subscription products and recurring billing on Shopify. Customer portal and dunning management."
/>
```

**Fetchr app:** `pages/apps/fetchr.js`
```jsx
<SEO 
  title="Fetchr — Shopify Data Importer"
  description="Import products, customers, and orders from CSV, Excel, or external APIs. Map fields and schedule imports."
/>
```

**CSVBox app:** `pages/apps/csvbox.js`
```jsx
<SEO 
  title="CSVBox — CSV Data Import for SaaS"
  description="Embed CSV import functionality into any SaaS app. Handle 100M+ rows with validation, transformation, and error handling."
/>
```

**Fylebox app:** `pages/apps/fylebox.js`
```jsx
<SEO 
  title="Fylebox — File Upload for Shopify"
  description="Let customers upload files with their orders. Support for images, documents, and custom file types."
/>
```

---

## 6. HEADING STRUCTURE (H1)

### 6.1 Global Rule

Every page must have exactly one `<h1>` containing the primary keyword.

---

### 6.2 Page-Specific H1s

**Homepage:**
```html
<h1>Ecommerce SaaS Apps for Shopify, Amazon & BigCommerce</h1>
```
All other headings on homepage must be `<h2>` or lower.

**Apps listing:**
```html
<h1>18+ Ecommerce Apps for Shopify, Amazon & BigCommerce</h1>
```

**About:**
```html
<h1>About Thalia Technologies — Ecommerce SaaS Company</h1>
```

**Contact:**
```html
<h1>Contact Thalia Technologies — Support & Sales</h1>
```

**Careers:**
```html
<h1>Careers at Thalia Technologies — Join Our Team</h1>
```

**Spreadr app:**
```html
<h1>Spreadr — Import Amazon Products to Shopify & Earn Affiliate Commissions</h1>
```

**Shipr app:**
```html
<h1>Shipr — Connect Shopify with Amazon FBA for Automated Fulfillment</h1>
```

**Watchlyst app:**
```html
<h1>Watchlyst — Price Drop Alerts & Back-in-Stock Notifications for Shopify</h1>
```

**Connectr app:**
```html
<h1>Connectr — Sync Shopify & Amazon Seller Central Inventory & Orders</h1>
```

**Bolt app:**
```html
<h1>Bolt — Automated Daily Backups for Shopify Stores</h1>
```

**Dual app:**
```html
<h1>Dual — Bulk Product Duplicator for Shopify</h1>
```

**Outlink app:**
```html
<h1>Outlink — External & Affiliate Link Manager for Shopify Products</h1>
```

**Robo app:**
```html
<h1>Robo — Shopify Task Automation & Workflow Engine</h1>
```

**T2Icons app:**
```html
<h1>T2Icons — Custom Icon Library for Shopify Themes</h1>
```

**Duplicate app:**
```html
<h1>Duplicate — Clone Entire Shopify Stores Including Products & Settings</h1>
```

**Sleek app:**
```html
<h1>Sleek — Visual Theme Customizer for Shopify Without Code</h1>
```

**Clever app:**
```html
<h1>Clever — AI-Powered Product Recommendations for Shopify</h1>
```

**Super app:**
```html
<h1>Super — Bulk Product, Order & Customer Actions for Shopify</h1>
```

**Clean app:**
```html
<h1>Clean — Remove Duplicates & Optimize Your Shopify Store Data</h1>
```

**Prime app:**
```html
<h1>Prime — Subscription Management & Recurring Billing for Shopify</h1>
```

**Fetchr app:**
```html
<h1>Fetchr — Bulk Data Importer for Shopify from CSV & APIs</h1>
```

**CSVBox app:**
```html
<h1>CSVBox — CSV Data Import Infrastructure for SaaS Applications</h1>
```

**Fylebox app:**
```html
<h1>Fylebox — Customer File Uploads for Shopify Orders</h1>
```

---

## 7. SCHEMA MARKUP (JSON-LD)

### 7.1 Organization Schema

**File:** `components/OrganizationSchema.jsx`

```jsx
export default function OrganizationSchema() {
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
      "https://www.linkedin.com/company/thalia-technologies"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Usage:** Add to `pages/_app.js` to appear on every page.

---

### 7.2 SoftwareApplication Schema

**File:** `components/AppSchema.jsx`

```jsx
export default function AppSchema({ 
  name, 
  description, 
  rating, 
  ratingCount, 
  price = "0",
  operatingSystem = "Shopify",
  applicationCategory = "BusinessApplication",
  image = "/app-icon.png"
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": price,
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
}
```

**Usage on Spreadr page:**
```jsx
<AppSchema 
  name="Spreadr"
  description="Import millions of Amazon products into your Shopify store with one click."
  rating="4.9"
  ratingCount="50000"
  price="0"
  operatingSystem="Shopify"
  image="https://www.thaliatechnologies.com/apps/spreadr-icon.png"
/>
```

---

## 8. COMPLETE `_app.js` (Next.js)

**File:** `pages/_app.js`

```javascript
import Head from 'next/head';
import { useRouter } from 'next/router';
import OrganizationSchema from '../components/OrganizationSchema';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://www.thaliatechnologies.com${router.asPath.split('?')[0]}`;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content="Powerful SaaS apps for Shopify, Amazon & BigCommerce. Trusted by 100,000+ merchants." />
      </Head>
      <OrganizationSchema />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

---

## 9. COMPLETE `next.config.js`

**File:** `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
      {
        source: '/spreadr',
        destination: '/apps/spreadr',
        permanent: true,
      },
    ];
  },

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

## 10. VERIFICATION COMMANDS

### 10.1 301 Redirects
```bash
curl -I http://thaliatechnologies.com/
curl -I http://www.thaliatechnologies.com/
curl -I https://thaliatechnologies.com/
# Expected: HTTP/2 301 + Location: https://www.thaliatechnologies.com/
```

### 10.2 Canonical Tags
```bash
curl -s https://www.thaliatechnologies.com/apps/spreadr | grep -o 'rel="canonical" href="[^"]*"'
# Expected: rel="canonical" href="https://www.thaliatechnologies.com/apps/spreadr"
```

### 10.3 Meta Descriptions
```bash
curl -s https://www.thaliatechnologies.com/ | grep -o 'name="description" content="[^"]*"'
# Expected: name="description" content="Thalia Technologies builds..."
```

### 10.4 Schema Markup
```bash
curl -s https://www.thaliatechnologies.com/ | grep -o '"@type":"Organization"'
# Expected: "@type":"Organization"
```

### 10.5 Sitemap Validation
```bash
curl -s https://www.thaliatechnologies.com/sitemap.xml | grep -c "www.thaliatechnologies.com"
# Expected: 24 (all URLs use www)

curl -s https://www.thaliatechnologies.com/sitemap.xml | grep -c "thaliatechnologies.com""
# Expected: 0 (no non-www URLs)
```

---

## 11. GSC MANUAL ACTIONS (Non-Code)

After code deployment, perform these in Google Search Console:

1. **Sitemaps** → Remove old sitemap → Add `https://www.thaliatechnologies.com/sitemap.xml`
2. **URL Inspection** → Test `https://www.thaliatechnologies.com/apps/spreadr` → Request indexing
3. **URL Inspection** → Test `https://www.thaliatechnologies.com/apps` → Request indexing
4. **URL Inspection** → Test `https://www.thaliatechnologies.com/about` → Request indexing
5. **URL Inspection** → Test `https://www.thaliatechnologies.com/apps/csvbox` → Request indexing
6. **URL Inspection** → Test `https://www.thaliatechnologies.com/apps/probulkpriceeditor` → Request indexing
7. **Settings** → Preferred domain → Select `www.thaliatechnologies.com`

---

## 12. FILE MANIFEST

| File | Purpose | Framework |
|------|---------|-----------|
| `components/CanonicalTag.jsx` | Global canonical tag | Next.js |
| `components/SEO.jsx` | Meta descriptions & OG tags | Next.js |
| `components/OrganizationSchema.jsx` | Organization JSON-LD | Next.js |
| `components/AppSchema.jsx` | SoftwareApplication JSON-LD | Next.js |
| `pages/_app.js` | Global layout with all SEO | Next.js |
| `next.config.js` | Redirects & HSTS headers | Next.js |
| `public/sitemap.xml` | XML sitemap | All |
| `public/robots.txt` | Crawler directives | All |
| `nginx.conf` or `.htaccess` | Server-level redirects | Server |

---

*Technical Spec | thaliatechnologies.com | 2026-05-08*
