angular.module('multiplelevels').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('en/test/templates/test_multiplelevels.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>Translate</h1>\r" +
    "\n" +
    "    <p>This should be translated into multiple languages</p>\r" +
    "\n" +
    "    <div class=\"developer\">\r" +
    "\n" +
    "        <h2>The developer title</h2>\r" +
    "\n" +
    "        <h3>The developer intro</h3>\r" +
    "\n" +
    "        <p><p>This is the first paragraph</p></p>\r" +
    "\n" +
    "        <p><p>This is the second paragraph</p></p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put('nl/test/templates/test_multiplelevels.html',
    "<div class=\"test\">\r" +
    "\n" +
    "    <h1>Vertalen</h1>\r" +
    "\n" +
    "    <p>Dit zou vertaald moeten worden in meerdere talen</p>\r" +
    "\n" +
    "    <div class=\"developer\">\r" +
    "\n" +
    "        <h2>De developer titel</h2>\r" +
    "\n" +
    "        <h3>De developer intro</h3>\r" +
    "\n" +
    "        <p><p>Dit is de eerste paragraaf</p></p>\r" +
    "\n" +
    "        <p><p>Dit is de tweede paragraaf</p></p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );

}]);
