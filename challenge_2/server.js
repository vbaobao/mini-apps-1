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
      let fileObject = jsonFileParser(data);
      res.redirect('/');
    });
  });
});

var jsonFileParser = (file) => {
  let asString = file.replace(/\r|\n|\s/g, '');
  if (asString[asString.length - 1]) {
    asString = asString.slice(0, asString.length - 1);
  }
  return JSON.parse(asString);
};

var convertToCSV = (object) => {
  // Create an array of arrays
  // Iterate through object keys for first array index
  // Recursively iterate through the objects
  // grabbing only values based on keys in array[0]
  // push to a new array for each object
  // recursively look through children

  // Join each array of array with a comma (plain join)
  // Join entire array with newlines
  // return converted string
};