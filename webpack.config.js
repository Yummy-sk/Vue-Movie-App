const _require = (id) =>
  require(require.resolve(id, { paths: [require.main.path] }));

const path = _require("path");
const HtmlPlugin = _require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { VueLoaderPlugin } = _require("vue-loader");

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },

  entry: "./src/main.js",

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요!
          "vue-style-loader",
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new Dotenv({ systemvars: true }),
  ],

  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
  },
};
