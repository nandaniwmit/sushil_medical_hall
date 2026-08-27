import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'pharmacy';
  pageBreadcrumbName?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = "Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Bodh Gaya, Bihar.",
  keywords = "Sushil Medical Hall, Pharmacy in Bodh Gaya, Medical Store Bihar, Chemist Tikha Bigha, Medicine Delivery Bodh Gaya, 9835829175",
  canonicalPath = "",
  pageBreadcrumbName
}) => {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.businessName} - Bodh Gaya`
    : `${SITE_CONFIG.businessName} | Trusted Pharmacy in Bodh Gaya, Bihar`;

  const canonicalUrl = `${SITE_CONFIG.websiteUrl}${canonicalPath}`;

  useEffect(() => {
    document.title = fullTitle;

    // Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Dynamic JSON-LD Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": SITE_CONFIG.businessName,
      "image": "https://images.unsplash.com/photo-1586015555751-63c2954c2567?auto=format&fit=crop&w=1200&q=80",
      "@id": SITE_CONFIG.websiteUrl,
      "url": SITE_CONFIG.websiteUrl,
      "telephone": SITE_CONFIG.phone,
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tikha bigha mord",
        "addressLocality": "Bodh Gaya",
        "addressRegion": "Bihar",
        "postalCode": "824231",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.7042,
        "longitude": 84.9782
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "07:30",
          "closes": "22:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "22:00"
        }
      ],
      "department": [
        { "@type": "MedicalOrganization", "name": "Prescription Pharmacy" },
        { "@type": "MedicalOrganization", "name": "Surgical Supplies" },
        { "@type": "MedicalOrganization", "name": "Health Diagnostics" }
      ]
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_CONFIG.websiteUrl
        },
        ...(pageBreadcrumbName ? [{
          "@type": "ListItem",
          "position": 2,
          "name": pageBreadcrumbName,
          "item": canonicalUrl
        }] : [])
      ]
    };

    let schemaScript = document.getElementById('schema-json-ld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-json-ld';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify([localBusinessSchema, breadcrumbSchema]);

    return () => {
      // Cleanup if needed
    };
  }, [fullTitle, description, canonicalUrl, pageBreadcrumbName]);

  return null;
};
