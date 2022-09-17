const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',  
  entry: {
    // vendor: ['semantic-ui-react'],
    app: './src/index.js',
  },
  target: ['web', 'es5'],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: __dirname+'/dist', 
    // path: path.resolve(__dirname, 'dist'),
    publicPath: '/webpack-react-js-mpa-example/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
        },
        // vendor: {
        //   chunks: 'initial',
        //   test: 'vendor',
        //   name: 'vendor',
        //   enforce: true
        // }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
      // favicon: 'public/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      template: 'public/404.html',
      filename: '404.html'
      // favicon: 'public/favicon.ico'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: ['/webpack-react-js-mpa-example'],
    static: __dirname+'/dist',
    hot: true,
    // openPage: '/webpack-react-js-mpa-example'
  }
};