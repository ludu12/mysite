const webpack = require('webpack');
const config = require('./webpack.config');

config.mode = 'production';
config.plugins.push(new webpack.DefinePlugin({
  API_BASE: JSON.stringify('http://www.lukedunscombe.com'),
}));

module.exports = config;
