import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { SiteFooter } from "@/components/site-footer";
import { links } from "@/data/content";
import { jsonLdString, personRef, siteUrl } from "@/lib/site";
import styles from "../google-ads-consultant/page.module.css";

const pageUrl = `${siteUrl}/meta-ads-consultant`;
const title = "Meta Ads Consultant | Facebook Ads Specialist | Jahangir Ahmed";
const description = "Meta Ads consultant with 9+ years in paid media. Facebook and Instagram ads for eCommerce, leads and apps: audiences, creative testing, Pixel and CAPI.";
const location = "meta_ads_consultant";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website", title, description, url: pageUrl, siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og-share-2026.jpg`, width: 1200, height: 630, alt: "Jahangir Ahmed, Meta Ads consultant" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og-share-2026.jpg`] },
};

const capabilities = [
  "Facebook Ads", "Instagram Ads", "Prospecting", "Retargeting", "Lead Generation", "eCommerce", "Advantage+ & Catalog",
  "Audience Strategy", "Creative Testing", "Persona-Based Messaging", "Meta Pixel", "Conversions API", "Budget Scaling", "Purchase-Quality Analysis",
];

const services = [
  ["Meta Ads strategy", "I start with who actually buys, what they need to believe and what a good customer is worth. Campaign structure, audiences and creative are then built around those answers, not around whatever the platform optimizes toward by default."],
  ["Facebook and Instagram campaign management", "Hands-on management of prospecting and retargeting across Facebook and Instagram, including budget allocation, audience layering, placements and ongoing optimization against the metrics the business cares about."],
  ["Creative testing", "Meta performance is driven by creative. I build structured tests across personas, hooks, formats and offers, including testimonial-led, founder-led, USP-driven and short-form video concepts, and keep what improves customer quality."],
  ["Audience and customer quality", "More purchases are not always better purchases. For Oaklynn, a parent and mother-focused audience strategy helped cut the return-order rate from roughly 40% to 15% while ROAS rose from about 2x to 6x."],
  ["Meta Pixel and Conversions API", "Meta can only optimize toward what it can see. I review Pixel and CAPI setup, event quality and deduplication so the signals reflect real leads and purchases, including journeys that pass through third-party booking tools."],
  ["Meta Ads for lead generation", "For service businesses, I connect Meta campaigns to lead quality, not just cost per lead. That means qualifying forms and landing pages, location targeting, and retargeting warm visitors who already engaged through search or the website."],
];

const faqs = [
  ["What does a Meta Ads consultant do?", "A Meta Ads consultant plans, runs and improves Facebook and Instagram advertising against business goals. My work covers audience strategy, creative testing, campaign structure, Pixel and Conversions API measurement, and scaling budgets once the economics hold up."],
  ["Is Meta Ads the same as Facebook Ads?", "Yes. Meta Ads is the current name for advertising across Facebook, Instagram, Messenger and the Audience Network, all managed from Meta Ads Manager. Most of my Meta work runs across Facebook and Instagram together."],
  ["Do you work with eCommerce brands on Meta?", "Yes. eCommerce is a core part of my Meta experience, including catalog and product-feed work, seasonal campaigns and creative testing. I evaluate success on customer quality and retained revenue, not only on platform-reported ROAS."],
  ["Can Meta Ads work for lead generation?", "Yes, when the campaign is built around lead quality. That usually means clear qualification in the form or landing page, location-relevant targeting and retargeting of people who have already shown intent."],
  ["Do you set up the Meta Pixel and Conversions API?", "I review and improve Pixel and Conversions API setups, including event selection, deduplication and validating that conversions match what actually happened in the business."],
  ["Do you manage Meta Ads and Google Ads together?", "Yes. Google captures existing demand while Meta creates demand and retargets warm users. For Sonder Mens, location-specific Google Search and Performance Max ran alongside Meta prospecting and retargeting."],
  ["Do you work with U.S. businesses?", "Yes. U.S. businesses are my primary market, with additional experience across MENA and Australia. I am based in Lahore and work remotely with businesses and agency teams."],
];

const outcomes = [
  ["eCommerce / Kids apparel", "Oaklynn", "Meta ROAS rose from approximately 2x to 6x and held for at least two further quarters, while return orders fell from roughly 40% to 15%. All of this ran on a lean budget under $3K a month."],
  ["Australia / Multi-location services", "Sonder Mens", "Location-specific Meta campaigns with stylist-led, USP-driven and short-form creative, plus search-to-Meta retargeting, took Meta ROAS from approximately 4x to 8x over about five months."],
  ["Subscription app / Fitness", "AimFit", "Paid app acquisition with Adjust attribution and MoEngage lifecycle automation maintained approximately 4:1 LTV:CAC at roughly $30K–$40K monthly acquisition spend."],
];

