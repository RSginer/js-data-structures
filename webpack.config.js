const path = require('path');


module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: "source-map",
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.ts'),
        use: [{
          loader: 'expose-loader',
          options: 'DataStructures'
        }],
      },
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /playground/],
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },

    ]
  },
};