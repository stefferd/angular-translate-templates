myAngular.module('custom_angular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('en/test/templates/template.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>{{title}}</h1>\r" +
    "\n" +
    "    <p>{{description}}</p>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put('nl/test/templates/template.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>{{title}}</h1>\r" +
    "\n" +
    "    <p>{{description}}</p>\r" +
    "\n" +
    "</div>"
  );

}]);
