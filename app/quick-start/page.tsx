import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { PowerDiagram } from "@/components/power-diagram";
import { StaticImage as Image } from "@/components/static-image";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Quick Start",
  "A five-minute, source-backed beginner walkthrough for generators, batteries, selling Power, reinvesting Cash, and avoiding early losses.",
  "/quick-start",
);

export default function QuickStartPage() {
  return (
    <>
      <PageHero eyebrow="5-MINUTE QUICK START" title="YOUR FIRST POWER CYCLE" intro="Build one small, understandable grid before chasing size. This route separates confirmed game mechanics from our practical beginner advice." current={1} actionHref="#first-steps" actionLabel="Jump to step 1" />
      <article className="article">
        <div className="callout"><strong>Confirmed by the official description</strong><p>Generators produce Power, batteries store it, Power can be sold around the city for Cash, and players can steal Power from one another.</p></div>
        <h2>Before you place anything</h2>
        <p>Look over the current interface and find the controls for generators, batteries, and selling. Do not rely on a screenshot for exact prices or button names: live labels and values can change.</p>
        <ol className="flow-list" id="first-steps">
          <li><strong>Place your first generator.</strong> Confirm that it is producing Power before adding more equipment.</li>
          <li><strong>Add battery storage.</strong> Watch whether produced Power reaches storage. This confirms the first half of the chain.</li>
          <li><strong>Complete a city sale.</strong> Use the current in-game selling controls and confirm that Cash rises.</li>
          <li><strong>Repeat a short cycle.</strong> A small repeatable loop teaches more than a large setup you do not yet understand.</li>
          <li><strong>Reinvest in the clear bottleneck.</strong> If production cannot keep storage supplied, improve production. If storage stops the flow, improve storage.</li>
          <li><strong>Account for theft.</strong> The official description confirms that players can steal Power, but it does not publish the target or conditions. Use the current game feedback to adjust your timing.</li>
        </ol>
        <PowerDiagram />
        <figure><Image src="/game/official-connect-power.png" alt="Official artwork showing a player beside a solar panel and cable-like power equipment" width={768} height={432} /><figcaption>Official game artwork depicting a solar panel and cable-like equipment. It does not verify exact interaction controls.</figcaption></figure>
        <h2>Your first-session checklist</h2>
        <ul className="check-list">
          <li>You saw a generator produce Power.</li>
          <li>You saw a battery store Power.</li>
          <li>You completed at least one city sale for Cash.</li>
          <li>You observed which part of the visible flow may need attention.</li>
          <li>You understand that other players may steal Power.</li>
        </ul>
        <div className="callout callout-yellow"><strong>Strategy, not a hidden rule</strong><p>You can test shorter sell cycles when theft is interrupting a session. The official description confirms stealing, but not what can be stolen, its range, timing, loss size, or protection rules.</p></div>
        <p><Link className="text-link" href="/mistakes">Need a recovery shortcut? See common mistakes →</Link></p>
        <GuideNext href="/core-loop" title="Next: understand the core loop" copy="Turn the four actions into a mental model you can reuse every session." />
      </article>
    </>
  );
}
