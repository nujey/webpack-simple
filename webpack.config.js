const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|svg|jpe?g|gif)$/,
      use: [
        'file-loader',
        // {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 8192,
        //     name: 'images/[name]-[hash:8].[ext]',
        //     quality: 80
        //   }
        // },
        {
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
              quality: '65-90',
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
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    }]
  }
}
