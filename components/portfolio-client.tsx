"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { caseStudies, certifications, links, results, type CaseStudy } from "@/data/content";
import { track } from "@/lib/tracking";
import resultsStyles from "./results.module.css";

type TrackedLinkProps = {
  href: string;
  event: string;
  details?: Record<string, unknown>;
  className?: string;
  children: React.ReactNode;
  target?: "_blank";
  rel?: string;
  download?: boolean | string;
};

export function TrackedLink({ href, event, details={}, className="", children, target, rel, download }:TrackedLinkProps) {
  return <a href={href} target={target} rel={rel} download={download} className={className} data-track={event} data-cta-location={typeof details.cta_location === "string" ? details.cta_location : undefined} onClick={()=>track(event,details)}>{children}</a>;
}

const emailAddress="jahangirahmed0692@gmail.com";

export function EmailLink({ ctaLocation, linkText, className="", children }:{ctaLocation:string;linkText:string;className?:string;children:React.ReactNode}) {
  const [copied,setCopied]=useState(false);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current)},[]);

  const confirmCopy=()=>{
    setCopied(true);
    if(timer.current)clearTimeout(timer.current);
    timer.current=setTimeout(()=>setCopied(false),2200);
  };

  const fallbackCopy=()=>{
    const input=document.createElement("textarea");
    input.value=emailAddress;
    input.setAttribute("readonly","");
    input.style.position="fixed";
    input.style.opacity="0";
    document.body.appendChild(input);
    input.select();
    const succeeded=document.execCommand("copy");
    input.remove();
    if(succeeded)confirmCopy();
  };

  const handleClick=()=>{
    track("email_click",{cta_location:ctaLocation,link_text:linkText});
    if(navigator.clipboard?.writeText){
      void navigator.clipboard.writeText(emailAddress).then(confirmCopy).catch(fallbackCopy);
    }else fallbackCopy();
  };

  return <span className="email-action"><a className={className} href={links.email} data-track="email_click" data-cta-location={ctaLocation} onClick={handleClick}>{children}</a><span className={`email-copied${copied?" visible":""}`} role="status" aria-live="polite">{copied?"Email copied":""}</span></span>;
}

function Dialog({ label, onClose, children }:{label:string;onClose:()=>void;children:React.ReactNode}) {
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null;
    const root=ref.current; root?.focus(); document.body.classList.add("locked");
    const key=(e:KeyboardEvent)=>{
      if(e.key==="Escape") onClose();
      if(e.key==="Tab"&&root){
        const items=[...root.querySelectorAll<HTMLElement>('button,a,[tabindex]:not([tabindex="-1"])')];
        if(!items.length)return; const first=items[0],last=items.at(-1)!;
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    };
    document.addEventListener("keydown",key);
    return()=>{document.removeEventListener("keydown",key);document.body.classList.remove("locked");previous?.focus()};
  },[onClose]);
  return <div className="overlay" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)onClose()}}><div className="dialog" role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} ref={ref}><button className="close" onClick={onClose} aria-label="Close dialog">×</button>{children}</div></div>;
}

export function Header({ homeHrefPrefix="", ctaLocation="header" }:{ homeHrefPrefix?:string; ctaLocation?:string }){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const on=()=>setScrolled(scrollY>16);on();addEventListener("scroll",on,{passive:true});return()=>removeEventListener("scroll",on)},[]);
  const nav=[["Results","#results"],["Expertise","#expertise"],["Case Studies","#case-studies"],["About","#about"],["Testimonials","#testimonials"],["Services","#services"]];
  return <header className={`site-header ${scrolled?"scrolled":""}`}>
    <a className="brand" href={`${homeHrefPrefix}#top`} aria-label="Jahangir Ahmed, home"><span className="monogram">JA</span><span>Jahangir Ahmed</span></a>
    <nav id="mobile-nav" className={open?"open":""} aria-label="Primary navigation">{nav.map(([x,h])=><a key={h} href={`${homeHrefPrefix}${h}`} onClick={()=>setOpen(false)}>{x}</a>)}</nav>
    <TrackedLink className="button button-small header-cta" href={links.upwork} event="upwork_click" details={{cta_location:ctaLocation,link_text:"Hire Me"}} target="_blank" rel="noopener noreferrer">Hire Me <span aria-hidden>↗</span></TrackedLink>
    <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation"><span/><span/></button>
  </header>;
}

export function ResultsCarousel(){
  const featuredResults=results.filter((result)=>result.featured);
  const [active,setActive]=useState(0);
  const selectResult=(index:number,industry:string)=>{
    setActive(index);
    track("results_interaction",{interaction:"account_select",account:industry,position:index+1});
  };
  return <>
    <div className={resultsStyles.intro}><div><p className="kicker dark">01 / Selected results</p><h2>Lead generation tied<br/>to commercial outcomes.</h2></div><p className={`lead dark ${resultsStyles.introLead}`}>Selected accounts I directly managed across healthcare and local-service businesses, with performance evaluated beyond raw lead volume.</p></div>
    <div className={resultsStyles.comparison} aria-label="Selected account outcomes">{featuredResults.map((result,index)=><article className={`${resultsStyles.sheet}${active===index?` ${resultsStyles.active}`:""}`} key={`${result.industry}${index}`}><button className={resultsStyles.heading} type="button" aria-pressed={active===index} onClick={()=>selectResult(index,result.industry)}><span>0{index+1}</span><strong>{result.industry}</strong><small>Campaigns directly managed</small></button><div className={resultsStyles.primary}><div><strong>{result.leads}</strong><span>Qualified leads</span></div><div><strong>{result.cpl}</strong><span>CPL</span></div><div><strong>{result.revenuePerLead}</strong><span>Revenue / qualified lead</span></div></div><div className={resultsStyles.support}><span>{result.period}</span><strong>{result.revenue} <small>tracked revenue</small></strong></div></article>)}</div>
  </>;
}

