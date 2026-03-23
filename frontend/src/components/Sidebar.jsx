import Wishlist from "../pages/Wishlist";
import Archive from "../pages/Archive";
import Profile from "../pages/Profile";

function Sidebar({ activeTab, setActiveTab }) {
  const renderContent = () => {
    if (activeTab === "wishlist") return <Wishlist />;
    if (activeTab === "archive") return <Archive />;
    if (activeTab === "profile") return <Profile />;
  };

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

      <div className="sidebar-content">{renderContent()}</div>
    </div>
  );
}

export default Sidebar;