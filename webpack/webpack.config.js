const path = require("path");
const webpack = require("webpack");

const EXCLUDE = (/node_modules/);

const config = {
  entry: {
    "global-provider": "./index.js"
  },
  output: {
    libraryTarget: "amd",
    path: path.join(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: [{ loader: "babel-loader" }], exclude: EXCLUDE }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};

module.exports = config;
