"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { track } from "@/lib/tracking";
import styles from "./account-outcomes-carousel.module.css";

type PerformanceCard = {
  type:"performance";
  industry:string;
  leads:string;
  cpl:string;
  period:string;
  revenue:string;
};

type ExperienceCard = {
  type:"experience";
  industry:string;
  channel:string;
  focus:string;
  objective:string;
  market:string;
};

const cards:(PerformanceCard|ExperienceCard)[]=[
  {type:"performance",industry:"Roofing Company",leads:"102",cpl:"$116",period:"90 Days",revenue:"$229,483"},
  {type:"performance",industry:"Tree Service Company",leads:"210",cpl:"$34",period:"90 Days",revenue:"$303,027"},
  {type:"performance",industry:"Commercial Tire Repair",leads:"252",cpl:"$54",period:"90 Days",revenue:"$264,600"},
  {type:"performance",industry:"Hospice Care",leads:"216",cpl:"$200",period:"6 Months",revenue:"$889,930"},
  {type:"experience",industry:"Landscaping Services",channel:"Google Ads",focus:"Search Lead Generation",objective:"Design & Project Leads",market:"U.S. Local Services"},
  {type:"experience",industry:"Security Consulting",channel:"Google Ads",focus:"B2B Search Campaigns",objective:"Qualified Consultation Leads",market:"U.S. B2B"},
  {type:"experience",industry:"IT Services",channel:"Google Ads",focus:"B2B Acquisition",objective:"Qualified Lead Generation",market:"U.S. Market"},
  {type:"experience",industry:"RV / Camper Dealer",channel:"Google Ads",focus:"Search & Local Buyer Intent",objective:"Dealer Lead Generation",market:"Louisiana"},
  {type:"experience",industry:"Tattoo Studios",channel:"Google Ads + Meta Ads",focus:"Local Appointment Acquisition",objective:"Booking Generation",market:"U.S. Local Services"},
];

export function AccountOutcomesCarousel(){
  const rail=useRef<HTMLDivElement>(null);
  const [position,setPosition]=useState({index:0,start:true,end:false});

  const update=useCallback(()=>{
    const element=rail.current;
    if(!element)return;
    const firstCard=element.querySelector<HTMLElement>("article");
    const step=(firstCard?.offsetWidth??element.clientWidth)+18;
    const index=Math.min(cards.length-1,Math.max(0,Math.round(element.scrollLeft/step)));
    setPosition({index,start:element.scrollLeft<4,end:element.scrollLeft+element.clientWidth>=element.scrollWidth-4});
  },[]);

  useEffect(()=>{update();addEventListener("resize",update);return()=>removeEventListener("resize",update)},[update]);

  const move=(direction:-1|1)=>{
    const element=rail.current;
    if(!element)return;
    const firstCard=element.querySelector<HTMLElement>("article");
    const step=(firstCard?.offsetWidth??element.clientWidth)+18;
    element.scrollBy({left:direction*step,behavior:"smooth"});
    track("results_interaction",{
      interaction_type:direction>0?"carousel_next":"carousel_previous",
      section:"selected_account_outcomes",
    });
  };

  return <div className={styles.carousel}>
    <div className={styles.controls}>
      <span aria-live="polite">{String(position.index+1).padStart(2,"0")} / {String(cards.length).padStart(2,"0")}</span>
      <div><button type="button" aria-label="Previous account outcome" disabled={position.start} onClick={()=>move(-1)}>←</button><button type="button" aria-label="Next account outcome" disabled={position.end} onClick={()=>move(1)}>→</button></div>
    </div>
    <div className={styles.rail} ref={rail} onScroll={update} tabIndex={0} aria-label="Selected account outcomes carousel" onKeyDown={(event)=>{if(event.key==="ArrowLeft"){event.preventDefault();move(-1)}if(event.key==="ArrowRight"){event.preventDefault();move(1)}}}>
      {cards.map((card,index)=><article className={styles.card} key={card.industry}>
        <header><span>0{index+1}</span><div><h3>{card.industry}</h3><small>{card.type==="performance"?"Verified performance":"Experience snapshot"}</small></div></header>
        {card.type==="performance"?<>
          <div className={styles.performance}><div><strong>{card.leads}</strong><span>Qualified leads</span></div><div><strong>{card.cpl}</strong><span>CPL</span></div></div>
          <footer><span>{card.period}</span><strong>{card.revenue} <small>tracked revenue</small></strong></footer>
        </>:<dl className={styles.snapshot}>
          <div><dt>Channel</dt><dd>{card.channel}</dd></div>
          <div><dt>Focus</dt><dd>{card.focus}</dd></div>
          <div><dt>Objective</dt><dd>{card.objective}</dd></div>
          <div><dt>Market</dt><dd>{card.market}</dd></div>
        </dl>}
      </article>)}
    </div>
  </div>;
}
