const constants = require('../config_const');
const mysql = require('mysql');

var pool = mysql.createPool({
  host: constants.host,
  user: constants.user,
  database: constants.database,
  password: constants.password,
  connectionLimit: 10
});

class Database {
  all(table, fields = []) {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT ${fields.length > 0 ? fields.join(', ') : '*'} FROM ${table}`, (err, result) => {
        if (err) reject(err);

        resolve(result)
      })
    } )
  }

  insert(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, (err, result) => {
        if (err) reject(err);

        resolve(result)
      })
    })
  }

  select(sql) {
    return new Promise((resolve, reject) => {
      pool.query(sql, (err, result) => {
        if (err) reject(err);

        resolve(result)
      })
    })
  }
}

module.exports = Database;