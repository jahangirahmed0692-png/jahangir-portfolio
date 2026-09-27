import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { caseStudies, links } from "@/data/content";
import shared from "../google-ads-consultant/page.module.css";
import styles from "./page.module.css";

const siteUrl = "https://jahangirahmed.com";
const pageUrl = `${siteUrl}/performance-marketing-specialist`;
const title = "Performance Marketing Specialist | Jahangir Ahmed";
const description = "Performance marketing specialist with 9+ years and $5M+ in paid media managed. Google Ads, Meta Ads, tracking and acquisition for U.S. and global businesses.";
const location = "performance_marketing_specialist";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website", title, description, url: pageUrl, siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Jahangir Ahmed — Performance Marketing Specialist" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
};

const responsibilities = [
  ["Search and Performance Max", "Capture existing demand through Google Search, Shopping and Performance Max, with keyword intent, campaign structure and conversion data guiding investment."],
  ["Meta Ads and retargeting", "Build prospecting and retargeting around audience quality, product or service relevance, and creative that gives people a reason to act."],
  ["Lead generation", "Connect campaign decisions to qualified enquiries, service fit and acquisition cost. A form submission is a starting point for evaluating quality, not the whole result."],
  ["eCommerce acquisition", "Evaluate customer acquisition through purchases, retained revenue and returns. Coordinate audience strategy, catalog improvements and seasonal creative with the buying journey."],
  ["App and subscription growth", "Look beyond installs to sign-ups, trial activation, paid subscriptions and continued engagement. Align acquisition with attribution and lifecycle marketing."],
  ["Creative, landing pages and measurement", "Use creative testing, landing page optimization and tracking QA to find what prevents relevant traffic from converting. Keep campaign and funnel decisions connected."],
];

const approach = [
  ["Define the commercial objective", "Start with what the business needs: qualified leads, profitable orders or paying subscribers. Clarify the customer value and acquisition economics that make the goal worthwhile."],
  ["Check measurement before interpreting results", "Review conversion actions and attribution, then test the journey from click to meaningful action. Missing or duplicated signals can make an account look healthier than it is."],
  ["Understand audience and keyword intent", "Identify who is likely to buy, what they need and how they express that need. Search terms, audience behavior and customer quality inform the acquisition strategy."],
  ["Build campaign architecture and messaging", "Organize campaigns around business priorities, locations, offers or funnel stages. Match creative and landing pages to the promise that brought the person there."],
  ["Optimize across the journey", "Review search terms, bids, budgets, audiences and creative alongside conversion rates and downstream quality. Prioritize the constraint with the clearest commercial impact."],
  ["Scale where the economics support it", "Increase investment when acquisition is repeatable and measurement is dependable. Keep testing as budgets grow rather than assuming earlier efficiency will hold."],
];

const businessModels = [
  ["SaaS and B2B", "Conversion recovery, customer acquisition and funnel alignment for businesses where traffic alone does not explain pipeline or customer acquisition cost."],
  ["eCommerce", "Customer quality, catalog strategy and creative testing, including kids apparel work for Oaklynn where return orders were an important part of performance."],
  ["Mobile apps and subscriptions", "Full-funnel app acquisition and lifecycle work, including AimFit’s journey from install through onboarding, trial and paid subscription."],
  ["Local services and healthcare", "High-intent lead generation across roofing, tree services, commercial tire repair and hospice care, plus location-specific acquisition for service businesses."],
];

const faqs = [
  ["What does a performance marketing specialist do?", "A performance marketing specialist plans, measures and improves acquisition against business goals. My work connects paid media, audiences, creative, landing pages and tracking so decisions reflect customer quality and acquisition economics, not just clicks or platform conversions."],
  ["What platforms do you manage?", "Google Ads and Meta Ads are my primary specializations. My broader paid media experience also includes LinkedIn Ads, TikTok Ads, Snapchat, X and Microsoft Ads. Platform selection depends on the audience, offer and measurement needs of the business."],
  ["Do you work with U.S. companies?", "Yes. U.S. businesses are my primary market, alongside additional MENA and Australian experience. I am based in Lahore and work remotely with businesses and teams across markets."],
  ["What is the difference between a performance marketer and a PPC specialist?", "PPC work typically focuses on paid advertising campaigns. Performance marketing can extend into the wider acquisition journey: creative, conversion optimization, attribution and lifecycle engagement. In my work, campaign execution and those broader responsibilities inform each other."],
  ["Do you manage both Google Ads and Meta Ads?", "Yes. I manage Google and Meta campaigns together where both support the business objective. For Sonder Mens, that included local Search and Performance Max alongside Meta prospecting and retargeting, with location-specific creative and booking measurement."],
  ["Can you help with conversion tracking?", "Yes. My services cover GA4, Google Tag Manager, Google Ads conversions, Meta Pixel and CAPI, enhanced conversions and measurement QA. I review what is being counted and whether those signals reflect the actions the business actually values."],
  ["Do you work with lead generation and eCommerce?", "Yes, and I evaluate them differently. Lead-generation accounts need useful enquiries and visibility into lead quality. eCommerce accounts need sustainable purchase economics, including customer quality and returns. App and subscription work adds onboarding, trials and retention to that picture."],
  ["Do you work with agencies or in-house teams?", "Yes. My experience spans agencies, multi-account portfolios and business teams. I can support ongoing paid media management or work as a performance marketing consultant on account audits, measurement, restructuring and growth priorities."],
];

