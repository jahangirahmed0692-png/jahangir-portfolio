import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { links, performanceAdsCertification } from "@/data/content";
import { AccountOutcomesCarousel } from "./account-outcomes-carousel";
import styles from "./page.module.css";

const siteUrl = "https://jahangirahmed.com";
const pageUrl = `${siteUrl}/google-ads-consultant`;
const title = "Google Ads Consultant | PPC Specialist | Jahangir Ahmed";
const description = "Google Ads consultant with 9+ years in paid media. Search, Performance Max, audits and conversion tracking for U.S. businesses. Explore results and get in touch.";

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

const services = [
  ["Google Ads strategy", "I start with your offer, customer value and acquisition goals, then build a keyword strategy and budget plan around demand worth capturing. As a Google PPC consultant, I connect campaign priorities to the economics of your business before recommending more spend."],
  ["Google Search Ads management", "Search campaign management covers account structure, ad messaging, bidding and ongoing search term optimization. I review the intent behind queries, refine negative keywords and align ads with relevant landing pages so the account focuses on people looking for what you actually sell."],
  ["Performance Max strategy", "Performance Max (PMax) needs a clear commercial objective and dependable conversion signals. My work includes location-specific PMax campaigns for Sonder Mens, alongside local Search campaigns. I assess campaign structure, budget allocation and measurement in the context of the wider acquisition mix."],
  ["Conversion tracking and measurement", "I review Google Ads conversion tracking, GA4 and Google Tag Manager to identify missing, duplicated or misleading signals. This includes checking the journey from an ad click to a form submission, purchase or booking. For Sonder Mens, the work included GTM listeners for third-party booking tracking and conversion-measurement QA."],
  ["Google Ads lead generation", "A lower cost per lead matters only if the enquiries are useful. I look at service intent, geographic relevance, landing-page friction and lead quality together. Experience includes U.S. home services, healthcare and B2B accounts where qualified enquiries matter more than raw form-fill volume."],
  ["eCommerce acquisition", "For eCommerce Google Ads, the focus is product demand, Shopping and PMax strategy, purchase measurement and sustainable acquisition costs. My broader eCommerce experience informs how I evaluate customer quality, returns and retained revenue. The Oaklynn case study documents that approach through Meta Ads; its results are not Google Ads results."],
  ["Account audits and optimization", "An audit examines keyword strategy, search terms, campaign structure, conversion actions, bids, budgets and landing-page alignment. I prioritize the constraints that matter most, then use ongoing conversion optimization to evaluate whether changes improve lead quality or purchase economics—not just activity inside the account."],
];

