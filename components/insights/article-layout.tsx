import Link from "next/link";
import { Header } from "@/components/portfolio-client";
import { formatPublicationDate, getInsight, type Insight } from "@/data/insights";
import { articleSchema, insightBreadcrumb } from "@/lib/insights-seo";
import { ArticleCards, InsightsCta, InsightsFooter, JsonLd } from "./shared";
import styles from "./insights.module.css";

export function ArticleCallout({ title, children }: { title: string; children: React.ReactNode }) {
  return <aside className={styles.callout}><strong>{title}</strong>{children}</aside>;
}

export function ArticleTable({ caption, columns, rows }: { caption: string; columns: string[]; rows: React.ReactNode[][] }) {
  return <div className={styles.tableWrap} role="region" aria-label={caption} tabIndex={0}><table><caption>{caption}</caption><thead><tr>{columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

export function ArticleLayout({ article }: { article: Insight }) {
  const Content = article.Content;
  const related = [...new Set(article.relatedSlugs ?? [])].filter((slug) => slug !== article.slug).map(getInsight).filter((item): item is Insight => Boolean(item));
  return <>
    <Header homeHrefPrefix="/" ctaLocation="insights_article_header" />
    <JsonLd data={articleSchema(article)} /><JsonLd data={insightBreadcrumb(article)} />
    <main>
      <article>
        <header className={styles.hero}><div className={`container ${styles.reading}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden>/</span><Link href="/insights">Insights</Link></nav>
          <p className="kicker">Performance marketing insights</p>
          <h1>{article.title}</h1><p className={styles.introduction}>{article.introduction}</p>
          <div className={styles.meta}><Link href="/#about" rel="author">Jahangir Ahmed</Link><time dateTime={article.publishedAt}>{formatPublicationDate(article.publishedAt)}</time>{article.readingMinutes ? <span>{article.readingMinutes} min read</span> : null}</div>
        </div></header>
        <div className={styles.articlePaper}><div className={`container ${styles.reading}`}>
          <div className={styles.prose}><Content /></div>
          {article.cta ? <aside className={styles.articleCta} aria-label="Google Ads consulting"><h2>{article.cta.heading}</h2><Link href={article.cta.href}>{article.cta.linkText} <span aria-hidden>↗</span></Link></aside> : null}
          <footer className={styles.author}><p className="kicker dark">About the author</p><Link href="/" rel="author">Jahangir Ahmed</Link><p>Performance Marketing Specialist</p>{article.authorBio ? <p>{article.authorBio}</p> : null}<Link href="/#services">Explore ways to work together ↗</Link></footer>
        </div></div>
      </article>
      {related.length > 0 || !article.cta ? <div className={`container ${styles.bottom}`}>{related.length > 0 ? <section aria-labelledby="related-title"><p className="kicker">Keep reading</p><h2 id="related-title">Related insights</h2><ArticleCards articles={related} /></section> : null}{!article.cta ? <InsightsCta location={`insights_article_${article.slug}`} /> : null}</div> : null}
    </main><InsightsFooter />
  </>;
}
