import styles from "@/app/styles/TileApi.module.css";

export default function TileAPI({ active, setActive }) {
  const isOpen = active === "api";

  return (
    <div
      className={`tile ss c-api area-api ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "api")}
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
        <i className="fa-solid fa-plug"></i>
      </div>

      {/* text */}
      <h3 className={styles.title}>API Work</h3>
      <p className={styles.sub}>
        Build & integrate REST APIs
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>  
        <p>Libero repudiandae odit illo, dolore ab officia</p>
      <p>  deserunt illum similique aspernatur laboriosam.</p>
          <p>Libero repudiandae odit illo, dolore ab officia</p>
      <p>  deserunt illum similique aspernatur laboriosam.</p>
      </p>
    </div>
  );
}


