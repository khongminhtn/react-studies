const webpack = require('webpack') // import webpack module

module.exports = {
  entry: [
    'webpack-dev-server/client/?http://localhost:8080', // include wds
    './jsx/app.jsx' // include main app
  ],
  output: {
    publicPath: 'js/', // set path for wds to make bundle.js
    path: __dirname + '/js/', //path to bundled files
    filename: 'bundle.js' //name for bundled files to use in index.html
  },
  devtool: '#sourcemap', //Specifies mapping source of actual line code rather than compiled code
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }, //import then inject css into webpage from JS
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot-loader', 'babel-loader'] // loader will perform jsx transformation and automatically enable HMR on all jsx files
      }
    ]
  },
  devServer: { 
    hot: true // sets wds to hmr mode
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // includes the HMR plugin
}
