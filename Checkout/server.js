const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./database.js');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.static('./public'));

app.post('/checkout', (req,res) => {
  db.newCheckout(req.body, (err, results)=> {
    if (err) res.send(err);
    console.log(results);
    res.send(results);
  });
})

app.listen('3000', () => console.log(`--- Example app listening at http://localhost:3000`));