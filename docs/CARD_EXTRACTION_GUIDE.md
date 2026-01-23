# Agricola Card Extraction Guide

## Quick Start

This guide explains how to extract card images from `docs/Agricola_StickerSheet_v2.pdf` for use in the Card Database feature.

**Status**: Manual extraction is acceptable for MVP (per spec).

## Directory Structure

Cards should be extracted into these directories:

```
public/assets/cards/
├── occupations/          # Occupation cards
├── minor-improvements/   # Minor improvement cards
├── major-improvements/   # Major improvement cards
└── action-cards/         # Action space cards
```

## Manual Extraction (MVP Approach)

### Prerequisites
- PDF viewer (Preview on macOS, Adobe Acrobat, etc.)
- Image editor (optional: Preview, GIMP, Photoshop)
- Online converter (optional): https://squoosh.app

### Step-by-Step Instructions

#### 1. Open the PDF
```bash
open docs/Agricola_StickerSheet_v2.pdf
```

#### 2. Export Pages as Images

**macOS Preview:**
1. Open PDF in Preview
2. File → Export...
3. Format: PNG
4. Resolution: 300 DPI
5. Save all pages

**Adobe Acrobat:**
1. Tools → Export PDF
2. Image → PNG
3. High Resolution (300 DPI)
4. Export All Images

#### 3. Crop Individual Cards

Each PDF page contains multiple cards in a grid. You need to crop them individually:

**macOS Preview:**
1. Open exported page image
2. Use selection tool to select one card
3. Tools → Crop
4. File → Export → Save as new file

**GIMP/Photoshop:**
1. Open page image
2. Use Rectangle Select tool
3. Crop to selection
4. Export as PNG

#### 4. Convert to WebP (Optional but Recommended)

**Online (easiest):**
1. Visit https://squoosh.app
2. Upload PNG file
3. Select WebP format
4. Quality: 85%
5. Download optimized image

**Command line (if ImageMagick available):**
```bash
# Note: convert command is blocked in this environment
# Use on your local machine:
magick input.png -quality 85 -resize 400x600 output.webp
```

#### 5. Naming Convention

Use descriptive, lowercase, hyphenated names:

**Good examples:**
- `farmer.webp`
- `clay-oven.webp`
- `fireplace.webp`
- `grain-seeds.webp`
- `stone-quarry.webp`

**Bad examples:**
- `Card1.webp` (not descriptive)
- `Farmer.webp` (not lowercase)
- `clay oven.webp` (spaces)
- `clay_oven.webp` (underscores)

#### 6. Save to Correct Directory

Organize by card type:

| Card Type | Directory | Border Color |
|-----------|-----------|--------------|
| Occupations | `occupations/` | Purple |
| Minor Improvements | `minor-improvements/` | Yellow |
| Major Improvements | `major-improvements/` | Orange |
| Action Cards | `action-cards/` | Green |

### Recommended Starter Set (MVP)

For MVP, extract at least **10-20 sample cards**:

- 5 Occupation cards
- 5 Minor Improvement cards
- 5 Major Improvement cards
- 3-5 Action cards

**Popular cards to start with:**
1. Farmer (occupation)
2. Clay Worker (occupation)
3. Chief (occupation)
4. Clay Oven (minor improvement)
5. Basket (minor improvement)
6. Fireplace (major improvement - 2 types)
7. Stone House (major improvement)
8. Build Rooms action
9. Family Growth action
10. Plow Field action

## Automated Extraction (Future)

For production or batch processing, consider these tools:

### Option 1: pdf-to-img (Node.js)

```bash
npm install -D pdf-to-img

# Create extraction script
node scripts/extract-cards-auto.js
```

```javascript
import { pdf } from 'pdf-to-img';
import fs from 'fs/promises';

const document = await pdf('./docs/Agricola_StickerSheet_v2.pdf', {
  scale: 3 // Higher scale = better quality
});

let pageNum = 0;
for await (const image of document) {
  await fs.writeFile(`./output/page-${pageNum++}.png`, image);
}
```

