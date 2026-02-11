



export default function TileGithub({ active, setActive }) {
  const isOpen = active === "github";

  return (
    <div
      className={`tile ss c-github area-github ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "github")}
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
      <h3>github</h3>
    </div>
  );
}
