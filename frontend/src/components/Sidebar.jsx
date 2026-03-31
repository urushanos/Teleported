import React, { useState, useEffect } from "react";
  
  const Sidebar = ({ activeTab, setActiveTab, wishlist, visited }) => {
  const data = activeTab === "wishlist" ? wishlist : visited;

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <div
          className={`tab ${activeTab === "wishlist" ? "active" : ""}`}
          onClick={() => setActiveTab("wishlist")}
        >
          wishlist
        </div>

        <div
          className={`tab ${activeTab === "archive" ? "active" : ""}`}
          onClick={() => setActiveTab("archive")}
        >
          archive
        </div>

        <div
          className={`tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          profile
        </div>
      </div>

       <div className="sidebar-content">
        {data.length === 0 ? (
          <p>No places yet</p>
        ) : (
          data.map((place) => (
            <div key={place._id} className="card">
              <div className="image-placeholder">Image</div>
              <h4>{place.name}</h4>
              <p>{place.state}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;