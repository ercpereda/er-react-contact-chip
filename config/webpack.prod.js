var commonConfig = require('./webpack.common');
var webpackMerge = require('webpack-merge');
var path = require('path');

var config = webpackMerge(commonConfig, {
  entry: './src/ContactChips.js',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'er-react-contact-chip.js',
    libraryTarget: 'commonjs'
  },

  target: 'node',

  externals: {
    'react': 'react',
    'classnames': 'classnames'
  }
});

module.exports = config;
