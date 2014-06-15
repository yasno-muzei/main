var async = require('async'),
    util = require('util'),
    jsdom = require('jsdom'),
    museums = require('./museums-source.json');

var result = [];

async.each(Object.keys(museums), function(category, callback) {
    var list = museums[category];
    async.eachSeries(list, function(string, callback) {
        var parts = string.split(','),
            title = parts[0].trim(),
            wiki = parts[1].trim(),
            fsqr = parts[2].trim();

        var museum = {
            title: title,
            category: category,
            wikilink: wiki,
            foursquare: fsqr
        };

        async.series([
            function(callback) {
                jsdom.env(
                    wiki,
                    ['http://code.jquery.com/jquery-2.1.1.min.js'],
                    function(err, window){
                        var $ = window.jQuery;
                        $('#mw-content-text > *').each(function(index, element) {
                            var $element = $(element);
                            var tagName = $element.prop('tagName');
                            var text = '';

                            $element.find('#coordinates').remove();
                            $element.find('.reference').remove();

                            if (tagName == 'H2') {
                                return false;
                            }
                            if (tagName == 'P') {
                                text += $element.text();
                            }

                            museum.description = text;
                        });

                        callback();
                    }
                );
            },
            function(callback) {
                jsdom.env(
                    fsqr,
                    ['http://code.jquery.com/jquery-2.1.1.min.js'],
                    function(err, window){
                        var $ = window.jQuery;
                        museum.address = $('.adr span[itemprop=streetAddress]').text();
                        museum.rating = $('.venueScore span[itemprop=ratingValue]').text();
                        callback();
                    }
                );
            }
        ], function() {
            result.push(museum);
            callback();
        });
    }, callback);
}, function(err) {
    if (err) return console.log(err);

    console.log(JSON.stringify(result));
});
