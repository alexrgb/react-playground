/**
 * Created by alexrgb on 21.06.17.
 */

const path = require("path");
let nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server.js',
    output: {
        filename: './dist/app.js',
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
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: [ ".js" ]
    },
};