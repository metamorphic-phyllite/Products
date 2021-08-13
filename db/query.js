// this is where ill make methods for each get request to query the database
const pool = require('./connection.js');

const getAllProducts = () => {
  pool.query(`SELECT * FROM products`)
    .then((res) => {
      console.log(res);
    })
}

const getFeatures = () => {
  pool.query(``)
}

const getStyles = () => {
  pool.query(``)
}

const getRelatedProducts = () => {
  pool.query(``)
}



module.exports = {
  getAllProducts: getAllProducts,
  getFeatures: getFeatures,
  getStyles: getStyles,
  getRelatedProducts: getRelatedProducts
}