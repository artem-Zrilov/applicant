const constants = require('../config_const');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: constants.host,
  user: constants.user,
  database: constants.database,
  password: constants.password
});

class DataBase {

  all = (table, fields = []) => {
    this._connect();

    const query = `SELECT ${fields.length !== 0 ? fields.join(', ') : '*' } FROM ${table}`

    this._end()
  }

  _connect = () => {
    connection.connect();
  };

  _end = () => {
    connection.end();
  };
}

module.exports = DataBase;