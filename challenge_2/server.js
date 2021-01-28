const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Listening on port ${port}`); });
app.use('/', express.static('client'));

app.get('/', (req,res) => {
  console.log('test');
});

app.post('/', (req,res) => {});