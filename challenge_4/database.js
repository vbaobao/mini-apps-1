var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'connect4'
});

module.export = {

  saveGame(data, callback) {}

  loadGame(callback) {}

}