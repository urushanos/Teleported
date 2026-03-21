function Wishlist() {
  const places = [
    { name: "Goa", description: "Beaches and vibes" },
    { name: "Manali", description: "Snowy mountains" },
    { name: "Kerala", description: "Backwaters" },
    { name: "Ladakh", description: "High altitude desert" },
  ];

  return (
    <div>
      {places.map((place, index) => (
        <div key={index} className="card">
          <div className="image-placeholder"></div>
          <h4>{place.name}</h4>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;