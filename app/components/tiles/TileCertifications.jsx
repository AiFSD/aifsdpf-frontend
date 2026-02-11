

export default function TileCertifications({ active, setActive }) {
  const isOpen = active === "certs";

  return (
    <div
      className={`tile ss c-certs area-certs ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "certs")}
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
      <h3>serts</h3>
    </div>
  );
}
