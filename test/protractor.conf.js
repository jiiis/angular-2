exports.config = {
    baseUrl: 'http://localhost:8080/',
    allScriptsTimeout: 11000,
    specs: [
        'e2e/*.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    chromeOnly: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
