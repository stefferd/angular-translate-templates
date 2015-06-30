module.exports = function(grunt) {
  'use strict';
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time at the end
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodeunit: {
      tests: ['test/*.js']
    },
    // All supported examples should be here
    ngtranslatetemplates: {
      // Change `angular` namespace to something else
      custom_angular: {
        src: ['test/templates/template.html'],
        languages: ['test/resources/en.json', 'test/resources/nl.json'],
        dest: 'tmp/custom_angular.js',
        options: {
          angular: 'myAngular'
        }
      },
      multiplelevels: {
        src: ['test/templates/test_multiplelevels.html'],
        languages: ['test/resources/en.json', 'test/resources/nl.json'],
        dest: 'tmp/custom_multiplelevels.js'
      },
      multpleTemplates: {
        src: ['test/templates/test_multiplelevels.html', 'test/templates/template.html'],
        languages: ['test/resources/en.json', 'test/resources/nl.json'],
        dest: 'tmp/custom_multipleTemplates.js',
        options: {
          module: 'customModuleName'
        }
      }
    }
  });

  grunt.loadTasks('task');

  grunt.registerTask(
    'test',
    [
      'ngtranslatetemplates',
      'nodeunit'
    ]
  );

};