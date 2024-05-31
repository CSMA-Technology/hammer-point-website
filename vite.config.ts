import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), purgeCss(), topLevelAwait()]
});
