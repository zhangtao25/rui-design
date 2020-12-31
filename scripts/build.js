const configFactory = require('../config/webpack.config');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = merge(configFactory, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                modifyVars: {
                  // 'primary-color': '#CF5659',
                  // 'link-color': '#CF5659'
                },
                javascriptEnabled: true,
              }
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  mode: "production"
})
