import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const plex = IBM_Plex_Mono({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jahangir Ahmed | Performance Marketing Specialist",
  description: "Performance Marketing Specialist with 9+ years of experience and $5M+ in managed ad spend across Google Ads, Meta Ads and paid acquisition. U.S.-focused expertise across SaaS, eCommerce, B2B and lead generation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Jahangir Ahmed | Performance Marketing Specialist",
    description: "$5M+ managed across 9+ years in Google Ads, Meta Ads and paid acquisition.",
    url: "/",
    siteName: "Jahangir Ahmed",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jahangir Ahmed — Performance Marketing Specialist, $5M+ managed, 9+ years" }],
  },
  twitter: { card: "summary_large_image", title: "Jahangir Ahmed | Performance Marketing Specialist", description: "$5M+ managed across 9+ years in paid media.", images: ["/og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context":"https://schema.org", "@type":"Person", name:"Jahangir Ahmed", jobTitle:"Performance Marketing Specialist", url:siteUrl, sameAs:["https://www.linkedin.com/in/jahangir-ahmed-11835888/","https://www.upwork.com/freelancers/~01ff8182489f04452d?mp_source=share"] }).replace(/</g,"\\u003c") }} />
      </body>
    </html>
  );
}
