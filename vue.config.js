//vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Smart сегменты'
      return args
    })
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/test__progressterra/' : '/',
}
