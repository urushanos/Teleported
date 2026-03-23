const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: String,
  state: String,
  description: String,
  lat: Number,
  lng: Number,
  type:{
      type: String,
    default: "wishlist"
  }
});

module.exports = mongoose.model("Place", placeSchema);