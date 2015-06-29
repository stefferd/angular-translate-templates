myAngular.module('custom_angular').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('en/test/templates/template.html',
    "<div class=\"test\">\n" +
    "<h1>Translate</h1>\n" +
    "<p>This should be translated into multiple languages</p>\n" +
    "</div>\n"
  );


  $templateCache.put('nl/test/fixtures/two/two.html',
    "<div class=\"test\">\n" +
    "<h1>Vertalen</h1>\n" +
    "<p>Dit zou vertaald moeten worden in meerdere talen</p>\n" +
    "</div>\n"
  );

}]);