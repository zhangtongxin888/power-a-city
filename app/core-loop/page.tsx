import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { PowerDiagram } from "@/components/power-diagram";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Gameplay Loop: Generate, Store, Sell & Steal",
  "How Power Your City works: panels make Power, batteries store it, you collect and sell it (with a negotiation roll), reinvest Cash and protect your base from thieves.",
  "/core-loop",
);

export default function CoreLoopPage() {
  return (
    <>
      <PageHero eyebrow="CORE GAMEPLAY" title="GENERATE. STORE. SELL. ADAPT." intro="The public experience description gives four concrete actions—produce, store, sell, and steal—enough to build a useful mental model without inventing item stats." current={2} />
      <article className="article">
        <PowerDiagram />
        <h2>1. Generation starts every cycle</h2>
        <p>The official experience page states that generators produce Power. Public artwork strongly features solar panels, but it does not provide a complete generator catalogue, output table, or upgrade tree. Use the current in-game options for current choices.</p>
        <h2>2. Storage keeps output usable</h2>
        <p>Batteries store Power. As a practical test, watch the visible flow over a complete cycle. An empty or full battery is a clue, not proof of a specific bottleneck, so change one variable and observe again.</p>
        <h2>3. City sales convert Power to Cash</h2>
        <p>The official description says Power is sold around the city for Cash. Creator guides add two details: you collect the Power your setup makes before selling it, and each sale offers a negotiation. One creator reports a 50% chance of a near-double payout, with a slightly lower payout on failure. The official <em>Auto Collect</em> game pass (299 Robux) automates the collecting step.</p>
        <h2>4. Cash supports the next cycle</h2>
        <p>Creator guides describe three ways to spend: more or better panels, more or bigger batteries, and extra sections of your area for more building space. Speed upgrades make you move faster, which matters more once you sell farther away or steal. As a guide strategy, spend where the chain is slowest, then watch another cycle.</p>
        <h2>5. Theft changes the timing</h2>
        <p>Stealing Power from other players is confirmed. A creator guide reports how it plays out: the thief interacts with one of your batteries, carries some Power away and moves slowly until they get home or are caught. A green button outside your plant temporarily locks your base. Loss size and cooldowns are not published.</p>
        <h2 id="game-passes">6. Official game passes (2 October 2026)</h2>
        <ul className="check-list">
          <li><strong>Auto Collect</strong> · 299 Robux</li>
          <li><strong>x2 Generation Speed</strong> · 599 Robux</li>
          <li><strong>Faster Restock</strong> · 79 Robux (shop items restock, so a sold-out item comes back later)</li>
        </ul>
        <p>Prices are from the official Roblox game-pass list on 2 October 2026 and can change. None is required to learn the loop.</p>
        <div className="callout"><strong>The one question to keep asking</strong><p>“Where did my cycle pause?” The answer—production, storage, selling, or loss to another player—points to the most useful next action.</p></div>
        <p><Link className="text-link" href="/quick-start">Return to the first-session checklist →</Link></p>
        <GuideNext href="/progression" title="Next: build a progression route" copy="Use visible constraints to decide what deserves the next purchase." />
      </article>
    </>
  );
}
