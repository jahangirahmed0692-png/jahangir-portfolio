export const links = {
  upwork: "https://www.upwork.com/freelancers/~01ff8182489f04452d?mp_source=share",
  linkedin: "https://www.linkedin.com/in/jahangir-ahmed-11835888/",
  email: "mailto:jahangirahmed0692@gmail.com",
};

export const results = [
  { industry: "Hospice Care", revenue: "$889,930", leads: "216", period: "6 months", cpl: "$200", revenuePerLead: "~$4,120", budget: "$7.2K", featured: true },
  { industry: "Roofing Company", revenue: "$229,483", leads: "102", period: "90 days", cpl: "$116", revenuePerLead: "~$2,250", budget: "$3.9K", featured: true },
  { industry: "Tree Service Company", revenue: "$303,027", leads: "210", period: "90 days", cpl: "$34", revenuePerLead: "~$1,443", budget: "$3.2K", featured: true },
  { industry: "Roofing Company", revenue: "$143,471", leads: "66", period: "6 months", cpl: "$92", revenuePerLead: "~$2,174", budget: "$1K", featured: false },
  { industry: "Commercial Tire Repair", revenue: "$264,600", leads: "252", period: "90 days", cpl: "$54", revenuePerLead: "$1,050", budget: "$4.5K", featured: true },
];

export const problems = [
  ["Search Intent", "Finding where spend is leaking into poor-quality searches, competitors, informational traffic, and irrelevant services."],
  ["Account Structure", "Removing fragmentation, duplication, redundant keywords, and structural conflicts."],
  ["Conversion Tracking", "Fixing missing, duplicated, or misleading conversion signals across advertising and analytics platforms."],
  ["Landing Pages", "Improving message match, service alignment, and conversion friction."],
  ["Creative Strategy", "Building testing systems around audience pain points, offers, placement, and format."],
  ["Bidding & Budgets", "Matching bidding strategy and allocation to conversion maturity and economics."],
  ["Lead Quality", "Optimizing toward prospects the business actually wants rather than maximizing raw platform conversion counts."],
  ["Scaling", "Increasing investment once the acquisition system demonstrates repeatable economics."],
];

