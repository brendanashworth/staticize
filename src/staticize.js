var fs = require('fs');

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

				res.status(200).send(data);
			});
		});
	}
};