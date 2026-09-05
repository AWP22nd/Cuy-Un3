// const data = "testing . . ."
// console.log(data)

const express = require('express');
const app = express();
const port = 3000;

// main routes or URL or endpoint Method GET

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});


// app.post('/login', (req, res) => {
//   if (req.name === 'ske') {
//     res.send('Login Success');
//   }
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Run it with "npm run api-service", then open in localhost:port in your web browser
