// TO IMPORT DATA INTO THE DATABASE:

// copy this syntax one by one to fill each table

// personally, I had to alter a few things after importing which I'll categorize and explain for clarity's sake



const pool = require('../../db/connection.js').db;


pool.query("COPY products FROM '/Users/shanimal/Coding/Week 9/CSVs/product.csv' WITH DELIMITER ',' CSV HEADER;", (err, res) => {
  console.log('hey', res);
});

pool.query("COPY features FROM '/Users/shanimal/Coding/Week 9/CSVs/features.csv' WITH DELIMITER ',' CSV HEADER;", (err, res) => {
  console.log('hey', res);
});

pool.query("COPY related FROM '/Users/shanimal/Coding/Week 9/CSVs/related.csv' WITH DELIMITER ',' CSV HEADER;", (err, res) => {
  console.log('ferk', err);
  console.log('hey', res);
});

pool.query("COPY skus FROM '/Users/shanimal/Coding/Week 9/CSVs/skus.csv' WITH DELIMITER ',' CSV HEADER;", (err, res) => {
  console.log('hey', res);
});

pool.query("COPY styles FROM '/Users/shanimal/Coding/Week 9/CSVs/styles.csv' WITH DELIMITER ',' CSV HEADER;", (err, res) => {
  console.log('hey', res);
});

pool.query("COPY photos FROM '/Users/shanimal/Coding/Week 8/CSVs/photos.csv' WITH DELIMITER ',' CSV HEADER;", (err, res) => {
  console.log('errrawr', err);
  console.log('hey', res);
});


// ----------- RUN THESE COMMANDS IN THE TERMINAL AFTER FILLING DB TO MAKE IT WORK!!! --------------


// pool.query("DELETE FROM related WHERE related_product_id = 0 RETURNING *;", (err, res) => {
//   console.log('ferk', err);
//   console.log('hey', res);
// });


// pool.query(`ALTER TABLE related
// ADD CONSTRAINT related_related_product_id_fkey
// FOREIGN KEY (related_product_id)
// REFERENCES products(id);`, (err, res) => {
//   console.log('ferk', err)
//   console.log('hey', res);
// });

// pool.query(`ALTER TABLE related
// ADD CONSTRAINT current_related_product_id_fkey
// FOREIGN KEY (current_product_id)
// REFERENCES products(id);`, (err, res) => {
//   console.log('ferk', err)
//   console.log('hey', res);
// });

// ALTER TABLE styles RENAME COLUMN default_style TO "default?";


// CREATE INDEX index_name ON table_name (column_name);

  //COLUMNS TO INDEX: features.productId, styles.productId, photos.styleId, skus.styleId... both related cols as well?

