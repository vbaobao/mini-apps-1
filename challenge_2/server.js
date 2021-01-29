const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}: http://localhost:3000`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static('client'));

app.post('/', (req,res) => {
  console.log('BODY: ', req.body);
  console.log(req.body.file);
  // fs.readFile(req.body.file, (err, data) => {
  //   if (err) { return console.error(err); }
  //   console.log(data);
  //   res.redirect('/');
  // });
  res.redirect('/');
});