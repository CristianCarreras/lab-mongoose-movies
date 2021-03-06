const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  name       : String,
  occupation   : String,
  catchPhrase: String,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
