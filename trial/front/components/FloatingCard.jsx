import axios from "axios";
import React, { useState, useEffect } from "react";

const FloatingCard = ({
  place,
  setSelectedPlace,
  setWishlist,
  setVisited,
}) => {
  if (!place) return null;

  const handleWishlist = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/places/wishlist/${place._id}`
      );

      const updated = res.data;

      setSelectedPlace(updated);

      setWishlist((prev) => {
        const exists = prev.find(p => p._id === updated._id);

        if (updated.wishlist) {
          return exists ? prev : [...prev, updated];
        } else {
          return prev.filter((p) => p._id !== updated._id);
        }
      });

    } catch (err) {
      console.error(err);
    }
  };

  const handleVisited = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/places/visited/${place._id}`
      );

      const updated = res.data;

      setSelectedPlace(updated);

      setVisited((prev) => {
        const exists = prev.find(p => p._id === updated._id);

        if (updated.visited) {
          return exists ? prev : [...prev, updated];
        } else {
          return prev.filter((p) => p._id !== updated._id);
        }
      });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="floating-card">
      <div className="image-placeholder">Image</div>

      <h3>{place.name}</h3>
      <p className="state">{place.state}</p>
      <p className="desc">{place.description}</p>

      <div className="card-buttons">
        <button className="wishlist-btn" onClick={handleWishlist}>
          {place.wishlist ? "Wishlisted!" : "Wishlist"}
        </button>

        <button className="visited-btn" onClick={handleVisited}>
          {place.visited ? "Visited" : "Archive"}
        </button>
      </div>
    </div>
  );
};

export default FloatingCard;