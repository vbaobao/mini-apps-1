const express = require('express');
const app = express();
const Promise = require('bluebird');
const db = Promise.promisifyAll(require('./database.js'));
const bodyparser = require('body-parser');
const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static('./public'));

app.get('/history', (req, res)=> {
  //Grab from database all games
  //Get game id, p1 name and score, p2 name and score
  res.send('GET REQUEST MADE');
});

app.get('/loadgame', (req, res) => {
  //Load a specific game by game's id
  res.send('ATTEMPTED TO LOAD GAME');
})

app.post('/savegame', (req, res) => {
  //Save a game after a game is won
  res.send('POST REQUEST MADE');
});

app.listen(port, console.log(`Listening on http://localhost:${port}`));