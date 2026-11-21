import type { MetadataRoute } from "next";
import { getInsights } from "@/data/insights";
import { insightUrl, insightsUrl } from "@/lib/insights-seo";
import { pagesUpdatedAt } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getInsights();
  const latestArticle = articles.map((a) => a.updatedAt ?? a.publishedAt).sort().at(-1);
  return [
    { url: insightsUrl, lastModified: latestArticle, changeFrequency: "monthly", priority: 0.7 },
    ...articles.map((article) => ({
      url: insightUrl(article.slug),
      lastModified: article.updatedAt ?? article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: "https://jahangirahmed.com/",
      lastModified: pagesUpdatedAt.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jahangirahmed.com/google-ads-consultant",
      lastModified: pagesUpdatedAt.googleAdsConsultant,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jahangirahmed.com/performance-marketing-specialist",
      lastModified: pagesUpdatedAt.performanceMarketingSpecialist,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: "https://jahangirahmed.com/meta-ads-consultant", lastModified: pagesUpdatedAt.metaAdsConsultant, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://jahangirahmed.com/google-ads-audit", lastModified: pagesUpdatedAt.googleAdsAudit, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://jahangirahmed.com/google-ads-for-home-services", lastModified: pagesUpdatedAt.googleAdsHomeServices, changeFrequency: "monthly", priority: 0.8 },
  ];
}
