import styles from "@/app/styles/TileFullStack.module.css";

export default function TileFullStack({ active, setActive }) {
  const isOpen = active === "fullstack";

  return (
    <div
      className={`tile rt c-fullstack area-fullstack ${isOpen ? "tile-open" : ""}`}
      onClick={() => !isOpen && setActive("fullstack")}
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
            <i className="fa-solid fa-link"></i>
          </div>

          <h3 className={styles.title}>Projects</h3>

          <p className={styles.sub}>
            Front-end • Back-end • Full stack builds
          </p>

          {/* ===== OPEN BODY ===== */}
          <div className="tile-body">
            <p
              style={{
                fontWeight: 600,
                marginBottom: 8,
                color: "#2b1a00",
              }}
            >
              Full-Stack Applications (Code Repositories)
            </p>

            <p style={{ lineHeight: 1.7, color: "#3b2408" }}>
              These projects combine <strong>React / Next.js</strong> on the
              frontend with <strong>Node.js / Express</strong> backends. The
              focus is complete application flow — UI, APIs, data handling, and
              deployment-ready structure.
            </p>

            <ul
              style={{
                marginTop: 12,
                paddingLeft: 18,
                lineHeight: 1.7,
                color: "#3b2408",
              }}
            >
              <li>Frontend + backend integration</li>
              <li>REST APIs, auth flows, and data models</li>
              <li>Clean architecture and scalable structure</li>
            </ul>

            <p
              style={{
                marginTop: 18,
                fontWeight: 600,
                color: "#2b1a00",
              }}
            >
              GitHub Repositories
            </p>

            <ul
              style={{
                paddingLeft: 18,
                lineHeight: 1.9,
              }}
            >
              <li>
                <a
                  href="#"
                  style={{ color: "#7a3f00", fontWeight: 500 }}
                >
                  Full-Stack Project One
                </a>{" "}
                <span style={{ color: "#5c3a16" }}>
                  — lorem ipsum dolor sit amet
                </span>
              </li>

              <li>
                <a
                  href="#"
                  style={{ color: "#7a3f00", fontWeight: 500 }}
                >
                  MERN Application
                </a>{" "}
                <span style={{ color: "#5c3a16" }}>
                  — consectetur adipiscing elit
                </span>
              </li>

              <li>
                <a
                  href="#"
                  style={{ color: "#7a3f00", fontWeight: 500 }}
                >
                  Dashboard System
                </a>{" "}
                <span style={{ color: "#5c3a16" }}>
                  — sed do eiusmod tempor
                </span>
              </li>
            </ul>
          </div>
        </>
      ) : (
        /* ===== CLOSED TILE ===== */
        <div className="tile-face tile-front">
          <div className={styles.ico}>
            <i className="fa-solid fa-link"></i>
          </div>
          <h3 className={styles.title}>Projects</h3>
       <p className={styles.sub}>
  End-to-end full-stack application development combining React or Next.js
  frontends with Node.js and Express backends. This section contains integrated
  project workflows covering UI, API communication, authentication, data flow,
  and clean project architecture built with real-world use cases in mind.
</p>

        </div>
      )}
    </div>
  );
}
