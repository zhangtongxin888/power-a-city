import Link from "next/link";

export function GuideNext({ href, eyebrow = "CONTINUE THE ROUTE", title, copy }: { href: string; eyebrow?: string; title: string; copy: string }) {
  return (
    <Link className="guide-next" href={href}>
      <span><small>{eyebrow}</small><strong>{title}</strong><p>{copy}</p></span>
      <b aria-hidden="true">→</b>
    </Link>
  );
}
