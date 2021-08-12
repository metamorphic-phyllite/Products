// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/reviews');


// const productsSchema = new mongoose.Schema({
//   product_id: Number,
//   campus: String,
//   name: String,
//   slogan: String,
//   desription: String,
//   category: String,
//   default_price: String,
//   features: [ {feature: String, value: String} ],
//   styles: [{
//       style_id: Number,
//       name: String,
//       original_price: String,
//       sale_price: String,
//       default: Boolean,
//       photos: [{url: String, thumbnail_url: String}],
//       skus: {
//         sku_id: {
//           quantity: Number,
//           size: String,
//         }
//       }
//     }
//   ],
//   related_products: [Number]
// });

// const Products = mongoose.model('Products', productsSchema);