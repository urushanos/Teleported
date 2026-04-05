const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/travelDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/places", require("./routes/placeRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const exists = await User.findOne({ username });
  if (exists) return res.status(400).send();

  const user = new User({ username, password });
  await user.save();

  res.send(user);
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || user.password !== password) {
    return res.status(400).send();
  }

  res.send(user);
});