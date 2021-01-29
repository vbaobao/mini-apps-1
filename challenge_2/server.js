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
      convertToCSV(fileObject);
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
  let result = [[]];
  let csv;
  // Iterate through object keys for first array index
  for (let key in object) {
    if (key !== 'children') {
      result[0].push(key);
    }
  }

  recurseTree([object],result[0],result);

  csv = result.join('\n');
  console.log(csv);
  return csv;
};

var recurseTree = (childArray,keys,result) => {
  for (let child of childArray) {
    let newCSVRow = [];
    for (let key of keys) {
      newCSVRow.push(child[key]);
    }
    result.push(newCSVRow);
  }
  for (let child of childArray) {
    if (child.children.length !== 0) {
      recurseTree(child.children,keys,result);
    }
  }
};

var sendCSVToDOM = () => {};