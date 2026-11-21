import Link from "next/link";
import { EmailLink, TrackedLink } from "@/components/portfolio-client";
import { links } from "@/data/content";
import { primaryPages } from "@/lib/site";

export function SiteFooter({ location = "footer" }: { location?: string }) {
  return <footer className="footer">
    <div>
      <Link className="brand" href="/"><span className="monogram">JA</span><span><strong>Jahangir Ahmed</strong><small>Performance Marketing Specialist</small></span></Link>
      <p>Google Ads • Meta Ads • Paid Media Strategy • Conversion Tracking</p>
    </div>
    <nav className="footer-links" aria-label="Footer">
      {primaryPages.map((page) => <Link key={page.href} href={page.href}>{page.label}</Link>)}
      <Link href="/insights/google-ads-audit-checklist">Google Ads Audit Checklist</Link>
      <TrackedLink href={links.linkedin} event="linkedin_click" details={{ cta_location: location, link_text: "LinkedIn" }} target="_blank" rel="noopener noreferrer">LinkedIn ↗</TrackedLink>
      <TrackedLink href={links.upwork} event="upwork_click" details={{ cta_location: location, link_text: "Upwork" }} target="_blank" rel="noopener noreferrer">Upwork ↗</TrackedLink>
      <EmailLink ctaLocation={location} linkText="Email">Email ↗</EmailLink>
    </nav>
    <small>© {new Date().getFullYear()} Jahangir Ahmed</small>
  </footer>;
}
