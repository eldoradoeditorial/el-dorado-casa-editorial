import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eldoradocasaeditorial.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['@sanity/client', '@sanity/image-url']
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  server: {
    port: 3000,
    host: true
  }
});