const selectedCases = caseStudies.filter((item) => ["oaklynn", "sonder_mens", "aimfit"].includes(item.trackingName ?? ""));
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Performance Marketing Specialist", item: pageUrl },
      ],
    },
    {
      "@type": "Service", "@id": `${pageUrl}#service`, url: pageUrl,
      name: "Performance marketing consulting and paid media management", description,
      serviceType: "Cross-channel paid acquisition, measurement and optimization",
      provider: {
        "@type": "Person", name: "Jahangir Ahmed", jobTitle: "Performance Marketing Specialist",
        url: `${siteUrl}/`, sameAs: [links.linkedin, links.upwork],
        knowsAbout: ["Google Ads", "Meta Ads", "Paid acquisition", "Conversion tracking", "GA4", "Google Tag Manager", "Lifecycle marketing"],
      },
    },
  ],
};

export default function PerformanceMarketingSpecialistPage() {
  return <>
    <Header homeHrefPrefix="/" ctaLocation={location} />
    <main>
      <section className={shared.hero}>
        <div className="container">
          <p className="eyebrow"><span /> Paid media strategy and execution</p>
          <h1>Performance Marketing Specialist for <span>Profitable Growth</span></h1>
          <p>I’m Jahangir Ahmed, a performance marketing specialist with 9+ years of paid media experience and more than $5M managed. I bring Google Ads and Meta Ads expertise to acquisition strategy, measurement and optimization, with U.S. businesses as my primary market and additional experience across MENA and Australia.</p>
          <div className={shared.actions}>
            <TrackedLink className="button" href="#outcomes" event="results_interaction" details={{interaction_type:"view_results",section:location}}>Explore selected outcomes <span aria-hidden>↓</span></TrackedLink>
            <TrackedLink className="text-link" href="#contact" event="contact_cta_click" details={{cta_location:location,link_text:"Discuss your acquisition goals"}}>Discuss your acquisition goals <span aria-hidden>↓</span></TrackedLink>
          </div>
        </div>
      </section>

      <section className="credibility" aria-label="Paid media experience">{[["9+","Years Experience"],["$5M+","Paid Media Managed"],["50+","Multi-Account Portfolio"],["U.S.","Primary Market Experience"]].map(([value,label])=><div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className={`section light ${styles.light}`}>
        <div className="container">
          <p className="kicker dark">What I manage</p>
          <div className={shared.sectionHeading}><h2>Ownership across the acquisition journey.</h2><p>As a paid media specialist, I connect channel execution with the work around it: audience strategy, creative, conversion optimization and reliable measurement.</p></div>
          <div className={styles.grid}>{responsibilities.map(([heading,copy])=><article key={heading}><h3>{heading}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className={`section ${shared.approach}`}>
        <div className="container">
          <p className="kicker">Performance marketing approach</p>
          <div className={shared.sectionHeading}><h2>Start with the business. Build the system around it.</h2><p>My role is to find what is holding performance back and connect the changes needed across media, measurement and the conversion journey.</p></div>
          <ol>{approach.map(([heading,copy],index)=><li key={heading}><span>0{index+1}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>)}</ol>
        </div>
      </section>

      <section className={`section light ${styles.light}`}>
        <div className="container">
          <p className="kicker dark">Google and Meta</p>
          <div className={shared.sectionHeading}><h2>Capture demand and create reasons to buy.</h2><p>Each platform has a different job. The channel mix should reflect customer behavior and commercial priorities.</p></div>
          <div className={styles.grid}>
            <article><h3>Google Ads: intent-led acquisition</h3><p>My Google Ads work spans Search, Performance Max, Shopping and YouTube, supported by keyword strategy, search-term analysis and conversion tracking. For Sonder Mens, location-specific Search and PMax campaigns helped focus acquisition on premium, locally relevant customers.</p><Link className="text-link" href="/google-ads-consultant">Explore Google Ads consulting and account management ↗</Link></article>
            <article><h3>Meta Ads: audiences, creative and customer quality</h3><p>I manage prospecting, retargeting and creative testing for lead generation and eCommerce. Audience strategy, catalog quality and messaging work together with Meta Pixel and Conversions API (CAPI) signals. At Oaklynn, parent-focused audience testing and stronger product discovery were part of improving the quality of purchases.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">Measurement and tracking</p>
          <div className={shared.sectionHeading}><h2>Make the signals useful before making the budget bigger.</h2><p>A conversion count is only helpful when you understand what happened, how it was recorded and what it means for the business.</p></div>
          <div className={styles.grid}>
            <article><h3>Web measurement and conversion quality</h3><p>My tracking services cover GA4, Google Tag Manager, Google Ads conversions, enhanced conversions, Meta Pixel and Meta CAPI. I review browser and server-side signals for missing or duplicated actions and troubleshoot the lead flow. For Sonder Mens, implementation included GTM listeners and QA for third-party booking measurement.</p></article>
            <article><h3>App attribution and lifecycle marketing</h3><p>At AimFit, I introduced Adjust for mobile attribution and MoEngage for behavior-based lifecycle journeys. Marketing automation connected installs, sign-ups, trials and subscriptions through push notifications, in-app messaging and WATI / WhatsApp workflows. That work helped move the focus from install volume to subscription economics.</p></article>
          </div>
        </div>
      </section>

      <section className={`section light ${styles.light}`}>
        <div className="container">
          <p className="kicker dark">Business models</p>
          <div className={shared.sectionHeading}><h2>Experience shaped by different buying journeys.</h2><p>The same dashboard metrics can mean different things in SaaS, eCommerce or healthcare. I adapt acquisition and measurement to how the business earns revenue.</p></div>
          <div className={styles.grid}>{businessModels.map(([heading,copy])=><article key={heading}><h3>{heading}</h3><p>{copy}</p></article>)}</div>
          <Link className={styles.sectionLink} href="/#about">Read more about Jahangir’s background ↗</Link>
        </div>
      </section>

      <section id="outcomes" className="section">
        <div className="container">
          <p className="kicker">Selected outcomes</p>
          <div className={shared.sectionHeading}><h2>Results with the business context attached.</h2><p>These examples come from separate accounts and acquisition programs in the portfolio. Channel, time period and scope matter when interpreting each outcome.</p></div>
          <div className={styles.grid}>
            {selectedCases.map(item=><article key={item.trackingName}><p className="kicker">{item.category}</p><h3>{item.brand}</h3><p>{item.outcome}</p><TrackedLink className="text-link" href="/#case-studies" event="results_interaction" details={{interaction_type:"view_case_studies",section:location}}>Read the {item.brand} case study ↗</TrackedLink></article>)}
            <article><p className="kicker">U.S. lead generation</p><h3>Tree service company</h3><p>The portfolio records 210 qualified leads at $34 CPL and $303,027 in tracked revenue over 90 days for a tree service account. Other documented lead-generation work includes roofing, commercial tire repair and hospice care.</p><TrackedLink className="text-link" href="/#results" event="results_interaction" details={{interaction_type:"view_results",section:location}}>Explore lead-generation results ↗</TrackedLink></article>
          </div>
        </div>
      </section>

      <section className={`section light ${styles.light}`}>
        <div className="container">
          <p className="kicker dark">Senior strategic support</p>
          <div className={shared.sectionHeading}><h2>Why hire a performance marketing specialist?</h2><p>Running campaigns is one part of the job. The broader responsibility is knowing which changes are likely to improve the commercial result.</p></div>
          <div className={styles.grid}>
            <article><h3>Connect platform decisions to business KPIs</h3><p>More conversions do not always mean better customers. I evaluate CPL alongside lead quality, ROAS alongside returns, and app acquisition alongside subscriptions and customer value. That helps identify when the next improvement belongs in media, creative, a landing page or measurement.</p></article>
            <article><h3>Give the team a clear set of priorities</h3><p>My experience across agencies and multi-account portfolios informs how I approach competing priorities and budgets. As a paid media consultant, I can audit an existing program, help restructure campaigns or support ongoing execution with founders, agencies and in-house teams.</p></article>
          </div>
        </div>
      </section>

      <section className={`section ${shared.approach}`}>
        <div className="container">
          <p className="kicker">Questions before getting started</p>
          <div className={shared.sectionHeading}><h2>Frequently asked questions</h2><p>How platform management, measurement and broader acquisition support fit together.</p></div>
          <div className={shared.faqs}>{faqs.map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
        </div>
      </section>

      <section id="contact" className={`section final-cta ${shared.finalCta}`}>
        <div className="container">
          <p className="kicker">Work with Jahangir</p>
          <h2>Make the next acquisition decision a clearer one.</h2>
          <p>Share your business model, current channels and the performance problem you want to solve. We can start with the constraint and define the work around it.</p>
          <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:location,link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink><Link className="button button-outline" href="/">Explore the full portfolio <span aria-hidden>↗</span></Link></div>
          <EmailLink ctaLocation={location} linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    </main>
  </>;
}
