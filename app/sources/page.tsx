import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Sources",
  "Primary and supporting sources used to verify Power Your City facts, artwork, identity, mechanics, and current public data.",
  "/sources",
);

export default function SourcesPage() {
  return (
    <>
      <PageHero eyebrow="EDITORIAL METHOD" title="SOURCE FIRST. CLAIM SECOND." intro="We use official Roblox pages and official public APIs for identity and mechanics, then label practical advice as strategy. Facts were reviewed on 12 August 2026." />
      <article className="article source-list">
        <h2>Primary source</h2>
        <p><a href={site.gameUrl}>Official Power Your City experience page</a> — verifies the official title, Restore Power as creator, and the four public actions: generators produce Power, batteries store it, Power is sold around the city for Cash, and players can steal Power.</p>
        <h2>Official public data</h2>
        <p>The <a href={`https://apis.roblox.com/universes/v1/places/${site.placeId}/universe`}>official Place-to-Universe API</a> maps place <code>{site.placeId}</code> to universe <code>{site.universeId}</code>. The <a href={`https://apis.roblox.com/game-passes/v1/universes/${site.universeId}/game-passes?passView=Full&limit=100`}>official Game Pass API</a> was reviewed as a dated snapshot only; changing products, prices, and availability are intentionally left out of the evergreen guide.</p>
        <h2>Official artwork</h2>
        <p>The six files under <code>/public/game/</code> were downloaded from the official Roblox experience media and thumbnail endpoints on {site.verifiedOn}. They support this site’s solar-power visual theme. Their devices, numbers, and the icon text “ENERGY OFFLINE” are promotional media—not a complete mechanics or stat reference.</p>
        <ul>
          <li><code>official-blackout-to-grid.png</code></li><li><code>official-connect-power.png</code></li><li><code>official-output-growth.png</code></li><li><code>official-income-scale.png</code></li><li><code>official-equipment-scale.png</code></li><li><code>official-icon.png</code></li>
        </ul>
        <h2>What we do not claim</h2>
        <p>We do not publish exact generator names, prices, output values, battery capacities, theft rules, offline caps, codes, or upgrade rankings unless an official or directly verifiable current source supports them.</p>
        <h2>Independent status</h2>
        <p>This site is not operated by Roblox or Restore Power. The social preview is original guide artwork; game screenshots and the icon are labeled as official source material.</p>
        <GuideNext href="/quick-start" eyebrow="PUT THE RESEARCH TO USE" title="Start the five-minute beginner route" copy="Return to one small, verified power cycle and learn the game in order." />
      </article>
    </>
  );
}
