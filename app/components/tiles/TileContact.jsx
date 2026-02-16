// contact

export default function TileContact({ active, setActive }) {
  const isOpen = active === "contact";

  return (
    <div
      className={`tile ss c-contact area-contact ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "contact")}
    >
      {!isOpen && (
        <div className="tile-preview">
          <p>Email • GitHub • LinkedIn</p>
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
            <p>Want to connect or collaborate? Reach me here:</p>

            <p><strong>Email:</strong> <span>your-email-here</span></p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/AiFSD" target="_blank">Check my repositories</a>
            </p>

            <p><strong>LinkedIn:</strong> <span>your-linkedin-here</span></p>
            <p><strong>Resume:</strong> <span>your-resume-link-here</span></p>
          </div>
        </>
      )}

      <h3>contact</h3>
    </div>
  );
}
