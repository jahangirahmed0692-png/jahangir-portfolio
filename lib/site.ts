import { links, performanceAdsCertification } from "@/data/content";

export const siteUrl = "https://jahangirahmed.com";
export const siteName = "Jahangir Ahmed";
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

// Bump when a core page's content changes meaningfully; used for sitemap lastModified.
export const pagesUpdatedAt = {
  home: "2026-11-21",
  googleAdsConsultant: "2026-11-21",
  performanceMarketingSpecialist: "2026-11-21",
  metaAdsConsultant: "2026-11-21",
  googleAdsAudit: "2026-11-21",
  googleAdsHomeServices: "2026-11-21",
};

/** Site-wide navigation for internal linking (header + footer). */
export const primaryPages = [
  { label: "Google Ads Consultant", href: "/google-ads-consultant" },
  { label: "Meta Ads Consultant", href: "/meta-ads-consultant" },
  { label: "Google Ads Audit", href: "/google-ads-audit" },
  { label: "Google Ads for Home Services", href: "/google-ads-for-home-services" },
  { label: "Performance Marketing", href: "/performance-marketing-specialist" },
  { label: "Insights", href: "/insights" },
] as const;

/** One canonical Person entity; other schema references it by @id. */
export const personSchema = {
  "@type": "Person",
  "@id": personId,
  name: "Jahangir Ahmed",
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/jahangir-headshot-2026.png`,
  jobTitle: "Performance Marketing Specialist",
  description: "Performance marketing specialist and Google Ads consultant with 9+ years in paid media and $5M+ in managed ad spend across the U.S., MENA and Australia.",
  homeLocation: { "@type": "Place", name: "Lahore, Pakistan" },
  sameAs: [links.linkedin, links.upwork],
  knowsAbout: [
    "Google Ads", "Google Search Ads", "Performance Max", "Meta Ads", "Facebook Ads", "PPC",
    "Paid media", "Paid acquisition", "Conversion tracking", "GA4", "Google Tag Manager",
    "Meta Conversions API", "Lead generation", "eCommerce advertising",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: performanceAdsCertification.title,
    credentialCategory: "certification",
    url: performanceAdsCertification.url,
    recognizedBy: { "@type": "Organization", name: "Google" },
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${siteUrl}/`,
  name: siteName,
  inLanguage: "en",
  publisher: { "@id": personId },
};

export const personRef = { "@id": personId };

export function jsonLdString(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
