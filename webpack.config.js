/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
  entry: ['./demo/js/index'],
  output: {
    path: __dirname,
    filename: '[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ProgressPlugin(function handler(percentage, msg) {
      console.log('\x1b[36m',percentage*100 + ' %','\x1b[0m',msg);
    }),
    new ExtractTextPlugin('[contenthash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'jsondiffpath-for-react',
      template:'./demo/index.tmpl',
      inject: true
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: process.env.NODE_ENV === 'dev',
    })
  ],
  resolve: {
    extensions: ['', '.js', '.styl'],
    root: [
      path.join(__dirname, 'js'),
      path.join(__dirname, 'css'),
    ],
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint', 'jscs'],
        include: path.join(__dirname, '/demo/js')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, '/demo/js')
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'postcss!' + 'less?sourceMap'
        )
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!' + 'postcss')
      }, {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!' + 'postcss!' + 'stylus')
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml!img'
      }, {
        test: /\.(jpg|png|gif|ico)$/,
        loader: 'file?limit=10000&name=[path][hash].[ext]'
      }, {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(__dirname, '/demo/js')
      }
    ],
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  }
};
