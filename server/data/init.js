var async = require('async'),
    Config = require('project-config'),
    Service = require('../app/models/service'),

    categories = require('./categories.json');

Config.init();
Config.setBaseDir('../configs');
Service.config = new Config('app').get();

Service.getMongo(function(err, mongo) {
    if (err) return console.log(err);

    var steps = [];
    steps.push(insertCategories.bind(null, mongo));
    async.series(steps, function() {
        Service.end();
        console.log('Done');
    });
});

function insertCategories(mongo, callback) {
    async.each(categories, function(category, callback) {
        mongo.collection('category').insert(category, callback);
    }, callback);
}