import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FloatingCard from "./FloatingCard";

const MapView = ({
  selectedPlace,
  setSelectedPlace,
  setWishlist,
  setVisited
}) => {
  return (
    <div className="map-wrapper">

      <MapContainer
        center={[22.9734, 83.6569]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedPlace && (
          <Marker position={[selectedPlace.lat, selectedPlace.lng]}>
            <Popup>{selectedPlace.name}</Popup>
          </Marker>
        )}
      </MapContainer>

      <FloatingCard
        place={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        setWishlist={setWishlist}
        setVisited={setVisited}
      />

    </div>
  );
};

export default MapView;