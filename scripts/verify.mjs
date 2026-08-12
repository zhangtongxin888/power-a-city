import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
await access(new URL("dist/server/index.js", root));

const siteSource = await readFile(new URL("lib/site.ts", root), "utf8");
const routeBlock = siteSource.match(/export const routes = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
const routes = [...routeBlock.matchAll(/"(\/[^"]*)"/g)].map((match) => match[1]);
const domain = "https://power-a-city.wiki";

const contentTypes = { ".png": "image/png", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8", ".webmanifest": "application/manifest+json; charset=utf-8" };
const assetBinding = { async fetch(input) { const request = input instanceof Request ? input : new Request(input); const url = new URL(request.url); try { const body = await readFile(new URL(`public${url.pathname}`, root)); const extension = url.pathname.slice(url.pathname.lastIndexOf(".")); return new Response(body, { status: 200, headers: { "Content-Type": contentTypes[extension] ?? "application/octet-stream" } }); } catch { return new Response("Not found", { status: 404 }); } } };
const env = { ASSETS: assetBinding };
const ctx = { waitUntil() {}, passThroughOnException() {} };
const workerUrl = new URL("dist/server/index.js", root); workerUrl.searchParams.set("verify", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const canonical = `${domain}${route}`;
  const response = await worker.fetch(new Request(canonical, { headers: { accept: "text/html" } }), env, ctx);
  assert.equal(response.status, 200, `${route} must render`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'self'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  const html = await response.text();
  assert.match(html, /Power Your City/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  const acceptedCanonicals = route === "/" ? [domain, `${domain}/`] : [canonical];
  assert.ok(acceptedCanonicals.some((value) => html.includes(`rel="canonical" href="${value}"`) || html.includes(`href="${value}" rel="canonical"`)), `${route} canonical`);
}

for (const [path, expected] of Object.entries({ "/robots.txt": /^text\/plain;\s*charset=utf-8$/i, "/sitemap.xml": /^application\/xml;\s*charset=utf-8$/i, "/manifest.webmanifest": /^application\/manifest\+json;\s*charset=utf-8$/i })) {
  const response = await worker.fetch(new Request(`${domain}${path}`), env, ctx);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", expected);
}

const redirect = await worker.fetch(new Request("http://www.power-a-city.wiki/faq?from=www"), env, ctx);
assert.equal(redirect.status, 308);
assert.equal(redirect.headers.get("location"), "https://power-a-city.wiki/faq?from=www");
console.log(`Verified ${routes.length} routes, canonicals, SEO assets, security headers, and www redirect.`);
