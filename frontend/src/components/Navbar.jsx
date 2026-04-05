import SearchBar from "./SearchBar";

const Navbar = ({ setSelectedPlace }) => {
  return (
    <div className="navbar">
      <h2>Teleported</h2>
      <SearchBar onSelectPlace={setSelectedPlace} />
    </div>
  );
}

export default Navbar;