

export default function TileContact({ active, setActive }) {
  const isOpen = active === "contact";

  return (
    <div
      className={`tile ss c-contact area-contact ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "contact")}
    >
      {isOpen && (
        <button
          className="close-btn"
          onClick={(e) => { e.stopPropagation(); setActive(null); }}
          aria-label="Close"
        >
          ×
        </button>
      )}
      <h3>contact</h3>
    </div>
  );
}
