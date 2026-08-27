export const links = {
  upwork: "https://www.upwork.com/freelancers/~01ff8182489f04452d?mp_source=share",
  linkedin: "https://www.linkedin.com/in/jahangir-ahmed-11835888/",
  email: "mailto:jahangirahmed0692@gmail.com",
};

export const results = [
  { industry: "Hospice Care", revenue: "$889,930", leads: "216", period: "6 months", cpl: "$200", budget: "$7.2K" },
  { industry: "Roofing Company", revenue: "$229,483", leads: "102", period: "90 days", cpl: "$116", budget: "$3.9K" },
  { industry: "Tree Service Company", revenue: "$303,027", leads: "210", period: "90 days", cpl: "$34", budget: "$3.2K" },
  { industry: "Roofing Company", revenue: "$143,471", leads: "66", period: "6 months", cpl: "$92", budget: "$1K" },
  { industry: "Commercial Tire Repair", revenue: "$264,600", leads: "252", period: "90 days", cpl: "$54", budget: "$4.5K" },
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

export type CaseStudy = { category:string; title:string; metrics:[string,string][]; tags?:string[]; situation:string; diagnosis:string; execution:string; outcome:string };
export const caseStudies: CaseStudy[] = [
  { category:"B2B / SaaS", title:"Conversion Recovery", metrics:[["1.3% → 4%+","Conversion Rate"],["~$8K → ~$3K","CAC"]], tags:["Google Ads","Meta Ads","Landing Pages","Tracking"], situation:"Paid acquisition was generating traffic but the funnel converted at approximately 1.3%, while customer acquisition cost had increased to roughly $8,000.", diagnosis:"The acquisition journey needed tighter audience targeting, cleaner measurement, and stronger alignment between campaign strategy and landing-page experience.", execution:"Refined audiences, improved bidding decisions, tightened conversion tracking, and supported landing-page testing.", outcome:"Conversion rate increased beyond 4% within approximately one month and CAC declined to roughly $3,000 within approximately two months." },
  { category:"AI SaaS", title:"Customer Acquisition", metrics:[["1,000+","Sign-ups"],["~$0.60","Cost Per Sign-Up"],["~10%","Paid User Conversion"]], situation:"An AI SaaS product needed a disciplined acquisition program to build its initial user base.", diagnosis:"The launch required efficient paid acquisition coordinated with a broader go-to-market effort.", execution:"Managed paid acquisition and supported the broader launch strategy across campaign planning, audience development, and performance optimization.", outcome:"Generated more than 1,000 sign-ups at approximately $0.60 per sign-up, with roughly 10% converting to paid customers. The broader launch strategy also supported a Product Hunt launch that reached #1 Product of the Day; paid media was one component of that effort." },
  { category:"eCommerce", title:"Paid Media at Scale", metrics:[["Up to $55K/day","Meta Spend"],["~1.8x","ROAS"],["Up to $10K/day","YouTube Spend"],["~2x","ROAS"]], situation:"A high-scale eCommerce operation required daily performance control across Meta and YouTube.", diagnosis:"Maintaining efficiency at scale depended on disciplined creative testing, budget controls, and close monitoring of acquisition economics.", execution:"Led creative testing, budget optimization, product-launch planning, cost-cap and bid-cap strategies, and monitored CAC, CTR, CPC, CPM, frequency, add-to-cart cost, and ROAS.", outcome:"Managed Meta spend up to $55K per day at approximately 1.8x ROAS and YouTube spend up to $10K per day at approximately 2x ROAS." },
  { category:"App Growth", title:"Full-Funnel Acquisition", metrics:[["30%","CAC Reduction"],["20%","LTV Improvement"],["40%","Install Growth"],["25%","Install-to-Sign-Up Rate"],["15%","Sign-Up-to-Purchase"]], situation:"An app acquisition program needed improvement across the full customer journey, not only at the install stage.", diagnosis:"Media, creative, landing pages, audiences, and analytics needed to operate as one connected acquisition system.", execution:"Paid acquisition across Google, Meta, TikTok, Snapchat, LinkedIn, and X, supported by creative optimization, landing-page testing, audience refinement, and full-funnel analytics.", outcome:"The work contributed to a 30% CAC reduction, 20% LTV improvement, 40% install growth, a 25% install-to-sign-up rate, and 15% sign-up-to-purchase conversion." },
];

export const certifications = [
  { title:"Digital Guru Black Belt", subtitle:"Expert Product Track", image:"/images/digital-guru-black-belt.jpg" },
  { title:"Digital Guru Blue Belt", subtitle:"Advanced Product Track", image:"/images/digital-guru-blue-belt.jpg" },
  { title:"Digital Guru Green Belt", subtitle:"Core Product Track - Performance", image:"/images/digital-guru-performance.jpg" },
  { title:"Digital Guru Green Belt", subtitle:"Core Product Track - Video", image:"/images/digital-guru-video.jpg" },
];
