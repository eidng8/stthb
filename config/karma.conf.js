/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

module.exports = config => {

  const testWebpackConfig = require('./webpack.test.js')({});

  // noinspection JSUnresolvedVariable
  const configuration = {

    // enable / disable watching file and executing tests whenever any file
    // changes
    autoWatch: false,

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    browserDisconnectTimeout: 30000,

    browserNoActivityTimeout: 30000,

    /*
     * start these browsers
     * available launchers: https://npmjs.org/browse/keyword/karma-launcher
     */
    browsers: ['PhantomJS'],

    client: {
      captureConsole: false
    },

    colors: true,

    files: [
      {
        pattern: './config/karma-shim.js',
        watched: false
      },
      {
        included: false,
        nocache: false,
        pattern: './src/assets/**/*',
        served: true,
        watched: false
      }
    ],
    frameworks: ['jasmine'],

    /*
     * level of logging
     * possible values:
     * - config.LOG_DISABLE
     * - config.LOG_ERROR
     * - config.LOG_WARN
     * - config.LOG_INFO
     * - config.LOG_DEBUG
     */
    logLevel: config.LOG_WARN,

    port: 9876,
    preprocessors: {
      './config/karma-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

    /*
     * By default all assets are served at http://localhost:[PORT]/base/
     */
    proxies: {
      '/assets/': '/base/src/assets/'
    },

    reporters: ['mocha'],

    singleRun: true,

    webpack: testWebpackConfig,
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i.e.
      noInfo: true,
      // and use stats to turn off verbose output
      stats: {
        // options i.e.
        chunks: false
      }
    }
  };

  if(process.env.NO_COVERAGE !== 'true') {
    configuration.reporters.push('coverage', 'remap-coverage');
    configuration.coverageReporter = {
      type: 'in-memory'
    };

    configuration.remapCoverageReporter = {
      html: './coverage/istanbul',
      lcovonly: './coverage/lcov.info',
      'text-summary': null
    };
  }

  config.set(configuration);
};
