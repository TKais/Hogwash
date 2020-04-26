const path = require('path');
const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');

module.exports = {
  mode: 'production',
  entry: './src/client/index.js',
  module: {
    rules: [
      {}
    ]
  },
  plugins: [
    new WebpackLighthousePlugin({
      url: 'http://localhost:8000',
      perf: true
    })
  ]
}
