import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Travel India</h2>

      <Link to="/">Map</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/archive">Travel Archive</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Sidebar;