export type CaseStudy = {
  category:string;
  title:string;
  metrics:[string,string][];
  tags?:string[];
  situation:string;
  diagnosis:string;
  execution:string;
  outcome:string;
  brand?:string;
  brandUrl?:string;
  summary?:string;
  strategy?:string;
  executionGroups?:{ title?:string; items:string[] }[];
  trackingName?:string;
};
export const caseStudies: CaseStudy[] = [
  { category:"B2B / SaaS", title:"Conversion Recovery", metrics:[["1.3% → 4%+","Conversion Rate"],["~$8K → ~$3K","CAC"]], tags:["Google Ads","Meta Ads","Landing Pages","Tracking"], situation:"Paid acquisition was generating traffic but the funnel converted at approximately 1.3%, while customer acquisition cost had increased to roughly $8,000.", diagnosis:"The acquisition journey needed tighter audience targeting, cleaner measurement, and stronger alignment between campaign strategy and landing-page experience.", execution:"Refined audiences, improved bidding decisions, tightened conversion tracking, and supported landing-page testing.", outcome:"Conversion rate increased beyond 4% within approximately one month and CAC declined to roughly $3,000 within approximately two months." },
  { category:"AI SaaS", title:"Customer Acquisition", metrics:[["1,000+","Sign-ups"],["~$0.60","Cost Per Sign-Up"],["~10%","Paid User Conversion"]], situation:"An AI SaaS product needed a disciplined acquisition program to build its initial user base.", diagnosis:"The launch required efficient paid acquisition coordinated with a broader go-to-market effort.", execution:"Managed paid acquisition and supported the broader launch strategy across campaign planning, audience development, and performance optimization.", outcome:"Generated more than 1,000 sign-ups at approximately $0.60 per sign-up, with roughly 10% converting to paid customers. The broader launch strategy also supported a Product Hunt launch that reached #1 Product of the Day; paid media was one component of that effort." },
  { category:"App Growth", title:"Full-Funnel Acquisition", metrics:[["30%","CAC Reduction"],["20%","LTV Improvement"],["40%","Install Growth"],["25%","Install-to-Sign-Up Rate"],["15%","Sign-Up-to-Purchase"]], situation:"An app acquisition program needed improvement across the full customer journey, not only at the install stage.", diagnosis:"Media, creative, landing pages, audiences, and analytics needed to operate as one connected acquisition system.", execution:"Paid acquisition across Google, Meta, TikTok, Snapchat, LinkedIn, and X, supported by creative optimization, landing-page testing, audience refinement, and full-funnel analytics.", outcome:"The work contributed to a 30% CAC reduction, 20% LTV improvement, 40% install growth, a 25% install-to-sign-up rate, and 15% sign-up-to-purchase conversion." },
  {
    brand:"Oaklynn",
    brandUrl:"https://theoaklynn.com/",
    category:"eCommerce / Kids Apparel",
    title:"Full-Funnel eCommerce Growth",
    metrics:[["2x → 6x","ROAS"],["40% → 15%","Return Order Rate"],["$20K–$30K/mo","Managed Spend"],["2 Quarters+","6x ROAS Sustained"]],
    tags:["Meta Ads","eCommerce","Audience Strategy","Catalog","Landing Pages","Creative Testing"],
    summary:"Improved customer quality, reduced return orders, and sustained stronger paid-media economics at scale.",
    situation:"Oaklynn needed to improve the quality of customers coming through paid media rather than simply increasing order volume. A major issue was a roughly 40% return-order rate, which meant the platform was optimizing toward purchases that did not always translate into retained revenue.",
    diagnosis:"The acquisition system needed stronger audience quality, better product discovery, cleaner catalog signals and more deliberate segmentation around the people most likely to purchase children’s clothing. Parents, and particularly mothers purchasing clothes for their children, represented the strongest buying personas. The acquisition structure needed enough audience testing, customer segmentation and conversion feedback to help Meta learn those higher-value purchasing patterns.",
    strategy:"Rebuilt the acquisition approach around customer quality rather than raw purchase volume. Created layered parent and mother-focused audience strategies, tested higher-value customer segments, improved catalog structure, refined landing-page product visibility and introduced seasonal campaign strategies.",
    execution:"Executed an iterative program across audiences, merchandising, creative and purchase-quality analysis.",
    executionGroups:[{items:["Parent and mother-focused audience testing","High-value customer segmentation","Meta audience-layer experimentation","Product catalog/feed optimization","Featured-product improvements on landing pages","Seasonal campaign planning","AI-assisted creative development","Persona-based messaging","Testimonial-led creative","Continuous funnel A/B testing","Purchase-quality analysis","Return-order analysis","Creative testing across customer personas"]}],
    outcome:"Within approximately three months, return orders declined from roughly 40% to 15%. Paid media ROAS increased from approximately 2x to 6x and remained around that level for at least two subsequent quarters while managing approximately $20,000–$30,000 in monthly media spend.",
    trackingName:"oaklynn",
  },
  {
    brand:"Sonder Mens",
    brandUrl:"https://sondermens.com.au/",
    category:"Multi-Location / Local Services",
    title:"Cross-Channel Location Growth",
    metrics:[["4x → 8x","Meta ROAS"],["~9x","Google Ads ROAS"],["$20K–$30K/mo","Managed Spend"],["5 Months","Scaling Period"]],
    tags:["Google Ads","Meta Ads","Performance Max","Local Search","Retargeting","Conversion Tracking"],
    summary:"Built location-specific acquisition across Google and Meta for premium, higher-intent customers.",
    situation:"Sonder Mens operated across multiple salon locations, creating a more complex acquisition problem than simply generating bookings. Campaigns needed to reach customers near individual locations, promote the right services and stylists and avoid wasting budget on people primarily searching for lower-cost haircut options that did not align with the brand’s premium positioning.",
    diagnosis:"The account needed tighter geographic structure, better alignment between campaigns and salon locations, stronger creative differentiation and more reliable conversion tracking. Search traffic contained price-sensitive and lower-value intent that needed to be reduced. The booking journey also relied on third-party systems, making accurate measurement an important part of the acquisition strategy.",
    strategy:"Built a location-specific acquisition system across Google and Meta. Google campaigns captured high-intent local demand while Meta was used for creative-led prospecting and retargeting of warmer users who had previously interacted through search or the website. Campaign structure, creative concepts and measurement were increasingly customized by individual location.",
    execution:"Combined location-level campaign structure, creative testing, cross-channel retargeting and booking measurement.",
    executionGroups:[{items:["Location-specific Google Search campaigns","Dedicated Performance Max campaigns by location","Search-term and query cleanup","Exclusion of low-value / low-cost haircut intent","Stylist-led advertising concepts","Location-specific Meta campaigns","Short-form creative testing","Meme-based creative testing","Competitor / us-vs-them positioning","USP-driven creative","Cross-channel retargeting","Search-to-Meta retargeting audiences","High-intent audience segmentation","GTM listener implementation for third-party booking tracking","Conversion-measurement QA","Funnel analysis by location"]}],
    outcome:"Meta ROAS increased from approximately 4x to 8x over roughly five months. Google Ads produced approximately 9x ROAS. Campaigns operated at approximately $20,000–$30,000 per month across the acquisition mix while maintaining stronger focus on premium, location-relevant customers and cleaner conversion measurement.",
    trackingName:"sonder_mens",
  },
  {
    brand:"AimFit",
    category:"Subscription App / Fitness Technology",
    title:"Subscription App Acquisition & Lifecycle Growth",
    metrics:[["~4:1","LTV:CAC"],["$30K–$40K/mo","Acquisition Spend"],["~PKR 800","Illustrative CAC"],["6 Months","Optimization Period"]],
    tags:["App Acquisition","Subscription Growth","Adjust","MoEngage","Lifecycle Marketing","Marketing Automation","Performance Marketing","WhatsApp Automation"],
    summary:"Connected paid acquisition, attribution and lifecycle automation to optimize for subscriptions—not installs alone.",
    situation:"Jahangir led the acquisition / performance marketing team for AimFit, a female-focused fitness technology startup in Pakistan built around digital and online workout access. AimFit needed to build a scalable acquisition system for women who were willing and able to adopt digital workouts instead of relying entirely on traditional gyms. The strongest use case included working women, working mothers and women whose schedules, travel constraints or circumstances made regular gym visits difficult. The challenge was not simply driving app installs, but identifying women who would install the app, complete onboarding, begin a trial and ultimately become paying subscribers.",
    diagnosis:"Raw app-install volume alone was not a useful success metric. The acquisition system needed visibility across the complete journey from paid or organic visit to app install, sign-up, trial activation, paid subscription and continued engagement. Different users stalled at different stages, requiring separate lifecycle communication strategies. The team also needed stronger attribution and in-app analytics across Android and iOS.",
    strategy:"Built a full-funnel acquisition and lifecycle framework combining paid app acquisition, mobile attribution, behavioral segmentation and marketing automation. Paid acquisition focused on higher-quality female audiences likely to engage with digital fitness, while post-install lifecycle automation moved users through the subscription funnel based on their behavior inside the product.",
    execution:"Led a coordinated acquisition, measurement, automation and creative program across the subscription lifecycle.",
    executionGroups:[
      {title:"Paid Acquisition",items:["App-install campaigns across Android and iOS","Performance marketing across acquisition channels","Female audience segmentation","Audience-quality optimization","Funnel optimization toward subscription economics","Approximately $30,000–$40,000 monthly acquisition spend"]},
      {title:"Attribution & Analytics",items:["Introduced Adjust as the MMP / mobile measurement platform","Improved attribution visibility across paid acquisition","Tracked deeper in-app behavioral stages rather than relying only on installs","Evaluated acquisition quality through downstream actions"]},
      {title:"Lifecycle Automation",items:["Introduced MoEngage for behavior-based lifecycle journeys","Segmented users who installed but did not sign up, signed up but did not activate the seven-day trial, activated a trial but did not subscribe, or required additional engagement","Used personalized push notifications, in-app messaging, banners and funnel-stage-specific communication"]},
      {title:"WhatsApp Automation",items:["Introduced WATI / WhatsApp automation for acquisition and conversion workflows","Segmented users by workout preferences and funnel behavior for personalized subscription journeys"]},
      {title:"Creative Strategy",items:["Developed personalized workout content, founder-led videos, female fitness coach-led videos and product education","Adapted approximately 5-, 15- and 30-second creative to funnel stage","Varied messaging for cold, warmer and high-intent audiences and users already familiar with the product"]},
    ],
    outcome:"Within approximately six months, the acquisition and lifecycle system maintained approximately 4:1 LTV:CAC economics while operating at approximately $30,000–$40,000 in monthly acquisition spend. Illustrative subscription economics included approximately PKR 3,000 in monthly subscription price against approximately PKR 800 acquisition cost, equivalent to approximately 3.75x first-month subscription revenue:CAC. The larger result was a more measurable subscription funnel optimized around onboarding, trial activation, paid conversion and customer value.",
    trackingName:"aimfit",
  },
];

export const certifications = [
  { title:"Digital Guru Black Belt", subtitle:"Expert Product Track", image:"/images/digital-guru-black-belt.jpg" },
  { title:"Digital Guru Blue Belt", subtitle:"Advanced Product Track", image:"/images/digital-guru-blue-belt.jpg" },
  { title:"Digital Guru Green Belt", subtitle:"Core Product Track - Performance", image:"/images/digital-guru-performance.jpg" },
  { title:"Digital Guru Green Belt", subtitle:"Core Product Track - Video", image:"/images/digital-guru-video.jpg" },
];

export const performanceAdsCertification = {
  title: "Google AI-Powered Performance Ads Certification",
  issuer: "Google Skillshop",
  issued: "2026-09-22",
  expires: "2027-09-22",
  url: "https://skillshop.credential.net/ddc9fd31-1930-4ba0-940c-5752003740ce#acc.6RXm2hau",
};
