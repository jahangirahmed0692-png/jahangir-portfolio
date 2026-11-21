import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { SiteFooter } from "@/components/site-footer";
import { links } from "@/data/content";
import { jsonLdString, personRef, siteUrl } from "@/lib/site";
import styles from "../google-ads-consultant/page.module.css";

const pageUrl = `${siteUrl}/google-ads-audit`;
const title = "Google Ads Audit Service | PPC Account Audit | Jahangir Ahmed";
const description = "Hands-on Google Ads audit from a 9+ year PPC specialist: tracking, search terms, structure, bidding, PMax and landing pages, with a prioritized fix list.";
const location = "google_ads_audit";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website", title, description, url: pageUrl, siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og.jpg`, width: 1200, height: 630, alt: "Jahangir Ahmed, Google Ads audit" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.jpg`] },
};

const auditAreas = [
  ["Conversion tracking", "Which actions are primary, whether any are duplicated, and whether a recorded conversion matches a real lead, booking or purchase. GA4, GTM, enhanced conversions and call tracking are checked against the actual journey."],
  ["Bidding goals", "What each campaign is really optimizing toward, and whether Smart Bidding has enough reliable data to work with."],
  ["Search terms and intent", "Where spend goes to informational, irrelevant, competitor or low-value searches, and which queries deserve more budget."],
  ["Keywords and negatives", "Match types, keyword overlap, and negative keyword lists that block good traffic as well as bad."],
  ["Account structure", "Fragmented or duplicated campaigns, unclear priorities and structures that make the data harder to learn from."],
  ["Budgets and impression share", "Whether money is going to the strongest opportunities, and where campaigns are limited by budget or rank."],
  ["Performance Max", "Asset groups, signals, search themes, brand cannibalization and what PMax is really spending on."],
  ["Ads, assets and landing pages", "Message match from search to ad to page, asset coverage, and conversion friction on the landing page."],
  ["Geography, device and schedule", "Locations, devices and hours that consistently waste spend or deserve more of it."],
  ["Lead quality and economics", "CPL and CPA next to lead quality, close rate and revenue, so the account is judged on business results."],
];

const deliverables = [
  ["Findings, ranked by impact", "Each issue explained in plain language, with evidence from the account and the likely effect on results."],
  ["A prioritized action plan", "What to fix first, what can wait, and what to test, so you or your team can act on it straight away."],
  ["Tracking fixes", "Specific changes to conversion actions, GTM and GA4 where measurement is unreliable."],
  ["A walkthrough", "A review call to go through the findings and answer questions."],
];

const faqs = [
  ["What is a Google Ads audit?", "A Google Ads audit is a structured review of an account to find what is limiting performance. Mine covers conversion tracking, bidding goals, search terms, keywords, structure, budgets, Performance Max, ads, landing pages and lead quality, then ranks the fixes by likely impact."],
  ["When should I get a Google Ads audit?", "Common triggers are rising costs without better results, poor lead quality, a recent agency or team change, tracking you don’t fully trust, or plans to increase spend. An audit before scaling stops you from scaling inefficiency."],
  ["What access do you need?", "Read-only access to Google Ads, plus GA4 and Google Tag Manager where possible. Context on your margins, close rates and what a good lead looks like makes the audit far more useful."],
  ["Do you also fix the issues you find?", "Yes, if you want. Some clients use the audit as a plan for their in-house team or agency. Others ask me to implement the changes or manage the account afterwards."],
  ["Do you audit Performance Max campaigns?", "Yes. PMax is reviewed separately because its reporting hides a lot. I look at asset groups, audience signals, search themes, brand overlap and how it interacts with Search campaigns."],
  ["Can you audit Meta Ads as well?", "Yes. Many accounts need both reviewed together, especially where Meta retargets traffic that Google brings in. See my Meta Ads consulting page for how I approach Facebook and Instagram."],
];

export default function GoogleAdsAuditPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Google Ads Consultant", item: `${siteUrl}/google-ads-consultant` },
        { "@type": "ListItem", position: 3, name: "Google Ads Audit", item: pageUrl },
      ] },
      { "@type": "Service", "@id": `${pageUrl}#service`, url: pageUrl, name: "Google Ads audit", description,
        serviceType: "Google Ads and PPC account audit", provider: personRef },
    ],
  };

  return <>
    <Header homeHrefPrefix="/" ctaLocation={location} />
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow"><span /> Google Ads Audit</p>
          <h1>Google Ads Audit for <span>Accounts That Should Be Doing Better</span></h1>
          <p>I’m Jahangir Ahmed, a Google Ads consultant with 9+ years in paid media. My PPC audits find what is actually holding an account back, from broken tracking to wasted search terms, and turn it into a prioritized plan you can act on.</p>
          <div className={styles.actions}>
            <TrackedLink className="button" href="#contact" event="contact_cta_click" details={{cta_location:location,link_text:"Request an audit"}}>Request an audit <span aria-hidden>↓</span></TrackedLink>
            <Link className="text-link" href="/insights/google-ads-audit-checklist">Read my audit checklist <span aria-hidden>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="credibility" aria-label="Professional credentials">{[["9+","Years Experience"],["$5M+","Paid Media Managed"],["50+","Accounts in Portfolio"],["10","Audit Areas"]].map((metric)=><div key={metric[1]}><strong>{metric[0]}</strong><span>{metric[1]}</span></div>)}</section>

      <section className="section">
        <div className="container">
          <p className="kicker">What the audit covers</p>
          <div className={styles.sectionHeading}><h2>What I review in a Google Ads account audit.</h2><p>The full acquisition system, not just campaign settings. The detailed version is in my <Link className="text-link" href="/insights/google-ads-audit-checklist">Google Ads audit checklist</Link>.</p></div>
          <div className={styles.breakdownGrid}>{auditAreas.map(([name, copy], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={`section light ${styles.examples}`}>
        <div className="container">
          <p className="kicker dark">What you get</p>
          <div className={styles.sectionHeading}><h2>A clear plan, not a list of settings.</h2><p>Every finding is tied to its likely business impact so you know what to change first.</p></div>
          {deliverables.map(([name, copy]) => <div key={name} className={styles.b2bProof}><div><span>Deliverable</span><h3>{name}</h3></div><p>{copy}</p></div>)}
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Questions before getting started</p>
          <div className={styles.sectionHeading}><h2>Google Ads audit FAQs</h2><p>What to expect, what I need and what happens afterwards.</p></div>
          <div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
          <p><Link className="text-link" href="/google-ads-consultant">Explore ongoing Google Ads consulting ↗</Link> <Link className="text-link" href="/meta-ads-consultant">Meta Ads consulting ↗</Link></p>
        </div>
      </section>

      <section id="contact" className={`section final-cta ${styles.finalCta}`}>
        <div className="container">
          <p className="kicker">Google Ads audit</p>
          <h2>Find out what your Google Ads account is really doing.</h2>
          <p>Tell me about your business, your current results and what worries you about the account. I’ll tell you what an audit would focus on.</p>
          <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:location,link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink></div>
          <EmailLink ctaLocation={location} linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLdString(schema)}} />
    </main>
    <SiteFooter location={`${location}_footer`} />
  </>;
}
