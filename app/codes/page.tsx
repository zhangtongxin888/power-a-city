import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GuideNext } from "@/components/guide-next";
import { otherGame, pageMetadata, safeJsonLd, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Codes (October 2026): TOTEM & Every Code Status",
  "Power Your City codes checked 2 Oct 2026: TOTEM (2x Power, 5 min) is reported working by three trackers. See which codes are disputed or from ⚡Power a City.",
  "/codes",
);

type CodeRow = { code: string; reward: string; status: "working" | "disputed" | "unverified"; label: string; evidence: string };

const codes: CodeRow[] = [
  { code: "TOTEM", reward: "2x Power for 5 minutes", status: "working", label: "Reported working · 3 sources", evidence: "Listed active by Destructoid (updated 1 Sep 2026), Dexerto (3 Sep 2026) and the RoCodes tracker (page checked 2 Oct 2026). Not announced on an official page we can read." },
  { code: "1MVISITS", reward: "2x Power for 5 minutes", status: "disputed", label: "Disputed · probably expired", evidence: "Destructoid and Dexerto moved it to expired; RoCodes, Dexerto France and Critical Hits still list it." },
  { code: "100KMEMBERS", reward: "2x Cash for 5 minutes", status: "disputed", label: "Disputed · probably expired", evidence: "Destructoid and Dexerto list it as expired; RoCodes, Dexerto France and Critical Hits still list it." },
  { code: "UPDATE2", reward: "100 Gems (one tracker)", status: "disputed", label: "Disputed", evidence: "Dexerto lists it as expired; RoCodes still lists it as active." },
  { code: "20KLIKES", reward: "2x Cash for 5 minutes (one tracker)", status: "unverified", label: "Unverified · 1 source", evidence: "Only RoCodes lists it (added 28 Aug 2026). No second source found." },
  { code: "SOLARPOWER", reward: "Wheel spin (one tracker)", status: "unverified", label: "Unverified · 1 source", evidence: "Only RoCodes lists it (added 28 Aug 2026). No second source found." },
];

const wrongGameCodes = ["CITY13", "6DOCKS", "2MVISITS", "67BLACK67", "RELEASE"];

const faqItems = [
  ["What are the working Power Your City codes?", "As of 2 October 2026, TOTEM is the only code that three independent code trackers list as active. It is reported to give 2x Power for 5 minutes. Other codes are disputed or listed by a single tracker."],
  ["How do I redeem codes in Power Your City?", "Open Power Your City, press the Settings button on the left side of the screen, scroll to the bottom of the Settings menu, type the code exactly, and press Claim."],
  ["Why is CITY13 not working in Power Your City?", "CITY13 is reported for a different Roblox game, ⚡Power a City by Vivat's Workers. Codes from one game do not belong to the other."],
] as const;

const jsonLd = [
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Power a City Wiki", item: `${site.domain}/` },
    { "@type": "ListItem", position: 2, name: "Power Your City Codes", item: `${site.domain}/codes` },
  ] },
];

