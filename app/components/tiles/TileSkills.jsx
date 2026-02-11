import Image from "next/image";
import styles from "@/app/styles/TileSkills.module.css";


export default function TileSkills({ active, setActive }) {
  const isOpen = active === "skills";

const skills = [
  { name: "JS", src: "/Js.jpeg" },
  { name: "React", src: "/Reactjs.jpeg" },
  { name: "Next.js", src: "/NextJs.jpeg" },
  { name: "TypeScript", src: "/Typescript.jpeg" },
  { name: "MongoDB", src: "/mongo.jpeg" },
  { name: "SQL", src: "/MySQL.jpeg" },
  { name: "Bootstrap", src: "/Bootstrap.jpeg" },
  { name: "Redux", src: "/Capture.JPG" }, 
  { name: "Postman", src: "/Postman.jpeg" },
  { name: "GitHub", src: "/github.jpeg" },
  { name: "HTML + CSS", src: "/hc.jpeg" },
  { name: "Axios", src: "/axios.jpeg" },
];


  return (
  
    
  <div
   
    className={`tile ss c-skills area-skills ${isOpen ? "tile-open" : ""}`}
    onClick={() => setActive(isOpen ? null : "skills")}
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



<div className={styles.skillsWrap} onClick={(e) => e.stopPropagation()}>
  
  <div className={styles.skillsGrid}>
    {skills.map((skill) => (
      <div className={styles.skillCard} key={skill.name} title={skill.name}>
        <Image src={skill.src} alt={skill.name} width={40} height={40} />
      </div>
    ))}
  </div>
 
</div>



    {/* optional expanded-only content later */}
    {isOpen && (
      <div className={styles.skillsExpanded}>
        {/* future detailed content */}
      </div>
    )}
     <div className={styles.skillsTitle}>
 
</div>
  </div>

);

}
