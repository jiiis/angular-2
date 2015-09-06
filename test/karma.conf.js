module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            'app/bower_components/angular/angular.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['dots', 'progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
