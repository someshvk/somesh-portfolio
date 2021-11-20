const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output:{
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js',
        publicPath: './',
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
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
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
        new MiniCssExtractPlugin(
            {
                filename: "[name].css",
                chunkFilename: "[id].css",
            }
        ),
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
        ),
    ],
    optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin(),
          new TerserPlugin(),
        ],
      },
};