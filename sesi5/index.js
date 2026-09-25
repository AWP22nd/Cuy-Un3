const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Get all data ...');
})

get.app('/', (req, res) => {})
get.app('/', (req, res) => {})
get.app('/', (req, res) => {})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})