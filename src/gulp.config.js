var webpack = require('webpack');

module.exports = {
	build: Date.now(),
	scripts: {
		paths: {
			all: './scripts/*.js',
			entry: './scripts/index.js',
			output: {
				dev: '../chrome-extension',
				prod: '../chrome-extension'
			}
		}
	},
	styles: {
		paths: {
			all: './styles/**/*.scss',
			entry: './styles/styles.scss',
			output: {
				dev: '../chrome-extension',
				prod: '../chrome-extension'
			}
		},
		sourcemaps: false
	},
	ports: {
		express: 8080,
		livereload: 35729,
		expressRoot: '../chrome-extension'
	},
	webpack: {
		cache: true,
		output: {
			filename: 'index.js'
		},
		resolve: {
			modulesDirectories: ['node_modules']
		},
		resolveLoader: {
			modulesDirectories: ['node_modules']
		}
	},
	connect: {
		port: 8080,
		root: './'
	},
	liveReload: {
		port: 35729
	}
};