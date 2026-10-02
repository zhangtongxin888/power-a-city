import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { otherGame, pageMetadata, safeJsonLd, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City FAQ: Codes, Stealing, Rebirth & Game Name",
  "Straight answers for Power Your City: Power Your City vs ⚡Power a City, working codes, how stealing and the base lock work, sell negotiation, rebirth and game passes.",
  "/faq",
);

type Faq = { id: string; q: string; a: string; link?: [string, string] };

const faqItems: Faq[] = [
  { id: "which-game", q: "Is Power a City the same game as Power Your City?", a: `No. Power Your City is made by the Roblox group Restore Power, and it is the game this guide covers. ${otherGame.name} is a separate Roblox tycoon made by ${otherGame.creator}. Both games are about generating power for a city, so their names get mixed up in searches and videos, but their codes, items and guides are different.`, link: ["/codes#wrong-game", "See which codes belong to which game"] },
  { id: "codes", q: "What are the working Power Your City codes?", a: "On 2 October 2026, TOTEM is the only code that three independent code trackers list as active. It is reported to give 2x Power for 5 minutes. 1MVISITS, 100KMEMBERS and UPDATE2 are disputed, and 20KLIKES and SOLARPOWER appear on only one tracker.", link: ["/codes", "Open the full code status table"] },
  { id: "redeem", q: "How do I redeem codes?", a: "Press Settings on the left side of the screen, scroll to the bottom of the Settings menu, type the code exactly and press Claim." },
  { id: "loop", q: "What is the basic gameplay loop?", a: "The official description confirms it: place generators to produce Power, place batteries to store Power, sell Power around the city for Cash, and steal Power from other players. Creator guides call the generators panels and add that you collect the Power your setup makes before you carry it out to sell.", link: ["/core-loop", "Read the full core loop"] },
  { id: "steal", q: "How does stealing Power work?", a: "Stealing is confirmed by the official description. A creator guide on YouTube (Radex Tips) reports that you walk into another player's plant, interact with one of their batteries, and carry some Power home, while moving more slowly until you get home or get caught. Exact amounts and cooldowns are not published." },
  { id: "base-lock", q: "How do I stop players stealing my Power?", a: "The same creator guide reports a green button outside your plant that locks your base for a short time. Lock it before you leave for a long sell trip. Rebirths are reported to make the lock stronger." },
  { id: "negotiate", q: "Should I negotiate when I sell Power?", a: "Usually yes, according to one creator guide: it reports a 50% chance that the buyer pays close to double, and a slightly lower payout if the negotiation fails. This is a single creator's report, not an official rule, so try it on smaller sales first." },
  { id: "rebirth", q: "What does rebirth do in Power Your City?", a: "A creator guide reports that rebirth unlocks once you have enough Cash. It resets your Power, Cash and speed, unlocks new panels and batteries, and gives permanent boosts to Cash, Power and your base lock. The exact Cash requirement is not published.", link: ["/progression#rebirth", "Plan your first rebirth"] },
  { id: "game-passes", q: "What game passes are there?", a: "The official Roblox game-pass list shows three passes on 2 October 2026: Auto Collect (299 Robux), x2 Generation Speed (599 Robux) and Faster Restock (79 Robux). None is needed to finish the beginner route." },
  { id: "best-generator", q: "What are the best generators or batteries?", a: "There is no official stat table. Creators suggest keeping panels and batteries balanced: if your batteries stay empty, buy output; if they fill and wait, add storage or sell more often. Compare the price and numbers the current shop shows." },
  { id: "offline", q: "Does Power Your City have offline progress?", a: "Not confirmed. The official icon says “ENERGY OFFLINE”, but the description does not promise offline earnings, so this guide does not either." },
  { id: "creator", q: "Who made Power Your City?", a: "The Roblox group Restore Power, which had more than 1 million members on 2 October 2026." },
  { id: "official", q: "Is this an official wiki?", a: "No. Power a City Wiki is an independent player guide. Roblox, Power Your City and Restore Power belong to their owners." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow={`FACT-CHECKED FAQ · ${site.checkedOnLabel.toUpperCase()}`} title="POWER YOUR CITY FAQ" intro="Direct answers first. Each one says whether it comes from the official Roblox page, a code tracker, or a creator guide, so you know how much to trust it." current={5} />
      <article className="article faq-list">
        {faqItems.map(({ id, q, a, link }, index) => (
          <details id={id} key={id} open={index < 2}>
            <summary>{q}</summary>
            <p>{a}</p>
            {link ? <p><Link className="text-link" href={link[0]}>{link[1]} →</Link></p> : null}
          </details>
        ))}
        <p><Link className="text-link" href="/quick-start">Return to the five-minute walkthrough →</Link></p>
        <GuideNext href="/sources" title="Next: inspect the source policy" copy="See which official pages, APIs, trackers and videos support the guide—and what we leave out." />
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
    </>
  );
}
