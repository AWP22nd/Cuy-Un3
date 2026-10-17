const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');
const ress = require('./ress.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    ress("API V1", 'Ready to use', res)
})

app.get('/siswa', (req, res) => {
    const sql = 'SELECT * FROM siswa';
    db.query(sql, (err, fields) => {
        if (err) throw err
        ress(fields, 'List siswa', res)
    })
})

app.get("/siswa/:nis", (req, res) => {
    const nis = req.params.nis
    const sql = `SELECT * FROM siswa WHERE nis = ${nis}`
    db.query(sql, (err, fields) => {
    if (err) throw err
        ress(fields, "Get detail data from nis", res)
    })
})

app.post('/siswa', (req, res) => {
    ress('Post request', "Added new student data", res)
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
