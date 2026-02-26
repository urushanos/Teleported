const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Place = require("./models/Place");
const placesData = require("./data/places.json");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(async() => {
    console.log("MongoDB Connected");

    const count = await Place.countDocuments();

    if(count ==0){
      await Place.insertMany(placesData);
      console.log("Default inserted");
    }
  } 
)
  .catch(err => console.log(err));



// Routes
const placeRoutes = require("./routes/placeRoutes");
app.use("/api/places", placeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});