import type { Metadata } from "next";
import type { Insight } from "@/data/insights";
import { personId, siteUrl, websiteId } from "@/lib/site";

export { siteUrl };
export const insightsUrl = `${siteUrl}/insights`;
export const insightUrl = (slug: string) => `${insightsUrl}/${slug}`;
export const insightAuthor = {
  "@type": "Person",
  "@id": personId,
  name: "Jahangir Ahmed",
  jobTitle: "Performance Marketing Specialist",
  url: `${siteUrl}/`,
};

export function insightsMetadata(title: string, description: string, article?: Insight): Metadata {
  const url = article ? insightUrl(article.slug) : insightsUrl;
  const image = article?.image ?? {
    url: `${siteUrl}/og-share-2026.jpg`,
    alt: "Jahangir Ahmed, Performance Marketing Specialist",
  };
  return {
    title, description,
    authors: [{ name: insightAuthor.name, url: insightAuthor.url }],
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName: "Jahangir Ahmed",
      images: [image],
      ...(article ? {
        type: "article" as const,
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt ?? article.publishedAt,
        authors: [insightAuthor.url],
      } : { type: "website" as const }),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function insightBreadcrumb(article?: Insight) {
  const items = [
    { name: "Home", item: `${siteUrl}/` },
    { name: "Insights", item: insightsUrl },
    ...(article ? [{ name: article.title, item: insightUrl(article.slug) }] : []),
  ];
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, ...item })),
  };
}

export function articleSchema(article: Insight) {
  return {
    "@context": "https://schema.org", "@type": "BlogPosting",
    "@id": `${insightUrl(article.slug)}#article`,
    url: insightUrl(article.slug),
    mainEntityOfPage: insightUrl(article.slug),
    headline: article.title, description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: insightAuthor,
    publisher: { "@id": personId },
    isPartOf: { "@id": websiteId },
    inLanguage: "en",
    image: new URL(article.image?.url ?? "/og-share-2026.jpg", siteUrl).href,
  };
}
