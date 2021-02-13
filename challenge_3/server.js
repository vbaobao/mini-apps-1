const db = require('./database.js');
const express = require('express');
const app = express();

app.use(express.static('./public'));