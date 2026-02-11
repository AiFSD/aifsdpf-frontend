

export default function TileTools({ active, setActive }) {
  const isOpen = active === "tools";

  return (
    <div
      className={`tile ss c-tools area-tools ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "tools")}
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
      <h3>tools</h3>
    </div>
  );
}
