import Image from "next/image";
import Link from "next/link";
import { BookingLink, Certifications, EmailLink, Header, TrackedLink } from "@/components/portfolio-client";
import { HeroHeadline, IntroVideo, ProofCard } from "@/components/home/hero-client";
import { HomeProvider, LeadForm, LeakCheck, PathCaseStudies, PathPicker, ResultsToggle, SystemMap } from "@/components/home/home-client";
import { getInsights, formatPublicationDate } from "@/data/insights";
import { links } from "@/data/content";
import { SiteFooter } from "@/components/site-footer";
import { jsonLdString, personRef, siteUrl, websiteId } from "@/lib/site";

const industries=[
  ["Home & Local Services",["Roofing","Pest Control","Tree Services","Landscape Design & Architecture","Pools","Automotive & Tire","Security Services","Real Estate","RV & Camper Dealerships"]],
  ["B2B & Professional Services",["Accounting","CPA Services","Fractional CFO","Financial Services","Commercial Equipment","AV & Media Technology","Office Equipment","Drone & Air Solutions"]],
  ["SaaS & Technology",["B2B SaaS","AI SaaS","Recruitment Technology","Apps","Subscription Products"]],
  ["eCommerce & Consumer",["Consumer Products","Kids Apparel","Personalized Products","Stone & Marble","Retail Products","Subscription Commerce"]],
];
const services=[
  ["Paid Media Management","Ongoing Google Ads, Meta Ads, and multi-platform management focused on acquisition quality, efficiency, and scalable growth."],
  ["PPC Account Audits","Deep analysis of campaign structure, search intent, bidding, tracking, lead quality, and landing-page alignment, prioritized by likely business impact."],
  ["Campaign Restructuring","Cleaning legacy campaign architecture and rebuilding around stronger intent, cleaner data, and clearer budget allocation."],
  ["Conversion Tracking & Attribution","GA4, GTM, Google Ads conversions, Meta Pixel, CAPI, enhanced conversions, lead-flow troubleshooting, and measurement QA."],
  ["Paid Media Strategy & Consulting","Senior strategic support for founders, agencies, and internal teams making decisions around paid acquisition, performance, and scale."],
];
const profilePageJsonLd={
  "@context":"https://schema.org",
  "@type":"ProfilePage",
  "@id":`${siteUrl}/#profile`,
  url:`${siteUrl}/`,
  name:"Jahangir Ahmed",
  isPartOf:{"@id":websiteId},
  mainEntity:personRef,
};

const steps=[
  ["A 20-minute call or a short note","You tell me what you spend, what you sell and what isn't working. I'll say honestly whether I can help."],
  ["An audit, usually within the first week","I review tracking, search terms, structure, bidding and lead quality, then send a prioritized list of what to fix first."],
  ["Fix, measure, then scale","Changes go in by likely impact. Budget increases come after the numbers that matter to the business improve."],
];

function Kicker({children,dark=false}:{children:React.ReactNode;dark?:boolean}){return <p className={`kicker${dark?" dark":""}`}>{children}</p>}

