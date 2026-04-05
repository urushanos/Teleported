import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/120"
          className="profile-pic"
        />

        <h2>{user.username}</h2>

        <div className="profile-stats">
          <p>Stats coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;