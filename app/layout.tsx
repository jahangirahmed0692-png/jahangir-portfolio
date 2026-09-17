import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const plex = IBM_Plex_Mono({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const siteUrl = "https://jahangirahmed.com";
const pageTitle = "Performance Marketing Specialist | Jahangir Ahmed";
const pageDescription = "Performance marketing specialist with 9+ years across Google Ads, Meta Ads, PPC and paid acquisition. $5M+ managed across U.S., MENA and Australia.";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/`,
    siteName: "Jahangir Ahmed",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: "Jahangir Ahmed — Performance Marketing Specialist, $5M+ managed, 9+ years" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${plex.variable}`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body>
        {children}
      </body>
    </html>
  );
}
