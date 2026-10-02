import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { otherGame, pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Guide Sources & Fact-Check Method",
  "The official Roblox pages and APIs, code trackers and creator videos behind this Power Your City guide, with the date each was checked and how claims are labelled.",
  "/sources",
);

export default function SourcesPage() {
  return (
    <>
      <PageHero eyebrow="EDITORIAL METHOD" title="SOURCE FIRST. CLAIM SECOND." intro="We use official Roblox pages and official public APIs for identity and mechanics, then label code-tracker and creator reports as reported, and our own advice as strategy. Launched 12 August 2026; rechecked 2 October 2026." />
      <article className="article source-list">
        <h2>Primary source</h2>
        <p><a href={site.gameUrl}>Official Power Your City experience page</a> — verifies the official title, Restore Power as creator, and the four public actions: generators produce Power, batteries store it, Power is sold around the city for Cash, and players can steal Power.</p>
        <h2>Official public data</h2>
        <p>The <a href={`https://apis.roblox.com/universes/v1/places/${site.placeId}/universe`}>official Place-to-Universe API</a> maps place <code>{site.placeId}</code> to universe <code>{site.universeId}</code>. The <a href={`https://apis.roblox.com/game-passes/v1/universes/${site.universeId}/game-passes?passView=Full&limit=100`}>official Game Pass API</a> was reviewed as a dated snapshot only; changing products, prices, and availability are intentionally left out of the evergreen guide.</p>
        <h2>Rechecked on 2 October 2026</h2>
        <ul>
          <li><strong>Roblox games API:</strong> Power Your City (universe {site.universeId}) still uses root place {site.placeId}; no move to a new place was found. It showed 18.7 million+ visits and an update on 2 October 2026.</li>
          <li><strong>Game-pass API:</strong> Auto Collect (299 Robux), x2 Generation Speed (599 Robux), Faster Restock (79 Robux).</li>
          <li><strong>Group API:</strong> Restore Power had 1,047,048 members. The game has no public badges.</li>
          <li><strong>Name check:</strong> Roblox search also returns <a href={otherGame.url}>{otherGame.name}</a> by {otherGame.creator} (universe {otherGame.universeId}), a separate game. This guide does not cover it.</li>
        </ul>
        <h2>Codes</h2>
        <p>We list a code as “reported working” only when at least three independent sources list it as active (on 2 October 2026: <a href="https://www.destructoid.com/power-your-city-codes/">Destructoid</a>, <a href="https://www.dexerto.com/roblox/power-your-city-codes-3397009/">Dexerto</a> and RoCodes for TOTEM). Conflicting lists are shown as disputed, and single-source codes as unverified. See the <Link href="/codes">code status table</Link>.</p>
        <h2>Creator guides</h2>
        <p>Details on collecting, sell negotiation, the base lock, speed upgrades, area expansion and rebirth come from a <a href="https://www.youtube.com/watch?v=QkqPfCTgYS8">Radex Tips YouTube guide</a> and are labelled as reported on every page that uses them.</p>
        <h2>Official artwork</h2>
        <p>The six files under <code>/public/game/</code> were downloaded from the official Roblox experience media and thumbnail endpoints on {site.verifiedOn}. They support this site’s solar-power visual theme. Their devices, numbers, and the icon text “ENERGY OFFLINE” are promotional media—not a complete mechanics or stat reference.</p>
        <ul>
          <li><code>official-blackout-to-grid.png</code></li><li><code>official-connect-power.png</code></li><li><code>official-output-growth.png</code></li><li><code>official-income-scale.png</code></li><li><code>official-equipment-scale.png</code></li><li><code>official-icon.png</code></li>
        </ul>
        <h2>What we do not claim</h2>
        <p>We do not publish exact generator names, output values, battery capacities, theft amounts, rebirth costs, offline caps or upgrade rankings, because no official or directly verifiable current source supports them.</p>
        <h2>Independent status</h2>
        <p>This site is not operated by Roblox or Restore Power. The social preview is original guide artwork; game screenshots and the icon are labeled as official source material.</p>
        <GuideNext href="/quick-start" eyebrow="PUT THE RESEARCH TO USE" title="Start the five-minute beginner route" copy="Return to one small, verified power cycle and learn the game in order." />
      </article>
    </>
  );
}
