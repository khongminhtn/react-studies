module.exports = {
  entry: './jsx/app.jsx', //Defines the file to start bundling, main file
  output: {
    path: __dirname + '/js/', //path to bundled files
    filename: 'bundle.js' //name for bundled files to use in index.html
  },
  devtool: '#sourcemap', //Specifies mapping source of actual line code rather than compiled code
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }, //import then inject css into webpage from JS
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'] // Specifies that loader will perform jsx transformation
      }
    ]
  }
}
