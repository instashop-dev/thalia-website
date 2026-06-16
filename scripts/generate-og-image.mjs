/**
 * Generates public/og-image.png from the SVG design using Playwright.
 *
 * Run once after cloning, or whenever the OG image design changes:
 *   node scripts/generate-og-image.mjs
 *
 * Requires Playwright Chromium to be installed:
 *   npx playwright install chromium
 */

import { chromium } from "@playwright/test";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../public/og-image.png");

const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: linear-gradient(135deg, #111827 0%, #1E3A8A 100%);
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    position: relative;
  }
  .dot-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .glow {
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(0,192,255,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .content { position: relative; z-index: 1; }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0,192,255,0.12);
    border: 1px solid rgba(0,192,255,0.35);
    border-radius: 999px;
    padding: 8px 20px;
    margin-bottom: 32px;
    font-size: 15px;
    font-weight: 600;
    color: #00c0ff;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #00c0ff; }
  h1 {
    color: #FFFFFF;
    font-size: 72px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 20px;
  }
  h1 span { color: #00c0ff; }
  p {
    color: rgba(255,255,255,0.65);
    font-size: 26px;
    font-weight: 400;
    line-height: 1.4;
    max-width: 700px;
  }
  .logo {
    position: absolute;
    bottom: 48px;
    right: 72px;
    font-size: 18px;
    font-weight: 700;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.04em;
    z-index: 1;
  }
  .logo span { color: #00c0ff; }
</style>
</head>
<body>
  <div class="dot-grid"></div>
  <div class="glow"></div>
  <div class="content">
    <div class="badge"><span class="dot"></span>Trusted by 100,000+ Merchants</div>
    <h1>Ecommerce Apps<br>for <span>Shopify</span> &amp; Amazon</h1>
    <p>Purpose-built SaaS tools that help online stores solve operational challenges and scale faster.</p>
  </div>
  <div class="logo">Thalia<span>Technologies</span></div>
</body>
</html>`;

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({
  path: outputPath,
  type: "png",
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();

console.log(`✅ OG image generated → ${outputPath}`);
