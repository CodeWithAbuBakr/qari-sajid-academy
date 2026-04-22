import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

export function SEO({ title, description, ogImage }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
