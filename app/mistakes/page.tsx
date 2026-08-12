import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Common Mistakes",
  "Avoid common Power Your City beginner mistakes: scaling too early, ignoring storage, assuming theft rules, and trusting unverified stats.",
  "/mistakes",
);

const mistakes = [
  ["Scaling before the first sale", "You cannot diagnose a larger grid if you have not seen one complete generate-store-sell cycle."],
  ["Buying storage for a production problem", "Empty capacity does not create Power. Observe the battery before assuming capacity is the answer."],
  ["Buying output for a storage problem", "More generation is not automatically useful when stored Power cannot move through the rest of the loop."],
  ["Assuming theft rules", "Players can steal Power, but the public description does not say what is targeted or how stealing works. Use current game feedback rather than a hidden formula."],
  ["Treating promotional numbers as guaranteed", "Official artwork uses dramatic wattage and income figures. These are not a published rate table."],
  ["Following old prices blindly", "Prices, item availability, and interface labels can change. Confirm them in the current game."],
  ["Assuming Power a City is the official title", "The official title is Power Your City. Power a City is the guide domain and common search phrasing."],
] as const;

export default function MistakesPage() {
  return (
    <>
      <PageHero eyebrow="BEGINNER SAFETY NET" title="SEVEN MISTAKES THAT SLOW THE GRID" intro="Most early problems come from losing sight of the chain. These fixes rely on observed behavior and confirmed public mechanics, not secret formulas." current={4} />
      <article className="article">
        <ol className="flow-list">{mistakes.map(([title, copy]) => <li key={title}><strong>{title}</strong><br />{copy}</li>)}</ol>
        <div className="callout"><strong>Simple recovery</strong><p>Return to one small cycle. Confirm generation, confirm storage, complete a sale, note any theft, and then change one variable.</p></div>
        <p><Link className="text-link" href="/quick-start">Restart with the five-minute walkthrough →</Link></p>
        <GuideNext href="/faq" title="Next: check the fact-first FAQ" copy="See which mechanics are confirmed, inferred, or still undocumented." />
      </article>
    </>
  );
}
