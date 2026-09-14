# AdminKit

AdminKit is a free, MIT-licensed Bootstrap 5 admin template for classic server-rendered apps. Vanilla JavaScript — no jQuery in the core or its bundled plugins.

Use the static HTML/CSS/JS as-is in Rails, Laravel, Django, ASP.NET, or Node, or compile the Sass and JS with the included Vite build. Pages are authored in Eleventy (11ty) / Nunjucks.

**Free includes:** 12 HTML pages, Chart.js charts, Feather icons, Flatpickr, and one default color scheme. Need more pages, dark mode, and premium plugins? See [AdminKit PRO](https://adminkit.io/pricing/).

Demo: https://demo-basic.adminkit.io/ · Docs: https://adminkit.io/docs/ · npm: `@adminkit/core`

## Quick start (this branch)

```bash
npm install
npm run build
npm run dev
```

- `npm run build` → production `dist/` (HTML + `dist/css/app.css` + `dist/js/app.js`)
- `npm run dev` → Eleventy on http://localhost:8080 + Vite asset watch

## v4 toolchain

- **Vite 6** for Sass/JS (no Webpack / Babel)
- **Eleventy 3** + Nunjucks for HTML
- **Chart.js 4** (`Chart.defaults.*`, not `Chart.defaults.global`)

Migration notes: [`docs/MIGRATION-v4.md`](docs/MIGRATION-v4.md) · Spike notes: [`docs/v4-spike.md`](docs/v4-spike.md)
