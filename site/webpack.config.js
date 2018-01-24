const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const html = new HtmlPlugin({
  template: 'index.hbs',
});

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [html],
  devServer: {
    contentBase: './dist',
  },
};

module.exports = config;
