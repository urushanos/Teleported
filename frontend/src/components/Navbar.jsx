import { useState } from "react";
import axios from "axios";

function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/places/search?q=${query}`
        );

        console.log(res.data); // test output
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="navbar">
      <h2>Teleported</h2>
      <input
        placeholder="Where’s your dream vacation?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default Navbar;