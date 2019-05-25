const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'src/server/public/dist'),
        compress: true,
        port: 3001
    },
    devtool: 'source-map',
    entry: './src/client/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '../src/server/public/dist'),
        filename: 'main.[hash].js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/server/public/index.html",
            filename: "./index.html"
        })
    ]
}