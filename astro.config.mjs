// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Deployed to GitHub Pages at https://cfpeter.github.io/boyles-flooring
  // When you point the real domain here, change to:
  //   site: 'https://www.boyles-flooring.com',  and DELETE the `base` line.
  site: 'https://cfpeter.github.io',
  base: '/boyles-flooring',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
