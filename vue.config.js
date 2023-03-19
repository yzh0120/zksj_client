/*
 * @Author: yz
 * @Date: 2022-11-16 17:22:44
 * @Description: 
 * 
 */
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const defaultSettings = require('./src/config/setting.js')
const name = '中科数建'

function fnStatic() {
  if (process.env.ENV === 'test') {
    return "/receive-platform-jsyh/"
  } else if (process.env.ENV === 'production') {
    return "/receive-platform-saas/"
  } else {
    return "/"
  }
}

module.exports = {
  // publicPath: process.env.ENV === 'test' ? '/oawebuat/' : '/',
  publicPath: fnStatic(), //这个必须，引入静态资源需要从根路径引入，否则会找不到静态资源
  devServer: {
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: '/index.html' //与output的publicPath
    },
  },
  productionSourceMap: false,
  configureWebpack: {
    name: name,
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@api': path.resolve(__dirname, './src/api'),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  },
  chainWebpack(config) {
    config.plugin('html')
      .tap(args => {
        args[0].title = name;
        return args;
      })
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
