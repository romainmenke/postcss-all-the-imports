module.exports = (ctx) => {
	return {
		map: ctx.options.map,
		parser: ctx.options.parser,
		plugins: [
			require('postcss-import-url')({ dataUrls: true }),
			require('postcss-import-ext-glob'),
			require('postcss-import'),
		],
	};
}
