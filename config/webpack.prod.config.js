const webpack = require('webpack');
const config = require('./webpack.config');

config.plugins.push(new webpack.DefinePlugin({
    API_BASE: JSON.stringify('https://ludusblog.herokuapp.com')
}));

module.exports = config;