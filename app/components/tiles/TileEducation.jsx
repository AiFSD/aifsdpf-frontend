import styles from "@/app/styles/TileEducation.module.css";

export default function TileEducation({ active, setActive }) {
  const isOpen = active === "education";

  return (
    <div
      className={`tile ss c-education area-education ${isOpen ? "tile-open" : ""}`}
      onClick={() => !isOpen && setActive("education")}
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
            <i className="fa-solid fa-graduation-cap"></i>
          </div>

          <h3 className={styles.title}>Education</h3>
          <p className={styles.sub}>Academic background & certification</p>

          {/* ===== OPEN BODY ===== */}
          <div className="tile-body" style={{ color: "#000" }}>
            <p style={{ fontWeight: 600, marginBottom: 10 }}>
              Education & Certifications
            </p>

            <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
              <li>
                <strong>Advanced Full Stack Development</strong> — AITech Academy,
                <span> 2025</span>
              </li>

              <li>
                <strong>MERN Stack Development</strong> — GUVI (IIT Madras),
                <span> 2023</span>
              </li>

              <li>
                <strong>Bachelor of Commerce (Information Technology)</strong> —
                Hindusthan College of Science,
                <span> 2017–2020</span>
              </li>
            </ul>

            <p style={{ marginTop: 14, lineHeight: 1.7 }}>
              My learning journey combines formal education with hands-on
              training, focused on modern web technologies, practical
              problem-solving, and real-world application development.
            </p>
          </div>
        </>
      ) : (
        /* ===== CLOSED STATE (FLIP TILE) ===== */
        <div className="tile-flip-inner">
          <div className="tile-face tile-front">
            <div className={styles.ico}>
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className={styles.title}>Education</h3>
            <p className={styles.sub}>
  Academic foundation and professional training in full-stack web development,
  including degree education and specialized MERN-stack programs.
</p>

          </div>

          <div className="tile-face tile-back">
            <p>Degree</p>
            <p>Certifications</p>
            <p>Continuous learning</p>
          </div>
        </div>
      )}
    </div>
  );
}
