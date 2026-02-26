const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

// GET all places
router.get("/", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new place
router.post("/", async (req, res) => {
  try {
    const newPlace = new Place(req.body);
    const saved = await newPlace.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH toggle wishlist
router.patch("/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    place.wishlist = !place.wishlist;
    await place.save();
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;