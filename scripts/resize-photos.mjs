import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PHOTOS_DIR = join(__dirname, '..', 'public', 'images', 'photos');
const MAX_WIDTH = 1200;
const QUALITY = 82;

const files = (await readdir(PHOTOS_DIR)).filter(f => /\.(jpg|jpeg)$/i.test(f));
console.log(`Resizing ${files.length} photos → max ${MAX_WIDTH}px wide, JPEG q${QUALITY}`);

let done = 0, skipped = 0;
for (const file of files) {
  const path = join(PHOTOS_DIR, file);
  const meta = await sharp(path).metadata();

  if ((meta.width ?? 0) <= MAX_WIDTH) {
    skipped++;
    continue;
  }

  const original = await stat(path);
  const buf = await sharp(path)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  // Only overwrite if we actually made it smaller
  if (buf.length < original.size) {
    const { writeFile } = await import('fs/promises');
    await writeFile(path, buf);
    const saved = ((1 - buf.length / original.size) * 100).toFixed(0);
    console.log(`  ✓ ${file}  ${(original.size/1024).toFixed(0)}KB → ${(buf.length/1024).toFixed(0)}KB  (${saved}% smaller)`);
    done++;
  } else {
    skipped++;
  }
}
console.log(`Done: ${done} resized, ${skipped} already small enough.`);
