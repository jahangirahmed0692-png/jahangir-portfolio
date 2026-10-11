import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/insights/article-layout";
import { getInsight, getInsights } from "@/data/insights";
import { insightsMetadata } from "@/lib/insights-seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return getInsights().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">) {
  const article = getInsight((await params).slug);
  if (!article) notFound();
  return insightsMetadata(article.metadataTitle, article.description, article);
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const article = getInsight((await params).slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
