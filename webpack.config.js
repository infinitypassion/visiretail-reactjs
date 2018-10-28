let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const VISI_BASE_URL = '/visi-react/'; // Change this valu to deploy under subpath
// const VISI_BASE_URL = ''; // Keep it blank if there is no need of subfolder

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: VISI_BASE_URL
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|htc)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/_assets/favicon.ico',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      VISI_BASE_URL: VISI_BASE_URL
    })
  ],
  devServer: {
    inline: true,
    publicPath: VISI_BASE_URL,
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: {
      index: VISI_BASE_URL,
    }
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: 'http://localhost:8080'
    })
  }
};
