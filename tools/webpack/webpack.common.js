const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  name: 'client',
  context: path.resolve(__dirname, '../../client'),

  entry: {
    index: ['babel-polyfill', './index.js']
  },

  output: {
    path: path.resolve(__dirname, '../../public'),
    publicPath: '/',
    filename: 'client.min.js',
    sourceMapFilename: '[name].map'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, '../../client')],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {loose: true, modules: false}],
              'react'
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],

  resolve: {
    modules: [path.join(process.cwd(), '../../client'), 'node_modules'],
    extensions: ['.js', '.json']
  }
};