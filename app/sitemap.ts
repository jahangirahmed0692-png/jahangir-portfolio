import type { MetadataRoute } from "next";
import { getInsights } from "@/data/insights";
import { insightUrl, insightsUrl } from "@/lib/insights-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: insightsUrl, changeFrequency: "monthly", priority: 0.7 },
    ...getInsights().map((article) => ({
      url: insightUrl(article.slug),
      lastModified: article.updatedAt ?? article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: "https://jahangirahmed.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jahangirahmed.com/google-ads-consultant",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://jahangirahmed.com/performance-marketing-specialist",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
