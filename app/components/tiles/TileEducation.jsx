import styles from "@/app/styles/TileEducation.module.css";

export default function TileEducation({ active, setActive }) {
  const isOpen = active === "education";

  return (
    <div
      className={`tile ss c-education area-education ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "education")}
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

      {/* icon */}
      <div className={styles.ico}>
        <i className="fa-solid fa-graduation-cap"></i>
      </div>

      {/* text */}
      <h3 className={styles.title}>Education</h3>
      <p className={styles.sub}>
        Academic background & learning
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil!
      </p>
    </div>
  );
}
