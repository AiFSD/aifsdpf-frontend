import styles from "@/app/styles/TileBackend.module.css";

export default function TileBackend({ active, setActive }) {
  const isOpen = active === "backend";

  return (
    <div
      className={`tile ss c-backend area-backend ${isOpen ? "tile-open" : ""}`}
      onClick={() => !isOpen && setActive("backend")}
    >
      {isOpen && (
        <button
          className="close-btn"
          onClick={(e) => {
            e.stopPropagation();
            setActive(null);
          }}
          aria-label="Close"
        >
          ×
        </button>
      )}

      {isOpen ? (
        <>
          {/* ===== METRO HEADER (ABSOLUTE – UNCHANGED) ===== */}
          <div className={styles.ico}>
            <i className="fa-solid fa-server"></i>
          </div>
          <h3 className={styles.title}>Backend</h3>
          <p className={styles.sub}>APIs • DB • performance</p>

          {/* ===== OPEN BODY (READING MODE) ===== */}
          <div className="tile-body">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              Node.js / Express REST APIs (Deployed)
            </p>

            <p style={{ lineHeight: 1.7 }}>
              I build backend services using <strong>Node.js</strong> and{" "}
              <strong>Express</strong>, focusing on clean REST design, validation,
              error handling, and scalable routing. These are live API demos
              deployed on Render (sometimes they take a moment to “wake up”). :contentReference[oaicite:1]
            </p>

            <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.7 }}>
              <li>REST endpoints, middleware, and clean routing</li>
              <li>Auth flows (tokens / password reset patterns)</li>
              <li>Request validation + consistent error responses</li>
              <li>Deployed backend services (Render)</li>
            </ul>

            <p style={{ marginTop: 18, fontWeight: 600 }}>
              Live Backend Services
            </p>

            <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
              <li>
                <a
                  href="https://password-reset-be-1ctm.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Password Reset API
                </a>{" "}
                – Auth + reset workflow service
              </li>

              <li>
                <a
                  href="https://express-timestamp.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express Timestamp API
                </a>{" "}
                – Utility microservice (timestamp conversions)
              </li>

              <li>
                <a
                  href="https://mentors-students-api.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mentor–Student API
                </a>{" "}
                – CRUD + relationship management
              </li>

              <li>
                <a
                  href="https://hall-booking-kmbf.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hall Booking API
                </a>{" "}
                – Booking endpoints + availability logic
              </li>
            </ul>
          </div>
        </>
      ) : (
        /* ===== CLOSED TILE (METRO FACE) ===== */
        <div className="tile-face tile-front">
          <div className={styles.ico}>
            <i className="fa-solid fa-server"></i>
          </div>
          <h3 className={styles.title}>Backend</h3>
         <p className={styles.sub}>
  Backend development using Node.js and Express, focused on REST API design,
  middleware patterns, authentication flows, and structured CRUD operations.
  Inside this tile are live backend services demonstrating data relationships,
  validation logic, error handling, and production-style API deployment.
</p>

        </div>
      )}
    </div>
  );
}
