import { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import FloatingCard from "./FloatingCard";

function Navbar() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="navbar">
      <h2>Teleported</h2>
      <SearchBar onSelectPlace={setSelectedPlace} />

      {/*<FloatingCard place={selectedPlace} /> */
      <FloatingCard 
        place={selectedPlace} 
        setSelectedPlace={setSelectedPlace}
      />}
    </div>
  );
}

export default Navbar;