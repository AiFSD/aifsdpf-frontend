import styles from "@/app/styles/TileFrontend.module.css";

export default function TileFrontend({ active, setActive }) {
  const isOpen = active === "frontend";

  return (
    <div
      className={`tile ss c-frontend area-frontend ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "frontend")}
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
        <i className="fa-solid fa-palette"></i>
      </div>

      {/* text */}
      <h3 className={styles.title}>Frontend</h3>
      <p className={styles.sub}>
        UI that feels fast & clean
      </p>
      <p>  deserunt illum similique</p>
      <p>  deserunt illum similique</p>
    </div>
  );
}
