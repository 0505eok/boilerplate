const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules:[{
                test: /\.(sa|sc|c)ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use:[{
                        loader: 'file-loader',
                        options: {
                            name:'image/[name].[ext]?[hash]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            inject: true,
            filename: 'views/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}