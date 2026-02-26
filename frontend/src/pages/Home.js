import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "reactstrap";

function Home(){
    const [places, setPlaces] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:5000/api/places")
            .then(res => setPlaces(res.data))
            .catch(err => console.log(err));
        }, []);

        const toggleWishlist = async (id) => {
    await axios.patch(`http://localhost:5000/api/places/${id}`);
    const updated = await axios.get("http://localhost:5000/api/places");
    setPlaces(updated.data);
  };

  return (
    <div>
      <MapContainer
        center={[22.9734, 78.6569]}  // India center
        zoom={5}
        style={{ height: "100vh", width: "100%" }}
        maxBounds={[
          [6.0, 68.0],
          [37.0, 97.0]
        ]}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map(place => (
          <Marker key={place._id} position={[place.lat, place.lng]}>
            <Popup>
              <h5>{place.name}</h5>
              <p>{place.state}</p>
              <Button
                color={place.wishlist ? "success" : "primary"}
                size="sm"
                onClick={() => toggleWishlist(place._id)}
              >
                {place.wishlist ? "Wishlisted" : "Add to Wishlist"}
              </Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Home;