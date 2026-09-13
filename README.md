# AdminKit Free v4 toolchain SPIKE

Prove **Vite + Eleventy (11ty) + Nunjucks** for AdminKit Free without Webpack/Babel polyfill.

- Chart.js **4** (`Chart.defaults.*`, not `Chart.defaults.global`)
- Zero jQuery
- Sidebar nav from `src/data/nav-free.json` (Pro will use `nav-pro.json` later)
- Free SCSS/JS adapted from AdminKit **3.5.0** (fetched over HTTPS; no git clone)

## Quick start

```bash
cd /workspace/adminkit-v4/spike
npm install
npm run build
npm run dev
```

- `npm run build` → production `dist/` (HTML + `dist/css/app.css` + `dist/js/app.js`)
- `npm run dev` → Eleventy on http://localhost:8080 + Vite asset watch
- `npm run pages:free` → 11ty only (expects assets already built)

## Layout

See `docs/v4-spike.md` for decisions and Pro notes.
