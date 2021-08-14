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
app.get('/products', (req, res) => {
  res.send('hi');
  // SHOULD RETURN AN ARRAY OF OBJECTS THAT ARE EXACTLY THE PRODUCTS TABLE STUFF. ALL OF THEM. EW.
})

// INDIVIDUAL PRODUCT
app.get('/products/:id', getFeatures)

// STYLES
app.get('/products/:id/styles', (req, res) => {
  res.send('oooo stylish ');
  // SHOULD RETURN AN OBJECT WITH PROD ID AND RESULTS EQUAL TO AN ARRAY OF STYLES WITH STYLE INFO, PHOTOS [{}, {}] AND SKUS {SKU: {}, SKU2: {}} ...
})

// RELATED
app.get('/products/:id/related', (req, res) => {
  res.send('NICE')
  // SHOULD RETURN AN ARRAY OF RELATED PRODUCT IDS AND THATS IT
})

// LISTENING
app.listen(PORT, IP, () => {
  console.log(`listening on port ${PORT}`);
});

//module.exports.app = app;