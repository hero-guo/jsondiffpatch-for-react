/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var assign = require('object-assign');
var Clean = require('clean-webpack-plugin');
var baseConfig = require('./webpack.config');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var buildpath = process.env.NODE_ENV || 'dist';

baseConfig.plugins = [
  new Clean([buildpath]),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new TransferWebpackPlugin([
    {from: 'favicon'},
//    {from: 'icons', to: 'icons'},
  ]),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      ascii_only: true
    }
  })
].concat(baseConfig.plugins);

module.exports = assign({}, baseConfig, {
  devtool: 'hidden-source-map',
  output: {
    path: path.join(__dirname, buildpath),
    filename: '[hash].js',
    publicPath: '/'
  }
});
