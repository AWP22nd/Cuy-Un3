const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');
const ress = require('./ress.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    ress("This is data", 'Ready to use', res)
})

app.get('/siswa', (req, res) => {
    ress('List siswa', res)
})

app.get("/siswa/:nis", (req, res) => {
    const nis = req.params.nis
    ress(`List siswa by nis ${nis}`, res)
})

app.post('/siswa', (req, res) => {
    ress('Post request', res)
})

app.put('/siswa', (req, res) => {
    ress('Put/Update request', res)
})

app.delete('/siswa', (req, res) => {
    ress('Delete request', res)
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
