/* ============================================================================
   Showroom video clips.

   These are Boyles Flooring's own videos, downloaded once from their Instagram
   and re-encoded for the web, then served from this site directly. Nothing is
   hot-linked: Instagram's media URLs are signed and expire within days, so
   embedding them would break on its own.

   To add a clip: drop `<name>.mp4` and a matching `<name>.jpg` poster into
   public/reels/ and add an entry below.
   ============================================================================ */

export type Reel = {
  /** File stem in public/reels — expects both <file>.mp4 and <file>.jpg */
  file: string;
  caption: string;
  /** Instagram permalink, so viewers can see the original post */
  source: string;
  /** Marks the clip featured at the top of the "Meet the Owner" page. */
  featured?: boolean;
};

export const reels: Reel[] = [
  { file: 'DUXVmcrj0qE', caption: 'Herringbone laminate with straight-plank stairs',
    source: 'https://www.instagram.com/reel/DUXVmcrj0qE/' },
  { file: 'DYz7JDqvnyO', caption: 'A carpet installation, finished in Pine Mountain',
    source: 'https://www.instagram.com/reel/DYz7JDqvnyO/' },
  { file: 'DaPJH4Uh-pD', caption: 'Floors that handle real life without losing the look',
    source: 'https://www.instagram.com/reel/DaPJH4Uh-pD/' },
  { file: 'DWKe0YRElfv', caption: 'Carpeted stairs, start to finish',
    source: 'https://www.instagram.com/reel/DWKe0YRElfv/' },
  { file: 'DYm9qSvNDrz', caption: 'Carpet, for the warmth it puts back in a room',
    source: 'https://www.instagram.com/reel/DYm9qSvNDrz/' },
  { file: 'DVrfPwyEnFz', caption: 'Flooring and doors, all from one showroom',
    source: 'https://www.instagram.com/reel/DVrfPwyEnFz/', featured: true },
];

/* ----------------------------------------------------------------------------
   "Meet the Owner" page.

   NOTE — two things here need confirming by the business:
     1. `featured` above marks which clip leads the page. It is currently the
        showroom walk-through pitch. If a different clip is the owner speaking,
        move the `featured: true` flag to it — nothing else needs changing.
     2. `ownerName` is intentionally blank. Fill it in and the page uses it in
        the heading and intro; left empty, the page reads naturally without a
        name rather than inventing one.
   ---------------------------------------------------------------------------- */
export const owner = {
  name: '',                 // e.g. 'Mike Boyle'
  role: 'Owner',
  /** Shown under the featured video. Keep it in the owner's own voice. */
  intro:
    'Boyles Flooring is a family-run showroom on Soledad Canyon Road. We would rather walk you through the samples ourselves than sell you a floor from a screen — so come in, take a few home, and see how they look under your own lighting.',
};

export const featuredReel = () => reels.find((r) => r.featured) ?? reels[0];
export const otherReels = () => reels.filter((r) => !r.featured);
