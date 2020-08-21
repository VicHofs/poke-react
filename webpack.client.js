const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle_client.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loaders: [MiniCssExtractPlugin.loader, 'css-loader']
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
        ],

    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'bundle.css'
        }),
    ],
    mode: "development"
}
