exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'giridharrajkumar4',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'cwc4jDX8SzmUDytrnFGu',

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
