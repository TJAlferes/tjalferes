const path = require('path');
const webpack = require('webpack');
//const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    hot: true,
    overlay: true,
    stats: {
      colors: true
    }
  },
  entry: {
    index: ['webpack-hot-middleware/client', './src/main.js']
  },
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
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(png|jp?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new DashboardPlugin()
  ]
};