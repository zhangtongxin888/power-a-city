import type { Metadata } from "next";

export const site = {
  name: "Power Your City Beginner Guide",
  shortName: "Power a City Wiki",
  domain: "https://power-a-city.wiki",
  gameName: "Power Your City",
  gameUrl: "https://www.roblox.com/games/81549698024226/Power-Your-City",
  creator: "Restore Power",
  creatorUrl: "https://www.roblox.com/communities/99675598/Restore-Power",
  placeId: "81549698024226",
  universeId: "10297836599",
  verifiedOn: "2026-08-12",
} as const;

export const routes = ["/", "/quick-start", "/core-loop", "/progression", "/mistakes", "/faq", "/sources"] as const;

export function pageMetadata(title: string, description: string, path: (typeof routes)[number]): Metadata {
  const canonical = `${site.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "article",
      images: [{ url: "/og-control-room-1200x630.png", width: 1200, height: 630, alt: site.name }],
    },
    other: { "article:modified_time": "2026-08-12T00:00:00+08:00" },
    twitter: { card: "summary_large_image", title, description, images: ["/og-control-room-1200x630.png"] },
  };
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
