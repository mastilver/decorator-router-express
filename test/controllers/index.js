import {httpGet, httpPost} from 'decorator-router';

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
    }
};
