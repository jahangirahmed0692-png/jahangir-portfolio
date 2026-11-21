import Link from "next/link";
import { ArticleCallout, ArticleTable } from "@/components/insights/article-layout";

export default function PerformanceMaxVsSearch() {
  return <>
    <p>“Should we move budget into Performance Max?” is one of the questions I hear most from business owners and in-house teams. Usually it comes after a Google rep recommendation, a dip in Search performance or a competitor story about PMax “doubling” results.</p>
    <p>My answer is rarely “switch” or “don’t switch”. Performance Max and Search do different jobs, they need different conditions to work, and they report results differently. The decision should come from what the business needs and what the account can support, not from which campaign type is newer.</p>

    <h2>What Search Campaigns Do Well</h2>
    <p>Search campaigns show text ads when people type queries you have chosen to target. That gives you direct control over intent. You decide which keywords matter, which searches to exclude, what the ad says for each service and which landing page each group of searches reaches.</p>
    <p>That control matters most when:</p>
    <ul>
      <li>Some services are far more valuable than others and need their own budgets.</li>
      <li>The business serves a specific area or a specific type of customer.</li>
      <li>Low-value searches (DIY, jobs, cheap, free, research questions) look similar to high-value ones.</li>
      <li>Conversion tracking is limited, so the bidding system cannot yet be trusted to find quality on its own.</li>
    </ul>
    <p>In local service accounts, such as roofing and tree services, most of the commercial value sits in a relatively small set of high-intent searches. Search lets me fund those searches deliberately and keep everything else out.</p>

    <h2>What Performance Max Does Well</h2>
    <p>Performance Max is a goal-based campaign type that can serve across Google’s inventory from one campaign: Search, Shopping, Display, YouTube, Discover, Gmail and Maps. You provide assets, a conversion goal, audience signals and (for eCommerce) a product feed. Google’s automation decides where to show ads and how much to bid.</p>
    <p>PMax tends to be strongest when:</p>
    <ul>
      <li>Conversion tracking is reliable and conversion values reflect real business value.</li>
      <li>There is enough conversion volume for the system to learn from.</li>
      <li>The business has good creative assets, or a clean product feed for Shopping.</li>
      <li>The goal is to reach demand beyond the keywords you would think to target yourself.</li>
    </ul>
    <p>For eCommerce with a healthy feed, PMax can be the main acquisition engine. For multi-location businesses, location-specific PMax campaigns can work well alongside Search. In one multi-location account I managed, dedicated PMax campaigns by location ran next to local Search, and Google Ads delivered roughly 9x ROAS across the mix.</p>

    <h2>Side-by-Side Comparison</h2>
    <ArticleTable caption="Performance Max vs Search campaigns" columns={["Factor", "Search", "Performance Max"]} rows={[
      ["Control over queries", "High: keywords, match types and negatives", "Lower: search themes and account-level negatives guide it"],
      ["Inventory", "Google Search results", "Search, Shopping, YouTube, Display, Discover, Gmail, Maps"],
      ["Data it needs", "Works with modest conversion volume", "Needs dependable conversions and values"],
      ["Creative needed", "Text ads and assets", "Text, images, video and a feed where relevant"],
      ["Reporting clarity", "Clear query and ad-level reporting", "Less transparent; channel and query detail is partial"],
      ["Best fit", "High-intent, high-value services; tight targeting", "eCommerce, strong signals, reaching new demand"],
    ]} />

    <h2>The Risks I Check For With Performance Max</h2>
    <p>Performance Max can look excellent in the platform while adding little real value. These are the patterns I look for before trusting its numbers.</p>
    <h3>Branded search taking the credit</h3>
    <p>If PMax can serve on your brand name, it can capture people who were already looking for you. Those conversions would likely have happened anyway, through organic results or a brand Search campaign. Reported ROAS rises; actual new customers do not. Brand exclusions and comparing branded vs non-branded performance help separate the two.</p>
    <h3>Remarketing dressed up as acquisition</h3>
    <p>A campaign that mostly reaches past visitors and existing customers can show strong numbers without finding new ones. I look at new-customer data where available and at how results change when overall demand stays flat.</p>
    <h3>Optimizing toward the wrong conversion</h3>
    <p>PMax will chase whatever you tell it counts as success. If a page view, a click on a phone number or an unqualified form counts as a primary conversion, the campaign will find plenty of those. This is the most common reason I see PMax “working” in the interface while the sales team complains about lead quality.</p>
    <h3>Low-quality placements for lead generation</h3>
    <p>For lead-generation accounts, some traffic from Display and other placements can produce form fills that never answer the phone. Without lead-quality feedback, the system has no way to know those leads were poor, so it keeps buying more of them.</p>

    <ArticleCallout title="PMax is only as good as its conversion data.">
      <p>Before I recommend Performance Max, I want to know that the conversions it optimizes toward are real, deduplicated and connected to business value. Otherwise automation scales the wrong thing faster.</p>
    </ArticleCallout>

    <h2>How Search and PMax Interact</h2>
    <p>Running both is common, and they can work together. When a search query matches an exact match keyword in a Search campaign, Google generally prioritizes the Search campaign. For other queries, the two can compete, and PMax may pick up searches you assumed Search was covering.</p>
    <p>That is why I review them together rather than in isolation. If PMax growth coincides with Search decline, I want to know whether PMax found new demand or simply absorbed traffic Search was already getting. The account-level result matters more than either campaign’s individual report.</p>

    <h2>How I Decide Where the Budget Goes</h2>
    <p>I work through these questions in order:</p>
    <ol>
      <li><strong>Is tracking reliable?</strong> If conversions are missing, duplicated or not tied to qualified outcomes, I fix that first. Neither campaign type performs well on bad data, but PMax suffers more.</li>
      <li><strong>Where is the value concentrated?</strong> If a small set of high-intent searches drives most revenue, Search is usually the foundation.</li>
      <li><strong>Is there enough conversion volume?</strong> Low-volume accounts often get more from tightly managed Search than from automation that cannot learn.</li>
      <li><strong>Are the assets ready?</strong> PMax needs good images, video and a clean feed where relevant. Weak assets lead to weak results on the visual inventory.</li>
      <li><strong>Can we measure incrementality?</strong> I want a way to check whether PMax adds new customers, such as testing it in some locations first or comparing results before and after.</li>
    </ol>
    <p>For most lead-generation businesses I work with, the answer is Search first, with PMax tested once tracking and lead-quality signals are in place. For eCommerce with a healthy feed, PMax often earns a larger share sooner, with Search protecting the most valuable non-brand queries.</p>

    <h2>Final Thoughts</h2>
    <p>Performance Max is not a replacement for strategy, and Search is not outdated. Each one fits different conditions. The right split depends on your conversion data, your margins, how concentrated your demand is and how much control your business needs over who sees your ads.</p>
    <p>If you are unsure whether your account is ready for PMax, or whether PMax is really adding value, an <Link href="/google-ads-audit">account audit</Link> is a good place to start. You can also read my <Link href="/insights/google-ads-audit-checklist">Google Ads audit checklist</Link> to see how I review PMax alongside the rest of the account.</p>
  </>;
}
