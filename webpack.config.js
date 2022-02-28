const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const csssass = new MiniCssExtractPlugin();
module.exports = {
    mode: "development",
    entry: "./src/scripts/main.js",
    output : {
        path: path.join(__dirname, 'public'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
            },
            {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [csssass],
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};