import styles from "@/app/styles/TileAbout.module.css";

export default function TileAbout({ active, setActive }) {
  const isOpen = active === "about";

  return (
    <div
      className={`tile rt c-about area-about ${isOpen ? "tile-open" : ""}`}
      onClick={() => !isOpen && setActive("about")}
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

      {/* ===== OPEN STATE (NO FLIP, OLD CONTENT) ===== */}
    {isOpen ? (
  <>
    <div className={styles.ico}>
      <i className="fa-solid fa-user"></i>
    </div>

    <h3 className={styles.title}>Isaac Raja</h3>
    <p className={styles.sub}>Learn more about who I am and what I do.</p>

    {/* NEW: body content starts BELOW the absolute header */}
    <div style={{ marginTop: 110, maxWidth: 780 }}>
      <p style={{ margin: 0, lineHeight: 1.7, fontWeight: 500 }}>
        ABOUT ME
      </p>

      <p style={{ marginTop: 10, lineHeight: 1.7 }}>
        I’m a Full-Stack Developer specializing in <strong>React</strong> and{" "}
        <strong>Node.js</strong>, passionate about building scalable, user-centric
        web applications. I craft clean, efficient code to transform ideas into
        seamless digital solutions—focusing on problem-solving and collaborative
        development.
      </p>

      <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.7 }}>
        <li>React / Next.js for modern UI</li>
        <li>REST APIs, auth, and backend workflows</li>
        <li>Clean UI, performance, and maintainable code</li>
      </ul>
    </div>
  </>
) : (
        /* ===== CLOSED STATE (FLIP TILE) ===== */
        <div className="tile-flip-inner">
          {/* FRONT */}
          <div className="tile-face tile-front">
            <div className={styles.ico}>
              <i className="fa-solid fa-user"></i>
            </div>
            <h3 className={styles.title}>Isaac Raja</h3>
<p className={styles.sub}>
  Full-stack developer with hands-on experience building complete web
  applications — from clean, responsive frontend interfaces to structured
  backend services and API integrations. This section introduces my background,
  development approach, technical focus areas, and how I translate ideas into
  real, working products.
</p>


          </div>

          {/* BACK */}
       <div className="tile-face tile-back">
  <p>Building modern web apps</p>
  <p>UI that feels fast & clean</p>
  <p>API-driven full-stack flows</p>
  <p>Reusable components & layouts</p>
  <p>Performance + maintainability</p>
  <p>Deployment-ready structure</p>
  <p>Click to know more</p>
</div>

        </div>
      )}
    </div>
  );
}
