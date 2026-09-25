const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./conn.js');
const response = require('./ress.js');

// main routes or URL or endpoint Method GET

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const sql = "SELECT * FROM siswa"

  db.query( sql, (error, result) => {
    response(200, result, 'get all data ...', res)
  })
});

app.get('/find', (req, res) => {
  console.log('Find nis: ', req.query.nis);

    const sql = `SELECT * FROM siswa WHERE nis = ${req.query.nis}` 
    db.query( sql, (error, result) => {
      response(200, result, 'get data by nis ...', res)
    })
    })

// app.get('/hello', (req, res) => {
//   // console.log({ urlParam: req.query });
//   // res.send('Hello World!');
// });

app.post('/login', (req, res) => {
    console.log({ requestFromOutside : req.body });
    const username = req.body.username;
    if ( username === usernameFromDbExist ) {
      res.status(400).send('Username cant be used');
    }
    res.send('Login Success');
});

app.put('/username', (req, res) => {
  console.log( { updatedData: req.body } );
  res.send('Username updated');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});