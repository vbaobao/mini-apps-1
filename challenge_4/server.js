const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('./public'));

app.listen(port, console.log(`Listening on http://localhost:${port}`));