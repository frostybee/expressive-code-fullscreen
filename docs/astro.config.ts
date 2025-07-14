import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

const siteURI = 'https://frostybee.github.io';
export default defineConfig({
  site: siteURI,
  base: "/expressive-code-fullscreen",
  integrations: [
    starlight({
      title: 'Expressive Code Fullscreen Plugin',
      favicon: '/images/full-screen.svg',            
      sidebar: [
        {
          label: 'Start Here',
          collapsed: false,
          items: [
            { slug: 'getting-started' },
            { slug: 'configuration' },
          ],
        },
        {
          label: 'Features & Examples',
          collapsed: false,
          items: [
            { slug: 'features' },
            { slug: 'examples' },
          ],
        }
      ],
      social: [
        { href: 'https://github.com/frostybee/expressive-code-fullscreen', icon: 'github', label: 'GitHub' },
      ],
    }),
  ],
})
