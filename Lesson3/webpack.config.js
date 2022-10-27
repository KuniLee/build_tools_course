const path = require("path")
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const thePlugins = () => {
    return [
        new HTMLWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: `index.html`,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ]
}

const sccLoaders = extra => {
    const loaders = [MiniCssExtractPlugin.loader, "css-loader"]
    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

const config = {
    context: path.resolve(__dirname, ""),
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'media/[hash][ext][query]',
    },
    resolve: {
        extensions: [".js", ".json", ".png"],
        alias: {
            "@images": path.resolve(__dirname, 'src/images'),
            "@audio": path.resolve(__dirname, 'src/audio'),
            "@": path.resolve(__dirname),
        },
    },
    plugins: thePlugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: sccLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: sccLoaders("sass-loader"),
            },
            {
                test: /\.(png|jpe?g|webp|git|svg|)$/i,
                use: [
                    {
                        loader: `img-optimize-loader`,
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false
                            }
                        }
                    },
                ],
            },
            {
                test: /\.(ogg|mp3|wav|mp4)$/i,
                type: 'asset/resource',
            },
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },
        ]
    },
    devServer: {
        static: path.join(__dirname, ''),
        port: 4200,
        compress: true,
        open: true,
    }
}


module.exports = config

