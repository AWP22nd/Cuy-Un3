const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {})

app.post('/', (req, res) => {})

app.put('/', (req, res) => {})

app.delete('/', (req, res) => {})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
