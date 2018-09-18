require('babel-register');

const webpack = require('webpack');
const express = require('express');
//import path from 'path';
const config = require('../../webpack.dev');



const app = express();
const compiler = webpack(config);



const webpackDashboardPlugin = require('webpack-dashboard/plugin');
const webpackDevMiddleware = require(
  'webpack-dev-middleware'
)(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);



compiler.apply(new webpackDashboardPlugin());



// these three must be in this order
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);
app.use(express.static("dist"));
app.use(express.static("public"));



app.listen(1337, () => {
  console.log("Server is listening.")
});