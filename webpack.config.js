const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const loader = require('sass-loader');
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const srcDir = path.resolve(__dirname, 'src');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js',
        publicPath: '/',
        // assetModuleFilename: "images/[name].[ext][query]",
    },
    devServer:{
        port: 3000,
        static: {
            watch: true,
        },
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                // options: {
                //     sourceMap: true,
                // },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                exclude: /node_modules/,
                loader: require.resolve('url-loader'),
                options: {
                    name: '[name].[ext]',
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
            {
                title: 'Somesh Khandelwal',
                template: __dirname + '/src/index.html',
                filename: 'index.html',
                inject: 'body',
                favicon: __dirname + '/src/favicon.ico',
                minify: {
                    collapseWhitespace: true,
                }
            }
        )
    ]
};