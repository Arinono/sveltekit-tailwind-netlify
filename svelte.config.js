import netlify from '@sveltejs/adapter-netlify'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: netlify(),
		vite: {
			resolve: {
				alias: {
					'@utils': path.resolve('src/lib/utils'),
					'@stores': path.resolve('src/lib/stores'),
					//
					'@atoms': path.resolve('src/lib/components/atoms'),
					'@molecules': path.resolve('src/lib/components/molecules'),
					'@organisms': path.resolve('src/lib/components/organisms'),
					'@templates': path.resolve('src/lib/components/templates'),
				}
			}
		}
	}
};

export default config;
