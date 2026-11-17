# Images Guide for Nuhaa Cool Fix

This folder contains the visual assets used across the website:
- `logo.svg`: The business logo shown in the header.
- `*-slide-*.svg`: 16:9 banner slides for each service (AC, Fridge, Washing Machine, Heater, TV).
- `process-step-*.svg`: 4:3 illustrations for the "How it works" popup modal.

## Recommended Dimensions for Real Photos:
If replacing these SVG graphics with real camera photos (JPG / WebP / PNG):
1. **Banner Slides**:
   - Aspect ratio: **16:9**
   - Recommended size: **800 x 450 px** (or 1200 x 675 px for retina)
   - Max file size: Under 150 KB per photo for fast mobile loading.
2. **Process Steps**:
   - Aspect ratio: **4:3**
   - Recommended size: **400 x 300 px** (or 600 x 450 px)
3. **Business Logo**:
   - Recommended size: **280 x 64 px** with transparent or white background.
4. **Sub-Service Icons / Thumbnails**:
   - Aspect ratio: **1:1** (square)
   - Recommended size: **120 x 120 px**

## Automatic Fallback:
If an image path in `site.config.js` is missing, misspelled, or fails to load, the site automatically renders a beautiful CSS gradient and appliance icon placeholder so the layout never breaks.
