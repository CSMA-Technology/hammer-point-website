import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { sunset } from './src/sunset';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				'paper-light': '#fde9dd', // Formerly surface-200
				paper: '#fbdbc8', // Formerly surface-300
				'paper-dark': '#f8c19e', // Formerly surface-400
				'paper-darker': '#f5a675' // Formerly surface-500
			}
		}
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				custom: [sunset]
			}
		})
	]
} satisfies Config;
