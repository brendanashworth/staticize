var fs = require('fs');
var mime = require('mime');

module.exports = function(app, routes) {
	// loop through routes
	for (var index in routes) {
		// closure: route is the HTTP request route, path is the file path
		(function (route, path) {
			app.get(route, function(req, res) {
				// create a readable stream
				var stream = fs.createReadStream(path, {encoding: 'utf8'});
				
				stream
					.once('error', function() {
						res.status(500).end('Server error.');
						console.error('ERROR (staticize): Could not open readable stream to ' + path);
					})
					.once('readable', function() {
						// create headers
						var headers = {
							'Content-Type': mime.lookup(path)
						};

						// write head then pipe response
						res.writeHead(200, headers);
						stream.pipe(res);
					});
			});
		})(index, routes[index]);
	}
};