// Post-build step: renders every route to static HTML so crawlers, AI bots and
// link-preview scrapers get the real page content without running JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverEntry = path.join(root, 'dist-server', 'entry-server.js');

const { render, buildHeadHtml } = await import(pathToFileURL(serverEntry).href);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('index.html is missing the <!--app-head--> / <!--app-html--> placeholders');
}

const routes = ['/', '/about', '/contact', '/faq', '/contact-card', '/experience', '/projects', '/research'];

for (const route of routes) {
  const html = template
    .replace('<!--app-head-->', buildHeadHtml(route))
    .replace('<!--app-html-->', render(route));

  // "/" -> dist/index.html, "/about" -> dist/about.html (served at /about via cleanUrls)
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(distDir, file), html);
  console.log(`prerendered ${route.padEnd(14)} -> dist/${file} (${(html.length / 1024).toFixed(1)} kB)`);
}

fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
