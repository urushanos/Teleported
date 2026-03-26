import React from "react";
import axios from "axios";

const FloatingCard = ({ place }) => {
  if (!place) return null;

   const handleWishlist = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/places/wishlist/${place._id}`
      );
      alert("Added to wishlist!");
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="floating-card">
      <div className="image-placeholder">
        <span>Image</span>
      </div>

      <h3>{place.name}</h3>
      <p className="state">{place.state}</p>
      <p className="desc">{place.description}</p>

      <div className="card-buttons">
        <button className="wishlist-btn" onClick={handleWishlist}> 
          {place.wishlist ? "Wishlisted" : "Wishlist"}
        </button>
        <button className="visited-btn">Visited</button>
      </div>
    </div>
  );
};

export default FloatingCard;