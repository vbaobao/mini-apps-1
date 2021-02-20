var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'connect4'
});

module.export = {

  saveGame: (data, callback) => {
    let sql = 'INSERT INTO games (p1_name, p2_name, p1_score, p2_score, status, turn, winner, board) VALUES (?,?,?,?,?,?,?,?)';
    let args = [data];
    connection.query(sql, args, (err, results, fields) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  loadGame: (gameId, callback) => {
    let sql = 'SELECT * FROM games WHERE id = ?';
    let args = [gameId];
    connection.query(sql, args, (err, results, fields) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  loadHistory: (callback) => {
    let sql = 'SELECT * FROM games';
    let args = [];
    connection.query(sql, args, (err, results, fields) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }

}