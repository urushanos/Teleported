import React, { useState } from "react";
//import "./App.css";
import "./styles/global.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MapInfo from "./components/MapInfo";

import Wishlist from "./pages/Wishlist";
import Archive from "./pages/Archive";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [activeTab, setActiveTab] = useState("wishlist");
  const [user, setUser] = useState(null);
  const [authPage, setAuthPage] = useState("login");
  const [selectedPlace, setSelectedPlace] = useState(null);

  if (!user) {
    return authPage === "login" ? (
      <Login setUser={setUser} switchPage={() => setAuthPage("signup")} />
    ) : (
      <Signup switchPage={() => setAuthPage("login")} />
    );
  }

  return (
    <div className="app">
      <Navbar setSelectedPlace={setSelectedPlace} />

      <div className="main">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <MapInfo 
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          setWishlist={() => {}}
          setVisited={() => {}}
        />

        <div className="page-content">
          {activeTab === "wishlist" && <Wishlist />}
          {activeTab === "archive" && <Archive />}
          {activeTab === "profile" && <Profile user={user} />}
        </div>
      </div>
    </div>
  );
}

export default App;