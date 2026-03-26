const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  state: String,
  description: String,
  lat: Number,
  lng: Number,
  wishlist: Boolean
});

module.exports = mongoose.model("Place", placeSchema);