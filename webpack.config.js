const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let globule = require('globule');
let mode = 'development';
if ( process.env.NODE_ENV === 'production' ) {
  mode = 'production'
}
console.log(mode + ' mode');

const paths = globule.find(["src/pages/**/*.pug"])
const jspaths = globule.find(["src/pages/**/*.js"])

module.exports = {
  mode: mode,
  entry: {
    colorsTypes: './src/pages/colorsTypes/colorsTypes.js',
    formElements: './src/pages/formElements/formElements.js',
  },
  output: {
    filename: (mode === 'development') ? '[name].js' : '[name],[contenthash].js',
    assetModuleFilename: "assets/[hash][ext][query]",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devServer: {
    static: {
      directory: "./src/pages/colorsTypes",
    }
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: (mode === 'development') ? '[name].css' : '[name].[contenthash].css'
}),
  //   new HtmlWebpackPlugin({
  //   template: "./src/pages/colorsTypes/colorsTypes.pug"
  // }),
    ...paths.map((path) => {
      return new HtmlWebpackPlugin( {
        template: path,
        filename: `${path.split(/\/|.pug/).splice(-2, 1)}.html`,
      });
    })],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      //Options
                    }
                  ]
                ]
              }
            }
          },
          "sass-loader",
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node-modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },

}