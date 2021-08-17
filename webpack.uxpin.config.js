/* eslint-disable sort-keys */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: require.resolve('babel-loader', { paths: ['./node_modules/@uxpin/merge-cli'] }),
            test: /\.js?$/,
            exclude: /node_modules/,
            options: {
            presets: [
            require.resolve('@babel/preset-env', { paths: ['./node_modules/@uxpin/merge-cli'] }),
            require.resolve('@babel/preset-react', { paths: ['./node_modules/@uxpin/merge-cli'] })
            ],
          }
          },
          // {
          //   test: /\.svg$/,
          //   exclude: /node_modules/,
          //   loader: 'svg-react-loader'
          // },
          // {
          //   loader: "babel-loader",
          //   test: /\.js?$/,
          //   exclude: /node_modules/
          // },
          // { 
          //   enforce: "pre", 
          //   test: /\.js$/, 
          //   loader: "source-map-loader" 
          // },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
        ]
      },
      
    ]
  }
}



// {
//   loader: require.resolve('babel-loader', { paths: ['./node_modules/@uxpin/merge-cli'] }),
//   test: /\.js?$/,
//   exclude: /node_modules/,
//   options: {
//     presets: [
//       require.resolve('@babel/preset-env', { paths: ['./node_modules/@uxpin/merge-cli'] }),
//       require.resolve('@babel/preset-react', { paths: ['./node_modules/@uxpin/merge-cli'] })
//     ],
//   }
// },