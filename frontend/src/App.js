import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/global.css";

function App() {
  const [activeTab, setActiveTab] = useState("wishlist");

  return (
    <div className="app-container">
      <Navbar />

      <div className="main-layout">
        <div className="map-area"></div>

        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;