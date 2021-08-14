//const app = require('express')();
//const app = require('../serverjs').app;
//const { getAllProducts, getFeatures, getStyles, getRelatedProducts } = require('../db/query.js');



// app.get('/', (req, res) => {
//   res.send('hi')
// })

// // PRODUCTS
// app.get('/products', (req, res) => {
//   res.send('hi');
//   // SHOULD RETURN AN ARRAY OF OBJECTS THAT ARE EXACTLY THE PRODUCTS TABLE STUFF. ALL OF THEM. EW.
// })

// // INDIVIDUAL PRODUCT
// app.get('/products/:id', (req, res) => {
//   //let response = getFeatures(req.params.id);
//   console.log('hi', response);
//   res.send('hi', response);
//   // SHOULD RETURN AN OBJECT WITH ALL PRODUCT INFO AS WELL AS A FEATURES KEY THATS AN ARRAY OF OBJECTS FOR EACH FEATURE
// })

// // STYLES
// app.get('/products/:id/styles', (req, res) => {
//   res.send('oooo stylish ');
//   // SHOULD RETURN AN OBJECT WITH PROD ID AND RESULTS EQUAL TO AN ARRAY OF STYLES WITH STYLE INFO, PHOTOS [{}, {}] AND SKUS {SKU: {}, SKU2: {}} ...
// })

// // RELATED
// app.get('/products/:id/related', (req, res) => {
//   res.send('NICE')
//   // SHOULD RETURN AN ARRAY OF RELATED PRODUCT IDS AND THATS IT
// })