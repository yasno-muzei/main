var async = require('async'),
    Config = require('project-config'),
    Service = require('../app/models/service'),

    categories = require('./categories.json'),
    museums = require('./museums.json');

Config.init();
Config.setBaseDir('../configs');
Service.config = new Config('app').get();

var mongo = null;
Service.getMongo(function(err, db) {
    if (err) return console.log(err);
    mongo = db;

    var steps = [];
    steps.push(clear);
    steps.push(insertCategories);
    steps.push(insertMuseums);
    async.series(steps, function() {
        Service.end();
        console.log('Done');
    });
});

function clear(callback) {
    async.series([
        function(callback) {
            mongo.collection('category').drop(callback);
        },
        function(callback) {
            mongo.collection('museum').drop(callback);
        }
    ], callback);
}

function insertCategories(callback) {
    async.each(categories, function(category, callback) {
        mongo.collection('category').insert(category, callback);
    }, callback);
}

function insertMuseums(callback) {
    async.each(museums, function(museum, callback) {
        mongo.collection('category').findOne({name: museum.category}, function(err, category) {
            if (err) return console.log(err);
            museum.category = category['_id'];
            mongo.collection('museum').insert(museum, callback);
        });
    }, callback);
}