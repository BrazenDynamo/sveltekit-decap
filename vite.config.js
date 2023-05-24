import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.']
		}
	},
	resolve: {
		alias: {
			'$collections': path.resolve('./src/collections')
		}
	}
};

export default config
