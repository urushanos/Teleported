import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FloatingCard from "./FloatingCard";
import Navbar from "./Navbar";

const FlyToLocation = ({ place }) => {
  const map = useMap();

  if (place) {
    map.flyTo([place.lat, place.lng], 10, {
      duration: 1.5,
    });
  }

  return null;
};

const MapView = ({ selectedPlace }) => {

  return (
    <div className="map-page">

      <MapContainer
        center={[22.9734, 83.6569]} // India center
        zoom={5}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

       <FlyToLocation place={selectedPlace} />

        {selectedPlace && (
          <Marker position={[selectedPlace.lat, selectedPlace.lng]}>
            <Popup>{selectedPlace.name}</Popup>
          </Marker>
        )}
      </MapContainer>
      

    </div>
  );
};

export default MapView;