export function CaseStudyGrid(){
  const [active,setActive]=useState<CaseStudy|null>(null);
  const summaries=["Rebuilt fragmented acquisition signals, tightened targeting, and aligned campaign measurement with the funnel.","Built a lower-friction acquisition path focused on affordable sign-ups and paid-user conversion.","Optimized acquisition across the full journey from install through purchase and customer value."];
  const openCaseStudy=(caseStudy:CaseStudy)=>{
    setActive(caseStudy);
    track("case_study_open",{
      case_study:caseStudy.title,
      ...(caseStudy.trackingName?{case_study_name:caseStudy.trackingName}:{}),
    });
  };
  return <>
    <div className="case-grid">{caseStudies.map((c,i)=><button className="case-card" key={c.title} onClick={()=>openCaseStudy(c)}><span className="case-no">0{i+1}</span><p className="kicker">{c.brand?`${c.brand} / ${c.category}`:c.category}</p><h3>{c.title}</h3><p className="case-summary">{c.summary??summaries[i]}</p><div className="case-metrics">{c.metrics.slice(0,c.trackingName?4:3).map(m=><div key={`${m[0]}-${m[1]}`}><strong>{m[0]}</strong><span>{m[1]}</span></div>)}</div><span className="case-open">View case study <b>↗</b></span></button>)}</div>
    {active&&<Dialog label={`${active.brand?`${active.brand} `:""}${active.title} case study`} onClose={()=>setActive(null)}>
      <p className="kicker">{active.brand?`${active.brand} / ${active.category}`:active.category}</p>
      <h2>{active.title}</h2>
      {active.brandUrl&&<a className="case-brand-link" href={active.brandUrl} target="_blank" rel="noopener noreferrer">Visit {active.brand} <span aria-hidden>↗</span></a>}
      <div className="modal-metrics">{active.metrics.map(m=><div key={`${m[0]}-${m[1]}`}><strong>{m[0]}</strong><span>{m[1]}</span></div>)}</div>
      {active.trackingName&&active.tags&&<div className="modal-tags" aria-label="Case study capabilities">{active.tags.map(tag=><span key={tag}>{tag}</span>)}</div>}
      <section className="modal-section"><h3>Situation</h3><p>{active.situation}</p></section>
      <section className="modal-section"><h3>Diagnosis</h3><p>{active.diagnosis}</p></section>
      {active.strategy?<section className="modal-section"><h3>Strategy</h3><p>{active.strategy}</p></section>:null}
      <section className="modal-section"><h3>{active.strategy?"Execution":"Strategy / Execution"}</h3>{active.executionGroups?<div className="execution-groups">{active.executionGroups.map((group,index)=><div key={group.title??index}>{group.title&&<h4>{group.title}</h4>}<ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>:<p>{active.execution}</p>}</section>
      <section className="modal-section"><h3>Outcome</h3><p>{active.outcome}</p></section>
    </Dialog>}
  </>;
}

export function Certifications(){
  const [active,setActive]=useState<(typeof certifications)[number]|null>(null);
  return <><div className="cert-grid">{certifications.map((c,i)=><button className="cert-card" key={c.subtitle} onClick={()=>{setActive(c);track("certificate_open",{certificate:c.subtitle})}}><span className="cert-image"><Image src={c.image} alt={`${c.title}, ${c.subtitle} certificate`} width={i?480:800} height={i?360:600} sizes="(max-width: 700px) 78vw, 25vw"/></span><span className="cert-copy"><strong>{c.title}</strong><small>{c.subtitle}</small></span></button>)}</div>{active&&<Dialog label={active.title} onClose={()=>setActive(null)}><div className="lightbox-image"><Image src={active.image} alt={`${active.title}, ${active.subtitle} certificate`} width={1000} height={750} sizes="90vw"/></div><h3>{active.title}</h3><p>{active.subtitle}</p></Dialog>}</>;
}

export function ContactLinks(){return <div className="cta-actions"><TrackedLink href={links.upwork} event="upwork_click" details={{cta_location:"final_cta",link_text:"Hire Me on Upwork"}} className="button" target="_blank" rel="noopener noreferrer">Hire Me on Upwork <span aria-hidden>↗</span></TrackedLink><TrackedLink href={links.linkedin} event="linkedin_click" details={{cta_location:"final_cta",link_text:"Connect on LinkedIn"}} className="button button-outline" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden>↗</span></TrackedLink></div>}
