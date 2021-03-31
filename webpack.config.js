const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const glob = require('glob');
const path = require("path");

module.exports = function webpackConfig() {
  const config = {
    resolve: {
      alias: {
        src: path.join(__dirname, "src")
      },
      modules: ["./src", "./node_modules"]
    },
    entry: glob.sync('src/**/**.js').reduce(function(obj, el){
        el = el.replace("src/","");
        var outputdir= (path.parse(el).dir)+'/'+path.parse(el).name ;
        obj[outputdir] = el;
        return obj
    },{}),
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "[name].js",
      clean: true
    },
    mode : "production",
    devtool: false, // 'source-map',
//    devServer: {
//      contentBase: './dist',
//    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader"
          }
        },
        {
          test: /\.css$/, // or /\.css$/i if you aren't using sass
          use:[
              {
                loader: 'style-loader',
                options: {
                  insert: 'head', // insert style tag inside of <head>
                  injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
                },
              },
                "css-loader",    //its only acts if you import a css by javascript like import css from "/static/css/popup.css";
              ],
        },
      ]
      },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CopyWebpackPlugin( {patterns: [
        {
          from: "static"
        }
      ]})
    ]
  };

  return config;
};
