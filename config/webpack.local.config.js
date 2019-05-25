const webpack = require('webpack');
const config = require('./webpack.config');

config.plugins.push(new webpack.DefinePlugin({
    API_BASE: JSON.stringify('http://localhost:3000')
}));

module.exports = config;