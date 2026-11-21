# Boldkin storefront (React + Vite)

Multi-page storefront that sends visitors to your Amazon listings.
Pages: Home `/`, Shop `/shop`, Product `/product/:slug`, About `/about`, Support `/support`.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
Host `dist/` on any static host and rewrite all paths to `index.html` (single-page app).

## Add or edit products
Open `src/config/products.js`. Copy the whole product object, paste it after the last one and change the values.
Each product automatically gets its own page at `/product/<slug>` and a card on `/shop`.
Optional blocks (options, modes, box, specs, faqs, reviews) are hidden when left empty.
Set `amazonUrl` on each product to its Amazon link.

## Site-wide settings
`src/config/site.js`: featured product on the home page, Amazon fallback link, support email,
footer disclaimer, About page copy, support cards, shared FAQs, navigation.

## Photos
Photos live in `public/photos/` and are listed in a product's `images` as `/photos/<file>.jpg` (same order as `views`).
Without photos, an illustration placeholder is shown.

## Brand
Black `#0A0A0A`, white, orange `#EF5328` (change `--accent` in `src/styles.css`).
Orange fills carry black text for readable contrast. Logos live in `public/`.

## Responsive
Layout works from 250px to 4000px wide. All sizes are in `rem`; above 1500px the root font size scales
up (max 36px at ~3800px), so the whole layout grows on big screens. Phone rules are at the bottom of `src/styles.css`.
# BOLDKIN
