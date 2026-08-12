import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><div className="brand footer-brand"><span className="brand-mark">⚡</span><span><b>POWER A CITY</b><small>PLAYER WIKI</small></span></div><p>Independent player-made guides for {site.gameName}. Not affiliated with Roblox or Restore Power.</p></div>
        <nav aria-label="Guide links"><strong>Guides</strong><Link href="/quick-start">Quick start</Link><Link href="/core-loop">Core loop</Link><Link href="/progression">Progression</Link><Link href="/mistakes">Common mistakes</Link></nav>
        <nav aria-label="Information links"><strong>Information</strong><Link href="/faq">FAQ</Link><Link href="/sources">Sources &amp; methodology</Link><a href={site.gameUrl} rel="noreferrer">Official game page</a></nav>
      </div>
      <div className="shell footer-bottom"><span>Facts verified {site.verifiedOn}</span><span>Power a City is a search-friendly guide name for Power Your City.</span></div>
    </footer>
  );
}
