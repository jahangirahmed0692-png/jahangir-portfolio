import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
