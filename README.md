# Boyles Flooring

Static marketing site for Boyles Flooring — Santa Clarita, CA.
Built with [Astro](https://astro.build) + Tailwind CSS v4. No backend, no database.

**Live:** https://cfpeter.github.io/boyles-flooring

## Requirements

Node **20.12 or newer** (22 LTS recommended). Older versions fail with
`node:util does not provide an export named 'styleText'`.

```bash
node -v   # must be >= 20.12
```

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:4321/boyles-flooring>.
(The `/boyles-flooring` suffix is the GitHub Pages base path — see *Custom domain* below.)

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built site locally |

## Editing content

Almost everything lives in two files — no HTML required.

| File | Holds |
| --- | --- |
| `src/data/site.ts` | Phone, email, address, hours, service area, social links, contact-form key |
| `src/data/content.ts` | Product categories, "how it works" steps, gallery captions |

Change the phone number in `site.ts` and it updates in the header, footer,
contact page and search-engine metadata at once.

### Adding gallery photos

Drop image files into `src/assets/gallery/`, then add an entry to the `gallery`
array in `src/data/content.ts`. Astro resizes, compresses and converts to WebP
at build time — commit the full-size originals, not pre-shrunk copies.

## Contact form

The form posts to [Web3Forms](https://web3forms.com) (free, no account, no backend).

1. Go to <https://web3forms.com>
2. Enter **sales@boyles-flooring.com** and press *Create Access Key*
3. Check that inbox for the key
4. Paste it into `web3formsKey` in `src/data/site.ts`

Until a real key is in place the form is visibly disabled rather than silently
discarding messages.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Nothing to run by hand.

If the first run fails on permissions, go to
**Settings → Pages → Build and deployment → Source** and pick **GitHub Actions**.

### Custom domain

To serve this at `www.boyles-flooring.com` instead:

1. In `astro.config.mjs`, set `site: 'https://www.boyles-flooring.com'` and
   **delete the `base` line**.
2. Add a `public/CNAME` file containing `www.boyles-flooring.com`.
3. Point the domain's DNS at GitHub Pages, and set the custom domain under
   **Settings → Pages**.
4. Update the `Sitemap:` line in `public/robots.txt`.

## Structure

```
src/
├─ assets/gallery/   Source photos (optimised at build time)
├─ components/       Nav, Footer, PageHero, SectionHeading, CtaBand, Lightbox
├─ data/             site.ts + content.ts  ← edit these
├─ layouts/          BaseLayout.astro (SEO, fonts, structured data)
├─ lib/url.ts        Base-path-aware link helper
├─ pages/            index · products · contact · 404
└─ styles/global.css Design tokens and shared component classes
```

## Accessibility & SEO notes

- Skip-to-content link, visible focus rings, keyboard-operable lightbox and menu
- Scroll animations are disabled under `prefers-reduced-motion`, and content is
  never hidden from visitors without JavaScript
- `HomeAndConstructionBusiness` structured data with address, hours and service area
- Sitemap and Open Graph image generated at build time
