// featured 

export default function TileResume({ active, setActive }) {
  const isOpen = active === "resume";

  return (
    <div
      className={`tile ss c-resume area-resume ${
        isOpen ? "tile-open" : ""
      }`}
      onClick={() => setActive(isOpen ? null : "resume")}
    >

      {!isOpen && (
        <div className="tile-preview">
          <p>Complete projects • Real-world logic • Best work</p>
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
              <strong>Mentor–Student API</strong> – SQL-based backend project with proper
              relational database structure.
            </p>
            <a href="https://github.com/AiFSD/mentors-students-api" target="_blank">
              Check database design
            </a>

            <p>
              <strong>Shopping Cart</strong> – E-commerce style cart handling user
              interaction and state flow.
            </p>
            <a href="https://github.com/AiFSD/shoppingCart" target="_blank">
              Check cart logic
            </a>

            <p>
              <strong>Todo App (React)</strong> – Task management with sorting,
              filtering, and status control.
            </p>
            <a href="https://github.com/AiFSD/todos" target="_blank">
              Check React state handling
            </a>
          </div>
        </>
      )}

      <h3>featured</h3>
    </div>
  );
}
