// this is where ill make methods for each get request to query the database
// const pool = require('./connection.js');

// const getAllProducts = () => {
//   pool.query(`SELECT * FROM products`)
//     .then((res) => {
//       console.log('amazing', res);
//     })
//     .catch((err) => {
//       console.log('err', err)
//     })
// }

// // LEFT OUTER JOIN, LEFT BEING PRODUCT INFO AND RIGHT BEING FEATURES WITH THAT PRODUCT ID
// const getFeatures = (productId) => {
//   pool.query(`SELECT * FROM
//   products LEFT JOIN features
//   ON productId = ${productId}`)
//     .then((res) => {
//       console.log('amazing', res);
//       return res;
//     })
//     .catch((err) => {
//       console.log('WHERE AM I AHHHH')
//       console.log(err);
//     })
// }

// const getStyles = () => {
//   pool.query(``);

// }

// const getRelatedProducts = () => {
//   pool.query(``)
// }


// module.exports = {
//   getAllProducts: getAllProducts,
//   getFeatures: getFeatures,
//   getStyles: getStyles,
//   getRelatedProducts: getRelatedProducts
// }