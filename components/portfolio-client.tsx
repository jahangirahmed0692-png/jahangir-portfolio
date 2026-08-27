"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { caseStudies, certifications, links, results, type CaseStudy } from "@/data/content";
import { track } from "@/lib/tracking";

function ExternalLink({ href, event, className="", children }:{href:string;event:string;className?:string;children:React.ReactNode}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} data-track={event} onClick={()=>track(event)}>{children}</a>;
}

const emailAddress="jahangirahmed0692@gmail.com";

export function EmailLink({ className="", children }:{className?:string;children:React.ReactNode}) {
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
    track("email_click");
    if(navigator.clipboard?.writeText){
      void navigator.clipboard.writeText(emailAddress).then(confirmCopy).catch(fallbackCopy);
    }else fallbackCopy();
  };

  return <span className="email-action"><a className={className} href={links.email} data-track="email_click" onClick={handleClick}>{children}</a><span className={`email-copied${copied?" visible":""}`} role="status" aria-live="polite">{copied?"Email copied":""}</span></span>;
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

export function Header(){
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const on=()=>setScrolled(scrollY>16);on();addEventListener("scroll",on,{passive:true});return()=>removeEventListener("scroll",on)},[]);
  const nav=[["Results","#results"],["Expertise","#expertise"],["Case Studies","#case-studies"],["About","#about"],["Testimonials","#testimonials"],["Services","#services"]];
  return <header className={`site-header ${scrolled?"scrolled":""}`}>
    <a className="brand" href="#top" aria-label="Jahangir Ahmed, home"><span className="monogram">JA</span><span>Jahangir Ahmed</span></a>
    <nav id="mobile-nav" className={open?"open":""} aria-label="Primary navigation">{nav.map(([x,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{x}</a>)}</nav>
    <ExternalLink className="button button-small header-cta" href={links.upwork} event="upwork_click">Hire Me <span aria-hidden>↗</span></ExternalLink>
    <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation"><span/><span/></button>
  </header>;
}

export function ResultsCarousel(){
  const ref=useRef<HTMLDivElement>(null); const [position,setPosition]=useState({start:true,end:false});
  const update=useCallback(()=>{const el=ref.current;if(el)setPosition({start:el.scrollLeft<4,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-4})},[]);
  useEffect(()=>{update();addEventListener("resize",update);return()=>removeEventListener("resize",update)},[update]);
  const move=(d:number)=>{ref.current?.scrollBy({left:d*ref.current.clientWidth*.82,behavior:"smooth"});track("results_interaction",{direction:d>0?"next":"previous"})};
  return <>
    <div className="section-top"><div><p className="kicker dark">01 / Selected results</p><h2>Performance you can tie<br/>back to business.</h2><p className="lead dark">Selected outcomes across lead-generation campaigns.</p><p className="results-context">Anonymized examples from client work across lead-generation accounts.</p></div><div className="carousel-arrows"><button aria-label="Previous result" disabled={position.start} onClick={()=>move(-1)}>←</button><button aria-label="Next result" disabled={position.end} onClick={()=>move(1)}>→</button></div></div>
    <div className="results-track" ref={ref} onScroll={update} tabIndex={0} aria-label="Selected client results">{results.map((r,i)=><article className="result-card" key={`${r.industry}${i}`}><div className="card-index">0{i+1}</div><p>{r.industry}</p><strong>{r.revenue}</strong><span>Revenue</span><dl><div><dt>Qualified leads</dt><dd>{r.leads}</dd></div><div><dt>Period</dt><dd>{r.period}</dd></div><div><dt>CPL</dt><dd>{r.cpl}</dd></div><div><dt>Monthly budget</dt><dd>{r.budget}</dd></div></dl></article>)}</div>
  </>;
}

export function CaseStudyGrid(){
  const [active,setActive]=useState<CaseStudy|null>(null);
  const summaries=["Rebuilt fragmented acquisition signals, tightened targeting, and aligned campaign measurement with the funnel.","Built a lower-friction acquisition path focused on affordable sign-ups and paid-user conversion.","Scaled high-spend acquisition through disciplined bidding, creative testing, and budget control.","Optimized acquisition across the full journey from install through purchase and customer value."];
  return <><div className="case-grid">{caseStudies.map((c,i)=><button className="case-card" key={c.title} onClick={()=>{setActive(c);track("case_study_open",{case_study:c.title})}}><span className="case-no">0{i+1}</span><p className="kicker">{c.category}</p><h3>{c.title}</h3><p className="case-summary">{summaries[i]}</p><div className="case-metrics">{c.metrics.slice(0,3).map(m=><div key={m[1]}><strong>{m[0]}</strong><span>{m[1]}</span></div>)}</div><span className="case-open">View case study <b>↗</b></span></button>)}</div>{active&&<Dialog label={`${active.title} case study`} onClose={()=>setActive(null)}><p className="kicker">{active.category}</p><h2>{active.title}</h2><div className="modal-metrics">{active.metrics.map(m=><div key={m[1]}><strong>{m[0]}</strong><span>{m[1]}</span></div>)}</div>{[["Situation",active.situation],["Diagnosis",active.diagnosis],["Strategy / Execution",active.execution],["Outcome",active.outcome]].map(([h,p])=><section className="modal-section" key={h}><h3>{h}</h3><p>{p}</p></section>)}</Dialog>}</>;
}

export function Certifications(){
  const [active,setActive]=useState<(typeof certifications)[number]|null>(null);
  return <><div className="cert-grid">{certifications.map((c,i)=><button className="cert-card" key={c.subtitle} onClick={()=>{setActive(c);track("certificate_open",{certificate:c.subtitle})}}><span className="cert-image"><Image src={c.image} alt={`${c.title}, ${c.subtitle} certificate`} width={i?480:800} height={i?360:600} sizes="(max-width: 700px) 78vw, 25vw"/></span><span className="cert-copy"><strong>{c.title}</strong><small>{c.subtitle}</small></span></button>)}</div>{active&&<Dialog label={active.title} onClose={()=>setActive(null)}><div className="lightbox-image"><Image src={active.image} alt={`${active.title}, ${active.subtitle} certificate`} width={1000} height={750} sizes="90vw"/></div><h3>{active.title}</h3><p>{active.subtitle}</p></Dialog>}</>;
}

export function ContactLinks(){return <div className="cta-actions"><ExternalLink href={links.upwork} event="contact_cta_click" className="button">Hire Me on Upwork <span aria-hidden>↗</span></ExternalLink><ExternalLink href={links.linkedin} event="linkedin_click" className="button button-outline">Connect on LinkedIn <span aria-hidden>↗</span></ExternalLink></div>}
