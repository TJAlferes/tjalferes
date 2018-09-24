//require('babel-runtime/regenerator');
//require('webpack-hot-middleware/client?reload=true');
/*
const requireDir = require('require-dir');
// also see: require-all and require-dir-all
// https://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder
*/
require('./index.html');
require('./index.css');
/*
requireDir('./articles', {recurse: true});
requireDir('./biography', {recurse: true});
requireDir('./books', {recurse: true});
//requireDir('./images', {recurse: true}); // ?
requireDir('./paintings', {recurse: true});
requireDir('./sites', {recurse: true});
*/
console.log(process.env.NODE_ENV + ' environment');