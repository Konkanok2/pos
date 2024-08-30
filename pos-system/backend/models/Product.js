const db = require('../config/db');

const getAllProducts = (callback) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

const addProduct = (product, callback) => {
  db.query('INSERT INTO products SET ?', product, (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

module.exports = { getAllProducts, addProduct };
