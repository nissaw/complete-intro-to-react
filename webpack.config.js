const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    // first it will look for MyTitle with non extention, then with .js then .jsx ...
    extensions: ['', '.js', '.jsx', '.json']
  },
  // stats help us with error reporting
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  // all the external modulaes that you want webpack to pull in
  module: {
    loaders: [
      {
        // if a file name passes this regex run the loaders on it
        test: /\.jsx?$/,
        // if file passes the test run through babel-loader
        loader: 'babel-loader'
      }
    ]
  }
}

// by building this config we were able to remove this from package.json scripts
// "build": "webpack --module-bind 'js=babel' js/ClientApp.js public/bundle.js"
