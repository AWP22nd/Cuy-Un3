const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`Hello, World!`)
})

app.post('/siswa/post', (req, res) => {
    res.send('Post request')
})

app.put('/', (req, res) => {})

app.delete('/', (req, res) => {})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
