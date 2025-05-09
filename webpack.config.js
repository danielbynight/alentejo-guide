path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const devPlugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
  new webpack.WatchIgnorePlugin([
    /\.scss\.d\.ts$/,
  ]),
]

const prodPlugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css',
  }),
  new webpack.WatchIgnorePlugin([
    /\.scss\.d\.ts$/,
  ]),
  new CleanWebpackPlugin(),
  new CopyPlugin([
    'src/assets',
  ]),
]

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'
  return ({
    entry: ['./src/index.tsx'],
    output: {
      filename: '[name].[hash].bundle.js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      path: __dirname + '/docs',
      publicPath: '/',
    },
    plugins: isProduction ? prodPlugins : devPlugins,
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
      alias: {
        src: path.resolve(__dirname, 'src/'),
      },
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        {
          test: /\.scss$/,
          loader: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
                sass: true,
                namedExport: true,
                camelCase: true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /.(jpe?g|gif|png|svg|woff2?|ttf|eot|otf)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 1000 },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: __dirname + '/docs',
      compress: true,
      port: 9000,
      historyApiFallback: true,
    },
  })
}
