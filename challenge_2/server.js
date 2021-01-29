const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}: http://localhost:3000`);
});

app.use('/', express.static('client'));

app.post('/', (req,res,next) => {
  const form = formidable({multiples: true});
  form.parse(req, (err,fields,files) => {
    if (err) { return next(err); }
    fs.readFile(files.file.path, 'utf8', (err, data) => {
      if (err) { return console.error(err); }
      console.log(typeof data);
      res.redirect('/');
    });
  });
});