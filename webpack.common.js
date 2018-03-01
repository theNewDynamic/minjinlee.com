const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            // plugins: [require('babel-plugin-transform-object-rest-spread')]
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/dist/Fonts",
              outputPath: "/Fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        "./static/dist/js/*.js",
        "./static/dist/css/*.css",
        "./static/dist/Fonts/*.*",
      ],

      {
        root: __dirname,
        verbose: true,
        dry: false,
        allowExternal: true,
      }
    ),
  ],
  output: {
    path: path.join(__dirname, "./static/dist/"),
  },
}
