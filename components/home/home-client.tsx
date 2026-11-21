"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { results } from "@/data/content";
import { track } from "@/lib/tracking";
import { CaseStudyGrid, EmailLink } from "@/components/portfolio-client";
import s from "./home.module.css";

/* ------------------------------------------------------------------ */
/* Shared homepage state: the visitor's business type and their         */
/* Lead Leak Check snapshot (sent along with the contact form).         */
/* ------------------------------------------------------------------ */

export type PathKey = "home" | "saas" | "ecom" | "team";

type HomeState = {
  path: PathKey | null;
  setPath: (p: PathKey) => void;
  snapshot: string;
  setSnapshot: (v: string) => void;
};

const HomeContext = createContext<HomeState | null>(null);
const useHome = () => {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error("HomeProvider missing");
  return ctx;
};

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [path, setPathState] = useState<PathKey | null>(null);
  const [snapshot, setSnapshot] = useState("");
  const setPath = (p: PathKey) => {
    setPathState(p);
    track("path_select", { business_type: p });
  };
  return <HomeContext.Provider value={{ path, setPath, snapshot, setSnapshot }}>{children}</HomeContext.Provider>;
}

/* Case study indexes refer to caseStudies in data/content.ts:
   0 B2B SaaS, 1 AI SaaS, 2 App Growth, 3 Oaklynn, 4 Sonder Mens, 5 AimFit */
const paths: Record<PathKey, { label: string; hint: string; headline: string; intro: string; order: number[]; problem: string }> = {
  home: {
    label: "Home & local services",
    hint: "Roofing, tree, pest, tire",
    headline: "More booked jobs, fewer tire-kickers.",
    intro: "For local businesses where one good job pays for a month of ads. The results below are from roofing, tree service, tire repair and hospice care accounts.",
    order: [4, 0, 3, 1, 2, 5],
    problem: "Lots of calls and form fills, but too many aren't real jobs.",
  },
  saas: {
    label: "SaaS & apps",
    hint: "Sign-ups, trials, LTV",
    headline: "Sign-ups that turn into revenue.",
    intro: "For SaaS and subscription apps, where cost per trial means little without activation and lifetime value.",
    order: [0, 1, 5, 2, 3, 4],
    problem: "Sign-ups are coming in, but paid conversion and CAC aren't where they should be.",
  },
  ecom: {
    label: "eCommerce",
    hint: "ROAS, AOV, repeat",
    headline: "ROAS that holds up when you scale.",
    intro: "For brands that need Meta and Google working together instead of competing for the same buyer.",
    order: [3, 4, 2, 0, 1, 5],
    problem: "ROAS drops every time we push budget.",
  },
  team: {
    label: "Agency or in-house team",
    hint: "Second opinion, overflow",
    headline: "A senior second opinion for your team.",
    intro: "For agencies and in-house marketers who want an experienced audit, overflow help, or a check before raising budgets.",
    order: [3, 4, 0, 1, 2, 5],
    problem: "We want a second opinion on an account before we raise spend.",
  },
};
const pathKeys = Object.keys(paths) as PathKey[];

