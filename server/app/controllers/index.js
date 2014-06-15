exports = module.exports = Index;

var path = require('path'),
    express = require('express');

/**
 * Controller for '/' path
 *
 * @param {express.Application} app
 */
function Index(app) {
    this.app = app;
}

/**
 * Set up middleware before routes
 *
 */
Index.prototype.init = function() {
    this.app.use('/', express.static(
        path.join(__dirname, '..', '..', '..', 'public')
    ));
};