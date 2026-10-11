import { Header } from "@/components/portfolio-client";
import { ArticleCards, InsightsCta, InsightsFooter, JsonLd } from "@/components/insights/shared";
import styles from "@/components/insights/insights.module.css";
import { getInsights } from "@/data/insights";
import { insightBreadcrumb, insightsMetadata, insightsUrl } from "@/lib/insights-seo";

const title = "Performance Marketing Insights | Jahangir Ahmed";
const description = "Practical perspectives on paid acquisition, Google Ads, Meta Ads, measurement and growth based on hands-on campaign management.";
export const metadata = insightsMetadata(title, description);

export default function InsightsPage() {
  const articles = getInsights();
  return <>
    <Header homeHrefPrefix="/" ctaLocation="insights_header" />
    <JsonLd data={insightBreadcrumb()} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Performance Marketing Insights", description, url: insightsUrl }} />
    <main>
      <section className={styles.hero}><div className="container"><p className="kicker">Insights / Jahangir Ahmed</p><h1>Performance Marketing Insights</h1><p className={styles.introduction}>{description}</p></div></section>
      <section className={`section light ${styles.index}`} aria-labelledby="articles-title"><div className="container"><p className="kicker dark">From campaign practice</p><h2 id="articles-title">Articles &amp; perspectives</h2>{articles.length ? <ArticleCards articles={articles} /> : <div className={styles.empty}><h3>Articles are on the way.</h3><p>This space will bring together practical writing on PPC, analytics, attribution and performance marketing. No articles have been published yet.</p></div>}</div></section>
      <div className={`container ${styles.bottom}`}><InsightsCta location="insights_index" /></div>
    </main><InsightsFooter />
  </>;
}
