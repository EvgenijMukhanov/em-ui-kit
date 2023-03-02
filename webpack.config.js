const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
      filename: "index.js",
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: "umd",
      clean: true
  },
  resolve: {
      extensions: ['.ts', '.tsx']
  },
  externals: {
      react: 'react'
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  }
};
