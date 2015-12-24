module.exports = {
  entry: './src/emojito.js',
  output: {
    path: __dirname + '/dist',
    filename: 'emojito.js',
    library: 'Emojito',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
