import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapInfo";
import "./styles/global.css";

function App() {
  const [activeTab, setActiveTab] = useState("wishlist");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [wishlist, setWishlist] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const wishlistRes = await axios.get(
        "http://localhost:5000/api/places/wishlist"
      );

      const visitedRes = await axios.get(
        "http://localhost:5000/api/places/visited"
      );

      setWishlist(wishlistRes.data);
      setVisited(visitedRes.data);

    } catch (err) {
      console.error("Error loading sidebar data:", err);
    }
  };

  fetchData();
}, []);

  return (
    <div>
      <Navbar onSelectPlace={setSelectedPlace} />

      <div className="main-layout">
        <div className="map-area">
          <MapView
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
            setWishlist={setWishlist}
            setVisited={setVisited}
          />

            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              wishlist={wishlist}
              visited={visited}
            />
        </div>

      
      </div>
    </div>
  );
}

export default App;