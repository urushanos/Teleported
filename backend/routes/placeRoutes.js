const express = require("express");
const router = express.Router();
const Place = require("../models/Place");


router.get("/search", async (req, res) => {
  const q = req.query.q || "";

  try {
    const results = await Place.find({
      name: { $regex: q, $options: "i" }
    }).limit(10);

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/wishlist/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);

    place.wishlist = !place.wishlist;
    await place.save();

    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/visited/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);

    place.visited = !place.visited;
    await place.save();

    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;