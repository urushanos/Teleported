import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapInfo";
import "./styles/global.css";

function App() {
  const [activeTab, setActiveTab] = useState("wishlist");
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div>
      <Navbar onSelectPlace={setSelectedPlace} />

      <div className="main-layout">
        <div className="map-area">
          <MapView selectedPlace={selectedPlace} />
        </div>

        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;