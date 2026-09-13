# AdminKit v4 Free SPIKE notes

## Goal

Replace Webpack + Babel polyfill + hand-maintained Free HTML with:

| Layer | Choice |
|-------|--------|
| Bundler | **Vite** (SCSS + JS) |
| Pages | **Eleventy 3 + Nunjucks** |
| Charts | **Chart.js 4** (`chart.js/auto`) |
| jQuery | **None** |

## Structure highlights

- `src/data/edition.json` → `{ "edition": "free" }` so templates can branch later.
- `src/data/nav-free.json` drives `partials/sidebar.njk`. **Pro will add `nav-pro.json`** (and likely `edition: "pro"`) without forking the layout.
- Free SCSS copied from 3.5.0; Webpack `~package` imports rewritten for Vite (`bootstrap/...`, `jsvectormap/...`, etc.).
- `src/js/modules/chartjs.js` uses Chart.js 4 defaults API:

```js
Chart.defaults.color = ...
Chart.defaults.font.family = ...
// NOT Chart.defaults.global
```

## Build pipeline

1. `vite build` → `dist/js/app.js` + `dist/css/app.css` (+ copies `public/`)
2. `eleventy` → HTML into `dist/` (passthrough `public/` again; does not empty Vite assets)

`npm run build` cleans `dist/`, then assets, then pages.

## Pages status

| Page | Status |
|------|--------|
| index, pages-blank, pages-profile, charts-chartjs, ui-buttons | Ported (charts scripts Chart.js 4) |
| pages-sign-in, pages-sign-up | Ported on chrome-less `layouts/auth.njk` |
| ui-forms, ui-cards, ui-typography | Ported from Free 3.5 static HTML |
| maps-google | Ported; keeps Free `initMaps` + Maps JS API `callback=` |
| icons-feather | Ported **subset** (50 of 262 Feather icons) |

## Pro follow-ups

- Same Vite entry + SCSS core; swap/add `nav-pro.json`.
- Dark / compact sidebar stay Pro-only (not in this Free spike).
- Drop Metalsmith/Handlebars builder; one 11ty pipeline for Free+Pro.
- Replace DataTables/jQuery path in Pro (honesty vs marketing).

## Sources

Fetched from `cdn.jsdelivr.net/gh/adminkit/adminkit@master/...` (Free 3.5.0). Vendor snapshots under `_vendor-free/` for reference only (not part of the app build input beyond what was copied into `src/`).
