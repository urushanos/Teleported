import React, { useState } from "react";
import PlaceCard from "../components/PlaceCard";

const Archive = () => {
  const [places, setPlaces] = useState([]);

  const addPlace = () => {
    const name = prompt("Enter place name");
    if (!name) return;

    setPlaces([...places, { name }]);
  };

  return (
    <div>
      <h2>Archive</h2>

      <button onClick={addPlace}>Add Place</button>

      <div className="card-container">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Archive;