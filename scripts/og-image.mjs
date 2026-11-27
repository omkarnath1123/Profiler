// Renders public/og.png: the 1200x630 card shown when the site link is shared on
// LinkedIn, Slack or WhatsApp. The text comes from profile.js, so re-run this
// (npm run og) after changing the name or headline there.
// Needs Google Chrome; set CHROME_PATH if it is not in the default macOS location.
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import pkg from "../package.json" with { type: "json" };
import { person } from "../src/data/profile.js";
import { prettyUrl } from "../src/lib/prettyUrl.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Fonts are inlined because Chrome will not load font files across file:// URLs.
const fontFace = (family, weight, file) => {
  const data = readFileSync(join(root, "node_modules", file)).toString("base64");
  return `@font-face { font-family: "${family}"; font-weight: ${weight}; src: url(data:font/woff2;base64,${data}); }`;
};
const escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const html = `<!doctype html>
<meta charset="utf-8">
<style>
  ${fontFace("Serif", "400", "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2")}
  ${fontFace("Sans", "100 900", "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")}
  body {
    display: flex; flex-direction: column; justify-content: space-between;
    box-sizing: border-box; width: 1200px; height: 630px; margin: 0; padding: 64px 80px;
    background:
      radial-gradient(700px 420px at 0% 0%, #e9e3ff, transparent 70%),
      radial-gradient(700px 420px at 100% 0%, #ffe4d4, transparent 70%),
      radial-gradient(700px 380px at 60% 100%, #d5f2e3, transparent 70%),
      #fdfaf6;
    color: #2a2440; font-family: "Sans";
  }
  p, h1 { margin: 0; }
  .mark {
    display: grid; place-items: center; width: 72px; height: 72px; border-radius: 18px;
    background: #ffffff; color: #2a2440; font: 36px "Serif";
  }
  h1 { font: 400 148px/1 "Serif"; letter-spacing: -0.02em; }
  .headline { margin-top: 20px; font-size: 40px; font-weight: 600; }
  .focus { margin-top: 6px; font-size: 32px; color: #48435c; }
  .foot { display: flex; justify-content: space-between; font-size: 26px; color: #48435c; }
  .foot span:last-child { color: #5b46c7; }
</style>
<div class="mark">${escapeHtml(person.initials)}</div>
<div>
  <h1>${escapeHtml(person.name)}</h1>
  <p class="headline">${escapeHtml(person.headline)}</p>
  <p class="focus">${escapeHtml(person.focus)}</p>
</div>
<div class="foot"><span>${escapeHtml(person.location)}</span><span>${escapeHtml(prettyUrl(pkg.homepage))}</span></div>`;

const page = join(mkdtempSync(join(tmpdir(), "og-")), "card.html");
writeFileSync(page, html);

const output = join(root, "public", "og.png");
execFileSync(chrome, [
  "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
  "--window-size=1200,630", `--screenshot=${output}`, pathToFileURL(page).href,
], { stdio: "ignore" });
console.log(`Wrote ${output}`);
