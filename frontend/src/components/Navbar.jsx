import SearchBar from "./SearchBar";

function Navbar({ onSelectPlace }) {
  return (
    <div className="navbar">
      <h2>Teleported</h2>
      <SearchBar onSelectPlace={onSelectPlace} />
    </div>
  );
}

export default Navbar;