import type { ComponentType } from "react";
import GoogleAdsAuditChecklist from "./google-ads-audit-checklist";

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
    href: "/google-ads-consultant",
    linkText: "Explore my Google Ads consulting approach",
  },
  Content: GoogleAdsAuditChecklist,
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
