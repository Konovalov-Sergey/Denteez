'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const datas = require('./api/datas');

const app = express();

let nextId = 5;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/datas', (req, res) => {
    res.send(datas);
});

app.post('/api/datas', (req, res) => {
    const todo = {
        id: nextId++,
        title: req.body.title,
        completed: false
    };

    datas.push(todo);

    res.send(todo);
});

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));