/* ============================================================================
   INSTAGRAM FEED — configuration

   Instagram login-walls its profile pages and retired the unauthenticated
   oEmbed endpoint, so a public feed cannot simply be scraped. There are two
   supported ways to show real posts here. Pick ONE.

   ── Option 1: hand-picked posts (no signup, works today) ────────────────────
   Open the Instagram post in a browser, use "Copy link", and paste the URLs
   below. Instagram's official embed script renders them. Pick 3–6 good ones.
   These do not auto-update: a new post means adding its link here.

   ── Option 2: an auto-updating feed widget ──────────────────────────────────
   A static site cannot call the Instagram API directly (it needs a secret
   token that refreshes every 60 days). A widget service handles that for you.
   Free tiers that work well: behold.so, lightwidget.com, snapwidget.com.
   Connect the account once, then paste the embed snippet into `widgetEmbed`.

   If both are empty the site shows a "follow us" panel instead — never
   placeholder posts pretending to be real ones.
   ============================================================================ */

/** Option 1 — full post URLs, e.g. 'https://www.instagram.com/p/ABC123xyz/' */
export const instagramPosts: string[] = [
  // 'https://www.instagram.com/p/XXXXXXXXXXX/',
  // 'https://www.instagram.com/reel/XXXXXXXXXXX/',
];

/** Option 2 — raw embed snippet from a widget service. Takes priority if set. */
export const widgetEmbed = '';

export const hasInstagramFeed = () =>
  widgetEmbed.trim().length > 0 || instagramPosts.length > 0;
