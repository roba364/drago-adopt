# Drago adoption site

Static one-page website for Drago's adoption campaign.

Design: Pinterest-style masonry with a Sunset Coral palette (cream, coral, peach). Display type — Fraunces; body — Plus Jakarta Sans.

Sections: hero, story, masonry gallery, adoption checklist, and contact card.

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

## Photos

Real photos live in `photos/`:

- `hero.jpg` — hero portrait
- `gallery-01.jpg` … `gallery-08.jpg` — masonry gallery
- `contact.jpg` — contact section

The masonry works best with varied aspect ratios (3:4, 4:5, 1:1, 4:3, 9:16). To swap a photo, replace the file under the same name and bump the `?v=` query string in `index.html` to bust caches.

## Deploy with GitHub Pages

Repository: https://github.com/roba364/drago-adopt

Final URL:

```text
https://roba364.github.io/drago-adopt/
```

![QR code for Drago adoption page](qr.png)

The included `qr.png` points to the final GitHub Pages URL.

## QR sticker

Printable sticker that combines Drago's hero photo, the QR, and the site palette. Open in a browser, click **Download PNG** (3× resolution) or use Print to save as PDF.

- Local: `http://localhost:8000/stickers.html`
- Live: https://roba364.github.io/drago-adopt/stickers.html

Design: coral background, photo in a white frame, big "meet Drago." headline in Fraunces, white QR row with CTA, and bubble tags. Made for street poles, posters, and social shares.
