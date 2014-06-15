exports = module.exports = Service;

var async = require('async'),
    MongoClient = require('mongodb').MongoClient;

/**
 * Base for classes, that uses external resources
 *
 */
function Service() {
}

/**
 * Config object, needs to be set up by application
 *
 * @param {Object} config
 */
Service.config = null;

/**
 * Logger object, needs to be set up by aplication
 *
 * @param {Object} config
 */
Service.logger = null;

/**
 * Cached mongo connection
 *
 * @type {mongodb.Db}
 */
Service.mongo = null;

/**
 * Close all open resources
 *
 * @param {Function} callback
 */
Service.end = function(callback) {
    var steps = [];

    if (Service.mongo) {
        steps.push(Service.mongo.close.bind(Service.mongo));
    }

    async.series(steps, callback);
};

/**
 * Get logger
 *
 */
Service.prototype.__defineGetter__('logger', function() {
    return Service.logger;
});

/**
 * Get app config
 *
 */
Service.prototype.__defineGetter__('config', function() {
    return Service.config;
});

/**
 * Get mongodb client
 *
 * @param  {Function} callback
 */
Service.getMongo = function(callback) {
    if (Service.mongo) return process.nextTick(function() {
        callback(null, Service.mongo);
    });

    var mongoConfig = this.config.resources.mongodb;
    MongoClient.connect(mongoConfig.url, mongoConfig.options,
        function(err, db) {
            if (err) return callback(err);

            Service.mongo = db;
            callback(null, db);
        }
    );
};
