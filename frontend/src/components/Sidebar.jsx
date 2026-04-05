import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sidebar">
      <div
        className={activeTab === "wishlist" ? "active" : ""}
        onClick={() => setActiveTab("wishlist")}
      >
        Wishlist
      </div>

      <div
        className={activeTab === "archive" ? "active" : ""}
        onClick={() => setActiveTab("archive")}
      >
        Archive
      </div>

      <div
        className={activeTab === "profile" ? "active" : ""}
        onClick={() => setActiveTab("profile")}
      >
        Profile
      </div>
    </div>
  );
};

export default Sidebar;