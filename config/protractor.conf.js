/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/* eslint-env jasmine, protractor */

const helpers = require('./helpers');
const SSReporter = require('protractor-jasmine2-screenshot-reporter');

// noinspection JSUnusedLocalSymbols
const screenShotReporter = new SSReporter({
  cleanDestination: true,
  dest: 'coverage/protractor',
  filename: 'e2e-report.html',
  pathBuilder(currentSpec, suites, browserCapabilities) {
    return `${browserCapabilities.get('browserName')}/${currentSpec.fullName}`;
  },
  reportTitle: 'E2E Tests Report'
});

exports.config = {
  afterLaunch(exitCode) {
    return new Promise(resolve =>
      screenShotReporter.afterLaunch(resolve.bind(this, exitCode)));
  },
  allScriptsTimeout: 30000,
  baseUrl: 'http://localhost:8090',
  beforeLaunch() {
    require('ts-node').register(
      {
        compilerOptions: {
          module: 'commonjs'
        },
        disableWarnings: true,
        fast: true,
        project: '.'
      });

    return new Promise(resolve => {
      screenShotReporter.beforeLaunch(resolve);
    });
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-web-security', '--window-size=1024,768', 'no-sandbox']
    }
  },
  directConnect: true,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000, // Default time to wait in ms before a
                                   // config fails.
    includeStackTrace: false,
    isVerbose: false,
    showColors: true, // If true, print colors to the terminal.
    showTiming: true
  },
  onPrepare () {
    // noinspection NpmUsedModulesInstalled, JSUnresolvedVariable
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    // add jasmine spec reporter
    // noinspection JSUnresolvedVariable, JSUnresolvedFunction
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: true
    }));
    // Add screen shot reporter
    // noinspection JSUnresolvedVariable, JSUnresolvedFunction
    jasmine.getEnv().addReporter(screenShotReporter);
    // noinspection JSUnresolvedVariable
    browser.ignoreSynchronization = false;
    // noinspection JSUnresolvedVariable, JSUnresolvedFunction, JSValidateTypes
    browser.driver.manage().window()
           .setSize(414, 736);
  },
  specs: [
    helpers.root('src/**/**.e2e.ts'),
    helpers.root('src/**/*.e2e.ts')
  ],

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on
   * the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true
};
