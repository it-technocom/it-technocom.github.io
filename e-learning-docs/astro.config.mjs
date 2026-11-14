// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://it-technocom.github.io',
  base: '/docs/e-learning',
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
              label: 'การใช้งานระบบฝั่งคุณครู (Teacher)',
              slug: 'guides/teacher-guide',
            },
            {
              label: 'การใช้งานระบบฝั่งนักเรียน (Student)',
              slug: 'guides/student-guide',
            },
            {
              label: 'ทำไมต้อง YouTube Video Hosting?',
              slug: 'guides/youtube-video-hosting',
            },
            {
              label: 'วิธีการเพิ่ม Chapter และ Timeline ให้ลิงก์กับ App',
              slug: 'guides/youtube-chapters-timeline',
            },
          ],
        },
        {
          label: 'Student',
          items: [{ autogenerate: { directory: 'student' } }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
		}),
	],
});
