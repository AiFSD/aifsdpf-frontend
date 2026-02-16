// demos 

export default function TileDemos({ active, setActive }) {
  const isOpen = active === "demos";

  return (
    <div
      className={`tile ss c-demos area-demos ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "demos")}
    >

      {!isOpen && (
        <div className="tile-preview">
          <p>API handling • DOM manipulation • Pagination</p>
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
            <p><strong>REST Countries API</strong> – API fetch and array methods.</p>
            <a href="https://github.com/AiFSD/rest-countries" target="_blank">Check API logic</a>

            <p><strong>Pagination App</strong> – Client-side pagination.</p>
            <a href="https://github.com/AiFSD/pagination" target="_blank">Check pagination</a>

            <p><strong>Surveys App</strong> – Form validation and DOM updates.</p>
            <a href="https://github.com/AiFSD/surveys" target="_blank">Check form handling</a>
          </div>
        </>
      )}

      <h3>demos</h3>
    </div>
  );
}