export function PathPicker() {
  const { path, setPath } = useHome();
  return <div className={s.picker}>
    <p className={s.pickerLabel} id="path-label">What kind of business are you?</p>
    <div className={s.pathGrid} role="group" aria-labelledby="path-label">
      {pathKeys.map((k) => <button key={k} type="button" aria-pressed={path === k} onClick={() => setPath(k)}>
        <strong>{paths[k].label}</strong><small>{paths[k].hint}</small>
      </button>)}
    </div>
    <p className={s.pathNote} aria-live="polite">{path ? <>{paths[path].headline} <a href="#case-studies">See the most relevant work ↓</a></> : "Pick one and the page puts the most relevant results first."}</p>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Lead Leak Check                                                     */
/* ------------------------------------------------------------------ */

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

type Slider = { id: string; label: string; min: number; max: number; step: number; format: (v: number) => string };
const sliders: Slider[] = [
  { id: "spend", label: "Monthly ad spend", min: 1000, max: 60000, step: 500, format: usd },
  { id: "leads", label: "Leads per month", min: 5, max: 600, step: 5, format: (v) => String(v) },
  { id: "qual", label: "Leads that are actually qualified", min: 5, max: 100, step: 5, format: (v) => `${v}%` },
  { id: "close", label: "Qualified leads that become customers", min: 2, max: 80, step: 1, format: (v) => `${v}%` },
  { id: "value", label: "Average customer value", min: 200, max: 30000, step: 100, format: usd },
];

export function LeakCheck() {
  const { setSnapshot } = useHome();
  const [v, setV] = useState<Record<string, number>>({ spend: 8000, leads: 90, qual: 45, close: 20, value: 4500 });
  const touched = useRef(false);

  const out = useMemo(() => {
    const q = v.qual / 100, c = v.close / 100;
    const customers = v.leads * q * c;
    const cpl = v.spend / v.leads;
    const cac = customers > 0 ? v.spend / customers : Infinity;
    const waste = v.spend * (1 - q);
    const roas = (customers * v.value) / v.spend;
    let title: string, body: string, ok = false;
    if (q < 0.6) {
      title = "Likely constraint: search intent and lead quality";
      body = `About ${Math.round((1 - q) * 100)}% of your leads aren't qualified, so roughly ${usd(waste)} a month pays for conversations that go nowhere. That usually points to search terms, match types, audience settings or what's being counted as a conversion.`;
    } else if (c < 0.15) {
      title = "Likely constraint: what happens after the lead";
      body = "Lead quality looks fine, but few become customers. That usually means the landing page promise, speed to follow-up, or tracking that counts the wrong action.";
    } else if (roas < 3) {
      title = "Likely constraint: the economics";
      body = `Each $1 in ads brings back about $${roas.toFixed(2)}. The funnel works, so the next step is checking bids, budget split and where extra spend would still pay off.`;
    } else {
      ok = true;
      title = "Healthy. The question is where to scale";
      body = `At about $${roas.toFixed(2)} back per $1, this account can probably take more budget. An audit would show where to add spend without losing efficiency.`;
    }
    return { cpl, cac, waste, roas, title, body, ok };
  }, [v]);

  const update = (id: string, value: number) => {
    setV((prev) => ({ ...prev, [id]: value }));
    if (!touched.current) { touched.current = true; track("leak_check_interaction", { field: id }); }
  };

  const sendSnapshot = () => {
    const text = `Spend ${usd(v.spend)}/mo, ${v.leads} leads/mo, ${v.qual}% qualified, ${v.close}% close rate, ${usd(v.value)} customer value. CPL ${usd(out.cpl)}, cost per customer ${isFinite(out.cac) ? usd(out.cac) : "n/a"}, ~${usd(out.waste)}/mo on unqualified leads, $${out.roas.toFixed(2)} revenue per $1. ${out.title}.`;
    setSnapshot(text);
    track("leak_check_cta", { verdict: out.title });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => document.getElementById("lead-name")?.focus({ preventScroll: true }), 600);
  };

  return <div className={s.leak}>
    <div className={s.fields}>
      {sliders.map((f) => <div className={s.field} key={f.id}>
        <label htmlFor={`leak-${f.id}`}><span>{f.label}</span><output htmlFor={`leak-${f.id}`}>{f.format(v[f.id])}</output></label>
        <input id={`leak-${f.id}`} type="range" min={f.min} max={f.max} step={f.step} value={v[f.id]} onChange={(e) => update(f.id, Number(e.target.value))} />
      </div>)}
      <p className={s.note}>Example numbers to start. Your inputs stay in your browser until you choose to send them.</p>
    </div>
    <div className={s.out} aria-live="polite">
      <div className={s.kpis}>
        <div><strong>{usd(out.cpl)}</strong><span>Cost per lead (what the platform shows)</span></div>
        <div><strong>{isFinite(out.cac) ? usd(out.cac) : "n/a"}</strong><span>Cost per customer (what the business pays)</span></div>
        <div className={s.waste}><strong>{usd(out.waste)}</strong><span>Monthly spend landing on unqualified leads</span></div>
        <div><strong>${out.roas.toFixed(2)}</strong><span>Revenue per $1 of ad spend</span></div>
      </div>
      <div className={`${s.verdict} ${out.ok ? s.ok : ""}`}><h3>{out.title}</h3><p>{out.body}</p></div>
      <div className={s.ctaRow}>
        <button className="button" type="button" onClick={sendSnapshot}>Get my numbers reviewed <span aria-hidden>→</span></button>
        <a className="button button-ghost" href="#case-studies">See similar results <span aria-hidden>↓</span></a>
      </div>
    </div>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Count-up numbers: full value is rendered on the server; the          */
/* animation only runs once, when the number first scrolls into view.   */
/* ------------------------------------------------------------------ */

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);
  useEffect(() => {
    const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    const el = ref.current;
    if (!m || !el || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const [, pre, num, post] = m;
    const target = Number(num.replace(/,/g, ""));
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;
    const fmt = (n: number) => pre + n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + post;
    const rect = el.getBoundingClientRect();
    if (rect.top < innerHeight && rect.bottom > 0) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / 1100);
        const eased = 1 - Math.pow(1 - p, 3);
        setShown(fmt(target * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);
  return <span ref={ref}>{shown}</span>;
}

/* ------------------------------------------------------------------ */
/* Results: Platform view vs Business view                             */
/* ------------------------------------------------------------------ */

const num = (v: string) => Number(v.replace(/[^\d.]/g, ""));

export function ResultsToggle() {
  const [view, setView] = useState<"platform" | "business">("platform");
  const featured = results.filter((r) => r.featured);
  const choose = (v: "platform" | "business") => { setView(v); track("results_view_toggle", { view: v }); };
  return <>
    <div className={s.toggleRow}>
      <div className={s.toggle} role="group" aria-label="Choose how results are measured">
        <button type="button" aria-pressed={view === "platform"} onClick={() => choose("platform")}>Platform view</button>
        <button type="button" aria-pressed={view === "business"} onClick={() => choose("business")}>Business view</button>
      </div>
      <p className={s.toggleHint}>{view === "platform" ? "What the ad platform reports. Most reports stop here." : "What the business actually got from the same campaigns."}</p>
    </div>
    <div className={`${s.results} ${view === "business" ? s.business : ""}`}>
      {featured.map((r) => {
        const spend = num(r.leads) * num(r.cpl);
        const perDollar = num(r.revenue) / spend;
        const metrics: [string, string][] = view === "platform"
          ? [[r.leads, "Leads"], [r.cpl, "Cost per lead"], [`~${usd(spend)}`, "Ad spend (leads × CPL)"]]
          : [[r.revenue, "Tracked revenue"], [r.revenuePerLead, "Revenue per qualified lead"], [`~${perDollar.toFixed(0)}×`, "Revenue per ad dollar"]];
        return <article key={`${r.industry}-${r.revenue}`} className={s.result}>
          <header><h3>{r.industry}</h3><span>{r.period}</span></header>
          <div className={s.resultMetrics}>{metrics.map(([a, b]) => <div key={b}><strong>{view === "business" ? <CountUp value={a} /> : a}</strong><span>{b}</span></div>)}</div>
        </article>;
      })}
    </div>
    <p className={s.resultsNote}>Campaigns I managed directly. Revenue is what the client tracked from paid leads. Ad spend is estimated as leads × cost per lead.</p>
  </>;
}

/* ------------------------------------------------------------------ */
/* Case studies reordered by business type                             */
/* ------------------------------------------------------------------ */

export function PathCaseStudies() {
  const { path } = useHome();
  return <>
    {path && <p className={s.pathIntro}><strong>{paths[path].headline}</strong> {paths[path].intro}</p>}
    <CaseStudyGrid order={path ? paths[path].order : undefined} />
  </>;
}

/* ------------------------------------------------------------------ */
/* Acquisition system map (replaces Diagnosis, Framework, Operations)  */
/* ------------------------------------------------------------------ */

const stages = [
  { name: "Traffic", question: "Are we reaching the right market?", leak: "Spend goes to the wrong locations, devices, placements or audiences before anyone even searches for you.", check: "Location and schedule settings, Performance Max placements, Meta placements and audience overlap, budget pacing.", proof: "Sonder Mens: location-specific Google and Meta campaigns took Meta ROAS from about 4x to 8x." },
  { name: "Intent", question: "Are we attracting people likely to buy?", leak: "Budget leaks into informational, competitor, price-shopper and irrelevant searches.", check: "Search-term analysis, negative keyword lists, match types, keyword expansion, account structure.", proof: "Tree service: 210 leads at $34 each, tied to $303,027 in tracked revenue." },
  { name: "Conversion", question: "Can the traffic become a customer?", leak: "Good traffic lands on a page or offer that doesn't match what the ad promised.", check: "Message match, form friction, call handling, speed to follow-up, landing-page recommendations.", proof: "B2B SaaS: conversion rate from about 1.3% to over 4%, CAC from ~$8K to ~$3K." },
  { name: "Attribution", question: "Are we measuring the right actions?", leak: "Bidding systems learn from missing, duplicated or low-value conversions.", check: "GA4, GTM, Google Ads conversions, enhanced conversions, Meta Pixel and Conversions API, tracking QA.", proof: "Hospice care: 216 qualified leads tied to $889,930 in tracked revenue." },
  { name: "Economics", question: "Does acquisition make financial sense?", leak: "Cost per lead looks fine while cost per customer quietly doesn't.", check: "CPA and CPL against close rate, revenue per lead, 3- and 7-day conversion diagnostics, lead-quality checks.", proof: "Oaklynn: return orders cut from ~40% to 15% while ROAS went from ~2x to 6x." },
  { name: "Scale", question: "Where can investment increase without destroying efficiency?", leak: "More budget breaks what was working.", check: "Impression share, budget pacing, bidding strategy, where extra spend still pays back.", proof: "Oaklynn held about 6x ROAS for 2+ quarters, all on under $3K a month, because the gains came from customer quality, not spend." },
];

export function SystemMap() {
  const [active, setActive] = useState(1);
  const st = stages[active];
  const pick = (i: number) => { setActive(i); track("system_map_select", { stage: stages[i].name }); };
  return <div className={s.map}>
    <div className={s.stages} role="tablist" aria-label="Acquisition system stages">
      {stages.map((x, i) => <button key={x.name} id={`stage-tab-${i}`} role="tab" type="button" aria-selected={active === i} aria-controls="stage-panel" onClick={() => pick(i)}>
        <span>{x.name}</span>
      </button>)}
    </div>
    <div className={s.stagePanel} id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${active}`}>
      <p className={s.stageQ}>{st.question}</p>
      <div className={s.stageCols}>
        <div><h3>Where money leaks</h3><p>{st.leak}</p></div>
        <div><h3>What I check</h3><p>{st.check}</p></div>
        <div><h3>Proof</h3><p>{st.proof}</p></div>
      </div>
    </div>
  </div>;
}

/* ------------------------------------------------------------------ */
/* Contact form → /api/lead → email                                    */
/* ------------------------------------------------------------------ */

type Status = "idle" | "sending" | "sent" | "error" | "unavailable";

export function LeadForm() {
  const { path, snapshot, setSnapshot } = useHome();
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, snapshot, path: path ? paths[path].label : "" }),
      });
      if (res.ok) {
        setStatus("sent");
        track("lead_form_submit", { business_type: path ?? "none", has_snapshot: Boolean(snapshot), spend: data.spend });
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
        track("lead_form_error", { status: res.status });
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return <div className={s.sent} role="status"><h3>Thanks, that&apos;s with me now.</h3><p>I&apos;ll reply by email within one business day, usually with the first questions I&apos;d ask about the account.</p></div>;
  }

  return <form className={s.form} onSubmit={submit} noValidate={false}>
    {snapshot && <div className={s.snapshot}><span>Your Lead Leak Check numbers will be included</span><p>{snapshot}</p><button type="button" onClick={() => setSnapshot("")}>Remove</button></div>}
    <div className={s.row}>
      <label htmlFor="lead-name">Name<input id="lead-name" name="name" autoComplete="name" required maxLength={120} /></label>
      <label htmlFor="lead-email">Work email<input id="lead-email" name="email" type="email" autoComplete="email" required maxLength={200} /></label>
    </div>
    <div className={s.row}>
      <label htmlFor="lead-spend">Monthly ad spend<select id="lead-spend" name="spend" defaultValue=""><option value="" disabled>Choose a range</option><option>Under $3K</option><option>$3K–$10K</option><option>$10K–$30K</option><option>$30K–$100K</option><option>$100K+</option><option>Not running ads yet</option></select></label>
      <label htmlFor="lead-platform">Platforms<select id="lead-platform" name="platform" defaultValue=""><option value="" disabled>Choose one</option><option>Google Ads</option><option>Meta Ads</option><option>Google and Meta</option><option>Other / several</option></select></label>
    </div>
    <label htmlFor="lead-website">Website <small>(optional)</small><input id="lead-website" name="website" type="url" inputMode="url" placeholder="https://" maxLength={300} /></label>
    <label htmlFor="lead-problem">What&apos;s going on with the account?<textarea id="lead-problem" name="problem" rows={4} required maxLength={3000} placeholder={path ? `For example: ${paths[path].problem}` : "For example: spend is up, but lead quality has dropped since we switched bidding."} /></label>
    <div className={s.hp} aria-hidden="true"><label htmlFor="lead-company-url">Leave this empty<input id="lead-company-url" name="company_url" tabIndex={-1} autoComplete="off" /></label></div>
    <div className={s.formFoot}>
      <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send to Jahangir"} <span aria-hidden>→</span></button>
      <p>Goes straight to my inbox. No newsletter, no sales sequence.</p>
    </div>
    {(status === "error" || status === "unavailable") && <p className={s.formError} role="alert">That didn&apos;t send. Please email me directly at <EmailLink ctaLocation="form_fallback" linkText="jahangirahmed0692@gmail.com" className="email-link">jahangirahmed0692@gmail.com</EmailLink></p>}
  </form>;
}
