'use strict';

var grunt     = require('grunt');
var fs        = require('fs');

exports.ngtranslatetemplates = {

  custom_angular: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_angular.js');
    var expected = grunt.file.read('test/expected/custom_angular.js');

    test.equal(expected, actual);
    test.done();
  }
};