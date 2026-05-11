import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const publicDir = new URL('../public/', import.meta.url);
const publicDirPath = fileURLToPath(publicDir);
const appIconSource = fileURLToPath(new URL('../src/assets/brand/solaraim-app-icon-master.jpg', import.meta.url));
const socialSource = fileURLToPath(new URL('../src/assets/solaraim-social-share-image.jpg', import.meta.url));

async function writePngFromImage(source, fileName, width, height) {
  const outputPath = path.join(publicDirPath, fileName);
  await sharp(source)
    .rotate()
    .resize(width, height, { fit: 'cover', position: 'center' })
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(outputPath);
}

await fs.mkdir(publicDirPath, { recursive: true });
await writePngFromImage(appIconSource, 'icon-192.png', 192, 192);
await writePngFromImage(appIconSource, 'icon-512.png', 512, 512);
await writePngFromImage(appIconSource, 'apple-touch-icon.png', 180, 180);
await writePngFromImage(appIconSource, 'logo.png', 512, 512);
await writePngFromImage(appIconSource, 'solaraim-logo-64.png', 64, 64);
await writePngFromImage(socialSource, 'og-image.png', 1200, 630);

console.log('Generated SolarAim public icons and social image from source assets.');
