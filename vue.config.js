const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	publicPath:
		process.env.NODE_ENV === 'production'
			? '/vue-youtube_thumbnail_download'
			: '/',
	transpileDependencies: true,
	css: {
		loaderOptions: {
			scss: {},
		},
	},
});
