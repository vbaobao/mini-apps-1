const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./database.js');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('./public'));

app.post('/checkout', (req,res) => {
  console.log(req.body);
  res.send('GOT REQUEST THANKS');
})

app.listen('3000', () => console.log(`--- Example app listening at http://localhost:3000`));