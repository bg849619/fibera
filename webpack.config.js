const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./index.js'],
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build', 'assets'),
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', options: { presets: ['@babel/env', '@babel/preset-react']}},
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {extensions: ['*', '.js', '.jsx']},
}