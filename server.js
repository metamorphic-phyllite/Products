const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const PORT = 4321;
const IP = '127.0.0.1';
//const db = require('./db/connection.js');
const { db, getAllProducts, getFeatures, getStyles, getRelatedProducts } = require('./db/connection.js');


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.send('hi')
})

// PRODUCTS
app.get('/products', getAllProducts)

// INDIVIDUAL PRODUCT
app.get('/products/:id', getFeatures)

// STYLES
app.get('/products/:id/styles', getStyles)

// RELATED
app.get('/products/:id/related', getRelatedProducts)

// LISTENING
app.listen(PORT, IP, () => {
  console.log(`listening on port ${PORT}`);
});

//module.exports.app = app;