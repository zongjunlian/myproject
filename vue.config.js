const path = require('path')
const webpack = require('webpack')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const plugins1 = ["@vue/babel-plugin-transform-vue-jsx"]

// 生产环境移除console
if(process.env.NODE_ENV === 'production') {
  plugins1.push("transform-remove-console")
}

module.exports = {
  publicPath: './',
  outputDir: process.env.NODE_ENV === "development" ? "devFAS" : "FAS", //不同环境打不同包名
  lintOnSave: true,
  assetsDir: 'static',
  
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('apis', resolve('src/apis'))
      .set('_c', resolve('src/components'))
      // .set('excel', resolve('/src/excel'))//新增加一行
  },
  configureWebpack: {
    plugins: plugins1,
    presets: [
      [
        '@vue/app', {
          modules: false,
          targets: {
            browsers: ["> 1%", "last 2 versions", "not ie <= 8", "Android >= 4", "iOS >= 8"]
          },
          useBuiltIns: 'entry',
        }
      ]
    ]
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jquery: 'jquery',
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ],
  },
  
  configureWebpack: (config) => {
    config.entry = ["babel-polyfill", "./src/main.js"]
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  productionSourceMap: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    modules: false
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    // open: process.platform === 'darwin',
    open: true,
    // host: '0.0.0.0',
    port: 8081, //端口号
    https: false,
    hotOnly: true, //热更新
    proxy: {
      "/FAS": {
        target: "http://10.10.23.225:8080/FAS",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '/FAS' : ''
        }
      },
      "/api": {
        target: "http://10.10.23.225:8080/FAS",
        changeOrigin: true,
        ws: true,
        secure: false
      },
    }, // 设置代理
    before: app => {}
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/common.less'),
      ]
    }
  },
}
