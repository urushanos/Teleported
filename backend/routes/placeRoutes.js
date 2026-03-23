const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.get("/search", async (req, res) => {
  try {
    const q = req.query.q;

    const results = await Place.find({
      name: { $regex: q, $options: "i" }
    });

    res.json(results);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/wishlist", async (req, res) => {
  const places = await Place.find({ type: "wishlist" });
  res.json(places);
});

module.exports = router;