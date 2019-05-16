const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
      app: './src/index.js',
      // h5app: './src/app.js'
    },
    output: {
      filename: '[name].[contenthash].js',
      // chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Production'
      }),
      new webpack.HashedModuleIdsPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(css)$/,
          loader: [
            process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: 'img/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false
            },
            pngquant: {
              quality: '60-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false
            },
            webp: {
              quality: 75
            }
          }
        }
      ]
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }