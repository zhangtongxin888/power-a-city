# Power a City Wiki

An independent beginner guide for Roblox **Power Your City**, prepared for
<https://power-a-city.wiki>.

This repository is the only long-term source for the site:
<https://github.com/zhangtongxin888/power-a-city>.

## Content

- `/` — beginner-first homepage
- `/quick-start` — first-session walkthrough
- `/core-loop` — generate, store, sell, reinvest
- `/progression` — upgrade priorities and session goals
- `/mistakes` — common beginner mistakes
- `/faq` — verified answers and carefully labelled unknowns
- `/sources` — official-source and editorial methodology

All game-specific claims are based on the official Roblox experience page and
official experience media. Strategy advice is clearly separated from official
facts.

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run test
npm run build
npm run verify
npm run build:vercel
```

The project is ready for either Vercel (`vercel.json`) or Cloudflare Workers
(`wrangler.deploy.jsonc`). Sites is used only as a private design workspace;
formal hosting and the custom domain stay on Vercel or Cloudflare.

Do not commit `.env*`, `.vercel/`, `.wrangler/`, `node_modules/`, `.next/`,
`.vinext/`, or `dist/`.
