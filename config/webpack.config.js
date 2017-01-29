/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * If you are not using webpack to build your ionic app, this configuration
 * will not affect your code, see rollup.config.js instead.
 */

const webpackConfig = require(
  '../node_modules/@ionic/app-scripts/config/webpack.config');
const webpack = require('webpack');

console.log('Editing webpack configuration to inject env');

const nodeEnv =
  JSON.stringify(process.env.NODE_ENV) || JSON.stringify('development');

const apiUrl = JSON.stringify(process.env.API_URL) || JSON.stringify('');

const platform =
  JSON.stringify(process.env.PLATFORM) || JSON.stringify('android');

// noinspection JSUnresolvedFunction
/**
 * Plugin: DefinePlugin
 * Description: Define free variables.
 * Useful for having development builds with debug logging or adding global
 * constants.
 *
 * Environment helpers
 *
 * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
 */

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'API_URL': apiUrl,
      'NODE_ENV': nodeEnv,
      'PLATFORM': platform
    }
  })
);
