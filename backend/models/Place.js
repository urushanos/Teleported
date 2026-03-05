const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    userId: {
    type: String,
    required: true
  },

  name: String,
  state: String,
  description: String,
  //lat: Number,
  //lng: Number,
  image: String,
  status: {
    type: String,
    enum: ["wishlist", "visited"],
    default: "wishlist"
  },
  rating: {
    type: Number,
    default: 0
  },
  dateVisited: Date
 //wishlist: { type: Boolean, default: false }
});

module.exports = mongoose.model("Place", placeSchema);