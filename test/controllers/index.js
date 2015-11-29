import {httpGet, httpPost, middlewareFactory} from 'decorator-router';

const block = middlewareFactory((req, res) => {
    res.sendStatus(403);
});

export default {
    @httpGet('/collection')
    getAll(req, res) {
        res.send('OK');
    },

    @httpGet('/entity/:id')
    getOne(req, res) {
        res.send('OK');
    },

    @httpPost('/test')
    test(req, res) {
        res.sendStatus(201);
    },

    @block
    @httpGet('/forbidden')
    forbidden(req, res) {
        res.send('OK');
    }
};
