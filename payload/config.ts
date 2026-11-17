import { Payload } from '@/lib/payload/types';

/**
 * Site configuration.
 *
 * Navigation is optional: pages under `content/` are discovered automatically,
 * ordered by their frontmatter `order` and grouped by folder. Add a
 * `navigation` array here only when you want to override that.
 */
export const payload: Payload = {
  global: {
    title: 'Wokabi Simon\'s Notes',
    description: 'Welcome to capture, organize & share knowledge',
    favicon: '/favicon.svg',
    baseUrl: 'https://wokabis.github.io/d',
    /** 
     * 'path' gives readable, indexable URLs (/guides/writing).
     * 'hash' gives opaque ones (/a3f2e9d1-...), hiding the structure at the
     * cost of SEO and shareable links.
     */
    urlStrategy: 'path',

    /** Publish pages found under content/ without listing them below. */
    autoNavigation: true,
  },

  theme: {
    primary: '#2563eb',
    secondary: '#7c3aed',
  },
};

export default payload;
