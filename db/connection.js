//const app = require('express')();
const { Pool } = require('pg');
const { password } = require('../config.js')


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: 'productdb',
  password: `${password}`,
  port: 5432
});


module.exports = pool;


// app.get('/', async (req, res) => {
//   const client = new Client({
//     user: "postgres",
//     host: "localhost",
//     database: 'products'
//     password: "mypostgresthing",
//     port: 5432
//   })
// })


// ;(async function() {
//   const client = await pool.connect()
//   await client.query('SELECT NOW()')
//   client.release()
// })()

// const res = await pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end()
// })
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })
