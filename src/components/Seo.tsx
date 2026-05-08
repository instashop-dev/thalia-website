import { Helmet } from "react-helmet";

const SITE_NAME = "Thalia Technologies";
const SITE_URL = "https://www.thaliatechnologies.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;

type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const Seo = ({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  structuredData,
}: SeoProps) => {
  const canonical = `${SITE_URL}${path}`;
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/apps?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/thalia-logo.jpg`,
    description:
      "Powerful SaaS apps for Shopify, Amazon & BigCommerce. Trusted by 100,000+ merchants.",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dadar West, Prabhadevi",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400025",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@thaliatechnologies.com",
    },
    sameAs: ["https://www.linkedin.com/company/thalia-technologies"],
  };
  const extraSchemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  const allSchemas = [websiteSchema, organizationSchema, ...extraSchemas];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <script type="application/ld+json">{JSON.stringify(allSchemas)}</script>
    </Helmet>
  );
};

export default Seo;
