import styles from "@/app/styles/TileApi.module.css";

export default function TileAPI({ active, setActive }) {
  const isOpen = active === "api";

  return (
    <div
      className={`tile ss c-api area-api ${isOpen ? "tile-open" : ""}`}
      onClick={() => !isOpen && setActive("api")}
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
            <i className="fa-solid fa-plug"></i>
          </div>

          <h3 className={styles.title}>API Work</h3>
          <p className={styles.sub}>Build & integrate REST APIs</p>

          {/* ===== OPEN BODY ===== */}
          <div className="tile-body">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              API Integration & Communication
            </p>

            <p style={{ lineHeight: 1.7 }}>
              I work extensively with REST APIs for data exchange between
              frontend and backend systems. My focus is reliable connectivity,
              clean request handling, and consistent responses across
              environments.
            </p>

            <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.7 }}>
              <li>
                API requests using <strong>Axios</strong>, <strong>Fetch</strong>,
                and <strong>XMLHttpRequest</strong>
              </li>
              <li>
                Full CRUD operations (GET, POST, PUT, PATCH, DELETE)
              </li>
              <li>
                API testing with <strong>Postman</strong> and{" "}
                <strong>Thunder Client</strong>
              </li>
              <li>
                Handling authentication headers and tokens
              </li>
              <li>
                Working with external APIs, sandboxes, and third-party services
              </li>
            </ul>

            <p style={{ marginTop: 14, lineHeight: 1.7 }}>
              I ensure stable API connectivity, proper error handling, and
              predictable data flow between services and user interfaces.
            </p>
          </div>
        </>
      ) : (
        /* ===== CLOSED TILE ===== */
        <div className="tile-face tile-front">
          <div className={styles.ico}>
            <i className="fa-solid fa-plug"></i>
          </div>
          <h3 className={styles.title}>API Work</h3>
          <p className={styles.sub}>
  API communication and integration workflows using Axios, Fetch, and
  XMLHttpRequest, covering full CRUD operations and external data consumption.
  This section demonstrates testing with Postman and Thunder Client, handling
  headers and tokens, sandbox usage, and reliable connectivity between systems.
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
