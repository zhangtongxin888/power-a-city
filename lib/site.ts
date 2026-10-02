import type { Metadata } from "next";

export const site = {
  name: "Power Your City Beginner Guide",
  shortName: "Power Your City Guide",
  domain: "https://power-a-city.wiki",
  gameName: "Power Your City",
  gameUrl: "https://www.roblox.com/games/81549698024226/Power-Your-City",
  creator: "Restore Power",
  creatorUrl: "https://www.roblox.com/communities/99675598/Restore-Power",
  placeId: "81549698024226",
  universeId: "10297836599",
  verifiedOn: "2026-08-12",
  checkedOn: "2026-10-02",
  checkedOnLabel: "2 October 2026",
} as const;

/** A separate Roblox experience whose title matches this guide's domain. Verified via the official Roblox games API on 2026-10-02. */
export const otherGame = {
  name: "⚡Power a City",
  creator: "Vivat's Workers",
  url: "https://www.roblox.com/games/127475054933484/Power-a-City",
  placeId: "127475054933484",
  universeId: "10340721921",
} as const;

export const routes = ["/", "/codes", "/quick-start", "/core-loop", "/progression", "/mistakes", "/faq", "/sources"] as const;

export function pageMetadata(title: string, description: string, path: (typeof routes)[number], modified = `${site.checkedOn}T00:00:00+08:00`): Metadata {
  const canonical = `${site.domain}${path}`;
  return {
    title: { absolute: title },
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
    other: { "article:modified_time": modified },
    twitter: { card: "summary_large_image", title, description, images: ["/og-control-room-1200x630.png"] },
  };
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
