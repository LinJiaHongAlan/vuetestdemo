module.exports = {
    devServer: {
	    proxy: {
		    '/v2/movie/in_theaters': {
		        target: 'http://api.douban.com',
		        ws: true,
		        changeOrigin: true
		    }
	    }
	}
}
