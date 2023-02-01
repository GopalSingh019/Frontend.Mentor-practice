const path=require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode:"development",
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module:{
        rules:[
            { test: /\.css$/,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                  }
                }
              }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./dist/index.html", // base html
      })],
    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        port: 3030,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      }
}