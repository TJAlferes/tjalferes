const path = require('path');
const webpack = require('webpack');
//const autoprefixer = require('autoprefixer');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  //devtool: 'source-map',
  entry: {main: ['./src/main.js']},
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {splitChunks: {chunks: 'all'}},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        exclude: path.resolve(__dirname, 'src/index.html'),
        use: [{loader: 'file-loader', options: {name: '[name].[ext]'}}]
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new CleanPlugin,
    new OptimizeCSSAssetsPlugin,
    new MiniCSSExtractPlugin({filename: '[name]-[contenthash].css'}),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      inject: true,
      filename: 'index.html'
    }),
    new UglifyJSPlugin()
  ]
};