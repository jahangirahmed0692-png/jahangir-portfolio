import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { jsonLdString, personSchema, websiteSchema } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const plex = IBM_Plex_Mono({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const siteUrl = "https://jahangirahmed.com";
const pageTitle = "Jahangir Ahmed | Google Ads & Meta Ads Specialist (PPC)";
const pageDescription = "Jahangir Ahmed is a PPC specialist for Google Ads and Meta Ads with 9+ years in paid media and $5M+ in ad spend managed for U.S., MENA and Australian businesses.";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  applicationName: "Jahangir Ahmed",
  authors: [{ name: "Jahangir Ahmed", url: `${siteUrl}/` }],
  creator: "Jahangir Ahmed",
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/`,
    siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og-home-2026.jpg`, width: 1200, height: 630, alt: "Jahangir Ahmed, Google Ads and Meta Ads specialist" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [`${siteUrl}/og-home-2026.jpg`] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable}`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString({ "@context": "https://schema.org", "@graph": [websiteSchema, personSchema] }) }} />
        {children}
      </body>
    </html>
  );
}
