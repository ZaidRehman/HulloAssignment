var path = require('path')
var glob = require("glob");

module.exports = {
  entry: path.join(__dirname, 'index.js'),//glob.sync('./src/**/*.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'polymer-webpack-loader' }
        ]
      }
    ]
  }
}