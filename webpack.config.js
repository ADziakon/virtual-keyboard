const path = require('path');

module.exports = {
  entry: './assets/scripts/scripts.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false },
          },
        ],
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './assets/styles/vars.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 3000,
  },
};
