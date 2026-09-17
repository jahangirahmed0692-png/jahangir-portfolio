import type { Metadata } from "next";
import { EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { links } from "@/data/content";
import { AccountOutcomesCarousel } from "./account-outcomes-carousel";
import styles from "./page.module.css";

const siteUrl = "https://jahangirahmed.com";
const pageUrl = `${siteUrl}/google-ads-consultant`;
const title = "Google Ads Consultant | PPC Specialist | Jahangir Ahmed";
const description = "Google Ads consultant with 9+ years of experience across Search, Performance Max, YouTube and lead generation. $5M+ in paid media managed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    title,
    description,
    url: pageUrl,
    siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Jahangir Ahmed — Google Ads Consultant" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
};

const capabilities = [
  "Search", "Performance Max", "Shopping", "YouTube", "Local Services Ads", "Keyword Strategy", "Search-Term Analysis",
  "Negative Keywords", "Bidding Strategy", "Budget Allocation", "Conversion Tracking", "GA4 / GTM",
  "Landing-Page Recommendations", "Lead-Quality Analysis",
];

const breakdowns = [
  ["Search Intent", "Spend reaches informational, irrelevant or low-value searches instead of people likely to buy."],
  ["Account Structure", "Fragmented campaigns, duplicated targeting and unclear priorities make performance harder to control."],
  ["Conversion Tracking", "Missing or misleading signals teach bidding systems to optimize for the wrong actions."],
  ["Bidding & Budgets", "Automation is introduced before the account has dependable data or sensible allocation."],
  ["Landing Pages", "The search, ad and destination do not share a clear message or conversion path."],
  ["Lead Quality", "Campaigns maximize form fills without distinguishing useful prospects from weak enquiries."],
  ["Scaling", "Budget increases before intent, measurement and acquisition economics are repeatable."],
];

const approach = [
  ["Intent", "Identify the searches, audiences and services that indicate genuine buying demand."],
  ["Structure", "Organize campaigns around clear priorities, cleaner control and useful data."],
  ["Measurement", "Make conversions, GA4 and GTM signals reliable enough to guide decisions."],
  ["Economics", "Evaluate CPL, lead quality and customer value—not platform volume alone."],
  ["Optimization", "Improve queries, negatives, bids, budgets, ads and landing-page alignment."],
  ["Scale", "Increase investment only where performance is commercially defensible."],
];

export default function GoogleAdsConsultantPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Google Ads Consultant", item: pageUrl },
    ],
  };

  return <>
    <Header homeHrefPrefix="/" ctaLocation="google_ads_consultant" />
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow"><span /> Google Ads Consultant</p>
          <h1>Google Ads Consulting Built Around <span>Business Outcomes.</span></h1>
          <p>I help businesses improve Google Ads performance by fixing search intent, campaign structure, conversion measurement, lead quality and bidding before scaling spend.</p>
          <div className={styles.actions}>
            <TrackedLink className="button" href="/#results" event="results_interaction" details={{interaction_type:"view_results",section:"google_ads_consultant"}}>View Results <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href={links.upwork} event="upwork_click" details={{cta_location:"google_ads_consultant",link_text:"Hire Me on Upwork"}} target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink>
          </div>
        </div>
      </section>

      <section className="credibility" aria-label="Professional credentials">{[["9+","Years Experience"],["$5M+","Paid Media Managed"],["50+","Multi-Account Portfolio"],["U.S.","Primary Market Experience"]].map((metric)=><div key={metric[1]}><strong>{metric[0]}</strong><span>{metric[1]}</span></div>)}</section>

      <section className={`section light ${styles.capabilities}`}>
        <div className="container">
          <p className="kicker dark">Google Ads capabilities</p>
          <div className={styles.sectionHeading}><h2>Hands-on coverage across the paid-search system.</h2><p>Strategy and execution shaped around how demand is captured, measured and converted—not isolated platform settings.</p></div>
          <div className={styles.capabilityGrid}>{capabilities.map((capability,index)=><div key={capability}><span>{String(index+1).padStart(2,"0")}</span><strong>{capability}</strong></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">Performance diagnosis</p>
          <div className={styles.sectionHeading}><h2>Where Google Ads Performance Usually Breaks</h2><p>Strong paid search performance depends on the acquisition system around the campaign as much as the campaign itself.</p></div>
          <div className={styles.breakdownGrid}>{breakdowns.map(([name,copy],index)=><article key={name}><span>0{index+1}</span><h3>{name}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={`section light ${styles.examples}`}>
        <div className="container">
          <p className="kicker dark">Selected account outcomes</p>
          <div className={styles.sectionHeading}><h2>Performance evaluated beyond raw lead volume.</h2><p>Campaigns directly managed across U.S. local services, healthcare, B2B and regional businesses. Quantitative results are shown only where verified.</p></div>
          <AccountOutcomesCarousel />
          <div className={styles.b2bProof}><div><span>B2B / SaaS</span><h3>Conversion recovery</h3></div><p>Campaign and funnel improvements contributed to conversion rate increasing from approximately 1.3% to more than 4%, while CAC declined from roughly $8K to roughly $3K.</p><TrackedLink className="text-link" href="/#case-studies" event="results_interaction" details={{interaction_type:"view_case_studies",section:"google_ads_consultant"}}>View case studies ↗</TrackedLink></div>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Operating framework</p>
          <div className={styles.sectionHeading}><h2>A disciplined path from intent to scale.</h2><p>Each stage creates the conditions needed for the next. Scaling comes last, after the account can support it.</p></div>
          <ol>{approach.map(([name,copy],index)=><li key={name}><span>0{index+1}</span><div><h3>{name}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className={`section final-cta ${styles.finalCta}`}>
        <div className="container">
          <p className="kicker">Google Ads consulting</p>
          <h2>Need a Google Ads account that produces better-quality growth?</h2>
          <p>Let&apos;s identify the constraint, improve the signals and build a clearer path to efficient scale.</p>
          <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:"google_ads_consultant",link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink><TrackedLink className="button button-outline" href="/#services" event="contact_cta_click" details={{cta_location:"google_ads_consultant",link_text:"View Services"}}>View Services <span aria-hidden>↗</span></TrackedLink></div>
          <EmailLink ctaLocation="google_ads_consultant" linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,"\\u003c")}} />
    </main>
  </>;
}
