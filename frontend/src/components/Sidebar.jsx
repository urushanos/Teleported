import Wishlist from "../pages/Wishlist";
import Archive from "../pages/Archive";
import Profile from "../pages/Profile";

function Sidebar({ activeTab, setActiveTab }) {
  const renderContent = () => {
    switch (activeTab) {
      case "wishlist":
        return <Wishlist />;
      case "archive":
        return <Archive />;
      case "profile":
        return <Profile />;
      default:
        return <Wishlist />;
    }
  };

  return (
    <div className="sidebar">
      {/* TOP BUTTONS */}
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

      {/* SCROLLABLE CONTENT */}
      <div className="sidebar-content">{renderContent()}</div>
    </div>
  );
}

export default Sidebar;