const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const path = require('path');

const webpackConfig = {
	...defaultConfig,
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	plugins: [
		...defaultConfig.plugins.filter(
			(plugin) =>
				plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
		),
		new DependencyExtractionWebpackPlugin({
			injectPolyfill: true,
			requestToExternal(request) {
				if (request.startsWith('@wordpress/icons')) {
					return '';
				}
			},
			requestToHandle(request) {
				if (request.startsWith('@wordpress/icons')) {
					return '';
				}
			},
		}),
	],
};

module.exports = webpackConfig;
