import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { SiteFooter } from "@/components/site-footer";
import { links, results } from "@/data/content";
import { jsonLdString, personRef, siteUrl } from "@/lib/site";
import styles from "../google-ads-consultant/page.module.css";

const pageUrl = `${siteUrl}/google-ads-for-home-services`;
const title = "Google Ads for Home Services | Roofing & Tree Service PPC";
const description = "Google Ads for roofing, tree service, pest control and other home services. Results include 210 tree service leads at $34 CPL and 102 roofing leads in 90 days.";
const location = "google_ads_home_services";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website", title, description, url: pageUrl, siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og-share-2026.jpg`, width: 1200, height: 630, alt: "Google Ads for home service businesses by Jahangir Ahmed" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og-share-2026.jpg`] },
};

const homeServiceIndustries = new Set(["Roofing Company", "Tree Service Company", "Commercial Tire Repair"]);
const outcomes = results.filter((result) => homeServiceIndustries.has(result.industry));

const trades = [
  ["Roofing", "Separate repair, replacement and storm-damage intent, and keep spend away from DIY and job-seeker searches."],
  ["Tree services", "Capture urgent removal and storm work, alongside planned trimming and stump grinding in the right service radius."],
  ["Pest control", "Split one-off treatments from recurring plans, and adjust for seasonal demand by pest type."],
  ["Landscaping and design", "Qualify design and project leads by budget and scope rather than chasing cheap maintenance enquiries."],
  ["Pools", "Match ads to installs, repairs or service, each with different lead values and timelines."],
  ["Automotive and tire", "Local and commercial intent for repair and fleet work, with call tracking where most leads come by phone."],
];

const playbook = [
  ["Service-area targeting", "Target the locations you actually serve, check where clicks really come from, and exclude areas with poor close rates."],
  ["Intent-based campaign structure", "Split campaigns by service and urgency so emergency work, high-ticket jobs and routine services each get the right budget and bids."],
  ["Negative keywords that protect budget", "Remove DIY, jobs, cheap, supplier and other low-value searches without blocking the queries that bring real customers."],
  ["Call and form tracking", "Track calls, forms and bookings properly, and separate real enquiries from short calls, spam and existing customers."],
  ["Local Services Ads alongside Search", "Use Google Local Services Ads where they fit, and keep Search campaigns focused on the jobs LSA doesn’t cover well."],
  ["Lead quality feedback", "Compare leads with booked jobs and revenue so bidding moves toward the work that pays, not just cheaper form fills."],
];

const faqs = [
  ["Does Google Ads work for home service businesses?", "Yes. People search when they need a roofer, tree service or pest control company, often urgently. Google Ads puts you in front of that demand. It works best when targeting, negatives and tracking stop spend going to people who will never book."],
  ["How much should a home service business spend on Google Ads?", "It depends on your service area, competition and job value. The accounts on this page ran on roughly $3K–$5K over the period shown. Start with a budget that can produce enough leads to judge, then scale on cost per booked job."],
  ["Should I use Local Services Ads or Google Search Ads?", "Often both. Local Services Ads charge per lead and show the Google Guaranteed badge, while Search ads give more control over services, keywords and landing pages. I look at which one brings better-quality jobs for your trade."],
  ["Why are my Google Ads leads low quality?", "The usual causes are broad matching into DIY or job searches, targeting outside your service area, counting every call as a lead, and landing pages that don’t qualify the enquiry. An audit usually finds the main cause quickly."],
  ["Do you work with roofing companies?", "Yes. One roofing account generated 102 leads and about $229K in tracked revenue over 90 days, at a $116 cost per lead. Another produced 66 leads and about $143K in revenue over six months on a $1K budget."],
];

export default function GoogleAdsHomeServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Google Ads Consultant", item: `${siteUrl}/google-ads-consultant` },
        { "@type": "ListItem", position: 3, name: "Google Ads for Home Services", item: pageUrl },
      ] },
      { "@type": "Service", "@id": `${pageUrl}#service`, url: pageUrl, name: "Google Ads management for home service businesses", description,
        serviceType: "Google Ads lead generation for roofing, tree service, pest control and other home services", provider: personRef,
        audience: { "@type": "BusinessAudience", audienceType: "Home service and local trade businesses" } },
    ],
  };

  return <>
    <Header homeHrefPrefix="/" ctaLocation={location} />
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow"><span /> Google Ads for Home Services</p>
          <h1>Google Ads for Home Service Businesses <span>That Want Booked Jobs</span></h1>
          <p>I’m Jahangir Ahmed, a Google Ads consultant who has run lead generation for roofing, tree service, pest control, landscaping and other local trades in the U.S. The goal is simple: more qualified calls and forms from your service area, at a cost that makes sense for the job.</p>
          <div className={styles.actions}>
            <TrackedLink className="button" href="#outcomes" event="results_interaction" details={{interaction_type:"view_results",section:location}}>View results <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href="#contact" event="contact_cta_click" details={{cta_location:location,link_text:"Discuss your account"}}>Discuss your account <span aria-hidden>↓</span></TrackedLink>
          </div>
        </div>
      </section>

      <section id="outcomes" className="credibility" aria-label="Home service Google Ads results">{outcomes.slice(0, 4).map((r) => <div key={r.industry + r.period}><strong>{r.leads} leads</strong><span>{r.industry}, {r.period}, {r.cpl} CPL</span></div>)}</section>

      <section className={`section light ${styles.examples}`}>
        <div className="container">
          <p className="kicker dark">Home service results</p>
          <div className={styles.sectionHeading}><h2>Google Ads results for local service businesses.</h2><p>Campaigns I managed directly. Revenue is tracked revenue reported by the business.</p></div>
          {outcomes.map((r) => <div key={r.industry + r.period} className={styles.b2bProof}><div><span>{r.period} · {r.budget} budget</span><h3>{r.industry}</h3></div><p>{r.leads} leads at a {r.cpl} cost per lead, with {r.revenue} in tracked revenue (about {r.revenuePerLead} per lead).</p></div>)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">Trades I work with</p>
          <div className={styles.sectionHeading}><h2>Different trades, different search intent.</h2><p>Each service has its own urgency, job value and junk searches to filter out.</p></div>
          <div className={styles.breakdownGrid}>{trades.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">How I run home service accounts</p>
          <div className={styles.sectionHeading}><h2>The home services Google Ads playbook.</h2><p>Most wasted spend in local service accounts comes from the same few places.</p></div>
          <ol>{playbook.map(([name,copy],index)=><li key={name}><span>0{index+1}</span><div><h3>{name}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Questions from home service owners</p>
          <div className={styles.sectionHeading}><h2>Frequently asked questions</h2><p>Common questions about Google Ads for roofing, tree service and other local trades.</p></div>
          <div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
          <p><Link className="text-link" href="/google-ads-audit">Not sure what’s wrong? Start with a Google Ads audit ↗</Link></p>
        </div>
      </section>

      <section id="contact" className={`section final-cta ${styles.finalCta}`}>
        <div className="container">
          <p className="kicker">Home service Google Ads</p>
          <h2>Want more booked jobs from Google Ads?</h2>
          <p>Tell me your trade, service area and current results. I’ll tell you where I would look first.</p>
          <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:location,link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink><Link className="button button-outline" href="/google-ads-consultant">Google Ads consulting <span aria-hidden>↗</span></Link></div>
          <EmailLink ctaLocation={location} linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLdString(schema)}} />
    </main>
    <SiteFooter location={`${location}_footer`} />
  </>;
}
