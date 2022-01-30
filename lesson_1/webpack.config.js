const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [{
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
        //   "style-loader",                // Inject CSS into the DOM
          MiniCssExtractPlugin.loader,      // Extracts CSS into separate files
                                            // and inserts the link tag in the given position (head section)
          "css-loader",
          "sass-loader",
        ],
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'GeekBrains Shop JS2',
        template: path.resolve(__dirname, './public/template.html'),    // шаблон
        filename: 'index.html',                                         // название выходного файла
    }),
    new MiniCssExtractPlugin ({
        filename: 'style.css',
        insert: 'head'
    }),
  ],
};