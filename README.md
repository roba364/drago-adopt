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

1. Create a GitHub repo named `drago-adopt`.
2. Push this folder to the `main` branch.
3. Open repository settings: `Settings -> Pages`.
4. Set source to `Deploy from a branch`, branch `main`, folder `/root`.
5. The final URL should be:

```text
https://roba364.github.io/drago-adopt/
```

## QR

After GitHub Pages is live, generate a QR code for the final URL and replace `qr-placeholder.svg`.
