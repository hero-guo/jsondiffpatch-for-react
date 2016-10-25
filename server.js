/* eslint-disable no-var, strict */
'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.develop');
var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  headers: {"Access-Control-Allow-Origin": "*"},
  historyApiFallback: true,
  stats: {colors: true}
});

server.listen(1114, function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:1114');
});
