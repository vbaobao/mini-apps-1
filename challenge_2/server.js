const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}: http://localhost:3000`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', express.static('client'));

app.post('/', (req,res) => {
  console.log(req.body);
  console.log(req.body.name);
  res.send(req.body.text);
});