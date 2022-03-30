const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  module: {
    rules: [

      //JavaScript loading
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        loader: "babel-loader"
      },

      //CSS loading
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      //SASS/SCSS loading
      {
        test: /\.(s[ac]ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },

      //File loading
      {
        test: /\.(jpg|png|svg|jpeg|ico|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name]-[sha1:hash:7].[ext]"
            }
          }
        ]
      },

      //Fonts loading
      {
        test: /\.(ttf, woff, woff2, otf, eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]"
            }
          }
        ]
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Loomi",
      buildTime: new Date().toISOString(),
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main-[hash:8].css"
    })
  ],

  devServer: {
    port: 3000,
    open: true,
  }
}