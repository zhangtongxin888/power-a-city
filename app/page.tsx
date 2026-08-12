import type { Metadata } from "next";
import Link from "next/link";
import { StaticImage as Image } from "@/components/static-image";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Power Your City Beginner Guide: Your First 5 Minutes",
  "New to Power Your City? Follow a fact-checked first-session route to generate Power, store it, make a city sale, and choose your next upgrade.",
  "/",
);

const firstShift = [
  ["01", "Generator online", "Place one generator and confirm that Power is being produced."],
  ["02", "Storage connected", "Add a battery and watch produced Power reach storage."],
  ["03", "First sale complete", "Use the current city selling controls and confirm that Cash rises."],
  ["04", "Next move chosen", "Observe where the cycle paused, then change only that part."],
] as const;

const diagnostics = [
  ["Battery stays empty", "Check whether generation is keeping the first half of the loop supplied.", "Inspect production"],
  ["Battery fills and waits", "The next step may need attention. Test the current selling action before adding output.", "Inspect the sale"],
  ["Cash barely changes", "Watch one complete cycle before blaming a single machine or buying at random.", "Trace the full loop"],
  ["A theft event appears", "Stealing Power is confirmed; its exact rules are not public. Use current game feedback.", "Test different timing"],
] as const;

const routeCards = [
  ["FIRST SHIFT", "Quick start", "Run the complete beginner route in order.", "/quick-start"],
  ["SYSTEM MAP", "Core loop", "Understand how the confirmed actions connect.", "/core-loop"],
  ["GRID EXPANSION", "Progression", "Improve the link that is visibly slowing you down.", "/progression"],
  ["FAULT LOG", "Common mistakes", "Recover from seven early setup problems.", "/mistakes"],
] as const;

const faqPreview = [
  ["What is the official game name?", "Power Your City. “Power a City” is the guide domain and a natural search phrase."],
  ["Can players steal Power?", "Yes. The official description confirms stealing, but does not publish the exact conditions."],
  ["What is the best generator?", "No complete official public stat table was found. Compare the current in-game options."],
] as const;