export default function Home(){
  const latest=getInsights().slice(0,3);
  return <><Header/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLdString(profilePageJsonLd)}}/><HomeProvider><main className="home-v3">

  <section className="hero hero-v4" id="top">
    <div className="hero-copy">
      <h1 className="eyebrow"><span/> Jahangir Ahmed · PPC, Google Ads &amp; Meta Ads Specialist</h1>
      <HeroHeadline/>
      <p className="hero-intro">Google Ads and Meta Ads for U.S. businesses that care about revenue, not clicks.</p>
      <div className="hero-actions">
        <BookingLink className="button" ctaLocation="hero">Book a Call</BookingLink>
        <a className="button button-ghost" href="#leak-check">Check your numbers <span aria-hidden>↓</span></a>
      </div>
      <ul className="hero-proof" aria-label="Professional credentials">{[["9+","years in paid media"],["$5M+","ad spend managed"],["50+","accounts managed"],["3","markets: U.S., MENA, AU"]].map(([a,b])=><li key={b}><strong>{a}</strong><span>{b}</span></li>)}</ul>
      <p className="hero-alt">Prefer a platform? <TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:"hero",link_text:"Hire me on Upwork"}} target="_blank" rel="noopener noreferrer">Hire me on Upwork ↗</TrackedLink> <i/> <TrackedLink href={links.linkedin} event="linkedin_click" details={{cta_location:"hero",link_text:"LinkedIn"}} target="_blank" rel="noopener noreferrer">LinkedIn ↗</TrackedLink></p>
    </div>
    <div className="portrait-stage"><Image className="portrait-cutout" src="/images/jahangir-cutout-2026.webp" alt="Jahangir Ahmed, PPC and Google Ads specialist" width={1086} height={1357} priority sizes="(max-width: 900px) 100vw, 44vw"/><IntroVideo/><ProofCard/></div>
  </section>
  <section className="path-band" aria-label="Choose your business type"><div className="container"><PathPicker/></div></section>

  <section className="section leak-section" id="leak-check"><div className="container">
    <div className="section-heading"><div><Kicker>Lead Leak Check</Kicker><h2>What does a customer really cost you?</h2></div><p>Move the sliders to match your account. You&apos;ll see the number most reports leave out, and where the money is most likely leaking.</p></div>
    <LeakCheck/>
  </div></section>

  <section className="section light results" id="results"><div className="container">
    <div className="section-heading"><div><Kicker dark>Selected results</Kicker><h2>Same campaigns, two ways to measure them.</h2></div><p>Lead generation accounts I managed directly across healthcare and local services. Switch views to see why I judge performance by revenue, not lead count.</p></div>
    <ResultsToggle/>
  </div></section>

  <section className="section cases" id="case-studies"><div className="container">
    <div className="section-heading"><div><Kicker>Case studies</Kicker><h2>Different businesses.<br/>Same discipline.</h2></div><p>Growth work across SaaS, eCommerce, subscription apps and multi-location service businesses.</p></div>
    <PathCaseStudies/>
    <div className="industry-strip" aria-label="Industry experience">
      <h3>Industries I&apos;ve worked in</h3>
      <div className="industry-strip-groups">{industries.map(([title,items])=><div key={title as string}><strong>{title as string}</strong><p>{(items as string[]).join(" · ")}</p></div>)}</div>
    </div>
  </div></section>

  <section className="section approach" id="approach"><div className="container">
    <div className="section-heading"><div><Kicker>How I find the problem</Kicker><h2>Paid acquisition is one system. I check all of it.</h2></div><p>Performance problems rarely live in one campaign setting. Pick a stage to see where money usually leaks and what I look at.</p></div>
    <SystemMap/>
    <div className="platforms">
      <article><span className="platform-mark">G</span><div><h3>Google Ads</h3><p>Capture existing demand, control search intent, and build measurement that bidding systems can trust.</p><p className="platform-tags">Search · Performance Max · Shopping · YouTube · Local Services Ads · Keyword strategy · Bidding · Conversion tracking</p><Link className="text-link" href="/google-ads-consultant">Google Ads consulting ↗</Link></div></article>
      <article><span className="platform-mark">M</span><div><h3>Meta Ads</h3><p>Create and scale demand through disciplined audience, creative, conversion, and measurement systems.</p><p className="platform-tags">Prospecting · Lead generation · Creative testing · Retargeting · eCommerce · Pixel · Conversions API · Scaling</p><Link className="text-link" href="/meta-ads-consultant">Meta Ads consulting ↗</Link></div></article>
    </div>
    <p className="also">Also: LinkedIn Ads · TikTok Ads · X Ads · Microsoft Ads · Snapchat. Tools: Claude · Codex · ChatGPT · Google Ads Scripts · Looker Studio · GA4 · GTM.</p>
    <div className="service-list compact">{services.map(x=><article key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div>
    <p className="service-links"><Link href="/google-ads-audit">Get a Google Ads audit ↗</Link><Link href="/google-ads-for-home-services">Google Ads for home services ↗</Link><Link href="/performance-marketing-specialist">Performance marketing strategy ↗</Link></p>
  </div></section>

  <section className="section light about" id="about"><div className="container">
    <div className="about-grid">
      <figure><div className="event-image"><Image src="/images/google-digital-guru-event.jpg" alt="Jahangir Ahmed attending the Google Digital Guru Program in 2018" width={1320} height={1306} sizes="(max-width:900px) 100vw, 44vw"/></div><figcaption>Google Digital Guru Program <span>•</span> 2018</figcaption></figure>
      <div className="about-copy"><Kicker dark>About</Kicker><h2>Nine years in performance marketing. Still hands-on.</h2>
        <p>I&apos;m Jahangir Ahmed, a performance marketer specializing in paid acquisition, campaign optimization, and conversion strategy.</p>
        <p>Over 9+ years, I&apos;ve managed more than $5M in advertising spend across U.S. and international businesses, from focused local-service campaigns to eCommerce operations spending tens of thousands of dollars per day. My work spans agencies, SaaS, eCommerce, financial services, real estate, home services, and multi-account client portfolios.</p>
        <p>The common thread is simple: understand what the business actually needs from paid media, find where performance is breaking down, and fix the acquisition system rather than chasing surface-level metrics.</p>
        <p className="location">Based in Lahore <i/> Working remotely with U.S. and global businesses</p>
        <div className="about-actions"><TrackedLink className="button dark-button" href={links.linkedin} event="linkedin_click" details={{cta_location:"about",link_text:"View LinkedIn"}} target="_blank" rel="noopener noreferrer">View LinkedIn <span aria-hidden>↗</span></TrackedLink><TrackedLink className="button resume-button" href="/resume/jahangir-ahmed-resume.pdf" event="resume_download" details={{cta_location:"about",file_name:"jahangir-ahmed-resume.pdf"}} download>Download Resume <span aria-hidden>↓</span></TrackedLink></div>
      </div>
    </div>
    <div className="testimonial-grid" id="testimonials">
      <blockquote><div className="quote-top"><span>Upwork client review</span><strong aria-label="5 out of 5 stars">★★★★★ <i>5.0</i></strong></div><p>“Jahangir did a great job working alongside me as our media buyer for Meta and Google Ads. He helped us create structure and set up everything correctly and efficiently.”</p><div className="quote-tags">Reliable · Collaborative · Committed to Quality</div><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:"testimonials",link_text:"View Upwork Profile"}} target="_blank" rel="noopener noreferrer">View Upwork Profile ↗</TrackedLink></blockquote>
      <blockquote><div className="quote-top"><span>LinkedIn recommendation</span></div><p>“Jahangir is well informed on the latest digital trends. His media buying &amp; PPC marketing skills are excellent. He&apos;s organized with his budgeting &amp; reporting and offers key insights on how to maximize ROAS.”</p><footer><strong>Abrar Chohan</strong><span>Former colleague</span></footer><TrackedLink href={links.linkedin} event="linkedin_click" details={{cta_location:"testimonials",link_text:"View LinkedIn"}} target="_blank" rel="noopener noreferrer">View LinkedIn ↗</TrackedLink></blockquote>
    </div>
    <div className="certifications" aria-label="Certifications"><h3>Certifications</h3><Certifications/></div>
  </div></section>

  <section className="section insights-row" id="insights"><div className="container">
    <div className="section-top"><div><Kicker>Latest from Insights</Kicker><h2>How I think about the work.</h2></div><Link className="text-link" href="/insights">All articles ↗</Link></div>
    <div className="insight-cards">{latest.map(a=><Link key={a.slug} href={`/insights/${a.slug}`} className="insight-card"><time dateTime={a.publishedAt}>{formatPublicationDate(a.publishedAt)}</time><h3>{a.title}</h3><p>{a.description}</p><span>Read article ↗</span></Link>)}</div>
  </div></section>

  <section className="section contact" id="contact"><div className="container">
    <div className="section-heading"><div><Kicker>How we&apos;d start</Kicker><h2>Need someone who can find what&apos;s actually holding paid media back?</h2></div><p>Whether you&apos;re rescuing an underperforming account, cleaning up years of campaign clutter, or scaling something that already works, it starts the same way.</p></div>
    <ol className="steps">{steps.map(([t,d],i)=><li key={t}><span>Step {i+1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    <div className="contact-grid">
      <div className="contact-options">
        <h3>Talk it through</h3>
        <p>Pick a 20-minute slot on my calendar, or send the form and I&apos;ll reply by email.</p>
        <BookingLink className="button" ctaLocation="contact">Book a Call</BookingLink>
        <ul>
          <li><span>Email</span><EmailLink ctaLocation="final_cta" linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink></li>
          <li><span>Upwork</span><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:"final_cta",link_text:"Hire Me on Upwork"}} target="_blank" rel="noopener noreferrer">Hire me on Upwork ↗</TrackedLink></li>
          <li><span>LinkedIn</span><TrackedLink href={links.linkedin} event="linkedin_click" details={{cta_location:"final_cta",link_text:"Connect on LinkedIn"}} target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</TrackedLink></li>
        </ul>
      </div>
      <LeadForm/>
    </div>
  </div></section>

 </main></HomeProvider><SiteFooter/></>;
}
