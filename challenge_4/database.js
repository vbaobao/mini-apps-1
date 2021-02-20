var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'connect4'
});

module.exports = {

  saveGame: (data, callback) => {
    let sql = 'INSERT INTO games (name, p1_name, p2_name, p1_score, p2_score, status, turn, winner, board) VALUES (?,?,?,?,?,?,?,?,?)';
    let inserts = [data.name, data.p1_name, data.p2_name, data.p1_score, data.p2_score, data.status, data.turn, data.winner, data.board];
    connection.query(sql, inserts, (err, results, fields) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  loadGame: (gameId, callback) => {
    let sql = 'SELECT * FROM games WHERE id = ?';
    let inserts = [gameId];
    connection.query(sql, inserts, (err, results, fields) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  loadHistory: (callback) => {
    let sql = 'SELECT id, name FROM games';
    let inserts = [];
    connection.query(sql, inserts, (err, results, fields) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

}