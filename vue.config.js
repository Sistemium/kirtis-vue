process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {

  publicPath: '/',

  transpileDependencies: [
    'sistemium-vue',
    'sistemium-debug',
  ],

  pwa: {
    themeColor: '#3F51B5',
  },

  productionSourceMap: false,

  devServer: {
    proxy: {
      '^/api': {
        target: 'http://kirtis.info',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api/dr50': '/apis',
        // },
      },
    },
  },

};
