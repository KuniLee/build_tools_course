const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const config = {
    context: path.resolve(__dirname, ""),
    mode: "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
       assetModuleFilename: 'media/[hash][ext][query]',
    },
    optimization: {
        usedExports: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: `index.html`,
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
                type: 'asset/resource',
            },]
    },
    devServer: {
        static: path.join(__dirname, ''),
        port: 4200,
        compress: true,
        open: true,
    }
}


module.exports = config