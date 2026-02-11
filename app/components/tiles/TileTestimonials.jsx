
export default function TileTestimonials({ active, setActive }) {
  const isOpen = active === "testimonials";

  return (
    <div
      className={`tile ss c-testimonials area-testimonials ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "testimonials")}
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
      <h3>testimonials</h3>
    </div>
  );
}
