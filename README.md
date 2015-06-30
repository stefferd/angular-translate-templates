# angular-translate-templates
=========
Language specific rendering of the templates for angular. Extended the grunt-angular-templates of Eric Clemmons grunt-angular-templates 
https://raw.githubusercontent.com/ericclemmons/grunt-angular-templates

> Speed up your AngularJS app by automatically minifying, combining,
> and automatically caching your HTML templates with `$templateCache`.

Here's an example of the output created by this task from multiple `.html` files:

```js
angular.module('app').run(["$templateCache", function($templateCache) {
  $templateCache.put("home.html",
    // contents for home.html ...
  );
  ...
  $templateCache.put("src/app/templates/button.html",
    // contents for button.html
  );
}]);
```

Then, when you use `ng-include` or `templateUrl` with `$routeProvider`,
the template is already loaded without an extra AJAX request!


## Table of Contents

- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [Examples](#examples)
- [Changelog](#changelog)
- [License](#license)


## Installation

*This plugin requires [Grunt][1] `~0.4.0`*

*Usemin integration requires [grunt-usemin][5] `~2.0.0`*

Install the plugin:

    $ npm install angular-translate-templates --save-dev

Enable the plugin within your `Gruntfile`:

```js
grunt.loadNpmTasks('angular-translate-templates');
```


## Options

### angular

> Global namespace for Angular.

If you use `angular.noConflict()`, then set this value to whatever you
re-assign angular to.  Otherwise, it defaults to `angular`.

### bootstrap

> Callback to modify the bootstraper that registers the templates with `$templateCache`.

By default, the bootstrap script wraps `function($templateCache) { ... }` with:

```js
angular.module('app').run(['$templateCache', ... ]);
```

If you want to create your own wrapper so you register the templates as an
AMD or CommonJS module, set the `bootstrap` option to something like:

```js
bootstrap: function(module, script) {
  return 'module.exports[module] = ' + script + ';';
}
```

### concat

> Name of `concat` target to append the compiled template path to.

This is especially handy if you combine your scripts using
[grunt-contrib-concat][4] or [grunt-usemin][5].

### htmlmin

> Object containing [htmlmin options][2] that will *significantly* reduce
the filesize of the compiled templates.

Without this, the HTML (whitespace and all) will be faithfully compiled
down into the final `.js` file.  Minifying that file will only cut down
on the *Javascript* code, not the *HTML* within the strings.

I recommend using the following settings for production:

```js
htmlmin: {
  collapseBooleanAttributes:      true,
  collapseWhitespace:             true,
  removeAttributeQuotes:          true,
  removeComments:                 true, // Only if you don't use comment directives!
  removeEmptyAttributes:          true,
  removeRedundantAttributes:      true,
  removeScriptTypeAttributes:     true,
  removeStyleLinkTypeAttributes:  true
}
```

### module

> `String` of the `angular.module` to register templates with.

If not specified, it will automatically be the name of the `ngtranslatetemplates`
subtask (e.g. `app`, based on the examples below).

### prefix

> `String` to prefix template URLs with.
Defaults to `''`

If you need to use absolute urls:

```js
ngtranslatetemplates: {
  app: {
    options: {
      prefix: '/'
    }
  }
}
```

If you serve static assets from another directory, you specify that as well.

### source

> Callback to modify the template's source code.

If you would like to prepend a comment, strip whitespace, or do
post-processing on the HTML that `ngtranslatetemplates` doesn't otherwise do,
use this function.

### append

Normally grunt-angular-templates creates a new file at `dest`. 
This option makes it append the compiled templates to the `dest` file rather than replace its contents.
This is just a useful alternative to creating a temporary `dest` file and concatting it to your application.


### standalone

> Boolean indicated if the templates are part of an existing module or a standalone.
Defaults to `false`.

- If the value is `false`, the module will look like `angular.module('app')`, meaning `app` module is retrieved.
- If the value is `true`, the module will look like `angular.module('app', [])`, meaning `app` module is created.

### url

> Callback to modify the template's `$templateCache` URL.

Normally, this isn't needed as specifying your files with `cwd`
ensures that URLs load via both AJAX and `$templateCache`.

### usemin

> Path to `<!-- build:js [path/to/output.js] -->` usemin target

This should be the output path of the compiled JS indicated in your HTML,
such as `path/to/output.js` shown here.

## Usage


### Compiling HTML Templates

After configuring your `ngtranslatetemplates` task, you can either run the
task directly:

    $ grunt ngtranslatetemplates

Or, bake it into an existing task:

```js
grunt.registerTask('default', [ 'jshint', 'ngtranslatetemplates', 'concat' ]);
```

### Including Compiled Templates

Finally, you have to load the compiled templates' `.js` file into your
application.


#### Using HTML

```html
<script src="templates.js"></script>
```


#### Using Grunt's `concat` task:

This is my personal preference, since you don't have to worry about
what the destination file is actually called.

```js
concat:   {
  app:    {
    src:  [ '**.js', '<%= ngtranslatetemplates.app.dest %>' ],
    dest: [ 'app.js' ]
  }
}
```

#### Using [grunt-usemin][5]

Using the following HTML as an example:

```html
<!-- build:js dist/vendors.js -->
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-resource/angular-resource.js"></script>
<!-- endbuild -->
```

**Do not use the `concat` option**, even though grunt-usemin generates a `concat.generated`
object behind the scenes.  Instead, use the `usemin` option to indicate the anticipated
output filepath from grunt-usemin.

```js
ngtranslatetemplates:  {
  app:        {
    src:      '**.html',
    dest:     'template.js',
    options:  {
      usemin: 'dist/vendors.js' // <~~ This came from the <!-- build:js --> block
    }
  }
}
```

**Note**: Earlier versions of grunt-usemin (*correctly, in my opinion*) would have generated
a `concat['dist/vendors.js']` object for each build section in the HTML.  Now,
because there's a single `concat.generated` object with **all** JS/CSS files within it,
I'm back-tracking the proper `concat` target for you.

## Examples


### Register HTML Templates in `app` Module

```js
ngtranslatetemplates:  {
  app:        {
    src:      '**.html',
    dest:     'templates.js',
    languages: ['en.json', 'nl.json']
  }
}
```


### Register Relative Template URLs

Normally, your app, templates, & server are in separate folders, which means
that the template URL is **different** from the file path.

```js
ngtranslatetemplates:  {
  app:        {
    cwd:      'src/app',
    src:      'templates/**.html',
    dest:     'build/app.templates.js',
    languages: ['en.json', 'nl.json']
  }
}
```

This will store the template URL as `templates/home.html` instead of
`src/app/templates/home.html`, which would cause a 404.


### Minify Template HTML

Simply pass the [same options][2] as the `htmlmin` task:

```js
ngtranslatetemplates:    {
  app:          {
    src:        '**.html',
    dest:       'templates.js',
    languages: ['en.json', 'nl.json'],
    options:    {
      htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
    }
  }
}
```

Or, if you already have an existing `htmlmin` task, you can reference it:

```js
ngtranslatetemplates:    {
  app:          {
    src:        '**.html',
    dest:       'templates.js',
    languages: ['en.json', 'nl.json']
    options:    {
      htmlmin:  '<%= htmlmin.app %>'
    }
  }
}
```


### Customize Template URL

Suppose you only use `ngtranslatetemplates` when on production, but locally you serve
templates via Node, sans the `.html` extension.

You can specify a `url` callback to further customize the registered URL:

```js
ngtranslatetemplates:  {
  app:        {
    src:      '**.html',
    dest:     'templates.js',
    languages: ['en.json', 'nl.json'],
    options:  {
      url:    function(url) { return url.replace('.html', ''); }
    }
  }
}
```


### Customize Output

Some people like [AMD & RequireJS][3] and would like wrap the output
in AMD or something else (don't ask me why!):

```js
ngtranslatetemplates:      {
  app:            {
    src:          '**.html',
    dest:         'templates.js',
    languages: ['en.json', 'nl.json'],
    options:      {
      bootstrap:  function(module, script) {
        return 'define(module, [], function() { return { init: ' + script + ' }; });';
      }
    }
  }
}
```

You will be able to custom everything surrounding `$templateCache.put(...)`.

## Contributing

In line of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.0.1 Initial version
* 0.0.2 Changed the template from {{ }} to <% %> 
* 0.0.3 Set the gruntfile.js as main
