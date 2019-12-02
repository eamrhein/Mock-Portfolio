const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const config = {
  entry: path.join(__dirname, './public/javascripts/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new MinifyPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pdt/),
  ],
  devtool: 'source-map',
};

module.exports = config;
