const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    hot: true,
    overlay: true,
    stats: {colors: true}
  },
  devtool: 'source-map',
  entry: {index: './src/main.js'},
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      },
      {
        test: /\.html$/,
        use: [{loader: 'html-loader', options: {attrs: ['img:src']}}]
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [{loader: 'file-loader', options: {name: 'images/[name].[ext]'}}]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'})
  ]
};