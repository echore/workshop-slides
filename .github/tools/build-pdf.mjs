// tools/build-pdf.mjs
// Renders the deck to deck.pdf, one slide per page.
// Run locally:  npx playwright install --with-deps chromium && node tools/build-pdf.mjs
// Assumes a static server is already running on PORT (the workflow starts one).

import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const PORT = process.env.PORT || 8080;
const URL = `http://localhost:${PORT}/index.html`;
const OUT = 'deck.pdf';

// Match your deck's aspect ratio. 1600x900 = 16:9.
const W = 1600;
const H = 900;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H } });

// Surface console errors instead of silently producing a blank PDF.
page.on('pageerror', (e) => console.error('PAGE ERROR:', e.message));
page.on('console', (m) => {
  if (m.type() === 'error') console.error('CONSOLE:', m.text());
});

await page.goto(URL, { waitUntil: 'networkidle' });

// deck.js fetches sections/*.html — wait until they're actually in the DOM.
await page.waitForFunction(
  () => document.querySelectorAll('.slide').length > 5,
  { timeout: 30000 }
);

// Fonts must be loaded or text metrics shift mid-render.
await page.evaluate(() => document.fonts.ready);

// Inject the print overrides.
await page.addStyleTag({ content: readFileSync('tools/print.css', 'utf8') });

// Images (ipc cover, agent screenshots, chatbot hook) must finish decoding.
await page.evaluate(async () => {
  const imgs = [...document.images].filter((i) => !i.complete);
  await Promise.all(
    imgs.map(
      (i) =>
        new Promise((res) => {
          i.addEventListener('load', res, { once: true });
          i.addEventListener('error', res, { once: true });
        })
    )
  );
});

const count = await page.evaluate(() => document.querySelectorAll('.slide').length);
console.log(`Found ${count} slides.`);

await page.pdf({
  path: OUT,
  width: `${W}px`,
  height: `${H}px`,
  printBackground: true, // without this every coloured card prints white
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  preferCSSPageSize: false,
});

await browser.close();
console.log(`Wrote ${OUT}`);
