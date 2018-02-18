const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require('../../config/webpack.config.dev.js');
const webpack = require("webpack");

module.exports = function (app) {
  app.use(webpackMiddleware(webpack(webpackConfig)))
}
