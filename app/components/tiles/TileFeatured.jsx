import styles from "@/app/styles/TileFeatured.module.css";

export default function TileFeatured({ active, setActive }) {
  const isOpen = active === "featured";

  return (
    <div
      className={`tile ss c-featured area-featured ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "featured")}
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
        <i className="fa-solid fa-file-arrow-down"></i>
      </div>

      {/* text */}
      <h3 className={styles.title}>Resume</h3>
      <p className={styles.sub}>
        View & download my resume
      </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.</p>
    </div>
  );
}
