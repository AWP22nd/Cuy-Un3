// const data = "testing . . ."
// console.log(data)

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// main routes or URL or endpoint Method GET

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.post('/login', (req, res) => {
    console.log({ requestFromOutside : req.body });
    res.send('Login Success');
});

app.put('/username', (req, res) => {
  console.log( { updatedData : req.body } );
  res.send('Username updated');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// Run it with "npm run api-service", then open in localhost:port in your web browser
