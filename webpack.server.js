const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    entry: "./server.js",
    output: {
        filename: "bundle_server.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        },

        {
            test: /\.css$/,
            loader: 'css-loader'
        },

        {
            test: /\.(ico|png|otf|woff|woff2|eot|ttf|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/'
                    }
                }
            ]
        }
        ]
    },
    mode: "development",
    externals: [webpackNodeExternals()]
}
