module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: '@import "src/assets/scss/global.scss";'
			}
		}
	},
	productionSourceMap: false,
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true
			}
		}
	}
}