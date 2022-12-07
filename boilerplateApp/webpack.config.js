const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    clean: true,
  },
  devtool: "eval-source-map",
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".scss"],
  },
  plugins: [],
};

if (currentTask === "build") {
  config.mode = "production";
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(new MiniCssExtractPlugin({ filename: "main.css" }));
}

module.exports = config;
