import Link from "next/link";
import { EmailLink, TrackedLink } from "@/components/portfolio-client";
import { links } from "@/data/content";
import { formatPublicationDate, type Insight } from "@/data/insights";
import styles from "./insights.module.css";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function ArticleCards({ articles }: { articles: readonly Insight[] }) {
  return <div className={styles.cards}>{articles.map((article) => <article className={styles.card} key={article.slug}>
    <p className="kicker"><time dateTime={article.publishedAt}>{formatPublicationDate(article.publishedAt)}</time></p>
    <h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3>
    <p>{article.introduction}</p>
    <Link className="text-link" href={`/insights/${article.slug}`}>Read article <span aria-hidden>↗</span></Link>
  </article>)}</div>;
}

export function InsightsCta({ location }: { location: string }) {
  return <aside className={styles.cta} aria-label="Work with Jahangir">
    <div><p className="kicker">Work with Jahangir</p><h2>Need a clearer view of paid media performance?</h2><p>Get hands-on support with campaign strategy, optimization and measurement.</p></div>
    <div className={styles.actions}>
      <TrackedLink className="button" href={links.upwork} event="upwork_click" details={{ cta_location: location, link_text: "Hire Me on Upwork" }} target="_blank" rel="noopener noreferrer">Hire Me on Upwork ↗</TrackedLink>
      <EmailLink ctaLocation={location} linkText="Email Jahangir" className="text-link">Email Jahangir ↗</EmailLink>
    </div>
  </aside>;
}

export function InsightsFooter() {
  return <footer className="footer"><div><Link className="brand" href="/">Jahangir Ahmed</Link><p>Performance Marketing Specialist</p></div><nav className="footer-links" aria-label="Insights footer"><Link href="/insights">Insights</Link><Link href="/#about">About</Link><Link href="/#services">Services</Link></nav><small>© {new Date().getFullYear()} Jahangir Ahmed</small></footer>;
}
