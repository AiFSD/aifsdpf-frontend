import styles from "@/app/styles/TileBackend.module.css";

export default function TileBackend({ active, setActive }) {
  const isOpen = active === "backend";

  return (
    <div
      className={`tile ss c-backend area-backend ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "backend")}
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
        <i className="fa-solid fa-server"></i>
      </div>

      {/* text */}
      <h3 className={styles.title}>Backend</h3>
      <p className={styles.sub}>
        APIs • DB • performance
      </p>
       <p>  deserunt illum similique</p>
       <p>  deserunt illum </p>
    </div>
  );
}
