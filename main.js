var staticize = require('./src/staticize');

module.exports = function(app, routes) {
	// pass to ~/src
	staticize(app, routes);
};