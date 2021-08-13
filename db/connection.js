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

// const retrieve = () => {

// }

modules.export.db = pool;
