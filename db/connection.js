//const app = require('express')();
const { Pool } = require('pg');
const { password } = require('../config.js');
//const { Sequelize } = require('sequelize');


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
      console.log('amazing', res.rows);
    })
    .catch((err) => {
      console.log('err', err)
    })
}

// LEFT OUTER JOIN, LEFT BEING PRODUCT INFO AND RIGHT BEING FEATURES WITH THAT PRODUCT ID
const getFeatures = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(`SELECT p.id, p.name, p.slogan, p.description, p.category, p.default_price, array_agg(json_build_object('feature', f.feature, 'value', f.value)) features
  FROM products p
  LEFT JOIN features f ON p.id = f.productId
  WHERE p.id = ${id}
  GROUP BY p.id`)
    .then((response) => {
      console.log('amazing', response.rows);
      res.send(response.rows)
    })
    .catch((err) => {
      console.log('WHERE AM I AHHHH')
      console.log(err);
    })
};

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
