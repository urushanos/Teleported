import { useEffect, useState } from "react";
import axios from "axios";

function Wishlist() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/places/wishlist")
      .then((res) => setPlaces(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {places.map((place) => (
        <div key={place._id} className="card">
          <div className="image-placeholder"></div>
          <h4>{place.name}</h4>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;