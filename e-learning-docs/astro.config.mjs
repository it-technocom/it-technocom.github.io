// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://it-technocom.github.io',
	integrations: [
		starlight({
			title: 'IT Technocom | E-Learning Document',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
            {
              label: 'ทำไมต้อง YouTube Video Hosting?',
              slug: 'guides/youtube-video-hosting',
            },
          ],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
		}),
	],
});
