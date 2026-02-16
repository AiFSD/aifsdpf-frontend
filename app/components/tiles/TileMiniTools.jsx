// tools

export default function TileTools({ active, setActive }) {
  const isOpen = active === "tools";

  return (
    <div
      className={`tile ss c-tools area-tools ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "tools")}
    >
      {!isOpen && (
        <div className="tile-preview">
          <p>MERN basics • React • SQL • Git</p>
        </div>
      )}

      {isOpen && (
        <>
          <button
            className="close-btn"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            aria-label="Close"
          >
            ×
          </button>

          <div className="tile-content">
            <p><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Vite</p>
            <p><strong>Backend:</strong> Node.js (basic), Express (basic), SQL</p>
            <p><strong>APIs:</strong> REST APIs, Fetch, JSON</p>
            <p><strong>Workflow:</strong> Git, GitHub, responsive UI building</p>

            <p><strong>Proof in projects:</strong></p>
            <p>• React state + logic → Todo App</p>
            <p>• API fetch + data processing → REST Countries</p>
            <p>• SQL structure + relationships → Mentor–Student API</p>
          </div>
        </>
      )}

      <h3>tools</h3>
    </div>
  );
}