export default function Home() {
  return (
    <>
      <section className="control-hero">
        <div className="city-lines" aria-hidden="true" />
        <div className="shell control-hero-grid">
          <div className="hero-command">
            <div className="control-label"><span className="pulse-dot" /> GRID CONTROL // FIRST SHIFT</div>
            <p className="hero-overline">POWER YOUR CITY BEGINNER FIELD GUIDE</p>
            <h1>New here?<br /><span>Power one city block first.</span></h1>
            <p className="hero-answer">
              Your next move is simple: build one small <strong>generate → store → sell</strong> cycle,
              confirm that it works, then improve the part that slowed down.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary button-hero" href="/quick-start">
                Start the 5-minute beginner guide <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-wire" href="/core-loop">See the gameplay loop</Link>
            </div>
            <p className="hero-source-note"><span>FACT CHECK</span> Core actions verified from the official experience description on {site.verifiedOn}.</p>
          </div>

          <div className="shift-console" aria-label="First-session mission preview">
            <div className="console-topline"><span>SUBSTATION 01</span><strong>FIRST-SESSION PLAN</strong><i>READY</i></div>
            <div className="console-feed">
              <Image
                src="/game/official-blackout-to-grid.png"
                alt="Official Power Your City artwork showing a dark neighborhood becoming a powered city with solar panels and batteries"
                width={767}
                height={432}
                priority
              />
              <span>OFFICIAL GAME ART · VISUAL REFERENCE</span>
            </div>
            <ol className="console-checklist">
              {firstShift.map(([number, title]) => <li key={number}><b>{number}</b><span>{title}</span><i aria-hidden="true" /></li>)}
            </ol>
            <div className="console-status"><span>CURRENT OBJECTIVE</span><strong>Bring the first generator online</strong></div>
          </div>
        </div>
      </section>

      <section className="verified-strip" aria-label="Verified game actions">
        <div className="shell verified-grid">
          <span><b>01</b><i>GENERATE</i><small>Generators produce Power</small></span>
          <span><b>02</b><i>STORE</i><small>Batteries store Power</small></span>
          <span><b>03</b><i>SELL</i><small>City sales earn Cash</small></span>
          <span><b>04</b><i>WATCH</i><small>Players can steal Power</small></span>
        </div>
      </section>

      <section className="section shell" id="first-cycle">
        <div className="section-heading section-heading-wide">
          <div><span className="eyebrow">FIRST SHIFT // 00:05</span><h2>Complete one working circuit</h2></div>
          <p className="section-summary">Do these four things before chasing size. The first three are confirmed public mechanics; the fourth is a beginner strategy for making safer upgrade decisions.</p>
        </div>
        <div className="circuit-board">
          {firstShift.map(([number, title, copy], index) => (
            <article className="circuit-node" key={number}>
              <div><span>{number}</span><i className={index === 0 ? "node-live" : ""} aria-hidden="true" /></div>
              <small>{index < 3 ? "CONFIRMED ACTION" : "GUIDE STRATEGY"}</small>
              <h3>{title}</h3><p>{copy}</p>
              {index < firstShift.length - 1 ? <b className="feeder-line" aria-hidden="true">→</b> : null}
            </article>
          ))}
        </div>
        <div className="dispatch-bar">
          <span><small>NEXT DISPATCH</small><strong>Keep this checklist open beside your first session.</strong></span>
          <Link className="button button-primary" href="/quick-start">Open the step-by-step route →</Link>
        </div>
      </section>

      <section className="section fault-section">
        <div className="shell">
          <div className="section-heading fault-heading">
            <div><span className="eyebrow eyebrow-amber">LIVE DIAGNOSTICS</span><h2>Read the symptom before you upgrade</h2></div>
            <p>There is no need to guess at a tier list. Watch one cycle, find the point where flow slows or stops, then test one change.</p>
          </div>
          <div className="diagnostic-grid">
            {diagnostics.map(([symptom, check, action], index) => (
              <article key={symptom}>
                <div className="diagnostic-code"><span>FAULT 0{index + 1}</span><i>{index === 3 ? "MULTIPLAYER" : "FLOW"}</i></div>
                <h3>{symptom}</h3><p>{check}</p><strong>{action} <span aria-hidden="true">↗</span></strong>
              </article>
            ))}
          </div>
          <div className="fault-action"><p><b>Still stuck?</b> The fault log walks through seven common beginner mistakes and the cleanest reset.</p><Link href="/mistakes">Open the fault log →</Link></div>
        </div>
      </section>

      <section className="section shell progression-home">
        <div className="section-heading">
          <div><span className="eyebrow">GRID EXPANSION PLAN</span><h2>Scale in three controlled stages</h2></div>
          <p>Progress is easier to understand when each purchase solves a visible problem instead of adding more moving parts.</p>
        </div>
        <div className="expansion-map">
          <article><span>STAGE 01</span><b>PROVE</b><h3>One full cycle works</h3><p>Confirm generation, storage, and one city sale.</p></article>
          <article><span>STAGE 02</span><b>OBSERVE</b><h3>One constraint is visible</h3><p>Watch the flow before spending the next Cash.</p></article>
          <article><span>STAGE 03</span><b>IMPROVE</b><h3>One variable changes</h3><p>Test the result, then repeat with better information.</p></article>
        </div>
        <div className="progression-visual">
          <Image src="/game/official-output-growth.png" alt="Official Power Your City artwork comparing lower and higher power output" width={768} height={432} />
          <div><span className="fact-label fact-label-strategy">GUIDE STRATEGY</span><h3>Upgrade the slowest link, not the flashiest object.</h3><p>Official artwork shows growth as a theme, but its displayed values are promotional—not a guaranteed stat table.</p><Link className="text-link" href="/progression">Build your progression route →</Link></div>
        </div>
      </section>

      <section className="section route-home">
        <div className="shell">
          <div className="section-heading route-heading">
            <div><span className="eyebrow eyebrow-cyan">CONTROL ROOM INDEX</span><h2>Choose the guide for your next decision</h2></div>
            <p>Every page ends with a natural next step, so you can move from first session to troubleshooting without hitting a dead end.</p>
          </div>
          <div className="route-grid">
            {routeCards.map(([label, title, copy, href], index) => (
              <Link className={index === 0 ? "route-card route-card-featured" : "route-card"} href={href} key={href}>
                <span>{label}</span><small>0{index + 1}</small><h3>{title}</h3><p>{copy}</p><b>{index === 0 ? "Start here" : "Open guide"} →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell faq-home">
        <div className="section-heading">
          <div><span className="eyebrow">QUICK ANSWERS</span><h2>Know what is confirmed</h2></div>
          <Link className="text-link" href="/faq">Read every fact-checked answer →</Link>
        </div>
        <div className="faq-preview-grid">
          {faqPreview.map(([question, answer]) => <article key={question}><span>Q</span><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </section>

      <section className="source-deck">
        <div className="shell source-deck-grid">
          <div><span className="fact-label fact-label-confirmed">CONFIRMED</span><h3>Official public description</h3><p>Generator, battery, city sale, Cash, and stealing claims.</p></div>
          <div><span className="fact-label fact-label-strategy">STRATEGY</span><h3>Practical beginner advice</h3><p>Short cycles, bottleneck checks, and one-change testing.</p></div>
          <div><span className="fact-label fact-label-unknown">CHECK IN GAME</span><h3>Changing or undocumented</h3><p>Prices, tiers, codes, theft conditions, and offline rules.</p></div>
          <Link href="/sources">Inspect every source and claim →</Link>
        </div>
      </section>
    </>
  );
}
