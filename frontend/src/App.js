import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MapView from "./components/MapView";
import "./styles/global.css";

function App() {
  const [activeTab, setActiveTab] = useState("wishlist");

  return (
    <div>
      <Navbar />

      <div className="main-layout">
        <div className="map-area">
          <MapView />
        </div>

        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;