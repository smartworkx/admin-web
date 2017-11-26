const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true)
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Smartworkx admin app',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    watchContentBase: false,
    proxy: {
      '/admin-api/**': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/admin-api': ''},
        secure: false
      }
    },
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: 'css-loader',
          options: {
            modules: true, // https://github.com/react-toolbox/react-toolbox/issues/1278
            sourceMap: true,
            importLoaders: 1,
            localIdentName: "[name]--[local]--[hash:base64:8]"
          }
        },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // https://github.com/react-toolbox/react-toolbox/issues/1278
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[path]-[name]--[local]--[hash:base64:8]"
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};
