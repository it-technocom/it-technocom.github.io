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
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: '',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
        {
          label: 'Guides',
          items: [
            {
              label: 'ระบบเพิ่มสมาชิกและการเชิญผู้ใช้งาน',
              slug: 'guides/member-registration',
            },
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
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
		}),
	],
});