const faqs = [
  ["What does a Google Ads consultant do?", "A consultant helps you decide where to invest, how to structure campaigns and how to measure success. My work combines strategy with hands-on Search and Performance Max management, tracking reviews and optimization around leads, customers and acquisition costs."],
  ["When should I hire a Google Ads consultant?", "Consider specialist support when spend is growing without better results, lead quality is weak, tracking is unclear or your team needs help prioritizing changes. An audit can establish whether the main constraint is in the campaigns, measurement or the conversion journey before you increase budgets."],
  ["Do you work with U.S. businesses?", "Yes. U.S. businesses are my primary market, with additional experience across MENA and Australia. I am based in Lahore and work remotely with businesses and agency teams."],
  ["Do you manage Google Search and Performance Max campaigns?", "Yes. I work across Google Search and Performance Max, including keyword strategy, search-term analysis, bidding, budget allocation and conversion measurement. Sonder Mens is one example of location-specific Search and PMax work in my portfolio."],
  ["Can you fix Google Ads conversion tracking?", "I can audit and improve conversion tracking across Google Ads, GA4 and Google Tag Manager. I look for missing events, duplicate signals and actions that do not reflect meaningful business outcomes, then validate the relevant conversion journey. Third-party booking systems may require a tailored implementation."],
  ["Do you work with lead generation and eCommerce accounts?", "Yes. My paid media experience includes both lead generation and eCommerce. The objectives differ: service businesses need qualified enquiries, while eCommerce accounts need profitable purchases and customer quality. I use those differences to guide measurement and optimization."],
  ["Do you offer Google Ads audits?", "Yes. I review the acquisition system and prioritize what should change first, covering intent, account structure, tracking, bidding, budgets and landing pages. An audit is a useful starting point when you need a clearer diagnosis before committing to ongoing management."],
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Google Ads consulting",
    serviceType: "Google Ads strategy, campaign management and account audits",
    url: pageUrl,
    description,
    provider: {
      "@type": "Person",
      name: "Jahangir Ahmed",
      jobTitle: "Performance Marketing Specialist",
      url: `${siteUrl}/`,
      sameAs: [links.linkedin, links.upwork],
      knowsAbout: ["Google Ads", "Google Search Ads", "Performance Max", "GA4", "Google Tag Manager", "Conversion tracking", "Paid acquisition"],
    },
  };

  return <>
    <Header homeHrefPrefix="/" ctaLocation="google_ads_consultant" />
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow"><span /> Google Ads Consultant</p>
          <h1>Google Ads Consultant for <span>Performance-Focused Growth</span></h1>
          <p>I’m Jahangir Ahmed, a performance marketer and Google Ads specialist with 9+ years of paid media experience. I primarily work with U.S. businesses, with additional experience across MENA and Australia. I help connect campaign strategy, conversion tracking and ongoing optimization to better business outcomes.</p>
          <div className={styles.actions}>
            <TrackedLink className="button" href="/#results" event="results_interaction" details={{interaction_type:"view_results",section:"google_ads_consultant"}}>View Results <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href="#contact" event="contact_cta_click" details={{cta_location:"google_ads_consultant",link_text:"Discuss your account"}}>Discuss your account <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href={links.upwork} event="upwork_click" details={{cta_location:"google_ads_consultant",link_text:"Hire Me on Upwork"}} target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink>
          </div>
        </div>
      </section>

      <section className="credibility" aria-label="Professional credentials">{[["9+","Years Experience"],["$5M+","Paid Media Managed"],["50+","Multi-Account Portfolio"],["U.S.","Primary Market Experience"]].map((metric)=><div key={metric[1]}><strong>{metric[0]}</strong><span>{metric[1]}</span></div>)}</section>

      <section className={`section light ${styles.capabilities}`}>
        <div className="container">
          <p className="kicker dark">Google Ads capabilities</p>
          <div className={styles.sectionHeading}><h2>Google Ads strategy and management services.</h2><p>Strategy and execution shaped around how demand is captured, measured and converted—not isolated platform settings.</p></div>
          <div className={styles.capabilityGrid}>{capabilities.map((capability,index)=><div key={capability}><span>{String(index+1).padStart(2,"0")}</span><strong>{capability}</strong></div>)}</div>
          <p className={styles.certification}><TrackedLink href={performanceAdsCertification.url} target="_blank" rel="noopener noreferrer" event="certificate_open" details={{certificate:performanceAdsCertification.title,certificate_name:performanceAdsCertification.title,issuer:performanceAdsCertification.issuer,cta_location:"google_ads_consultant"}}>Google AI-Powered Performance Ads Certified through Skillshop.</TrackedLink></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">Strategy and execution</p>
          <div className={styles.sectionHeading}><h2>From search intent to measurable acquisition.</h2><p>Hands-on support for the decisions that shape campaign performance, from initial strategy to ongoing account optimization.</p></div>
          <div className={styles.breakdownGrid}>{services.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></article>)}</div>
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
          <div className={styles.sectionHeading}><h2>Selected Google Ads performance outcomes.</h2><p>Campaigns directly managed across U.S. local services, healthcare, B2B and regional businesses. Quantitative results are shown only where verified.</p></div>
          <AccountOutcomesCarousel />
          <div className={styles.b2bProof}><div><span>B2B / SaaS</span><h3>Conversion recovery</h3></div><p>Across Google Ads, Meta Ads, landing pages and tracking, campaign and funnel improvements contributed to conversion rate increasing from approximately 1.3% to more than 4%, while CAC declined from roughly $8K to roughly $3K.</p><TrackedLink className="text-link" href="/#case-studies" event="results_interaction" details={{interaction_type:"view_case_studies",section:"google_ads_consultant"}}>View case studies ↗</TrackedLink></div>
        </div>
      </section>

      <section className={`section light ${styles.examples}`}>
        <div className="container">
          <p className="kicker dark">Industry experience</p>
          <div className={styles.sectionHeading}><h2>Different industries, different acquisition priorities.</h2><p>My Google Ads experience includes roofing, tree services, commercial tire repair, hospice care, landscaping, IT services, security consulting, RV dealers and local appointment businesses.</p></div>
          <div className={styles.b2bProof}><div><span>Australia / Multi-location services</span><h3>Sonder Mens</h3></div><p>Location-specific Google Search and Performance Max campaigns, search-term cleanup and third-party booking measurement supported approximately 9x Google Ads ROAS. Monthly spend of $20K–$30K covered the wider Google and Meta acquisition mix.</p><TrackedLink className="text-link" href="/#case-studies" event="results_interaction" details={{interaction_type:"view_case_studies",section:"google_ads_consultant"}}>Explore the Sonder Mens case study ↗</TrackedLink></div>
          <div className={styles.b2bProof}><div><span>Broader paid media experience</span><h3>SaaS, eCommerce and app growth</h3></div><p>My wider portfolio also spans financial services, real estate and subscription apps. That experience helps connect paid acquisition decisions to customer value and the full conversion journey.</p><Link className="text-link" href="/#about">About Jahangir’s experience ↗</Link></div>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Operating framework</p>
          <div className={styles.sectionHeading}><h2>How I approach Google Ads.</h2><p>Each stage creates the conditions needed for the next. Scaling comes last, after the account can support it.</p></div>
          <ol>{approach.map(([name,copy],index)=><li key={name}><span>0{index+1}</span><div><h3>{name}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Questions before getting started</p>
          <div className={styles.sectionHeading}><h2>Frequently asked questions</h2><p>What to expect from consulting, account management and a focused review of your Google Ads performance.</p></div>
          <div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
        </div>
      </section>

      <section id="contact" className={`section final-cta ${styles.finalCta}`}>
        <div className="container">
          <p className="kicker">Google Ads consulting</p>
          <h2>Need a Google Ads account that produces better-quality growth?</h2>
          <p>Let&apos;s identify the constraint, improve the signals and build a clearer path to efficient scale.</p>
          <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:"google_ads_consultant",link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink><TrackedLink className="button button-outline" href="/#services" event="contact_cta_click" details={{cta_location:"google_ads_consultant",link_text:"View Services"}}>View Services <span aria-hidden>↗</span></TrackedLink></div>
          <EmailLink ctaLocation="google_ads_consultant" linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([breadcrumb, serviceSchema]).replace(/</g,"\\u003c")}} />
    </main>
  </>;
}
