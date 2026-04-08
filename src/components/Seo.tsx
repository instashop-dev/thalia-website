import { Helmet } from "react-helmet";

const SITE_NAME = "Thalia Technologies";
const SITE_URL = "https://thaliatechnologies.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
};

const Seo = ({ title, description, path = "/", image = DEFAULT_OG_IMAGE, noindex = false }: SeoProps) => {
  const canonical = `${SITE_URL}${path}`;
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
