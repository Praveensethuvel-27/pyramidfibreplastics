import { useEffect } from "react";

const SEO = ({ 
  title, 
  description, 
  keywords = "", 
  ogImage = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  schemaData = null
}) => {
  const siteName = "PYRAMID FIBRE PLASTICS";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Industrial Fiber & Composite Pipes Manufacturer`;
  const defaultDesc = "PYRAMID FIBRE PLASTICS is a premium manufacturer of high-grade FRP, GRP, and HDPE pipes, chemical storage tanks, and ducting systems for industrial fluid engineering.";
  const finalDesc = description || defaultDesc;
  const defaultKeywords = "Fiber Pipe Manufacturer, FRP Pipe Supplier, GRP Pipe Manufacturer, Industrial Pipe Manufacturer, Water Storage Tank Manufacturer, Chemical Storage Tank Supplier, PYRAMID FIBRE PLASTICS";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper function to update meta tags
    const updateMetaTag = (attribute, value, content) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Standard Meta Tags
    updateMetaTag("name", "description", finalDesc);
    updateMetaTag("name", "keywords", finalKeywords);
    updateMetaTag("name", "robots", "index, follow");

    // 3. Open Graph Tags (Facebook / LinkedIn)
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("property", "og:description", finalDesc);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:url", window.location.href);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:site_name", siteName);

    // 4. Twitter Cards
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:title", fullTitle);
    updateMetaTag("name", "twitter:description", finalDesc);
    updateMetaTag("name", "twitter:image", ogImage);

    // 5. Inject Structured Schema Data (JSON-LD)
    let schemaScript = document.getElementById("structured-data-schema");
    if (schemaScript) {
      schemaScript.remove();
    }

    if (schemaData) {
      schemaScript = document.createElement("script");
      schemaScript.id = "structured-data-schema";
      schemaScript.type = "application/ld+json";
      schemaScript.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(schemaScript);
    } else {
      // Default Organization Schema
      const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": window.location.origin,
        "logo": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=150&q=80",
        "description": defaultDesc,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-44-2456-7890",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "ta"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/PYRAMID-industries",
          "https://twitter.com/PYRAMID_ind"
        ]
      };
      schemaScript = document.createElement("script");
      schemaScript.id = "structured-data-schema";
      schemaScript.type = "application/ld+json";
      schemaScript.innerHTML = JSON.stringify(defaultSchema);
      document.head.appendChild(schemaScript);
    }

    return () => {
      // Cleanup schema tag on unmount
      const currentSchema = document.getElementById("structured-data-schema");
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, [fullTitle, finalDesc, finalKeywords, ogImage, schemaData]);

  return null; // This component handles DOM side effects and renders nothing visible
};

export default SEO;
