import React from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[name="keywords"]')
      ?.setAttribute("content", keywords);
  }, [title, description, keywords]);

  return null; // No UI needed, just modifying document head
};

export default SEO;
