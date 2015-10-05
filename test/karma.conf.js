module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            'app/bower_components/angular/angular.min.js',
            'app/bower_components/angular-route/angular-route.min.js',
            'app/bower_components/angular-resource/angular-resource.min.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ],
        singleRun: false
    });
};
