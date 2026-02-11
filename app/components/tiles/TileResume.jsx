


export default function TileResume({ active, setActive }) {
  const isOpen = active === "resume";

  return (
    <div
      className={`tile ss c-resume area-resume ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "resume")}
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
      <h3>resume</h3>
    </div>
  );
}
