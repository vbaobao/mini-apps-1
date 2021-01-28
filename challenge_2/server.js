const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}: http://localhost:3000`);
});

app.use('/', express.static('client'));

app.post('/', (req,res) => {
  console.log('test');
});