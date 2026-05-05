const puppeteer = require('puppeteer-core');
const path = require('path');

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const baseUrl = "http://localhost:8080";
const routes = [
  { name: 'dashboard', path: '/#/dashboard' },
  { name: 'bigquery', path: '/#/data/bigquery' },
  { name: 'storage', path: '/#/storage' },
  { name: 'logging', path: '/#/operations/logging' },
  { name: 'spanner', path: '/#/data/spanner' }
];

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const route of routes) {
    console.log(`Capturing ${route.name} at ${route.path}...`);
    try {
      await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'networkidle2', timeout: 10000 });
      // Wait a bit extra for React to render
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: `screenshots/live-${route.name}.png` });
      console.log(`Saved screenshots/live-${route.name}.png`);
    } catch (e) {
      console.error(`Failed to capture ${route.name}: ${e.message}`);
    }
  }

  await browser.close();
}

capture();
