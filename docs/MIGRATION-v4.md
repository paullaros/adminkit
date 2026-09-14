# AdminKit Free 3.x → 4.0 (short note)

This Free repo now builds with **Vite + Eleventy (11ty)/Nunjucks**. Webpack and Babel are gone from the active toolchain.

## Webpack → Vite

- Entry remains `src/js/app.js` (also pulls in SCSS).
- `npm run build` runs Vite for assets, then 11ty for HTML → `dist/`.
- Drop `webpack.config.js`, Babel, and `@babel/polyfill`. Modern evergreen browsers only.

## Static HTML → 11ty

- Hand-edited `static/*.html` is replaced by `src/pages/*.njk` + layouts/partials.
- Compiled `dist/*.html` filenames stay familiar (`index.html`, etc.).
- Sidebar/nav comes from `src/data/nav-free.json`; edition from `src/data/edition.json`.

## Chart.js 2 → 4

- Use `Chart.defaults.*` (not `Chart.defaults.global`).
- Scales are objects (`scales.x` / `scales.y`), not `xAxes` / `yAxes` arrays.
- Legend/tooltip live under `options.plugins`; doughnut `cutoutPercentage` → `cutout`.

See also `docs/v4-spike.md` and `BUILD-REPORT.md` on this branch.
