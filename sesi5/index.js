const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');
const ress = require('./ress.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    ress('Ready to use', res)
})

app.get('/siswa', (req, res) => {
    res.send(`List siswa`)
})

app.get("/siswa/:nis", (req, res) => {
    const nis = req.params.nis
    res.send(`List siswa by nis ${nis}`)
})

app.post('/siswa', (req, res) => {
    res.send('Post request')
})

app.put('/siswa', (req, res) => {
    res.send('Put/Update request')
})

app.delete('/siswa', (req, res) => {
    res.send('Delete request')
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
