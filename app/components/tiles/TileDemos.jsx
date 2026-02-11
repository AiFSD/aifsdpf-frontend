

export default function TileDemos({ active, setActive }) {
  const isOpen = active === "demos";

  return (
    <div
      className={`tile ss c-demos area-demos ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "demos")}
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
      <h3>demos</h3>
    </div>
  );
}
