const webpack = require("webpack");
const config = require("./webpack.config");

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compress: {
      warnings: false,
      drop_console: true
    }
  })
);

module.exports = config;
