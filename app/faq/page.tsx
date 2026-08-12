import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City FAQ",
  "Fact-checked answers about Power Your City, including the official name, core mechanics, player stealing, undocumented features, and changing game data.",
  "/faq",
);

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FACT-CHECKED FAQ" title="WHAT WE KNOW—AND WHAT WE DON'T" intro="Every answer distinguishes an official public fact, a guide strategy, and something that still needs to be checked inside the current game." current={5} />
      <article className="article faq-list">
        <details open><summary>Is the game called Power a City or Power Your City?</summary><p>The official Roblox experience is <strong>Power Your City</strong>. “Power a City” is the guide domain and a natural search phrase. This site covers the same experience by Restore Power.</p></details>
        <details><summary>What is the basic gameplay loop?</summary><p>The official description confirms: place generators to produce Power, place batteries to store Power, sell Power around the city for Cash, and steal Power from other players.</p></details>
        <details><summary>What kind of game is it?</summary><p>The official public description presents a build-and-earn loop around generators, batteries, city sales, and stealing Power. This guide focuses on those confirmed actions rather than relying on a changing category label.</p></details>
        <details><summary>Does Power Your City have offline progress?</summary><p>The official icon includes the words “ENERGY OFFLINE,” but the public description does not confirm an offline-progress mechanic or explain its rules. This guide therefore does not promise offline earnings.</p></details>
        <details><summary>Can other players steal my Power?</summary><p>Yes. This is explicitly listed in the official description. Public sources do not state exact theft conditions, range, cooldowns, or protection systems.</p></details>
        <details><summary>What are the best generators or batteries?</summary><p>There is no complete official public stat table in the sources checked. Compare whatever price, output, and capacity information the current interface provides; do not trust an undated tier list.</p></details>
        <details><summary>Are there active codes?</summary><p>No code is labelled active here without a current official source. Third-party claims can expire or be incorrect, so check official game or group announcements before trying one.</p></details>
        <details><summary>Why are exact prices and item tables missing?</summary><p>Those values can change and the checked public description does not provide a complete stat table. Use the current in-game catalogue for price, output, capacity, and availability.</p></details>
        <details><summary>Who made Power Your City?</summary><p>The official creator is the Roblox group Restore Power.</p></details>
        <details><summary>Is this an official wiki?</summary><p>No. It is an independent player guide. Roblox, Power Your City, and Restore Power belong to their respective owners.</p></details>
        <p><Link className="text-link" href="/quick-start">Return to the five-minute walkthrough →</Link></p>
        <GuideNext href="/sources" title="Next: inspect the source policy" copy="See which official pages and APIs support the guide—and what we intentionally leave out." />
      </article>
    </>
  );
}
