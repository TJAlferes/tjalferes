const path = require('path');
const webpack = require('webpack');
//const autoprefixer = require('autoprefixer');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
/*const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer'
).BundleAnalyzerPlugin;*/

module.exports = {
  mode: 'production',
  //devtool: 'source-map',
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          path.resolve(__dirname, 'src/server/devServer.js')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          //'style-loader',
          MiniCSSExtractPlugin.loader,
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
        exclude: path.resolve(__dirname, 'src/index.html'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
          /*
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
          */
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
        test: /\.(png|jpe?g|gif|ico)$/,
        use: [
          'url-loader'
          /*
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
          */
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin,
    new OptimizeCSSAssetsPlugin,
    new MiniCSSExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      inject: true,
      //template: __dirname + '/public/index.html',
      filename: 'index.html',
      //inject: 'body'
    }),
    new UglifyJSPlugin()
  ]
};