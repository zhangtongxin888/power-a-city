import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { safeJsonLd, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: site.name, template: `%s | ${site.shortName}` },
  description: "Independent, fact-checked beginner guides for Power Your City on Roblox.",
  applicationName: site.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/game/official-icon.png", shortcut: "/game/official-icon.png", apple: "/game/official-icon.png" },
  openGraph: {
    title: site.name,
    description: "Generate, store, sell, and scale with a verified Power Your City beginner route.",
    url: site.domain,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og-control-room-1200x630.png", width: 1200, height: 630, alt: "Power Your City Beginner Grid Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "A verified beginner route for Power Your City.",
    images: ["/og-control-room-1200x630.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06101c",
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.domain,
  description: "An independent beginner guide for Power Your City on Roblox.",
  isAccessibleForFree: true,
  about: {
    "@type": "VideoGame",
    name: site.gameName,
    url: site.gameUrl,
    author: { "@type": "Organization", name: site.creator, url: site.creatorUrl },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      </body>
    </html>
  );
}
