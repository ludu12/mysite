var webpack = require('webpack');
var path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // Since webpack 4 we will need to set in what mode webpack is running
    mode: 'development',
    devtool: 'source-map',
    entry: ['babel-polyfill', './src/client/index.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }        
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    // This will be where the final bundle file will be outputed
    output: {
        path: path.join(__dirname, '/src/server/public/dist/'),
        filename: 'bundle.js',
        publicPath: 'src/server/public/dist/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3001,
            server: { baseDir: ['./src/server/public/dist'] }
        }),
        new CleanWebpackPlugin(['./src/server/public/dist'])
    ]
};