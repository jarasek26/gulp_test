module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [ 
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/todo/todo*.js',
        'app/test/*.js',
    ],
    exclude: [],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      'app/**/*.js': ['coverage']
    },
    plugins:[
      'karma-jasmine',
      'karma-coverage',
        'karma-chrome-launcher'
    ],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' }
      ]
    },
      client: {
      captureConsole: true
    },
    port: 9876,
    colors: true,
      // level of logging, possible values:
// config.LOG_DISABLE
// config.LOG_ERROR
// config.LOG_WARN
// config.LOG_INFO
// config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome']
  })
};