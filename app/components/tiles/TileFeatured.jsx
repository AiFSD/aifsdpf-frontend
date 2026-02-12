import styles from "@/app/styles/TileFeatured.module.css";
import Image from "next/image";

export default function TileFeatured({ active, setActive }) {
  const isOpen = active === "featured";

  return (
    <div
      className={`tile ss c-featured area-featured ${
        isOpen ? "tile-open" : "tile-featured-flip"
      }`}
      onClick={() => !isOpen && setActive("featured")}
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
            <i className="fa-solid fa-file-arrow-down"></i>
          </div>

          <h3 className={styles.title}>Resume</h3>
          <p className={styles.sub}>
            Professional experience, skills, and project highlights presented in
            a structured resume format.
          </p>

          {/* ===== OPEN BODY ===== */}
          <div className="tile-body">
            <div
              style={{
                maxWidth: 720,
                margin: "0 auto",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <Image
                src="/resume.jpg"
                alt="Isaac Raja Resume"
              
                width={1200}
                height={1700}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>

            <p
              style={{
                marginTop: 16,
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              This is a preview of my resume. A downloadable PDF version can be
              provided on request.
            </p>
          </div>
        </>
      ) : (
        /* ===== CLOSED STATE (FLIP TILE) ===== */
        <div className="tile-flip-inner">
          {/* FRONT */}
          <div className="tile-face tile-front">
            <div className={styles.ico}>
              <i className="fa-solid fa-file-arrow-down"></i>
            </div>
            <h3 className={styles.title}>Resume</h3>
            <p className={styles.sub}>
              Professional profile, skills, and experience overview
            </p>
          </div>

          {/* BACK */}
          <div className="tile-face tile-back">
            <h3 className={styles.title}>Resume Preview</h3>
            <p>
              View a full resume layout including skills, projects, and
              experience
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
