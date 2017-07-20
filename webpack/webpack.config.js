const path = require("path");
const webpack = require("webpack");

const EXCLUDE = (/node_modules/);

const config = {
  entry: {
    globalProvider: "./index.jsx"
  },
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: [{ loader: "babel-loader" }], exclude: EXCLUDE }
    ]
  },
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        SMA_API_URL: JSON.stringify("https://api.socialmedia.eon.com")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
};

module.exports = config;
