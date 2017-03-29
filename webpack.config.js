module.exports = {
  entry: "./assets/js/entry.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
      },
      {
        test: /\.scss$/,
        loaders: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
};