export default function CodesPage() {
  return (
    <>
      <PageHero eyebrow={`CODE STATUS · CHECKED ${site.checkedOnLabel.toUpperCase()}`} title="POWER YOUR CITY CODES" intro="Short answer: try TOTEM first. It is the only Power Your City code that three independent trackers list as active, and it is reported to give 2x Power for 5 minutes." actionHref="#code-table" actionLabel="See every code status" />
      <article className="article">
        <div className="callout"><strong>Reported working right now: TOTEM</strong><p><code>TOTEM</code> → 2x Power for 5 minutes. Codes are case-sensitive in most Roblox games, so type it in capitals. Redeem it while your generators are running and your batteries have room, so the boost is not wasted.</p></div>

        <h2 id="code-table">All Power Your City codes and their status</h2>
        <p>We only call a code “working” when at least three independent sources list it as active. Everything else keeps its real status so you can decide whether it is worth a try.</p>
        <div className="table-wrap">
          <table className="code-table">
            <thead><tr><th scope="col">Code</th><th scope="col">Reported reward</th><th scope="col">Status</th><th scope="col">Evidence</th></tr></thead>
            <tbody>
              {codes.map((row) => (
                <tr key={row.code}>
                  <th scope="row"><code>{row.code}</code></th>
                  <td>{row.reward}</td>
                  <td><span className={`code-status code-status-${row.status}`}>{row.label}</span></td>
                  <td>{row.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">Checked {site.checkedOnLabel}. Reward names come from the code trackers, not from an official Restore Power announcement.</p>

        <h2 id="redeem">How to redeem codes in Power Your City</h2>
        <ol className="flow-list">
          <li><strong>Open Power Your City by Restore Power</strong> and wait until your plant and the left-side buttons load.</li>
          <li><strong>Press Settings</strong> on the left side of the screen.</li>
          <li><strong>Scroll to the bottom</strong> of the Settings menu to find the code box.</li>
          <li><strong>Type the code exactly</strong>, with no spaces before or after it.</li>
          <li><strong>Press Claim.</strong> A timed boost should start right away.</li>
        </ol>
        <p>Destructoid, Dexerto, RoCodes and Critical Hits all describe this same Settings → bottom of menu → Claim path.</p>

        <h2 id="wrong-game">Codes that belong to ⚡Power a City, not Power Your City</h2>
        <p>{otherGame.name} by {otherGame.creator} is a separate Roblox tycoon with a very similar name. These codes are reported for that game. They are not Power Your City codes: {wrongGameCodes.map((code, index) => <span key={code}><code>{code}</code>{index < wrongGameCodes.length - 1 ? ", " : "."}</span>)}</p>
        <div className="callout callout-yellow"><strong>Quick check: which game are you in?</strong><p>Power Your City puts Settings on the <b>left</b> and uses a Claim button. Code guides for {otherGame.name} describe Settings in the <b>top-right</b> and pressing Enter. If your screen looks like the second one, you are in the other game. See the <Link href="/faq#which-game">game-name answer</Link>.</p></div>

        <h2 id="best-use">When to use 2x Power and 2x Cash boosts</h2>
        <ul className="check-list">
          <li><strong>2x Power (TOTEM):</strong> use it when your batteries are mostly empty and your panels are running. The boost makes your generators produce faster, so it is wasted if your storage is already full.</li>
          <li><strong>2x Cash (if a cash code works for you):</strong> fill your batteries first, then start the boost and sell. The boost raises the Cash you get from selling stored Power.</li>
          <li><strong>Do not start a boost and then go shopping.</strong> The timer keeps running. Have your next sale or production run ready first.</li>
        </ul>
        <p>These tips are our strategy, based on how Dexerto and Critical Hits describe the boosts. Exact boost stacking rules are not published.</p>

        <h2 id="not-working">Code not working? Check these four things</h2>
        <ol className="flow-list">
          <li><strong>Wrong game:</strong> CITY13, 6DOCKS and 2MVISITS belong to {otherGame.name}.</li>
          <li><strong>Already used:</strong> trackers report that each code works once per account.</li>
          <li><strong>Expired:</strong> codes named after milestones (1MVISITS, 100KMEMBERS) often stop when a new update arrives.</li>
          <li><strong>Old server:</strong> leave and rejoin a fresh server after an update, then try again.</li>
        </ol>

        <h2 id="new-codes">Where new codes come from</h2>
        <p>Past code names match player milestones: 1MVISITS, 100KMEMBERS and 20KLIKES. The game now has more than 18.7 million visits, and the Restore Power group has more than 1 million members (official Roblox APIs, {site.checkedOnLabel}). That pattern suggests new codes arrive with updates or milestones, but nothing official confirms a schedule. Code sites say new codes are posted in the game’s Discord first.</p>
        <p><Link className="text-link" href="/quick-start">New player? Use your boost on the five-minute starter route →</Link></p>
        <GuideNext href="/quick-start" title="Next: run your first power cycle" copy="Place a panel, add a battery, collect and sell before you spend a boost." />
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
    </>
  );
}
