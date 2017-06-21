/**
 * Created by alexrgb on 21.06.17.
 */

const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: './index.js',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'static'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    target: 'web',
    resolve: {
        extensions: [ ".js" ]
    },
    watchOptions: {
        aggregateTimeout: 100,
        poll: 500
    },
    devtool: 'inline-source-map'
};