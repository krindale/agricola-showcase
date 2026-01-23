#!/usr/bin/env node

/**
 * Card Image Extraction Script
 *
 * This script extracts card images from Agricola_StickerSheet_v2.pdf
 *
 * For MVP: Manual extraction is acceptable
 *
 * MANUAL EXTRACTION INSTRUCTIONS:
 * ================================
 * 1. Open ./docs/Agricola_StickerSheet_v2.pdf in a PDF viewer
 * 2. For each card page:
 *    - Take a screenshot or export as image (PNG/JPG)
 *    - Convert to WebP format using: https://squoosh.app or ImageMagick
 *    - Save to appropriate directory:
 *      - Occupation cards → public/assets/cards/occupations/
 *      - Minor Improvements → public/assets/cards/minor-improvements/
 *      - Major Improvements → public/assets/cards/major-improvements/
 *      - Action cards → public/assets/cards/action-cards/
 * 3. Use naming convention: card-name-slug.webp (lowercase, hyphenated)
 *
 * TARGET STRUCTURE:
 * =================
 * public/assets/cards/
 * ├── occupations/
 * │   ├── farmer.webp
 * │   ├── carpenter.webp
 * │   └── ...
 * ├── minor-improvements/
 * │   ├── clay-oven.webp
 * │   └── ...
 * ├── major-improvements/
 * │   ├── fireplace.webp
 * │   └── ...
 * └── action-cards/
 *     └── ...
 *
 * AUTOMATED EXTRACTION (Future):
 * ==============================
 * For automated extraction, install: npm install -D pdf-to-img
 * Then use the code below:
 */

import { promises as fs } from 'fs';
import path from 'path';

const PDF_PATH = './docs/Agricola_StickerSheet_v2.pdf';
const OUTPUT_DIR = './public/assets/cards';

async function main() {
  console.log('Card Extraction Script');
  console.log('======================\n');

  // Check if PDF exists
  try {
    await fs.access(PDF_PATH);
    console.log(`✓ Found PDF: ${PDF_PATH}`);
  } catch (error) {
    console.error(`✗ PDF not found: ${PDF_PATH}`);
    process.exit(1);
  }

  // Check if output directory exists
  try {
    await fs.access(OUTPUT_DIR);
    console.log(`✓ Output directory exists: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error(`✗ Output directory not found: ${OUTPUT_DIR}`);
    process.exit(1);
  }

  console.log('\n📝 MANUAL EXTRACTION REQUIRED FOR MVP');
  console.log('=====================================');
  console.log('pdfjs-dist is browser-only and cannot extract images in Node.js.');
  console.log('\nFor MVP, please extract cards manually:');
  console.log('1. Open docs/Agricola_StickerSheet_v2.pdf');
  console.log('2. Screenshot or export each card');
  console.log('3. Convert to WebP format');
  console.log('4. Save to appropriate directory in public/assets/cards/');
  console.log('\nFor production, consider:');
  console.log('- npm install -D pdf-to-img');
  console.log('- Use Ghostscript or ImageMagick CLI');
  console.log('- Online PDF extraction services');

  // List current card images
  console.log('\n📁 Current card images:');
  const cardTypes = ['occupations', 'minor-improvements', 'major-improvements', 'action-cards'];

  for (const type of cardTypes) {
    const dir = path.join(OUTPUT_DIR, type);
    try {
      const files = await fs.readdir(dir);
      const images = files.filter(f => /\.(webp|png|jpg|jpeg)$/i.test(f));
      console.log(`  ${type}: ${images.length} images`);
      if (images.length > 0) {
        images.slice(0, 3).forEach(img => console.log(`    - ${img}`));
        if (images.length > 3) console.log(`    ... and ${images.length - 3} more`);
      }
    } catch (error) {
      console.log(`  ${type}: directory not accessible`);
    }
  }

  console.log('\n✓ Script complete');
}

main().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
