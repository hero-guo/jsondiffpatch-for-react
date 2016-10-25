/* eslint-disable no-var */
var webpack = require('webpack');
var assign = require('object-assign');
var baseConfig = require('./webpack.config');

baseConfig.entry = [
  'webpack-dev-server/client?http://0.0.0.0:1114'
].concat(baseConfig.entry);
baseConfig.plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin()
].concat(baseConfig.plugins);
module.exports = assign({}, baseConfig);


