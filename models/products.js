var db = require('../db/connection.js');

module.exports = {
  getAll: (callback) => {
    db.connection.query('SELECT `name`, `description` FROM `products`', (err, results, fields) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    })
  }
}