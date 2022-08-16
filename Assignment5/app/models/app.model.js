const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
 // message: String,
  name: String, 
  author: String, 
  id: Number,
  price: Number,
});

module.exports = mongoose.model('Book', BookSchema);