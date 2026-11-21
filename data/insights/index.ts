import type { ComponentType } from "react";
import GoogleAdsAuditChecklist from "./google-ads-audit-checklist";
import GoogleAdsConversionTracking from "./google-ads-conversion-tracking";
import PerformanceMaxVsSearch from "./performance-max-vs-search";

export type Insight = {
  slug: string;
  title: string;
  introduction: string;
  metadataTitle: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes?: number;
  image?: { url: string; alt: string };
  relatedSlugs?: string[];
  authorBio?: string;
  cta?: { heading: string; href: string; linkText: string };
  Content: ComponentType;
};

// Add only reviewed, published articles here. See README.md for the workflow.
export const insights: readonly Insight[] = [{
  slug: "google-ads-audit-checklist",
  title: "Google Ads Audit Checklist: What I Review Before Scaling an Account",
  introduction: "Scaling a Google Ads account before fixing its measurement, traffic quality and campaign structure often means scaling inefficiency. Here is what I review before recommending more spend.",
  metadataTitle: "Google Ads Audit Checklist: 16 Things I Review",
  description: "A practical Google Ads audit checklist covering tracking, search terms, bidding, budgets, PMax, landing pages and lead quality before scaling.",
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  readingMinutes: 11,
  authorBio: "9+ years across Google Ads, Meta Ads and paid acquisition, with $5M+ in managed media spend.",
  cta: {
    heading: "Need a second set of eyes on your Google Ads account?",
    href: "/google-ads-audit",
    linkText: "Get a Google Ads audit",
  },
  relatedSlugs: ["google-ads-conversion-tracking", "performance-max-vs-search"],
  Content: GoogleAdsAuditChecklist,
}, {
  slug: "performance-max-vs-search",
  title: "Performance Max vs Search: How I Decide Where Google Ads Budget Goes",
  introduction: "Performance Max and Search campaigns do different jobs and need different conditions to work. Here is how I decide which one an account should rely on, and the PMax risks I check before trusting its numbers.",
  metadataTitle: "Performance Max vs Search: Which Should You Use?",
  description: "Performance Max vs Search campaigns compared: control, data needs, reporting and risks like brand cannibalization, plus how I decide where Google Ads budget goes.",
  publishedAt: "2026-11-21",
  readingMinutes: 6,
  authorBio: "9+ years across Google Ads, Meta Ads and paid acquisition, with $5M+ in managed media spend.",
  relatedSlugs: ["google-ads-conversion-tracking", "google-ads-audit-checklist"],
  cta: {
    heading: "Not sure if Performance Max is really adding value?",
    href: "/google-ads-audit",
    linkText: "See what a Google Ads audit covers",
  },
  Content: PerformanceMaxVsSearch,
}, {
  slug: "google-ads-conversion-tracking",
  title: "How to Fix Google Ads Conversion Tracking: What I Check First",
  introduction: "Every bidding decision in Google Ads depends on conversion data. If it is duplicated, missing or measuring the wrong thing, the account optimizes toward the wrong result. This is the process I use to find and fix it.",
  metadataTitle: "How to Fix Google Ads Conversion Tracking (8 Steps)",
  description: "Fix Google Ads conversion tracking step by step: duplicate conversions, GA4 imports, GTM testing, call tracking, enhanced conversions and offline lead quality.",
  publishedAt: "2026-11-21",
  readingMinutes: 6,
  authorBio: "9+ years across Google Ads, Meta Ads and paid acquisition, with $5M+ in managed media spend.",
  relatedSlugs: ["google-ads-audit-checklist", "performance-max-vs-search"],
  cta: {
    heading: "Think your conversion tracking might be off?",
    href: "/google-ads-audit",
    linkText: "Start with a Google Ads audit",
  },
  Content: GoogleAdsConversionTracking,
}];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}

export function getInsights() {
  return [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function formatPublicationDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(date));
}
