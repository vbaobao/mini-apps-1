const express = require('express');
const app = express();
const db = require('./database.js');

app.use(express.static('./public'));

app.listen('3000', () => console.log(`--- Example app listening at http://localhost:3000`));