const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(sass|scss|css)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../'),
  })

  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  })
  config.plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  )

  config.plugins.push(
    new CopyPlugin

    (
      {
        patterns: [
         { from: './src/**/*.css', to: './' },
//          { from: './src/**/*.png', to: './' },
//          { from: './src/**/*.jpg', to: './' },
          { from: './src/**/*.svg', to: './' },
          { from: './src/**/*.woff2', to: './' },
          { from: './src/**/*.woff', to: './' },
        ],
      },
    ),
  )

  return config
}
