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

    // console.log(req.body)
    const sql = `insert into siswa(nis, nama_lengkap, kelas, alamat) values (${nis}, '${namaLengkap}', '${kelas}', '${alamat}')`

    db.query (sql, (err, fields) => {
        if (err) ress(err, "Error adding new student data", res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            ress(data, "Added new student data", res)
            console.log(fields)
        }
    })
})

app.put('/siswa', (req, res) => {
    const { nis, namaLengkap, kelas, alamat } = req.body
    const sql = `UPDATE siswa SET nama_lengkap = '${namaLengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nis = ${nis}`
    
    db.query(sql, (err, fields) => {
        if (err) ress(err, "Error updating student data", res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                message: fields.message,
            }
            ress(data, "Data updated successfully", res)
        } else {
            ress('404', 'Not Found! No changes made', res)
        }
        console.log(fields)
    })
})

app.delete('/siswa', (req, res) => {
    ress('Delete request', res)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
