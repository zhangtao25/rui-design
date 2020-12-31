const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "static/js/main.[hash].chunk.js",
    publicPath:"/"
  },
  // 配置各种loade
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg|eot|ttf|woff)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'static/media',
            },
          },
        ],
      }
    ]
  },
  // 文件引用不需要后缀名
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // 本地开发服务
  devServer: {
    host: "0.0.0.0",//允许ip访问
    inline: true, //实时刷新
    hot: true, // 模块热替换机制
    port: 9050,
    compress: true,
    open: false, // 打开浏览器，默认false
    // https:true
  },
  // 插件配置处~
  plugins: [
    // 开启gzip压缩
    // new CompressionPlugin({
    //   // asset: '[path].gz[query]',// 目标文件名
    //   algorithm: 'gzip',// 使用gzip压缩
    //   // test: new RegExp(
    //   //     '\\.(js|css)$' // 压缩 js 与 css
    //   // ),
    //   // threshold: 1024,// 资源文件大于10240B=10kB时会被压缩
    //   // minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
    // }),
    new HtmlWebpackPlugin({
      template: 'public/' + (process.env.NODE_ENV === 'development' ? 'index.html' : 'index.html'),
      filename: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/main.[hash].chunk.css"
    }),
    // ...(process.env.NODE_ENV === 'development'?[]:new MiniCssExtractPlugin({
    //   filename: "static/css/main.[hash].chunk.css"
    // })),
    new WebpackBar(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          filter: async (resourcePath) => {
            // 排除index.html
            if (resourcePath.includes('public/index.html')) {
              return false;
            }
            if (resourcePath.includes('public/index.pro.html')) {
              return false;
            }
            return true;
          },
        }],
    }),
    // new webpack.DefinePlugin({  // 定义环境变量   可以写成  ENV:"'dev'" dev得是一个字符串形式
    //     NODE_ENV:JSON.stringify('ssss'), // 这里 不能直接写 ENV：'dev'  他会把dev看做成一个变量
    //     USERNAME:JSON.stringify('zyx'),
    // }),
  ],
  devtool: "source-map",
  // 模式，暂时还不知道干什么的
  mode: "development"
}
