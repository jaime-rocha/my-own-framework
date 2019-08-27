// Protractor configuration file
exports.config = {
  //directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions':{
      'args': ['--window-size=360,800'],
      'mobileEmulation': {
        'deviceName': 'Nexus 5'
      }
    }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['../test_suites/functional/MenuAccesibilityTest_spec.js'],
  suites: {
        smoke:['../test_suites/smoke/QA_BNT_Solicitudes_spec.js'],
        //functional:['../test_suites/functional/*_spec.js'],
        //selected:['../test_suites/smoke/QA_BNT_Salir_spec.js']
  },

  //HTMLReport called once tests are finished
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');

      var HTMLReport = require('protractor-html-reporter');

      testConfig = {
        reportTitle: 'Test Execution Report',
        outputPath: '../reports',
        screenshotPath: '../reports/screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true
      };
      new HTMLReport().from('../reports/xmloutput.xml', testConfig);
    });
  },

  //Preparing jasmine reports for Protractor
  onPrepare: function() {

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: '../reports',
      filePrefix: 'xmloutput'
    }));

    var fs = require('fs-extra');

    fs.emptyDir('../reports/screenshots/', function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function(result) {
        if (result.status === 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('../reports/screenshots/' + browserName + '-' + result.fullName+ '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

};
