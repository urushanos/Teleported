const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  state: String,
  description: String,
  lat: Number,
  lng: Number,
  wishlist: { type: Boolean, default: false},
  visited: { type: Boolean, default: false}
});

module.exports = mongoose.model("Place", placeSchema);