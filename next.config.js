const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  postcssLoaderOptions: {
    plugins: [
      require('postcss-import'),
      require('postcss-media-variables'),
      require('postcss-css-variables'),
      require('postcss-media-variables'),
      require('autoprefixer'),
    ]
  }
})