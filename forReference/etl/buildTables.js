const pool = require('../db/connection.js');
const { products, related, features, productFeatures, styles, photos, skus } = require('./schema.js');

// PRODUCTS
pool.query('DROP TABLE products', (err, res) => {
  pool.query(products, (err, res) => {
    console.log(err);
  })
})

// RELATED
pool.query('DROP TABLE related', (err, res) => {
  pool.query(related, (err, res) => {
    console.log(err);
  })
});

// FEATURES
pool.query('DROP TABLE features', (err, res) => {
  pool.query(features, (err, res) => {
    console.log(err);
  })
});

// PRODUCT FEATURES
pool.query('DROP TABLE productFeatures', (err, res) => {
  pool.query(productFeatures, (err, res) => {
    console.log(err);
  })
});

// STYLES
pool.query('DROP TABLE styles', (err, res) => {
  pool.query(styles, (err, res) => {
    console.log(err);
  })
});

// PHOTOS
pool.query('DROP TABLE photos', (err, res) => {
  pool.query(photos, (err, res) => {
    console.log(err);
  })
});

// SKUS
pool.query('DROP TABLE skus', (err, res) => {
  pool.query(skus, (err, res) => {
    console.log(err);
  })
});
