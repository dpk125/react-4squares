const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'client',
  context: path.resolve(__dirname, '../../client'),
  entry: './index.js',

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
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],

  resolve: {
    modules: [path.join(process.cwd(), '../../client'), 'node_modules'],
    extensions: ['.js', '.json']
  }
};