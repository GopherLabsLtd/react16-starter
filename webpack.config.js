const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ], exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ], exclude: /node_modules/ },
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=25000' }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    HtmlWebpackPluginConfig
  ]
}