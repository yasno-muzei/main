exports = module.exports = Museum;

var ObjectID = require('mongodb').ObjectID,
    Service = require('../models/service');

/**
 * Controller for '/museum' path
 *
 * @param {express.Application} app
 */
function Museum(app) {
    this.app = app;
}

/**
 * Set up middleware before routes
 *
 */
Museum.prototype.init = function() {
    this.app.get('/museum/:id', this.get.bind(this));
    this.app.get('/museum/list/:category', this.getList.bind(this));
};

/**
 * Get museum info
 *
 * @param  {express.Request} req
 * @param  {express.Response} res
 */
Museum.prototype.get = function(req, res) {
    var id = req.param('id');
    Service.getMongo(function(err, mongo) {
        if (err) return logger.error(err)
            && res.status(500).end('Internal server error')
        ;

        try {
            var objectId = new ObjectID(id);
        } catch(err) {
            return res.status(400).end('Not found');
        }

        mongo.collection('museum').findOne(
            {_id: objectId}, function(err, result) {
                if (err) return logger.error(err)
                    && res.status(500).end('Internal server error')
                ;
                if (!result) return res.status(400).end('Not found');

                res.json(result);
            }
        );
    });
};

/**
 * Get list of museums by category, if specified
 *
 * @param  {express.Request} req
 * @param  {express.Response} res
 */
Museum.prototype.getList = function(req, res) {
    var category = req.param('category'),
        limit = req.param('limit'),
        offset = req.param('offset');

    Service.getMongo(function(err, mongo) {
        if (err) return logger.error(err)
            && res.status(500).end('Internal server error')
        ;

        var cursor = mongo.collection('museum').find({category: category});
        cursor.toArray(function(err, result) {
            if (err) return logger.error(err)
                && res.status(500).end('Internal server error')
            ;
            if (!result) return res.status(400).end('Not found');

            res.json(result);
        });
    });
};
