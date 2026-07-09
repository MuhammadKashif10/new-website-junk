import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Aleo, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/site/SiteLayout";
import { site } from "@/config/site";
import ogImage from "@/assets/hero-main.jpg";

// Self-hosted via next/font — no external Google Fonts request, no render-blocking
// stylesheet, no font-related CLS. Both are variable fonts, so omitting `weight`
// exposes the full range (Aleo 400–700 for headings/buttons, Montserrat 300–700
// for body) exactly as the previous <link> did. The CSS variables below feed
// `--font-display` / `--font-sans` in globals.css, so the typography system and
// visual appearance are unchanged.
const display = Aleo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-aleo",
});
const sans = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const title = "Dubai Junk Collection — Premium Junk Removal in Dubai";
const description =
  "Discreet, dependable junk removal across Dubai. Household, furniture, office and villa clearances handled by a uniformed local crew.";

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title,
  description,
  authors: [{ name: site.name }],
  // Favicon / app-icon links are generated automatically by Next from the
  // metadata file conventions: app/favicon.ico, app/icon.svg, app/apple-icon.png.
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    images: [ogImage.src],
  },
  // Only `card` + a default image live here. twitter:title / twitter:description
  // are intentionally omitted so each page auto-derives them from its own
  // title/description (Next shallow-merges `twitter`, so static values here
  // would otherwise override every page).
  twitter: {
    card: "summary_large_image",
    images: [ogImage.src],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      {/* suppressHydrationWarning: some browser extensions (Grammarly,
          ColorZilla, etc.) inject attributes onto <body> before React
          hydrates. This suppresses only <body>'s own attribute diff — real
          mismatches inside the tree are still reported. */}
      <body suppressHydrationWarning>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
