import Link from "next/link";
import styles from "@/components/insights/insights.module.css";

const scalingChecks = [
  "Are conversions accurate?",
  "Is Google optimizing toward meaningful outcomes?",
  "Are search terms relevant?",
  "Are negatives helping rather than blocking?",
  "Is budget going to the strongest opportunities?",
  "Is bidding supported by enough data?",
  "Do ads match intent?",
  "Does the landing page convert?",
  "Are lead quality and revenue visible downstream?",
  "Is there enough evidence to increase spend?",
];

export default function GoogleAdsAuditChecklist() {
  return <>
    <p>I do not begin a Google Ads audit by changing bids or increasing budgets. My first job is to establish whether the account measures the right outcomes, attracts the right traffic, gives Google reliable signals and allows meaningful optimization.</p>
    <p>Across lead generation, SaaS, eCommerce and local services, the questions are similar; the answers differ. A booked consultation and a completed purchase need different measurement. This is the Google Ads audit checklist I use to work through those differences before recommending more investment.</p>

    <h2>1. Start With Conversion Tracking</h2>
    <p>Campaign optimization comes after measurement. I inventory active conversion actions, their sources and what triggers them. Then I test the actual journey rather than assuming a green tracking status means everything is correct.</p>
    <ul>
      <li>Separate primary and secondary actions; identify duplicates and outdated goals.</li>
      <li>Compare GA4 imports with native Google Ads conversions for overlapping events.</li>
      <li>Check GTM triggers, successful form submissions and thank-you page behavior.</li>
      <li>Validate phone-call tracking where relevant, including what counts as a useful call.</li>
      <li>Check purchase or lead values, currencies and enhanced conversions where appropriate.</li>
    </ul>
    <p>A form button click is not proof that a lead was received. A thank-you page that fires again on refresh can inflate results. Recording the same purchase through two primary actions can make ROAS look stronger without adding revenue. I also check counting settings and transaction IDs where applicable. An attractive CPA built on misleading data is not a useful benchmark.</p>
    <aside className={styles.callout}><strong>Before I optimize the ads, I need to trust the numbers.</strong><p>I reconcile tracked outcomes with the form system, order records or CRM before treating reported performance as evidence.</p></aside>

    <h2>2. Check What Google Is Actually Optimizing Toward</h2>
    <p>Next I inspect campaign goals and account-default goals. The question is not simply whether conversions exist, but which actions the campaign uses for bidding. A page view, chat opening or brochure download can accidentally become the definition of success.</p>
    <p>A lead-generation campaign may find plenty of people willing to submit a form while producing few qualified leads. A purchase campaign may favor low-value orders if every purchase is treated equally. I map each bidding goal to the business outcome it represents.</p>
    <p>Primary and secondary labels need context: <a href="https://support.google.com/google-ads/answer/11461796">Google documents that secondary actions included in a custom goal can still be used for bidding</a>. I check the campaign configuration, not just the label. A campaign can look well optimized while learning from the wrong signal.</p>

    <h2>3. Review Search Terms, Not Just Keywords</h2>
    <p>Keywords describe what I ask Google to target. Search terms show what people actually typed when ads appeared. A tidy keyword list can conceal a very untidy traffic mix.</p>
    <p>I review available query data for irrelevant searches, informational intent, job seekers, inappropriate competitor traffic and geographic mismatch. For a premium service, repeated bargain-seeking queries deserve attention even when they generate inexpensive clicks. I examine spend and downstream quality alongside conversions.</p>
    <p>I look for patterns that justify negative keywords: recruitment language, services the business does not provide or research questions far from a purchase. I choose the negative match type deliberately. Blocking a useful word too broadly can remove valuable traffic. Search-term reporting is also incomplete, so an apparently clean report is not proof that every query is relevant.</p>

    <h2>4. Audit Keyword Intent and Match Types</h2>
    <p>I review exact, phrase and broad match against search intent, conversion volume, conversion quality and bidding strategy. Match type alone does not tell me whether a keyword deserves its budget.</p>
    <p>Exact match is not a guarantee that every query will be commercially useful. Broad match is not automatically bad. Its suitability depends on reliable conversion signals, negative keyword coverage and whether the campaign can distinguish useful customers from easy conversions.</p>
    <p>I compare the query mix and business outcomes each approach produces. Available first-party signals matter here: qualified leads or meaningful purchase values provide a stronger basis for evaluation than undifferentiated form fills. If the business cannot explain which conversions are valuable, expanding reach comes with unresolved uncertainty.</p>

    <h2>5. Look for Negative Keyword Conflicts</h2>
    <p>Negatives can create waste prevention or accidental suppression. I inspect campaign negatives, ad-group negatives and shared lists together, looking for exclusions that conflict with current keywords or services.</p>
    <p>Legacy lists deserve particular attention in accounts managed by several people. A term excluded for an old offer may now describe a profitable service. Shared exclusions can also reach campaigns they were never intended to affect.</p>
    <p>I document why a negative exists before removing it. The aim is to restore relevant coverage without reopening known sources of waste. A large negative list is not evidence of good account management; a defensible list is.</p>

    <h2>6. Review Campaign and Ad Group Structure</h2>
    <p>I ask whether the structure reflects services, products, search intent, location, funnel stage or business objectives. Each separation should support a decision about budget, bidding, messaging or reporting.</p>
    <p>Overly fragmented accounts can spread data across campaigns that share the same objective. Overly consolidated accounts can hide the difference between a high-value service and a low-value enquiry. Neither extreme is a strategy.</p>
    <p>Useful segmentation is the goal. For example, services with different economics may need separate budgets; closely related keyword variants may not need separate campaigns. I trace where the structure helps a decision and where it only creates maintenance. That broader judgment is part of my <Link href="/performance-marketing-specialist">performance marketing approach</Link>.</p>

    <h2>7. Evaluate Budget Allocation</h2>
    <p>I look at where money is actually consumed, rather than where the budget spreadsheet says it should go. Strong campaigns limited by budget may deserve investment, but only after their conversion quality and economics hold up.</p>
    <p>I compare branded with non-branded traffic, Search with Performance Max, high-value with low-value services and performance across viable markets. Seasonality and the sales team’s capacity also affect where additional spend makes sense.</p>
    <p>Equal budgets rarely reflect unequal opportunities. I would rather fund a well-supported acquisition path than maintain symmetry between campaigns. Before reallocating, I distinguish a genuinely weak campaign from one affected by conversion lag, a tracking issue or a recent demand shift.</p>

    <h2>8. Audit Bidding Strategy</h2>
    <p>I assess the strategy against the objective and the evidence supporting it:</p>
    <ul>
      <li><strong>Manual CPC:</strong> inspect bid control and the work needed to maintain it.</li>
      <li><strong>Maximize Clicks:</strong> check whether traffic generation fits the objective, rather than assuming clicks mean acquisition.</li>
      <li><strong>Maximize Conversions or Target CPA:</strong> examine conversion quality, volume, lag and target realism.</li>
      <li><strong>Maximize Conversion Value or Target ROAS:</strong> validate the values supplied and their relationship to commercial value.</li>
    </ul>
    <p>The best strategy depends on data quality and conversion volume, not personal preference. I do not use a universal conversion threshold to make that decision. Automated bidding cannot repair incorrect tracking.</p>
    <p>I also check whether targets are anchored to recent, mature performance. An ambitious target is not evidence of achievable economics. After changes to goals or bidding, I allow for conversion lag and learning before judging results. <a href="https://support.google.com/google-ads/answer/14571185">Google’s guidance on changing Smart Bidding goals</a> explains why these transitions need deliberate evaluation.</p>

    <h2>9. Review Ad Quality and Message Match</h2>
    <p>I read responsive search ad headlines and descriptions as a prospective customer would. Is the offer clear? Does the message match the search? Are the business differentiators specific, credible and relevant?</p>
    <p>I check how assets can combine, whether calls to action fit the buying stage and whether the landing page supports the promise. A headline about an urgent appointment should not lead to a general page that makes booking difficult.</p>
    <p>Ad strength is a diagnostic, not my verdict on commercial quality. I evaluate qualified response and business performance alongside engagement. More headline variety will not solve an offer that attracts the wrong customer.</p>

    <h2>10. Check Assets and Extensions</h2>
    <p>I review sitelinks, callouts, structured snippets, call assets, location assets and image assets where applicable. These can improve visibility and give users useful reasons to engage, but only if they are accurate.</p>
    <p>Sitelinks should reach relevant destinations. Callouts should explain real differentiators. Structured snippets should describe the actual service range. I check phone numbers, opening hours, location details and whether images fit the offer.</p>
    <p>I also inspect account-level inheritance. An otherwise relevant campaign can display an outdated promotion or an asset intended for another service. Completing every available asset field is less useful than giving the customer coherent information.</p>

    <h2>11. Review Landing Pages</h2>
    <p>Google Ads cannot fix a weak landing page. I follow the click on mobile as well as desktop and assess loading speed, message match, CTA clarity and the steps needed to convert.</p>
    <p>I look for unnecessary friction: long forms, confusing navigation, broken validation and promises that disappear after the click. Trust signals should be credible. Pricing or qualification information can help when it filters unsuitable enquiries without obscuring the next step.</p>
    <p>I test tracking during that journey, including unsuccessful submissions. For a local-service search, the page should make service availability and location obvious. For a SaaS enquiry, it should clarify who the product is for. The page needs to answer the searcher’s actual question before asking for their details.</p>

    <h2>12. Audit Geographic Performance</h2>
    <p>I compare targeted locations with reported user-location data and qualified outcomes. City, state, ZIP and radius performance can expose spend outside viable markets, but the precision and volume of the data need context.</p>
    <p>Location settings matter. <a href="https://support.google.com/google-ads/answer/1722038">Google distinguishes presence from presence or interest</a>; a person interested in a location is not necessarily there. For a service business with a fixed operating area, I check whether that distinction fits the offer.</p>
    <p>Presence targeting is not a promise of perfect geographic accuracy. I reconcile reports with customer addresses or service eligibility where available. I would not exclude a location based on a handful of clicks or assume every out-of-area enquiry is wasted.</p>

    <h2>13. Review Device and Time Performance</h2>
    <p>I compare desktop, mobile and tablet performance, then review hours and days of the week. Differences can reveal mobile form friction, unanswered calls or a mismatch between campaign delivery and business availability.</p>
    <p>Fewer conversions in one segment do not automatically justify bid adjustments or exclusions. I check sample size, spend, conversion lag and lead quality first. A small segment can look weak simply because its sales have not matured.</p>
    <p>I also check how the current bidding strategy handles those signals before recommending controls. If mobile traffic is relevant but the form is broken, the priority is fixing the experience. Cutting mobile spend would hide the problem.</p>

    <h2>14. Audit Performance Max Separately</h2>
    <p>Performance Max needs its own review, while remaining part of the account-level assessment. I inspect asset groups, creative coverage, landing pages, conversion goals and search themes where relevant. For eCommerce, I review feed accuracy, product availability, titles, pricing and product-level economics.</p>
    <p>I assess audience signals as guidance for the system, not strict audience boundaries. <a href="https://support.google.com/google-ads/answer/14530785">Google explains that audience signals are suggestions</a>, so adding a customer list does not mean delivery stays within it.</p>
    <p>I use available search-term reporting and insights, review brand exclusions where appropriate and check which destinations can receive traffic. Headline ROAS or CPA is insufficient. I want to understand whether PMax adds useful acquisition, captures existing branded demand or overlaps with other campaigns. Brand demand can be valuable, but it should not be mistaken for proof of incremental growth.</p>

    <h2>15. Look Beyond CPL or CPA</h2>
    <p>Cheap leads are not necessarily good leads. Where possible, I connect campaign reporting with qualified leads, booked appointments, sales, revenue, lead-to-sale rate and customer value.</p>
    <p>For lead generation, I inspect CRM stages and how consistently the team uses them. A campaign producing fewer enquiries may still produce more customers. For eCommerce, reported revenue needs context from margins, cancellations, returns and repeat purchasing.</p>
    <p>One of the most valuable improvements in a mature account is bringing dependable downstream information into decisions and, where appropriate, conversion feedback. That requires consistent definitions, reliable matching and sensible values. I would rather acknowledge a measurement gap than assign invented lead values and call the account ready for value-based bidding.</p>

    <h2>16. Build the Optimization Roadmap</h2>
    <p>An audit should end with decisions, owners and an order of work. I group recommendations by what they fix:</p>
    <ul>
      <li><strong>Critical:</strong> tracking or measurement failures that make reporting and bidding unreliable.</li>
      <li><strong>High priority:</strong> clear waste, negative conflicts and structural issues that limit control.</li>
      <li><strong>Growth opportunities:</strong> supported changes to budget, targeting, creative or campaign coverage.</li>
      <li><strong>Tests:</strong> plausible ideas that need controlled experimentation before wider adoption.</li>
    </ul>
    <p>I record the evidence, expected effect and how success will be assessed. Not everything should change at once. Fixes to measurement may change the baseline; simultaneous targeting, bidding and landing-page changes make the cause of a result difficult to isolate. Urgent failures get addressed first, with a change log to keep the evaluation honest.</p>

    <h2>What I Want to Know Before Scaling</h2>
    <p>I use these questions as a decision check, not a scorecard where ticking enough boxes guarantees growth:</p>
    <ul className={styles.checklist}>{scalingChecks.map((question) => <li key={question}><span aria-hidden>□</span><span>{question}</span></li>)}</ul>

    <h2>Final Thoughts</h2>
    <p>Scaling should be the result of a healthy account, not the solution to an unhealthy one. I want to understand measurement → traffic quality → conversion quality → economics before materially increasing spend.</p>
    <p>That sequence makes the decision clearer: what is working, what is uncertain and what additional budget is expected to achieve. A useful audit does not promise that every account can scale. It identifies what needs to be true before the next investment makes sense. More practical perspectives will live in <Link href="/insights">Insights</Link>.</p>
  </>;
}
