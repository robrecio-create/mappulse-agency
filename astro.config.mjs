import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.mappulse.agency',
  output: 'static',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [sitemap()],
});
