const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  postcssLoaderOptions: {
    preserve: true
  }
})