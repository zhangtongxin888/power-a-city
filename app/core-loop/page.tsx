import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { PowerDiagram } from "@/components/power-diagram";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Core Loop",
  "Understand the verified Power Your City gameplay loop: generators, batteries, Cash sales, reinvestment, and multiplayer theft risk.",
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
        <p>The official description says Power is sold around the city for Cash. It does not state a fixed route, multiplier, automatic collection rule, or best selling location. Treat any exact claim as unverified unless you can see it in the current interface.</p>
        <h2>4. Cash supports the next cycle</h2>
        <p>The public description does not spell out a complete upgrade system. As a guide strategy, use the current in-game choices to spend where the observed chain is constrained, then watch another cycle.</p>
        <h2>5. Theft changes the timing</h2>
        <p>Stealing Power from other players is confirmed. The public page does not state what Power is targeted or document range, cooldowns, loss size, combat, shields, or protected zones, so this guide does not claim those rules.</p>
        <div className="callout"><strong>The one question to keep asking</strong><p>“Where did my cycle pause?” The answer—production, storage, selling, or loss to another player—points to the most useful next action.</p></div>
        <p><Link className="text-link" href="/quick-start">Return to the first-session checklist →</Link></p>
        <GuideNext href="/progression" title="Next: build a progression route" copy="Use visible constraints to decide what deserves the next purchase." />
      </article>
    </>
  );
}
