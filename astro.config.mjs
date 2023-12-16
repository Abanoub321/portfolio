import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), image(), storyblok({
		accessToken: env.STORYBLOK_TOKEN,
		components: {
			// Add your components here
			blogPost: 'storyblok/BlogPost',
			blogPostList: 'storyblok/BlogPostList',
			page: 'storyblok/Page',
		},
		apiOptions: {
			// Choose your Storyblok space region
			region: 'eu', // optional,  or 'eu' (default)
		},
	})],
});
