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
    const { nis, namaLengkap, kelas, alamat } = req.body

    console.log(req.body)
    const sql = `insert into siswa(nis, nama_lengkap, kelas, alamat) values (${nis}, '${namaLengkap}', '${kelas}', '${alamat}')`

    db.query (sql, (err, fields) => {
        if (err) throw err
        if (fields.affectedRows) {
            ress(fields.insertId , "Added new student data", res)
            console.log(fields)
        }
    })
})

app.put('/siswa', (req, res) => {
    ress('Put/Update request', res)
})

app.delete('/siswa', (req, res) => {
    ress('Delete request', res)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
