// const data = "testing . . ."
// console.log(data)

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Run it with "npm run api-service", then open in localhost:port in your web browser
