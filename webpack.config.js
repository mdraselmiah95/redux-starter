const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack",
      template: path.resolve(__dirname, "./src/template.html"), // template file
      filename: "index.html", // output file
    }),
  ],
  mode: "development",
  devtool: "source-map",
};
