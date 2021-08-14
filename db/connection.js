//const app = require('express')();
const { Pool } = require('pg');
const { password } = require('../config.js');
const { Sequelize } = require('sequelize');


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: 'productdb',
  password: `${password}`,
  port: 5432
});

const getAllProducts = () => {
  pool.query(`SELECT * FROM products`)
    .then((res) => {
      console.log('amazing', res);
    })
    .catch((err) => {
      console.log('err', err)
    })
}

// LEFT OUTER JOIN, LEFT BEING PRODUCT INFO AND RIGHT BEING FEATURES WITH THAT PRODUCT ID
const getFeatures = (productId) => {
  pool.query(`SELECT * FROM
  products
  LEFT JOIN features
  ON products.id = features.productId
  WHERE productId = ${productId}`)
    .then((res) => {
      console.log('amazing', res);
      return res;
    })
    .catch((err) => {
      console.log('WHERE AM I AHHHH')
      console.log(err);
    })
}

const getStyles = () => {
  pool.query(``);

}

const getRelatedProducts = () => {
  pool.query(``)
}


module.exports = {
  db: pool,
  getAllProducts: getAllProducts,
  getFeatures: getFeatures,
  getStyles: getStyles,
  getRelatedProducts: getRelatedProducts
}
//module.export.db = pool;
