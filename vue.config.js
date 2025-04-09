const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  filenameHashing: true,
  runtimeCompiler:true,
  assetsDir: "assets",
  lintOnSave: false,
  devServer: {
    proxy: {
      '^(?!/ws)/': {
        target:'https://cc.dev.botterfly.ru',
        ws: false,
        changeOrigin: true
      }
    },
  }
})
