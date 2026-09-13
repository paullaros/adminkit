import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(root, "src/js/app.js"),
      output: {
        entryFileNames: "js/app.js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "";
          if (name.endsWith(".css")) return "css/app.css";
          return "assets/[name][extname]";
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // modern API; silence legacy noise from Bootstrap/AdminKit SCSS
        silenceDeprecations: ["import", "global-builtin", "color-functions", "mixed-decls", "if-function"],
      },
    },
  },
});
