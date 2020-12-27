const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './public/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "cake.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}
