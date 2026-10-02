// Rendered-HTML SEO audit for every declared route (run after `npm run build`).
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const domain = "https://power-a-city.wiki";
const siteSource = await readFile(new URL("lib/site.ts", root), "utf8");
const routes = [...(siteSource.match(/export const routes = \[([\s\S]*?)\] as const;/)?.[1] ?? "").matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]);
const assets = { async fetch(input) { const url = new URL(input instanceof Request ? input.url : input); try { return new Response(await readFile(new URL(`public${url.pathname}`, root)), { status: 200 }); } catch { return new Response("Not found", { status: 404 }); } } };
const workerUrl = new URL("dist/server/index.js", root); workerUrl.searchParams.set("audit", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const ctx = { waitUntil() {}, passThroughOnException() {} };
const sitemap = await readFile(new URL("public/sitemap.xml", root), "utf8");
const robots = await readFile(new URL("public/robots.txt", root), "utf8");
assert.match(robots, new RegExp(`Sitemap: ${domain}/sitemap.xml`));

const decode = (v) => v.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const titles = new Map(); const descriptions = new Map(); const rows = []; const internalLinks = new Set();
for (const route of routes) {
  const res = await worker.fetch(new Request(`${domain}${route}`, { headers: { accept: "text/html" } }), { ASSETS: assets }, ctx);
  assert.equal(res.status, 200, `${route} status`);
  const html = await res.text();
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  assert.ok(title && title.length <= 65, `${route} title length ${title.length}: ${title}`);
  assert.ok(description.length >= 90 && description.length <= 170, `${route} description length ${description.length}`);
  assert.ok([`${domain}${route}`, route === "/" ? domain : null].includes(canonical), `${route} canonical ${canonical}`);
  assert.equal(h1s.length, 1, `${route} must have exactly one h1`);
  assert.match(html, /<meta property="og:title"/); assert.match(html, /<meta name="twitter:card" content="summary_large_image"/);
  for (const block of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(block[1]);
  if (route === "/") assert.match(title, /Power a City Wiki/i, "homepage owns the wiki query");
  else assert.doesNotMatch(title, /wiki/i, `${route} title must not claim the wiki query`);
  assert.ok(!titles.has(title), `duplicate title ${title}`); titles.set(title, route);
  assert.ok(!descriptions.has(description), `duplicate description on ${route}`); descriptions.set(description, route);
  assert.match(sitemap, new RegExp(`<loc>${domain}${route}</loc><lastmod>2026-10-02</lastmod>`), `${route} sitemap lastmod`);
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) if (!/^\/(_|assets|game|favicon|manifest|og)/.test(m[1])) internalLinks.add(m[1]);
  rows.push({ route, status: res.status, title, titleLength: title.length, descriptionLength: description.length, canonical, h1: h1s.length });
}
for (const link of internalLinks) assert.ok(routes.includes(link), `internal link to unknown route ${link}`);
console.log(JSON.stringify({ audited: rows.length, internalLinks: [...internalLinks].sort(), rows }, null, 2));
console.log(`SEO audit passed for ${rows.length} routes.`);
