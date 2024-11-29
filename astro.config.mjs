import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  integrations: [
    tailwind(), 
    sitemap({
      filter: (page) => {
        return !page.includes('[...slug]');
      },
      customPages: [
        'https://baccalculator.app/blog/how-to-calculate-bac',
        'https://baccalculator.app/blog/how-long-alcohol-stays-in-your-body',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ],
  site: 'https://baccalculator.app',
  trailingSlash: 'never',
  adapter: cloudflare({
    mode: 'directory',
  }),
});