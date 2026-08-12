import type { Metadata } from "next";
import Link from "next/link";
import { PowerDiagram } from "@/components/power-diagram";
import { StaticImage as Image } from "@/components/static-image";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Beginner Guide",
  "Start Power Your City with a verified five-minute route: generate Power, store it, sell around the city, then improve the weakest link.",
  "/",
);

const startSteps = [
  ["01", "Generate", "Place a generator and confirm that it is producing Power."],
  ["02", "Store", "Add a battery and watch produced Power reach storage."],
  ["03", "Sell", "Use the current selling controls and confirm that Cash rises."],
  ["04", "Improve", "Upgrade the part of the loop that paused first."],
] as const;

const routeCards = [
  ["01", "Quick start", "First session", "Build one working cycle without guessing.", "/quick-start"],
  ["02", "Core loop", "Mental model", "See how Power, storage, Cash, and theft connect.", "/core-loop"],
  ["03", "Progression", "Upgrade route", "Spend against the bottleneck you can actually observe.", "/progression"],
  ["04", "Mistakes", "Recovery plan", "Diagnose seven common ways a new grid stalls.", "/mistakes"],
  ["05", "FAQ", "Verified answers", "Separate confirmed mechanics from open questions.", "/faq"],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero-stage">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero">
          <div className="hero-copy">
            <span className="status-pill"><i /> BEGINNER ROUTE · FACT-CHECKED</span>
            <p className="hero-kicker">POWER YOUR CITY PLAYER GUIDE</p>
            <h1>YOUR FIRST GRID<br /><span>STARTS HERE.</span></h1>
            <p className="hero-lede">
              Learn the one loop that powers everything in <strong>{site.gameName}</strong>:
              generate, store, sell, then fix the part that slows down first.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-hero" href="/quick-start">
                Start the 5-minute beginner guide <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-ghost" href="#first-cycle">Preview the first cycle</Link>
            </div>
            <div className="hero-proof" aria-label="What this beginner route includes">
              <span><b>01</b> One working cycle</span>
              <span><b>02</b> One clear upgrade</span>
              <span><b>03</b> Fewer early mistakes</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <Image
                src="/game/official-blackout-to-grid.png"
                alt="Official Power Your City artwork showing a dark neighborhood becoming a powered city with solar panels and batteries"
                width={767}
                height={432}
                priority
              />
              <span className="official-chip">OFFICIAL GAME ART</span>
            </div>
            <div className="mission-card">
              <div className="mission-card-head"><span>FIRST SESSION MISSION</span><strong>4 STEPS</strong></div>
              <p>Complete one generate → store → sell cycle.</p>
              <div className="mission-progress" aria-label="Four-step mission preview: step one is the starting point"><i className="is-current" /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-bar" aria-label="Guide principles">
        <div className="shell signal-grid">
          <span><b>START SMALL</b> Prove the loop first</span>
          <span><b>WATCH THE FLOW</b> Find the bottleneck</span>
          <span><b>SELL WITH PURPOSE</b> Limit idle Power</span>
          <span><b>SCALE ONE STEP</b> Learn what helped</span>
        </div>
      </section>

      <section className="section shell" id="first-cycle">
        <div className="section-heading section-heading-wide">
          <div><span className="eyebrow">YOUR FIRST WIN</span><h2>Run one clean power cycle</h2></div>
          <div className="section-intro"><span className="fact-label fact-label-strategy">OFFICIAL FACTS + GUIDE STRATEGY</span><p>Generate, store, and sell come from the official description. Improving the part that paused first is this guide’s beginner strategy. Exact prices and menu labels should be checked in the current game.</p></div>
        </div>
        <div className="step-grid">
          {startSteps.map(([number, title, copy]) => (
            <article className="step-card" key={number}>
              <div className="step-card-top"><span className="step-number">{number}</span><i aria-hidden="true" /></div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
        <PowerDiagram />
        <div className="next-action-panel">
          <div><span className="eyebrow">READY TO PLAY ALONG?</span><h3>Keep the walkthrough open for your first session.</h3></div>
          <Link className="button button-primary" href="/quick-start">Open step-by-step guide <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell feature-split">
          <div className="feature-copy feature-copy-light">
            <span className="eyebrow eyebrow-cyan">THE DECISION RULE</span>
            <h2>Upgrade the slowest link—not the flashiest object.</h2>
            <p>Watch one full cycle before buying. An empty battery may point toward production. A full battery means the next action may need attention. If the game confirms a theft event, test a different timing before buying only for output.</p>
            <div className="decision-grid">
              <div><span>BATTERY EMPTY</span><strong>Check production</strong></div>
              <div><span>BATTERY FULL</span><strong>Check the next step</strong></div>
              <div><span>THEFT EVENT</span><strong>Test different timing</strong></div>
            </div>
            <Link className="button button-electric" href="/progression">Build your upgrade route →</Link>
          </div>
          <div className="feature-image feature-image-dark">
            <Image src="/game/official-output-growth.png" alt="Official artwork comparing a low-output panel with a high-output panel" width={768} height={432} />
            <span className="art-label">OFFICIAL GAME ART · PROMOTIONAL VALUES ARE NOT A STAT TABLE</span>
          </div>
        </div>
      </section>

      <section className="section shell route-section">
        <div className="section-heading">
          <div><span className="eyebrow">STAY ON THE ROUTE</span><h2>Five guides, one learning path</h2></div>
          <p>Start with action, learn the system, then troubleshoot. Each page points naturally to the next so you never return to a dead end.</p>
        </div>
        <div className="route-grid">
          {routeCards.map(([number, title, label, copy, href], index) => (
            <Link className={`route-card${index === 0 ? " route-card-featured" : ""}`} href={href} key={href}>
              <span className="route-number">{number}</span>
              <small>{label}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>{index === 0 ? "Start here" : "Continue"} <span aria-hidden="true">→</span></b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-warning">
        <div className="shell warning-grid">
          <div><span className="eyebrow">BEFORE YOU SCALE</span><h2>Three early traps to avoid</h2></div>
          <ol>
            <li><span>01</span><p><strong>Expanding before your first sale</strong> makes every later problem harder to diagnose.</p></li>
            <li><span>02</span><p><strong>Buying the wrong side of the loop</strong> adds capacity where you do not need it.</p></li>
            <li><span>03</span><p><strong>Trusting undated stats</strong> turns old prices and promotional numbers into bad decisions.</p></li>
          </ol>
          <Link className="button button-dark" href="/mistakes">See all seven mistakes →</Link>
        </div>
      </section>

      <section className="section shell source-promise">
        <div><span className="fact-label fact-label-confirmed">OFFICIAL FACT</span><h3>Generators, batteries, city sales, and stealing are publicly confirmed.</h3></div>
        <div><span className="fact-label fact-label-strategy">GUIDE STRATEGY</span><h3>Bottleneck checks and shorter cycles are practical recommendations.</h3></div>
        <div><span className="fact-label fact-label-unknown">NOT CLAIMED</span><h3>We do not invent prices, tiers, theft rules, or offline caps.</h3></div>
        <Link className="text-link" href="/sources">Read the source policy →</Link>
      </section>
    </>
  );
}
