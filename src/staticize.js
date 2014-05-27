var fs = require('fs');
var mime = require('mime');

module.exports = function(app, routes) {
	// loop through routes
	for (var index in routes) {
		// route: index, file location: routes[index]
		app.get(index, function(req, res) {
			fs.readFile(routes[index], function(err, data) {
				if (err) {
					console.log('ERROR: Could not read file (' + err + ').');
					res.status(500);
					return;
				}

				// get the mime type
				var mimeType = mime.lookup(routes[index]);
				res.status(200).set('Content-Type', mimeType).send(data);
			});
		});
	}
};