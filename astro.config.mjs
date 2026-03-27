import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://olympohn.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/nosotros') &&
        !page.includes('/portafolio') &&
        !page.includes('/blog'),
      serialize(item) {
        // Home — máxima prioridad
        if (item.url === 'https://olympohn.com/')
          return { ...item, priority: 1.0, changefreq: 'weekly' };

        // Landing pages geo-targeted — prioridad alta
        if (item.url.includes('/desarrollo-software-santa-rosa'))
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        if (item.url.includes('/desarrollo-software-copan'))
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        if (item.url.includes('/desarrollo-software-honduras'))
          return { ...item, priority: 0.9, changefreq: 'monthly' };

        // Servicios
        if (item.url.includes('/servicios'))
          return { ...item, priority: 0.9, changefreq: 'monthly' };

        // Contacto
        if (item.url.includes('/contacto'))
          return { ...item, priority: 0.8, changefreq: 'monthly' };

        // Default
        return { ...item, priority: 0.6, changefreq: 'monthly' };
      },
    }),
  ],
});
