import Link from "next/link";
import { ArticleCallout, ArticleTable } from "@/components/insights/article-layout";

export default function GoogleAdsConversionTracking() {
  return <>
    <p>When a Google Ads account underperforms, the first thing I check is not bids, keywords or ad copy. It is whether the conversion data can be trusted. Smart Bidding, Performance Max and every report you look at depend on that data. If it is wrong, the account is optimizing toward the wrong thing, and every decision built on it inherits the error.</p>
    <p>This is the process I use to find and fix Google Ads conversion tracking problems, in the order I work through them.</p>

    <h2>Signs Your Conversion Tracking Is Broken</h2>
    <p>Tracking problems rarely announce themselves. These are the symptoms that usually lead me to them:</p>
    <ul>
      <li>Google Ads reports more conversions than the business actually received.</li>
      <li>Conversions suddenly drop to zero, or jump, with no change in spend or traffic.</li>
      <li>Cost per lead looks great, but the sales team says lead quality is poor.</li>
      <li>Google Ads, GA4 and the CRM all show different numbers, with no explanation.</li>
      <li>Smart Bidding keeps spending on traffic that never turns into customers.</li>
      <li>ROAS looks strong in the platform but revenue in the store has not moved.</li>
    </ul>

    <h2>1. List Every Conversion Action</h2>
    <p>I start in Goals and list every conversion action: its name, source (Google Ads tag, GA4 import, call tracking, offline import), whether it is primary or secondary, how it counts (one or every) and its value settings.</p>
    <p>Most accounts I inherit have actions nobody remembers creating: old forms, test events, page views and GA4 imports that duplicate native tags. Each one needs a clear reason to exist. Anything marked primary is something bidding can optimize toward, so that list should only contain actions the business actually values.</p>

    <h2>2. Check for Duplicate Counting</h2>
    <p>Duplication is the most common problem I find. It usually comes from one of these:</p>
    <ul>
      <li>The same lead tracked by both a Google Ads tag and an imported GA4 event, both set as primary.</li>
      <li>A thank-you page that fires the tag again when someone refreshes or returns to it.</li>
      <li>Two tags installed for the same event, for example one hard-coded and one in Google Tag Manager.</li>
      <li>Lead forms counted as “every” instead of “one” per click.</li>
      <li>Purchases recorded without a transaction ID, so repeats are not deduplicated.</li>
    </ul>
    <p>Duplicates make performance look better than it is and teach bidding systems that weak traffic converts. Fixing them often makes reported results look worse at first. That is the point: the numbers become honest.</p>

    <h2>3. Test the Real Journey</h2>
    <p>A green “recording conversions” status in Google Ads does not mean the right thing is being recorded. I complete the actual journey myself: click through, fill in the form, place a test order or make a test call, and watch what fires in Tag Assistant and GTM preview mode.</p>
    <p>Things I check during that test:</p>
    <ul>
      <li>The tag fires on a successful submission, not on a button click that might fail validation.</li>
      <li>It does not fire on a failed or empty submission.</li>
      <li>The conversion value and currency are passed correctly for purchases.</li>
      <li>The click ID (GCLID) survives redirects, cookie banners and cross-domain steps.</li>
      <li>Third-party tools such as booking widgets, embedded forms and checkout platforms actually report back.</li>
    </ul>
    <p>Third-party booking systems are a frequent blind spot. In one multi-location salon account, bookings happened inside an external tool. Getting reliable measurement needed GTM listeners for that booking system before the campaign data could be trusted.</p>

    <ArticleCallout title="A form button click is not a lead.">
      <p>If the tag fires when someone clicks “Submit”, it will also fire when the form fails, when the email field is wrong and when someone double-clicks. Track the confirmed submission instead.</p>
    </ArticleCallout>

    <h2>4. Fix What Google Is Optimizing Toward</h2>
    <p>Once the data is clean, I check which actions each campaign actually bids toward. Campaigns can use account-default goals or campaign-specific goals, and it is easy for a micro-action such as a page view, a scroll or a click on a phone number to end up in the bidding goal.</p>
    <p>My rule is simple: primary conversions should be the actions closest to revenue that have enough volume to learn from. Everything else can stay as secondary for observation.</p>
    <ArticleTable caption="Typical primary and secondary conversion actions" columns={["Business type", "Primary (bid toward)", "Secondary (observe)"]} rows={[
      ["Local services", "Qualified calls over a set duration, completed quote forms, bookings", "Clicks on phone number, page views, directions"],
      ["B2B / SaaS", "Demo requests, qualified sign-ups, imported qualified leads", "Content downloads, pricing page views"],
      ["eCommerce", "Purchases with accurate value", "Add to cart, begin checkout"],
    ]} />

    <h2>5. Track Calls Properly</h2>
    <p>For local businesses, phone calls are often most of the leads. Counting every click on a phone number as a conversion overstates results badly. I prefer call tracking that records actual calls and sets a minimum duration, so short calls, wrong numbers and spam do not count as leads.</p>
    <p>I also check whether existing customers calling about current jobs are being counted as new leads. That can quietly inflate a local services account for months.</p>

    <h2>6. Turn On Enhanced Conversions</h2>
    <p>Enhanced conversions send hashed first-party data, such as the email address entered in a form, to help Google match conversions that cookies alone would miss. It improves measurement accuracy, especially with stricter browser privacy settings. Where consent requirements apply, Consent Mode also needs to be set up correctly so tags behave as users have chosen.</p>

    <h2>7. Connect Lead Quality Back to Google Ads</h2>
    <p>For lead generation, the biggest step up is telling Google which leads actually became customers. Importing offline conversions from a CRM, such as qualified leads, booked jobs or closed sales, lets bidding learn the difference between a form fill and a real opportunity.</p>
    <p>This needs consistent CRM stages and a reliable way to match leads back to clicks. It takes work to set up, but it is often what turns a cheap-but-useless lead flow into a profitable one.</p>

    <h2>8. Reconcile and Re-Baseline</h2>
    <p>After fixes, I compare Google Ads conversions with the real source of truth: the form inbox, the CRM, the booking system or the order database. They will never match exactly, but the gap should be small and explainable.</p>
    <p>Fixing tracking changes the baseline. Conversion counts may fall and CPA may rise on paper, even when nothing about real performance has changed. I note the date of the fix and judge later results against the corrected numbers, and I give automated bidding time to adjust before making other major changes.</p>

    <h2>Final Thoughts</h2>
    <p>Most Google Ads problems are easier to solve once the tracking is honest. Clean conversion data makes bidding smarter, makes reporting believable and makes it obvious where budget should go next.</p>
    <p>If you suspect your tracking is off, it is the first thing I review in a <Link href="/google-ads-audit">Google Ads audit</Link>. For the rest of what I check, see my <Link href="/insights/google-ads-audit-checklist">Google Ads audit checklist</Link>.</p>
  </>;
}
