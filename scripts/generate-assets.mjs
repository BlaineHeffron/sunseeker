import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = new URL('../public/', import.meta.url);

async function writePng(fileName, width, height, svg) {
  const outputPath = path.join(publicDir.pathname, fileName);
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, quality: 90 })
    .resize(width, height)
    .toFile(outputPath);
}

function iconSvg(size) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7CB342"/>
      <stop offset="100%" stop-color="#F9A825"/>
    </linearGradient>
    <radialGradient id="sun" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD54F"/>
      <stop offset="100%" stop-color="#F9A825"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <g transform="translate(256 256)">
    <circle r="96" fill="url(#sun)"/>
    <circle r="128" fill="none" stroke="#FFFDF7" stroke-width="18" stroke-dasharray="12 16"/>
  </g>
</svg>`;
}

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFDF7"/>
      <stop offset="100%" stop-color="#C5E1A5"/>
    </linearGradient>
    <radialGradient id="sun" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD54F"/>
      <stop offset="100%" stop-color="#F9A825"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <g transform="translate(980 140)">
    <circle r="72" fill="url(#sun)"/>
    <circle r="98" fill="none" stroke="#7CB342" stroke-width="10" stroke-dasharray="10 14"/>
  </g>
  <text x="84" y="270" font-family="Arial, sans-serif" font-size="82" fill="#212121" font-weight="700">SunSeeker</text>
  <text x="84" y="344" font-family="Arial, sans-serif" font-size="38" fill="#757575">Optimize Your Solar Panel Positioning</text>
</svg>`;

await fs.mkdir(publicDir, { recursive: true });
await writePng('icon-192.png', 192, 192, iconSvg(192));
await writePng('icon-512.png', 512, 512, iconSvg(512));
await writePng('apple-touch-icon.png', 180, 180, iconSvg(180));
await writePng('logo.png', 512, 512, iconSvg(512));
await writePng('og-image.png', 1200, 630, ogSvg);

console.log('Generated icon-192.png, icon-512.png, apple-touch-icon.png, logo.png, og-image.png');
