// Experience / Learning

export default function TileGithub({ active, setActive }) {
  const isOpen = active === "github";

  return (
    <div
      className={`tile ss c-github area-github ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "github")}
    >

      {!isOpen && (
        <div className="tile-preview">
          <p>6+ yrs leadership • Self-taught developer • Growth mindset</p>
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
            <p>
              Transitioned into tech after 6+ years of experience in training,
              mentoring, and leadership roles.
            </p>
            <p>
              Learning driven by curiosity and consistent hands-on practice
              through projects.
            </p>
            <p>
              Teaching background helps in understanding concepts deeply and
              building structured solutions.
            </p>

            <p><strong>Journey:</strong> Fundamentals → Demos → Full projects</p>
          </div>
        </>
      )}

      <h3>Journey</h3>
    </div>
  );
}
