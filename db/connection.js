const { Pool } = require('pg');
const { password } = require('../config.js');


// CONNECTION
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: 'productdb',
  password: `${password}`,
  port: 5432
});


// QUERIES
const getAllProducts = (req, res) => {
  pool.query(`SELECT * FROM products LIMIT 10`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log('err', err)
    })
}


const getFeatures = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(`SELECT p.id, p.name, p.slogan, p.description, p.category, p.default_price, array_agg(json_build_object('feature', f.feature, 'value', f.value)) features
  FROM products p
  LEFT JOIN features f ON p.id = f.productId
  WHERE p.id = ${id}
  GROUP BY p.id`)
    .then((data) => {
      res.send(data.rows)
    })
    .catch((err) => {
      console.log(err);
    })
};

const getStyles = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(`SELECT DISTINCT ON (s.id) s.id, s.name, s.original_price, s.sale_price, s."default?", array_agg(DISTINCT jsonb_build_object('thumbnail_url', p.thumbnail_url, 'url', p.url)) photos, jsonb_object_agg(k.id, jsonb_build_object('quantity', k.quantity, 'size', k.size)) skus
  FROM styles s
  INNER JOIN photos p
    ON s.id = p.styleid
  INNER JOIN skus k
    ON s.id = k.styleid
  WHERE s.productid = ${id}
  GROUP BY s.id
  ORDER BY s.id`)
    .then((data) => {
      res.send({
        product_id: id,
        results: data.rows
      });
    })
    .catch((err) => {
      console.log('ugh', err);
    })
}

const getRelatedProducts = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(`SELECT related_product_id
  FROM related
  WHERE current_product_id = ${id}`)
    .then((data) => {
      let related = [];
      data.rows.forEach((row) => {
        related.push(row.related_product_id)
      })
      res.send(related);
    })
    .catch((err) => {
      console.log('ferk', err);
    })
}


module.exports = {
  db: pool,
  getAllProducts: getAllProducts,
  getFeatures: getFeatures,
  getStyles: getStyles,
  getRelatedProducts: getRelatedProducts
}

