// Engineering Approach :

export default function TileTestimonials({ active, setActive }) {
  const isOpen = active === "testimonials";

  return (
    <div
      className={`tile ss c-testimonials area-testimonials ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "testimonials")}
    >

      {!isOpen && (
        <div className="tile-preview">
          <p>Clean logic • Structured code • Problem breakdown</p>
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
            <p>My approach focuses on breaking problems into smaller, manageable parts.</p>
            <p>Code is written with clarity, predictable data flow, and reuse in mind.</p>
            <p>Projects are built step-by-step rather than rushed solutions.</p>

            <p><strong>Seen in:</strong></p>
            <p>• Mentor–Student API → data relationships</p>
            <p>• Todo App → state, sorting, filtering</p>
            <p>• Shopping Cart → user flow & logic</p>
          </div>
        </>
      )}

      <h3>testimonials</h3>
    </div>
  );
}
