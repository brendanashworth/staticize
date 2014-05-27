Staticize
======

![Staticize NPM](https://nodei.co/npm/staticize.png)

> Staticize is a basic NPM module for routing to static files on an ExpressJS installation. For every route provided, Staticize will respond from a simple GET request to the route and respond with the given file location. If an error occurs, it will log directly to the console.

### Install

```bash
$ npm install staticize --save
```

### Usage

```javascript
var staticize = require('staticize'),
	express = require('express'),
	app = express();

staticize(app, {
	'/foo': '../test/foo/bar.txt',
	'/foo/more': '../test/foo-extra/bar.txt'
});

app.listen(3000);
```