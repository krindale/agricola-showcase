# Agricola Card Images

This directory contains extracted card images from the Agricola board game.

## Directory Structure

```
cards/
├── occupations/          # Occupation cards (purple border)
├── minor-improvements/   # Minor improvement cards (yellow border)
├── major-improvements/   # Major improvement cards (orange border)
└── action-cards/         # Action space cards
```

## Extraction Process

### Source
- **PDF File**: `docs/Agricola_StickerSheet_v2.pdf`
- **Size**: 3.1 MB
- **Content**: Multiple pages of card sheets

### Manual Extraction (MVP Approach)

For the MVP, cards can be extracted manually:

1. **Open PDF**: Open `docs/Agricola_StickerSheet_v2.pdf` in a PDF viewer (Preview, Adobe Acrobat, etc.)

2. **Export Pages**:
   - Export each page as a high-resolution image (PNG or JPEG)
   - Recommended: 300 DPI or higher

3. **Crop Individual Cards**:
   - Use an image editor (Photoshop, GIMP, Preview, etc.)
   - Crop each individual card from the sheet
   - Maintain aspect ratio (standard card size: ~400x600px)

4. **Convert to WebP**:
   ```bash
   # Using ImageMagick
   convert input.png -quality 85 -resize 400x600 output.webp

   # Using online tool
   # Visit https://squoosh.app and upload images
   ```

5. **Naming Convention**:
   - Use lowercase, hyphenated slugs
   - Examples:
     - `farmer.webp`
     - `clay-oven.webp`
     - `fireplace-1.webp`
     - `grain-seeds.webp`

6. **Save to Appropriate Directory**:
   - Occupation cards → `occupations/`
   - Minor Improvements → `minor-improvements/`
   - Major Improvements → `major-improvements/`
   - Action cards → `action-cards/`

### Automated Extraction (Future)

For production, consider these automated approaches:

#### Option 1: pdf-to-img (Node.js)
```bash
npm install -D pdf-to-img

# Create script:
import { pdf } from 'pdf-to-img';

const document = await pdf('./docs/Agricola_StickerSheet_v2.pdf', { scale: 3 });
for await (const image of document) {
  await fs.writeFile(`./output/page-${image.page}.png`, image);
}
```

#### Option 2: Ghostscript (CLI)
```bash
# Extract all pages as images
gs -dNOPAUSE -sDEVICE=png16m -r300 -sOutputFile=page-%03d.png docs/Agricola_StickerSheet_v2.pdf -dBATCH

# Then crop and convert individual cards
```

#### Option 3: ImageMagick (CLI)
```bash
# Convert PDF pages to images
convert -density 300 docs/Agricola_StickerSheet_v2.pdf page.png

# Crop individual cards (example)
convert page-0.png -crop 400x600+50+50 card-1.png
```

### Batch Conversion Script

The `scripts/extract-cards.js` script provides:
- Validation that the PDF exists
- Directory structure verification
- Inventory of current card images
- Instructions for manual or automated extraction

Run with:
```bash
node scripts/extract-cards.js
```

## Image Specifications

| Property | Specification |
|----------|---------------|
| Format | WebP (preferred), PNG, or JPEG |
| Dimensions | 400x600px (standard card aspect ratio) |
| Quality | 85% for WebP, 90% for JPEG |
| Max File Size | ~100KB per card |
| Color Space | sRGB |

## Current Status

- [x] Directory structure created
- [x] Extraction script created
- [ ] Sample cards extracted (MVP: 10-20 cards minimum)
- [ ] Full card set extracted (production goal)

## Notes

- The PDF contains multiple card sheets across several pages
- Each page may contain 6-9 cards in a grid layout
- Cards have colored borders indicating their type
- Some cards appear in multiple languages (focus on English for MVP)

## For Developers

To use these cards in components:

```typescript
import cardImage from '/assets/cards/occupations/farmer.webp';

<img src={cardImage} alt="Farmer occupation card" loading="lazy" />
```

Or with the ImageWithFallback component:

```typescript
<ImageWithFallback
  src="/assets/cards/occupations/farmer.webp"
  alt="Farmer occupation card"
  fallback="🃏"
/>
```
