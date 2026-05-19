# Drago adoption site

Static one-page website for Drago's adoption campaign.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Edit text

All translations live in `i18n.json`.

Keys are shared across languages:

- `ru` - Russian
- `en` - English
- `sr` - Serbian draft

## Replace photos

The current files in `photos/` are placeholders because the planned real files were not present in Downloads.

Recommended final names:

- `hero.jpeg`
- `gallery-01.jpeg`
- `gallery-02.jpeg`
- `gallery-03.jpeg`
- `gallery-04.jpeg`
- `gallery-05.jpeg`
- `gallery-06.jpeg`

After adding real images, update the image paths in `index.html` from `.svg` to `.jpeg`.

## Deploy with GitHub Pages

Repository: https://github.com/roba364/drago-adopt

Final URL:

```text
https://roba364.github.io/drago-adopt/
```

![QR code for Drago adoption page](qr.png)

The included `qr.png` points to the final GitHub Pages URL.
