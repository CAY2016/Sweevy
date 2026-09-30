// Builds www/ for the Android app from the shared page in src/app.html
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
mkdirSync('www/fonts', { recursive: true });
execSync('npx esbuild src/native.js --bundle --format=iife --minify --outfile=www/native.js', { stdio: 'inherit' });
const fonts = [
  ['Manrope', 400, '@fontsource/manrope/files/manrope-latin-400-normal.woff2'],
  ['Manrope', 500, '@fontsource/manrope/files/manrope-latin-500-normal.woff2'],
  ['Manrope', 600, '@fontsource/manrope/files/manrope-latin-600-normal.woff2'],
  ['Manrope', 700, '@fontsource/manrope/files/manrope-latin-700-normal.woff2'],
  ['Bricolage Grotesque', 600, '@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-600-normal.woff2'],
  ['Bricolage Grotesque', 700, '@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff2'],
];
let css = '';
for (const [fam, w, p] of fonts) {
  const name = p.split('/').pop();
  copyFileSync('node_modules/' + p, 'www/fonts/' + name);
  css += `@font-face{font-family:"${fam}";font-weight:${w};font-style:normal;font-display:swap;src:url(fonts/${name}) format("woff2")}\n`;
}
writeFileSync('www/fonts.css', css);
let app = readFileSync('src/app.html', 'utf8');
app = app.replace(/<link rel="preconnect"[^>]*>\n?/g, '').replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/, '<link rel="stylesheet" href="fonts.css">');
const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="color-scheme" content="light dark"><style>html{-webkit-text-size-adjust:100%}:root{padding-top:env(safe-area-inset-top,0px)}body{margin:0}img{max-width:100%}</style><script src="native.js"></script></head><body>${app}</body></html>`;
writeFileSync('www/index.html', html);
console.log('www built');
