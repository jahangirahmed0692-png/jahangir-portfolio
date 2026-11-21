import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/portfolio-client";
import { SiteFooter } from "@/components/site-footer";
import { primaryPages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found | Jahangir Ahmed",
  description: "This page doesn't exist. Explore Google Ads consulting, performance marketing services and insights from Jahangir Ahmed.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return <>
    <Header homeHrefPrefix="/" ctaLocation="not_found_header" />
    <main>
      <section className="section final-cta" style={{ paddingTop: "clamp(150px,16vw,220px)" }}>
        <div className="container">
          <p className="kicker">404 / Page not found</p>
          <h1 style={{ margin: 0, fontSize: "clamp(40px,5vw,72px)", lineHeight: 1.05, letterSpacing: "-.045em", fontWeight: 550 }}>This page doesn&apos;t exist.</h1>
          <p>The link may be out of date. These pages are a good place to start.</p>
          <div className="cta-actions">
            <Link className="button" href="/">Go to the homepage <span aria-hidden>↗</span></Link>
            {primaryPages.filter((page) => !page.href.includes("home-services") && !page.href.includes("performance")).map((page) => <Link key={page.href} className="button button-outline" href={page.href}>{page.label} <span aria-hidden>→</span></Link>)}
          </div>
        </div>
      </section>
    </main>
    <SiteFooter location="not_found_footer" />
  </>;
}
