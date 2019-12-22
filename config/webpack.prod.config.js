const webpack = require('webpack');
const config = require('./webpack.config');

config.mode = 'production';
config.plugins.push(new webpack.DefinePlugin({
    API_BASE: JSON.stringify('https://harmony-api.azurewebsites.net'),
    OKTA_CLIENT_ID: JSON.stringify('0oao8p5v0dZ9Zbbbc356')
}));

module.exports = config;