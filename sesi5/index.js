const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');

app.use(bodyParser.json());

app.get('/siswa', (req, res) => {
    res.send(`List siswa`)
})

app.get("/siswa/:id", (req, res) => {
    const id = req.params.id
    res.send(`List siswa by id ${id}`)
})

app.post('/siswa/post', (req, res) => {
    res.send('Post request')
})

app.put('/siswa/put', (req, res) => {
    res.send('Put/Update request')
})

app.delete('/siswa/delete', (req, res) => {
    res.send('Delete request')
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
