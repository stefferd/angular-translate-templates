angular.module('multiplelevels').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('en/test/templates/test_multiplelevels.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>{{title}}</h1>\r" +
    "\n" +
    "    <p>{{description}}</p>\r" +
    "\n" +
    "    <div class=\"developer\">\r" +
    "\n" +
    "        <h2>{{developer.title}}</h2>\r" +
    "\n" +
    "        <h3>{{developer.intro}}</h3>\r" +
    "\n" +
    "        <p>{{developer.paragraphs.first}}</p>\r" +
    "\n" +
    "        <p>{{developer.paragraphs.second}}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put('nl/test/templates/test_multiplelevels.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>{{title}}</h1>\r" +
    "\n" +
    "    <p>{{description}}</p>\r" +
    "\n" +
    "    <div class=\"developer\">\r" +
    "\n" +
    "        <h2>{{developer.title}}</h2>\r" +
    "\n" +
    "        <h3>{{developer.intro}}</h3>\r" +
    "\n" +
    "        <p>{{developer.paragraphs.first}}</p>\r" +
    "\n" +
    "        <p>{{developer.paragraphs.second}}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
