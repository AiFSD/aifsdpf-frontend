import styles from "@/app/styles/TileFrontend.module.css";

export default function TileFrontend({ active, setActive }) {
  const isOpen = active === "frontend";

  return (
    <div
      className={`tile ss c-frontend area-frontend ${isOpen ? "tile-open" : ""}`}
      onClick={() => !isOpen && setActive("frontend")}
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
            <i className="fa-solid fa-palette"></i>
          </div>
          <h3 className={styles.title}>Frontend</h3>
          <p className={styles.sub}>UI that feels fast & clean</p>

          {/* ===== OPEN BODY (READING MODE) ===== */}
          <div className="tile-body">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              Frontend Work & Live Projects
            </p>

            <p style={{ lineHeight: 1.7 }}>
              I build responsive, user-focused interfaces using{" "}
              <strong>React</strong>, <strong>Next.js</strong>, modern{" "}
              <strong>CSS</strong>, and UI libraries like{" "}
              <strong>Bootstrap</strong>. My focus is clean layout, performance,
              and real-world usability.
            </p>

            <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.7 }}>
              <li>Component-driven UI with React & Next.js</li>
              <li>Responsive layouts using CSS & Bootstrap</li>
              <li>API-driven interfaces and pagination</li>
              <li>Deployment with Netlify</li>
            </ul>

            <p style={{ marginTop: 18, fontWeight: 600 }}>
              Deployed Frontend Projects
            </p>

            <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
              <li>
                <a href="https://surveyex.netlify.app/" target="_blank">
                  Survey App
                </a>{" "}
                – Dynamic forms & state handling
              </li>
              <li>
                <a href="https://paginationex.netlify.app/" target="_blank">
                  Pagination Example
                </a>{" "}
                – API pagination & UI logic
              </li>
              <li>
                <a href="https://explore3apis.netlify.app/" target="_blank">
                  Explore 3 APIs
                </a>{" "}
                – Multiple API integration demo
              </li>
              <li>
                <a href="https://ognews.netlify.app/" target="_blank">
                  OG News
                </a>{" "}
                – News app with external API data
              </li>
            </ul>
          </div>
        </>
      ) : (
        /* ===== CLOSED TILE (METRO FACE) ===== */
        <div className="tile-face tile-front">
          <div className={styles.ico}>
            <i className="fa-solid fa-palette"></i>
          </div>
          <h3 className={styles.title}>Frontend</h3>
<p className={styles.sub}>
  React & Next.js frontend builds focused on real UI delivery — reusable
  components, responsive layouts, clean spacing/typography, and smooth data
  rendering from APIs. Inside: live project demos, pagination examples,
  multi-API integration, and production-style UI structure.
</p>



        </div>
      )}
    </div>
  );
}
