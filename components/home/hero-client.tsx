"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Delta, Dialog } from "@/components/portfolio-client";
import { track } from "@/lib/tracking";
import s from "./hero.module.css";

/* All figures come from data/content.ts (results and case studies). */
const revenueFlips = [
  ["$889,930", "tracked revenue · hospice care"],
  ["$303,027", "tracked revenue · tree service"],
  ["$264,600", "tracked revenue · tire repair"],
  ["$229,483", "tracked revenue · roofing"],
] as const;

const proofs = [
  ["2x → 6x", "ROAS", "Oaklynn · eCommerce"],
  ["$229,483", "from 102 leads at $116", "Roofing · 90 days"],
  ["4x → 8x", "Meta ROAS", "Sonder Mens · multi-location"],
  ["$34", "per lead, 210 leads", "Tree service · 90 days"],
  ["1.3% → 4%+", "conversion rate", "B2B SaaS"],
] as const;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

function useCycle(length: number, ms: number, paused: boolean) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms, paused]);
  return [i, setI] as const;
}

/** Headline: "platform metrics" gets struck through and real revenue figures flip in beneath it. */
export function HeroHeadline() {
  const reduced = useReducedMotion();
  const [i] = useCycle(revenueFlips.length, 2800, reduced);
  const [value, label] = revenueFlips[i];
  return <>
    <p className={s.title}>Paid media optimized for <span className={s.profit}>profit</span>, not <span className={s.struck}>platform metrics</span>.</p>
    <p className={s.flip} aria-label="Real results: tracked revenue from campaigns I managed">
      <span className={s.arrow} aria-hidden>↳</span>
      <span className={s.flipValue} key={value} aria-hidden>{value}</span>
      <span className={s.flipLabel} key={label} aria-hidden>{label}</span>
    </p>
  </>;
}

/** Card over the portrait that cycles through real wins. */
export function ProofCard() {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState(false);
  const [i, setI] = useCycle(proofs.length, 3600, reduced || hover);
  const [big, what, where] = proofs[i];
  return <div className={s.card} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} role="group" aria-roledescription="carousel" aria-label="Client results">
    <span className={s.cardKicker}>Client result</span>
    <div className={s.cardBody} key={i} aria-live={hover ? "polite" : "off"}>
      <strong><Delta value={big}/></strong>
      <span>{what}</span>
      <small>{where}</small>
    </div>
    <div className={s.dots}>{proofs.map((p, n) => <button key={p[0]} type="button" aria-label={`Show result ${n + 1}: ${p[0]} ${p[1]}`} aria-pressed={n === i} onClick={() => setI(n)} />)}</div>
  </div>;
}

const INTRO_SRC = "/video/jahangir-intro.mp4";
const INTRO_POSTER = "/video/jahangir-intro-poster.webp";

/** "Watch the intro" tile beside the portrait. Nothing but a small poster loads until the visitor clicks. */
export function IntroVideo() {
  const [open, setOpen] = useState(false);
  const done = useRef(false);
  return <>
    <button type="button" className={s.introTile} onClick={() => { setOpen(true); track("intro_video_open", { cta_location: "hero" }); }} aria-label="Watch the 60-second intro video">
      <span className={s.introThumb}>
        <Image src={INTRO_POSTER} alt="" width={1280} height={720} sizes="180px" />
        <span className={s.introPlay} aria-hidden><svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>
      </span>
      <span className={s.introText}><strong>Watch the intro</strong><small>60 sec · what I do</small></span>
    </button>
    {open && <Dialog label="Intro video: Jahangir Ahmed, performance marketing" onClose={() => setOpen(false)} className="video-dialog">
      <video className={s.introVideo} src={INTRO_SRC} poster={INTRO_POSTER} controls autoPlay playsInline preload="none"
        onEnded={() => { if (!done.current) { done.current = true; track("intro_video_complete", { cta_location: "hero" }); } }}>
        Your browser can&apos;t play this video.
      </video>
    </Dialog>}
  </>;
}
