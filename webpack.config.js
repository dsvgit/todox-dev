const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (config) => {
  return {
    entry: {
      index: "./src/main.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: config.WEBPACK_SERVE ? "index.html" : "../index.html",
      }),
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      clean: true,
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      compress: true,
      hot: true,
      port: 3000,
      static: {
        directory: path.join(__dirname),
      },
    },
  };
};
