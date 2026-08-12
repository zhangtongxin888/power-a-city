import Link from "next/link";

export function PageHero({ eyebrow, title, intro, current, total = 5, actionHref, actionLabel }: { eyebrow: string; title: string; intro: string; current?: number; total?: number; actionHref?: string; actionLabel?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="shell page-hero-inner">
        <div className="page-hero-copy">
          <Link className="breadcrumb" href="/">← Beginner guide home</Link>
          <span className="eyebrow eyebrow-cyan">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          {actionHref && actionLabel ? <Link className="page-hero-action" href={actionHref}>{actionLabel} <span aria-hidden="true">↓</span></Link> : null}
        </div>
        {current ? (
          <div className="chapter-status" aria-label={`Guide ${current} of ${total}`}>
            <small>BEGINNER ROUTE</small><strong>{String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}</strong>
            <div>{Array.from({ length: total }, (_, index) => <i className={index + 1 < current ? "is-complete" : index + 1 === current ? "is-current" : ""} key={index} />)}</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
