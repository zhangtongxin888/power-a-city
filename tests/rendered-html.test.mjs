import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const pages = ["app/page.tsx", "app/quick-start/page.tsx", "app/core-loop/page.tsx", "app/progression/page.tsx", "app/mistakes/page.tsx", "app/faq/page.tsx", "app/sources/page.tsx"];

test("declares complete beginner guide routes and sitemap", async () => {
  const [site, sitemap] = await Promise.all([readFile(new URL("lib/site.ts", root), "utf8"), readFile(new URL("public/sitemap.xml", root), "utf8")]);
  const routeBlock = site.match(/export const routes = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
  const routes = [...routeBlock.matchAll(/"(\/[^"]*)"/g)].map((match) => match[1]);
  assert.deepEqual(routes, ["/", "/quick-start", "/core-loop", "/progression", "/mistakes", "/faq", "/sources"]);
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(urls, routes.map((route) => `https://power-a-city.wiki${route}`));
  await Promise.all(pages.map((page) => access(new URL(page, root))));
});

test("uses verified official identity and careful claims", async () => {
  const content = await Promise.all(pages.map((page) => readFile(new URL(page, root), "utf8")));
  const joined = content.join("\n");
  assert.match(joined, /Generators produce Power/);
  assert.match(joined, /batteries store Power/i);
  assert.match(joined, /steal Power/i);
  assert.match(joined, /Power Your City/);
  assert.doesNotMatch(joined, /best generator is|rebirth|prestige/i);
  assert.doesNotMatch(joined, /100KMEMBERS|stored Power (?:is|can be) stolen|offline earnings (?:exist|are confirmed)/i);
  assert.match(joined, /OFFICIAL FACTS \+ GUIDE STRATEGY/);
  assert.match(joined, /guide strategy/i);
  const site = await readFile(new URL("lib/site.ts", root), "utf8");
  for (const fact of ["81549698024226", "10297836599", "Restore Power", "2026-08-12"]) assert.match(site, new RegExp(fact));
});

test("keeps the beginner route continuous and tutorial-first", async () => {
  const home = await readFile(new URL("app/page.tsx", root), "utf8");
  assert.match(home, /button button-primary button-hero" href="\/quick-start"/);
  assert.doesNotMatch(home, /site\.gameUrl|roblox\.com/, "home must keep external play links away from the beginner-first path");
  const nextRoute = [
    ["app/quick-start/page.tsx", "/core-loop"],
    ["app/core-loop/page.tsx", "/progression"],
    ["app/progression/page.tsx", "/mistakes"],
    ["app/mistakes/page.tsx", "/faq"],
    ["app/faq/page.tsx", "/sources"],
    ["app/sources/page.tsx", "/quick-start"],
  ];
  for (const [page, href] of nextRoute) {
    const source = await readFile(new URL(page, root), "utf8");
    assert.match(source, new RegExp(`<GuideNext href="${href}"`));
  }
});

test("keeps the independent Sites design project without credentials", async () => {
  const hosting = JSON.parse(await readFile(new URL(".openai/hosting.json", root), "utf8"));
  assert.equal(hosting.project_id, "appgprj_6a7c38804784819195bf2aaa16546dcf");
  assert.deepEqual(Object.keys(hosting).sort(), ["d1", "project_id", "r2"]);
  assert.equal(hosting.d1, null);
  assert.equal(hosting.r2, null);
});

test("starter UI is removed and SEO assets exist", async () => {
  const [page, layout, packageJson] = await Promise.all([readFile(new URL("app/page.tsx", root), "utf8"), readFile(new URL("app/layout.tsx", root), "utf8"), readFile(new URL("package.json", root), "utf8")]);
  assert.doesNotMatch(page + layout, /SkeletonPreview|codex-preview|Starter Project/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  for (const asset of ["public/robots.txt", "public/sitemap.xml", "public/manifest.webmanifest", "public/og.png", "public/game/official-icon.png"]) await access(new URL(asset, root));
});

test("social image dimensions and sources are explicit", async () => {
  const image = await readFile(new URL("public/og.png", root));
  assert.equal(image.readUInt32BE(16), 1200);
  assert.equal(image.readUInt32BE(20), 630);
  const sourcePage = await readFile(new URL("app/sources/page.tsx", root), "utf8");
  for (const name of ["blackout-to-grid", "connect-power", "output-growth", "income-scale", "equipment-scale", "icon"]) assert.match(sourcePage, new RegExp(`official-${name}\\.png`));
});