const approach = [
  ["Customer", "Define the buyer, the offer and what a valuable customer looks like."],
  ["Signals", "Make Pixel and CAPI events reliable enough for Meta to learn from."],
  ["Audiences", "Test personas and audience layers that match the real buyer."],
  ["Creative", "Run structured creative tests by persona, hook, format and funnel stage."],
  ["Quality", "Judge results on lead quality, returns and retained revenue."],
  ["Scale", "Increase budgets where acquisition economics stay repeatable."],
];

export default function MetaAdsConsultantPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Meta Ads Consultant", item: pageUrl },
      ] },
      { "@type": "Service", "@id": `${pageUrl}#service`, url: pageUrl, name: "Meta Ads consulting", description,
        serviceType: "Facebook and Instagram advertising strategy, management and measurement", provider: personRef },
    ],
  };

  return <>
    <Header homeHrefPrefix="/" ctaLocation={location} />
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className="eyebrow"><span /> Meta Ads Consultant</p>
          <h1>Meta Ads Consultant for <span>Customer-Quality Growth</span></h1>
          <p>I’m Jahangir Ahmed, a Facebook and Instagram ads specialist with 9+ years in paid media and $5M+ in managed spend. I help eCommerce brands, apps and service businesses use Meta Ads to find better customers, not just more conversions.</p>
          <div className={styles.actions}>
            <TrackedLink className="button" href="#outcomes" event="results_interaction" details={{interaction_type:"view_results",section:location}}>View Meta Results <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href="#contact" event="contact_cta_click" details={{cta_location:location,link_text:"Discuss your account"}}>Discuss your account <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href={links.upwork} event="upwork_click" details={{cta_location:location,link_text:"Hire Me on Upwork"}} target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink>
          </div>
        </div>
      </section>

      <section className="credibility" aria-label="Professional credentials">{[["9+","Years Experience"],["$5M+","Paid Media Managed"],["2x → 6x","Oaklynn Meta ROAS"],["4x → 8x","Sonder Mens Meta ROAS"]].map((metric)=><div key={metric[1]}><strong>{metric[0]}</strong><span>{metric[1]}</span></div>)}</section>

      <section className={`section light ${styles.capabilities}`}>
        <div className="container">
          <p className="kicker dark">Meta Ads capabilities</p>
          <div className={styles.sectionHeading}><h2>Facebook and Instagram ads management.</h2><p>Audience, creative and measurement work built around the customers your business actually wants.</p></div>
          <div className={styles.capabilityGrid}>{capabilities.map((capability,index)=><div key={capability}><span>{String(index+1).padStart(2,"0")}</span><strong>{capability}</strong></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">Strategy and execution</p>
          <div className={styles.sectionHeading}><h2>What Meta Ads consulting covers.</h2><p>Hands-on support from strategy and creative testing through measurement and scaling.</p></div>
          <div className={styles.breakdownGrid}>{services.map(([name, copy], index) => <article key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section id="outcomes" className={`section light ${styles.examples}`}>
        <div className="container">
          <p className="kicker dark">Selected Meta Ads outcomes</p>
          <div className={styles.sectionHeading}><h2>Meta Ads results with the context attached.</h2><p>Separate accounts and acquisition programs from the portfolio. Figures are approximate and shown only where verified.</p></div>
          {outcomes.map(([context, brand, copy]) => <div key={brand} className={styles.b2bProof}><div><span>{context}</span><h3>{brand}</h3></div><p>{copy}</p><TrackedLink className="text-link" href="/#case-studies" event="results_interaction" details={{interaction_type:"view_case_studies",section:location}}>Read the case study ↗</TrackedLink></div>)}
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Operating framework</p>
          <div className={styles.sectionHeading}><h2>How I approach Meta Ads.</h2><p>Meta learns from the signals and creative you give it. Each stage makes the next one more reliable.</p></div>
          <ol>{approach.map(([name,copy],index)=><li key={name}><span>0{index+1}</span><div><h3>{name}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className={`section ${styles.approach}`}>
        <div className="container">
          <p className="kicker">Questions before getting started</p>
          <div className={styles.sectionHeading}><h2>Frequently asked questions</h2><p>What to expect from Meta Ads consulting and campaign management.</p></div>
          <div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
          <p><Link className="text-link" href="/google-ads-consultant">Looking for search? Explore Google Ads consulting ↗</Link></p>
        </div>
      </section>

      <section id="contact" className={`section final-cta ${styles.finalCta}`}>
        <div className="container">
          <p className="kicker">Meta Ads consulting</p>
          <h2>Want Meta Ads that bring better customers, not just more of them?</h2>
          <p>Share your offer, current results and what good customers look like. We can find the constraint and decide what to test first.</p>
          <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:location,link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink><Link className="button button-outline" href="/performance-marketing-specialist">Cross-channel strategy <span aria-hidden>↗</span></Link></div>
          <EmailLink ctaLocation={location} linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLdString(schema)}} />
    </main>
    <SiteFooter location={`${location}_footer`} />
  </>;
}
