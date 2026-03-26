const express = require("express");
const router = express.Router();
const Place = require("../models/Place");

router.get("/search", async (req, res) => {
  const q = req.query.q;
  try {

    const results = await Place.find({
      name: { $regex: q, $options: "i" }
    }).limit(10);

    res.json(results);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.put("/wishlist/:id", async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(
      req.params.id,
      { wishlist: true },
      { new: true }
    );

    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/*
commented this for now..
  router.get("/wishlist", async (req, res) => {
  const places = await Place.find({ type: "wishlist" });
  res.json(places);
});
*/

module.exports = router;