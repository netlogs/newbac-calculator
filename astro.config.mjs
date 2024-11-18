import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  integrations: [tailwind(), sitemap()],
  site: 'https://baccalculator.app',
  trailingSlash: 'never',
  adapter: cloudflare({
    mode: 'directory',
  }),
});