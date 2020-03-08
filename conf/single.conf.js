exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || '<BROWSERSTACK_UNAME>',
  key: process.env.BROWSERSTACK_ACCESS_KEY || '<API_KEY>',

  updateJob: false,
  
  specs: [
    './tests/specs/bank_register_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'Chrome',
    name: 'single_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
