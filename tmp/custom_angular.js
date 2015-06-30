myAngular.module('custom_angular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('en/test/templates/template.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>Translate</h1>\r" +
    "\n" +
    "    <p>This should be translated into multiple languages</p>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put('nl/test/templates/template.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>Vertalen</h1>\r" +
    "\n" +
    "    <p>Dit zou vertaald moeten worden in meerdere talen</p>\r" +
    "\n" +
    "</div>"
  );

}]);
