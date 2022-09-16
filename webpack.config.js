const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',  
  entry: {
    index: './src/index.js',
    // nomatch: './src/components/NoMatch.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname+'/dist', 
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname+'/public/index.html',
      // favicon: 'public/favicon.ico'
    }),
    // new CopyPlugin({
    //   patterns: [
    //       {
    //           from: 'public',
    //           to: './'
    //       }
    //   ]
    // })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    static: __dirname+'/dist'
  }
};