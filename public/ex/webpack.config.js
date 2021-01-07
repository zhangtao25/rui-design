const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: {
    'content-scripts': './src/content-scripts/index.ts',
    background: './src/background/index.ts',
    'popup': './src/popup/index.ts'
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {test: /\.tsx?$/, loader: "ts-loader"}
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/popup/index.html',
          to: 'popup.html'
        },
        {
          from: 'src/background/index.html',
          to: 'background.html'
        },
        {
          from: 'src/images',
          to: 'images'
        }
      ]
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 文件引用不需要后缀名
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: "source-map",
  // 模式，暂时还不知道干什么的
  mode: "development"
}
