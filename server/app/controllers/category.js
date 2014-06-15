exports = module.exports = Category;

var logger = LoggerFactory = require('project-logger').get('web'),
    Service = require('../models/service');

/**
 * Controller for '/category' path
 *
 * @param {express.Application} app
 */
function Category(app) {
    this.app = app;
}

/**
 * Set up middleware before routes
 *
 */
Category.prototype.init = function() {
    this.app.get('/category/list', this.getList.bind(this));
};

/**
 * Get museum info
 *
 * @param  {express.Request} req
 * @param  {express.Response} res
 */
Category.prototype.getList = function(req, res) {
    Service.getMongo(function(err, mongo) {
        if (err) return logger.error(err)
            && res.status(500).end('Internal server error')
        ;

        mongo.collection('category').find().toArray(function(err, result) {
            if (err) return logger.error(err)
                && res.status(500).end('Internal server error')
            ;

            res.json(result);
        });
    });
};