### Option 2: Ghostscript (CLI)

```bash
# Extract all pages as PNG (300 DPI)
gs -dNOPAUSE -sDEVICE=png16m -r300 \
   -sOutputFile=page-%03d.png \
   docs/Agricola_StickerSheet_v2.pdf \
   -dBATCH
```

### Option 3: Python with pdf2image

```bash
pip install pdf2image

# Extract script
from pdf2image import convert_from_path

images = convert_from_path('docs/Agricola_StickerSheet_v2.pdf', dpi=300)
for i, image in enumerate(images):
    image.save(f'page-{i}.png', 'PNG')
```

## Image Specifications

Target specifications for extracted cards:

| Property | Value |
|----------|-------|
| **Format** | WebP (preferred), PNG, or JPEG |
| **Dimensions** | 400x600px (standard card aspect) |
| **Quality** | 85% for WebP, 90% for JPEG |
| **File Size** | ~50-150KB per card |
| **Color Space** | sRGB |
| **DPI** | 300 DPI source, scaled to web size |

## Verification

After extracting cards, verify the setup:

```bash
# Run extraction script to check current status
node scripts/extract-cards.js

# Expected output:
# ✓ Found PDF: ./docs/Agricola_StickerSheet_v2.pdf
# ✓ Output directory exists: ./public/assets/cards
# 📁 Current card images:
#   occupations: X images
#   minor-improvements: X images
#   major-improvements: X images
#   action-cards: X images
```

### Manual Verification

Check that:
- [ ] Cards are organized in correct subdirectories
- [ ] Filenames use lowercase-hyphenated convention
- [ ] Images are reasonably sized (~50-150KB each)
- [ ] Images have correct aspect ratio (taller than wide)
- [ ] Images are clear and readable

## Troubleshooting

### Issue: PDF won't open
**Solution**: Verify PDF exists at `docs/Agricola_StickerSheet_v2.pdf` (3.1 MB)

### Issue: Images are too large
**Solution**: Convert to WebP format or reduce quality:
```bash
# Use squoosh.app online tool
# Or ImageMagick: magick input.png -quality 80 output.webp
```

### Issue: Can't crop cards accurately
**Solution**:
- Zoom in to see card borders clearly
- Use grid/guides in image editor
- Cards are typically arranged in 3x3 or 2x4 grids on each page

### Issue: Don't know which card type
**Solution**: Check border color:
- Purple border = Occupation
- Yellow border = Minor Improvement
- Orange border = Major Improvement
- Green border = Action

## Integration with Code

Once cards are extracted, they can be used in the CardDatabase component:

```typescript
// Reference in cards.json
{
  "id": "occ-farmer",
  "name": "Farmer",
  "type": "occupation",
  "description": "Occupation that helps with field cultivation",
  "imagePath": "/assets/cards/occupations/farmer.webp"
}

// Use in component
<ImageWithFallback
  src="/assets/cards/occupations/farmer.webp"
  alt="Farmer occupation card"
  fallback="🃏"
/>
```

## Resources

- **Source PDF**: `docs/Agricola_StickerSheet_v2.pdf` (3.1 MB)
- **Extraction Script**: `scripts/extract-cards.js`
- **Card Database**: `src/components/sections/CardDatabase.tsx`
- **Card Metadata**: `src/data/cards.json`

## Notes

- The sticker sheet PDF contains multiple card sheets across several pages
- Each page has 6-12 cards in a grid layout
- Some cards may appear in multiple languages (use English version)
- Card backs are uniform and don't need individual extraction
- For MVP, quality > quantity - 10-20 well-extracted cards are better than 100 poorly cropped ones

## Support

For questions or issues with card extraction:
1. Check this guide first
2. Review `scripts/extract-cards.js` output
3. Refer to spec: `.auto-claude/specs/005-visual-overhaul-replace-emojis-with-actual-game-im/spec.md`
