import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { StaticImage as Image } from "@/components/static-image";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Progression Guide",
  "A cautious progression route for Power Your City that uses observed bottlenecks instead of invented tiers, prices, or output values.",
  "/progression",
);

export default function ProgressionPage() {
  return (
    <>
      <PageHero eyebrow="ADVANCED ROUTE" title="SCALE WITHOUT LOSING THE LOOP" intro="Progression is clearer when every purchase solves a visible problem. This guide avoids fake tier lists and lets the current game supply changing prices and stats." current={3} />
      <article className="article">
        <figure><Image src="/game/official-income-scale.png" alt="Official artwork showing several power panels and a high income figure" width={768} height={432} /><figcaption>Official artwork presents expanding output and income as a progression theme. The displayed number is promotional art, not a guaranteed player rate.</figcaption></figure>
        <h2>Stage 1: prove a full cycle</h2>
        <p>Do not expand until one generator-to-battery-to-sale cycle works. A functioning small grid gives you a baseline for every later decision.</p>
        <h2>Stage 2: identify the constraint</h2>
        <ul className="check-list">
          <li><strong>Storage stays empty:</strong> production may need attention; confirm with another cycle.</li>
          <li><strong>Storage fills and waits:</strong> the next action may need attention; test one change.</li>
          <li><strong>Cash rises too slowly:</strong> observe the whole cycle before assuming one object is responsible.</li>
          <li><strong>The current game shows a theft event:</strong> test different timing before buying only for output.</li>
        </ul>
        <h2>Stage 3: improve one variable</h2>
        <p>Make one meaningful change, then watch another complete cycle. If you change generation, storage, and timing together, you will not know which improvement helped.</p>
        <h2>Stage 4: shorten idle time</h2>
        <p>The goal is not merely bigger equipment. It is a smoother loop with less time spent waiting for production, waiting for capacity, or leaving the next action unclear.</p>
        <h2>Stage 5: use the current in-game options</h2>
        <p>Official artwork depicts both basic-looking containers and advanced-looking machines. However, public sources do not supply names, unlock requirements, or exact values. Compare only the information the current interface provides when choosing between available options.</p>
        <div className="callout callout-yellow"><strong>About “ENERGY OFFLINE”</strong><p>Those words appear in the official experience icon. The public description does not confirm an offline-progress feature or explain any eligibility, cap, rate, or collection rule, so this guide does not promise one.</p></div>
        <p><Link className="text-link" href="/faq">Check careful answers to current feature questions →</Link></p>
        <GuideNext href="/mistakes" title="Next: avoid common mistakes" copy="Learn how to recover when a new grid grows faster than your understanding." />
      </article>
    </>
  );
}
