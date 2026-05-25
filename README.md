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

## QR sticker variants

Three printable sticker designs that combine Drago's hero photo, the QR, and Pinterest-style bubbles in the site palette. Open in a browser to compare:

- Local: `http://localhost:8000/stickers.html`
- Live: https://roba364.github.io/drago-adopt/stickers.html

Variants:

1. **Pinterest Pin** — vertical card with the photo on top, badge overlay, name in Fraunces italic, QR + tag bubbles below. Closest to the site's hero block.
2. **Polaroid Stack** — a tilted polaroid in a peach frame with floating coral/white/ink bubbles around it, plus a small tilted QR card in the corner. Playful, sticker-y feel.
3. **Coral Hero** — bold coral background, photo in a white frame, big "meet drago." headline, white QR row with CTA. Made for street poles and posters.

The page is print-friendly — `Cmd+P` keeps each sticker on its own cut line.
