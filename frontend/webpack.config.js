const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "./app.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [{
            test: /.js|.jsx$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: ["@babel/plugin-proposal-object-rest-spread"]
            }
        },{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: "file-loader"
        }]
    },
    devServer : {
        port: 8081,
        contentBase: "./public",
        historyApiFallback: true
    },
}