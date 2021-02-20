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
  db.loadHistoryAsync()
    .then((results) => res.send(results))
    .catch((err) => err.code);
});

app.get('/loadgame', (req, res) => {
  db.loadGameAsync()
    .then((results) => res.send(results))
    .catch((err) => err.code);
})

app.post('/savegame', (req, res) => {
  let body = req.body;
  let data = {
    name: body.name,
    p1_name: body.players['1'].name,
    p1_score:body.score['1'],
    p2_name: body.players['2'].name,
    p2_score: body.score['2'],
    status: body.game,
    turn: body.turn,
    winner: body.winner,
    board: JSON.stringify(body.board)
  }

  db.saveGameAsync(data)
    .then((results) => results)
    .catch((err) => err.code);
});

app.listen(port, console.log(`Listening on http://localhost:${port}`));