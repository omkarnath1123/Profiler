import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };
import { seoPlugin } from "./vite.seo.js";

// package.json "homepage" is the one place the public URL is written down.
const siteUrl = `${pkg.homepage}/`;

export default defineConfig({
  base: new URL(siteUrl).pathname,
  plugins: [react(), seoPlugin(siteUrl)],
});
