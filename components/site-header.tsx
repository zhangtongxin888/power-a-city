"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  ["Quick start", "/quick-start"],
  ["Core loop", "/core-loop"],
  ["Progression", "/progression"],
  ["Mistakes", "/mistakes"],
  ["FAQ", "/faq"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="shell header-row">
        <Link className="brand" href="/" aria-label="Power a City Wiki home">
          <span className="brand-mark" aria-hidden="true">⚡</span>
          <span><b>POWER A CITY</b><small>BEGINNER FIELD GUIDE</small></span>
        </Link>
        <nav aria-label="Primary navigation">{navigation.map(([label, href]) => <Link aria-current={pathname === href ? "page" : undefined} href={href} key={href}>{label}</Link>)}</nav>
        <Link className="header-start" href="/quick-start"><span>START HERE</span><b>Beginner guide →</b></Link>
      </div>
    </header>
  );
}
