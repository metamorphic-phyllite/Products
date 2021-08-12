// const pgtools = require('pgtools');
// const pg = require('pg');
// const { Client } = require('pg');

// //const sqlPassword = require('./config.js');

// const client = new Client();
// client.connect();

// db.connect((err, client) => {
//   db.query(`
//    CREATE TABLE IF NOT EXISTS snippets (
//     id SERIAL,
//     PRIMARY KEY(id),
//     body text
//    );
//   `  , (err, result) => {
//    if (err) throw err;
//    console.log('Created table "snippets"');
//    db.end();
//   });
//  });

// const config = {
//   user: "postgres",
//   host: "localhost",
//   password: "mypostgresthing",
//   port: 5432
// };

// pgtools.createdb(config, "productsdb", function(err, res) {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log(res);
// });

module.exports = {
  products: `
    CREATE TABLE products (
      id int PRIMARY KEY NOT NULL,
      name varchar,
      slogan varchar,
      description varchar,
      category varchar,
      default_price varchar
    )`,

  related: `
    CREATE TABLE related (
      id int PRIMARY KEY NOT NULL,
      current_product_id int references products(id),
      related_product_id int references products(id)
    )`,

  features: `
    CREATE TABLE features (
      id int PRIMARY KEY NOT NULL,
      productId int references products(id),
      feature varchar,
      value varchar
    )`,

  // productFeatures: `
  //   CREATE TABLE productFeatures (
  //     id int,
  //     productId int references products(id),
  //     feature_id int references features(id)
  //   )`,

  styles: `
    CREATE TABLE styles (
      id int PRIMARY KEY NOT NULL,
      productId int references products(id),
      name varchar,
      sale_price varchar,
      original_price varchar,
      default_style boolean
    )`,

  photos: `
    CREATE TABLE photos (
      id int,
      styleId int references styles(id),
      url  varchar,
      thumbnail_url varchar
    )`,

  skus: `
    CREATE TABLE skus (
      id int,
      styleId int references styles(id),
      size varchar,
      quantity int
    )`
}

// client.query(productsTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table products created');
//   client.end();
// });

// client.query(relatedTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table related created');
//   client.end();
// });

// client.query(featuresTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table features created');
//   client.end();
// });

// client.query(productFeaturesTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table pf created');
//   client.end();
// });

// client.query(stylesTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table styles created');
//   client.end();
// });

// client.query(photosTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table photos created');
//   client.end();
// });

// client.query(skusTable, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table skus created');
//   client.end();
// });


//const res = await client.query('SELECT from ');
//console.log(res.rows[0]);
//await client.end();