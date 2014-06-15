exports = module.exports = App;

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    async = require('async'),
    LoggerFactory = require('project-logger');

/**
 * App application
 *
 */
function App(config) {
    this.config = config;
    this.logger = LoggerFactory.get('web');
    this.logger.configure(this.config.log);

    this.initExpress();
}

/**
 * Start api application
 *
 * @param {Function} callback
 */
App.prototype.start = function(callback) {
    var config = this.config.http;
    this.server = this.app.listen(config.port, config.host, function() {
        this.logger.info(
            'App is ready at http://' + config.host + ':' + config.port
        );
        return callback && callback();
    }.bind(this));
};

/**
 * Stop api application gracefully
 *
 * @param {Function} callback
 */
App.prototype.stop = function(callback) {
    var steps = [];
    if (this.server) {
        steps.push(function(callback) {
            try {
                this.server.close(callback);
            } catch (err) {
                return process.nextTick(callback);
            }
        });
    }

    async.series(steps, function(err) {
        return callback && callback(err);
    });
};

/**
 * @private
 */
App.prototype.initExpress = function() {
    this.app = express();
    this.initControllers();
    this.app.use(function(err, req, res, next) {
        if (err) {
            res.status(500).end('Internal server error');
            return this.logger.error('Express error: ', err);
        } else {
            next();
        }
    }.bind(this));
};

/**
 * @private
 */
App.prototype.initControllers = function() {
    var dir = path.join(__dirname, 'controllers');
    fs.readdirSync(dir).forEach(function(filename) {
        var Controller = require(dir + '/' + filename);
        var controller = new Controller(this.app);
        controller.init();
    }.bind(this));
};
