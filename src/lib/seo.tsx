interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
}

// React 19 natively hoists <title> and <meta> tags to <head>
export function SEO({ title, description, ogImage }: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
}
