'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (app) {
    console.log('init strategy');
    return function (params) {
        console.log(params);

        app.get('/api/collection', function (req, res) {
            res.send('OK');
        });
    };
};

module.exports = exports['default'];