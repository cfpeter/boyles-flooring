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
    source: 'https://www.instagram.com/reel/DVrfPwyEnFz/' },
];
