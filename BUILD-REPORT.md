# AdminKit Free v4 SPIKE — BUILD REPORT

Date: 2026-09-13  
Path: `/workspace/adminkit-v4/spike`

## Result: SUCCESS

| Command | Exit code |
|---------|-----------|
| `npm install` | **0** |
| `npm run build` | **0** |
| `npm run pages:free` | **0** |

## What worked

- **Vite 6** bundles `src/js/app.js` + full Free SCSS → `dist/js/app.js` + `dist/css/app.css`
- **Eleventy 3 + Nunjucks** emits 12 HTML pages into `dist/`
- **Chart.js 4** module uses `Chart.defaults.color` / `Chart.defaults.font` (no `Chart.defaults.global`)
- Chart page + dashboard inline demos adapted to v4 `plugins` / `scales.x|y` / `cutout` API
- **Sidebar** rendered from `src/data/nav-free.json` (alias `navFree` for Nunjucks)
- `src/data/edition.json` → `{ "edition": "free" }` shown in title/footer
- Free **SCSS tree** and **JS modules** fetched from jsDelivr (`adminkit/adminkit@master` = 3.5.0), not git-cloned
- Webpack `~bootstrap` / `~jsvectormap` / `~simplebar` / `~flatpickr` imports rewritten for Vite
- `public/img/**` copied into `dist/img/**`
- Zero jQuery; no Babel polyfill; no Webpack

## Stubbed / incomplete

Marked with warning banners + `stub` badge in nav:

- `pages-sign-in`, `pages-sign-up`
- `ui-forms`, `ui-cards`, `ui-typography`
- `icons-feather` (large gallery not ported)
- `maps-google` (vector-maps **module** is bundled; Google Maps page stubbed)

Navbar alerts/messages dropdowns are simplified vs Free static HTML.

`_vendor-free/` holds downloaded Free reference HTML/SCSS/JS (not a runtime dependency beyond what was copied into `src/`).

## Exact npm commands

```bash
cd /workspace/adminkit-v4/spike
npm install          # exit 0
npm run build        # exit 0 → clean dist, vite assets, eleventy pages
npm run pages:free   # exit 0 → 11ty only
npm run dev          # eleventy --serve :8080 + vite build --watch
```

## Key output paths

- `dist/index.html` (+ 11 other HTML files)
- `dist/css/app.css` (~242 kB)
- `dist/js/app.js` (~648 kB, includes Chart.js + world map data)
- `dist/img/**`

## Key source paths

- `src/js/modules/chartjs.js` — Chart.js 4 defaults
- `src/data/nav-free.json` — Free nav (Pro → `nav-pro.json` later)
- `src/layouts/base.njk`, `src/partials/sidebar.njk`
- `vite.config.js`, `eleventy.config.js`, `package.json`

## Blockers / notes

- None for green build.
- Sass prints Bootstrap deprecation noise (silenced in Vite via `silenceDeprecations`).
- `js/app.js` chunk large due to inlined `world.js` map data — acceptable for SPIKE; code-split later.
- `npm run dev` needs an initial asset build (script runs `build:assets` first).
- No git init / no publish (per constraints).

## Pro note

Same layout/pipeline; add `src/data/nav-pro.json` + `edition: "pro"` and expand page set — documented in `docs/v4-spike.md`.
