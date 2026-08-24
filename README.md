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
| `src/data/content.ts` | Product categories, their brand lines, "how it works" steps, gallery captions |

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

## Showroom video clips

The "Fresh off the showroom floor" section plays Boyles Flooring's own videos
**self-hosted from this repo** — plain HTML5 `<video>`, no Instagram embed.

That was a deliberate choice. Instagram's embed injects its own chrome (profile
header, like counts, comment box), loads third-party tracking, and its media
URLs are signed and expire within days, so hot-linking breaks on its own.
Self-hosting is faster, looks like the site rather than like Instagram, and
cannot break when Instagram changes.

- Files live in `public/reels/` as `<name>.mp4` plus a `<name>.jpg` poster
- The list and captions are in `src/data/reels.ts`
- Videos are H.264, capped at 720px tall, `+faststart`, ~0.8–3 MB each
- `preload="none"` means only the poster loads until someone presses play
- One clip plays at a time; each card links to the original Instagram post

### Adding or replacing a clip

Drop `<name>.mp4` and `<name>.jpg` into `public/reels/`, then add an entry to
`src/data/reels.ts`. To re-encode something heavy:

```bash
ffmpeg -i input.mp4 -vf "scale='trunc(iw*min(1,720/ih)/2)*2':'min(720,ih)'" \
  -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 31 -preset veryslow \
  -c:a aac -b:a 48k -ac 1 -movflags +faststart output.mp4
```

Posters are pulled from partway through each clip rather than frame 0 — the
first frame of a reel is usually a title card or someone mid-sentence.

## Structure

```
src/
├─ assets/gallery/   Showroom photos (optimised at build time)
├─ components/       Nav, Footer, PageHero, SectionHeading, CtaBand,
│                    Lightbox, VideoReels, FeatureVideo
├─ data/             site.ts · content.ts · reels.ts   ← edit these
├─ layouts/          BaseLayout.astro (SEO, fonts, structured data)
├─ lib/url.ts        Base-path-aware link helper
├─ pages/            index · products · products/[category] · meet
│                    contact · 404
└─ styles/global.css Design tokens and shared component classes

public/
├─ reels/            Self-hosted video clips + poster images
├─ og.jpg            Social sharing card
└─ favicon.png, apple-touch-icon.png, robots.txt
```

## Accessibility & SEO notes

- Skip-to-content link, visible focus rings, keyboard-operable lightbox and menu
- Scroll animations are disabled under `prefers-reduced-motion`, and content is
  never hidden from visitors without JavaScript
- `HomeAndConstructionBusiness` structured data with address, hours and service area
- Sitemap and Open Graph image generated at build time
