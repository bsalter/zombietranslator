(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
    baseUrl: '../zombieapp',
    paths: {
      'jasmine': '../vendor/jasmine-core/jasmine',
      'jasmine-html': '../vendor/jasmine-core/jasmine-html',
      'boot': '../vendor/jasmine-core/boot',
      'jquery':'../vendor/jquery.min'
    },
    shim: {
      'jasmine': {
        exports: 'window.jasmineRequire'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'window.jasmineRequire'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'window.jasmineRequire'
      }
    }
  });

  var specs = [
    '../tests/ZombieControllerSpec','../tests/TranslateSpec'
  ];

  require(['boot'], function () {

    // Load the specs
    require(specs, function () {
      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });
})();
