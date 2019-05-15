const merge = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].[ext]',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     "css-loader"
      //   ]
      // }
    ]
  }
})
