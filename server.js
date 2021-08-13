const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const PORT = 4321;
const IP = '127.0.0.1';
const models = require('./models/products.js');
const db = require('./db/connection.js').pool;
// req database and routes?

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, './public')));

//exports.app = app;


// LISTENING
app.listen(PORT, IP, () => {
  console.log(`listening on port ${PORT}`);
});