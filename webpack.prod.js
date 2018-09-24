const path = require('path');
const webpack = require('webpack');
//const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
/*const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer'
).BundleAnalyzerPlugin;*/

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: ['./src/main.js']
  },
  output: {
    filename: '[name]-bundle.js',
    //filename: 'bundle.js',
    //chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
    //path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      /*
      {
        test: /\.css$/,
        use: [
          {
            loader: 'MiniCSSExtractPlugin.loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
          /*
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    "> 1%",
                    "last 2 versions"
                  ]
                })
              ]
            }
          }
          */
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      /*
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader'
          }
        ]
      },
      */
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
    new OptimizeCSSAssetsPlugin,
    /*new MiniCSSExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),*/
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
      //template: __dirname + '/public/index.html',
      //filename: 'index.html',
      //inject: 'body'
    }),
    new UglifyJSPlugin()
  ]
};