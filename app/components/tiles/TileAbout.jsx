import styles from "@/app/styles/TileAbout.module.css";

export default function TileAbout({ active, setActive }) {
  const isOpen = active === "about";

  return (
    <div
      className={`tile rt c-about area-about ${isOpen ? "tile-open" : ""}`}
      onClick={() => setActive(isOpen ? null : "about")}
    >
      {isOpen && (
        <button
          className="close-btn"
          onClick={(e) => { e.stopPropagation(); setActive(null); }}
          aria-label="Close"
        >
          ×
        </button>
      )}

      <div className={styles.ico}>
        <i className="fa-solid fa-user"></i>
      </div>

      <h3 className={styles.title}>About Me</h3>
      <p className={styles.sub}>Learn more about who I am and what I do.</p>
          <p>Libero repudiandae odit illo, dolore ab officia</p>
     
       <p>Learn more</p>
    </div>
  );
}
