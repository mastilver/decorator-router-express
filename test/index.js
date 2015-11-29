import path from 'path';

import 'babel-core/register';

import test from 'ava';
import request from 'supertest';

import express from 'express';

import decoratorRouter from 'decorator-router';
import strategy from '../index';

const app = express();

test.before(async () => {
    await decoratorRouter(path.join(__dirname, 'controllers/index.js'), strategy, app);
});

test('should have register: GET /collection', t => {
    request(app)
        .get('/collection')
        .expect(200)
        .expect('OK', t.end);
});

test('should have register: GET /entity/:id', t => {
    request(app)
        .get('/entity/1')
        .expect(200)
        .expect('OK', t.end);
});

test('should have register: POST /test', t => {
    request(app)
        .post('/test')
        .expect(201)
        .expect('Created', t.end);
});

test('should have register: GET /forbidden', t => {
    request(app)
        .get('/forbidden')
        .expect(403)
        .expect('Forbidden', t.end);
});
