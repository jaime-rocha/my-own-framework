// Karma configuration
// Generated on Wed Oct 28 2015 17:36:30 GMT-0400 (BOT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../../www/lib/ionic/js/ionic.bundle.min.js',
      '../www/lib/ngCordova/dist/ng-cordova.min.js',
      '../www/lib/ngMask/dist/ngMask.min.js',
      '../www/lib/angular-ui-router/release/angular-ui-router.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/angular-cookies/angular-cookies.min.js',
      '../www/lib/lodash/lodash.min.js',
      '../www/lib/restangular/dist/restangular.min.js',
      '../www/lib/angular-translate/angular-translate.min.js',
      '../www/lib/angular-translate-storage-local/angular-translate-storage-local.min.js',
      '../www/lib/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
      '../www/lib/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
      '../www/lib/ionic-service-core/ionic-core.js',
      '../www/lib/ionic-service-push/ionic-push.js',
      '../www/app/bisaMobile.js',
      '../www/{app,components}/**/*.js',
      '**/*tests.js',
      '../www/{app,components}/**/*.html',
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
