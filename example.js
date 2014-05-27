var staticize = require('./main'),
	express = require('express'),
	app = express();

staticize(app, {
	'/foo': '../test/foo/bar.txt',
	'/foo/more': '../test/foo-extra/bar.txt'
});

app.listen(3000);