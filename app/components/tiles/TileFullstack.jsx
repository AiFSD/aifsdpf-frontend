import styles from "@/app/styles/TileFullStack.module.css";

export default function TileFullStack({ active, setActive }) {
  const isOpen = active === "fullstack";

  return (
    <div
      className={`tile rt c-fullstack area-fullstack ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "fullstack")}
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

      <div className={styles.ico}>
        <i className="fa-solid fa-link"></i>
      </div>

      <h3 className={styles.title}>Projects</h3>

      <p className={styles.sub}>
        Front-end • Back-end • Full stack builds
      </p>
       <p>  deserunt illum similique aspernatur laboriosam.</p>
        <p>  deserunt illum similique aspernatur laboriosam.</p>
    </div>
  );
}
