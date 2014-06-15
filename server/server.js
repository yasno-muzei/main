var Cluster = require('project-cluster'),
    Config = require('project-config'),
    App = require('./app/app');

Config.init();
Config.setBaseDir('./configs');

var process = Cluster.create({
    config: {
        apps: {
            web: -1
        }
    },
    start: function(callback) {
        var config = new Config('app');
        var app = new App(config.get());
        app.start(function(err) {
            callback(err, app);
        });
    },
    stop: function(app, callback) {
        app.stop(callback);
    }
});
process.start();