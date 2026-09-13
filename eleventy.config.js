import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.setQuietMode(false);
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addGlobalData("layout", "base.njk");

  const navFree = JSON.parse(
    fs.readFileSync(path.join(__dirname, "src/data/nav-free.json"), "utf8")
  );
  eleventyConfig.addGlobalData("navFree", navFree);
  eleventyConfig.addGlobalData("nav-free", navFree);

  eleventyConfig.addFilter("activeClass", (href, pageUrl) => {
    const url = (pageUrl || "").replace(/^\//, "").replace(/\/$/, "") || "index.html";
    const target = (href || "").replace(/^\//, "");
    return url === target || url === target.replace(/\.html$/, "") ? "active" : "";
  });

  return {
    dir: {
      input: "src",
      includes: "partials",
      layouts: "layouts",
      data: "data",
      output: "dist",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["njk", "html", "md"],
    pathPrefix: "/",
  };
}
