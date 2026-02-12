"use client";

import { useState , useEffect } from "react";
import ScrollContainer from "./ScrollContainer";
import TileAbout from "./tiles/TileAbout";
import TileFeatured from "./tiles/TileFeatured";
import TileFrontend from "./tiles/TileFrontend";
import TileBackend from "./tiles/TileBackend";
import TileFullstack from "./tiles/TileFullstack";
import TileSkills from "./tiles/TileSkills";
import TileAPI from "./tiles/TileAPI";
import TileEducation from "./tiles/TileEducation";
import TileResume from "./tiles/TileResume";
import TileContact from "./tiles/TileContact";
import { useScrollCtx } from "./ScrollContext";
import TileDemos from "./tiles/TileDemos";
import TileMiniTools from "./tiles/TileMiniTools";
import TileCertifications from "./tiles/TileCertifications";
import TileGithub from "./tiles/TileGithub";
import TileTestimonials from "./tiles/TileTestimonials";


export default function Dashboard() {
  const [activeTile, setActiveTile] = useState(null);
  const { scrollLeft, scrollRight, atStart, atEnd } = useScrollCtx();
  const hasOpen = !!activeTile;

useEffect(() => {
  const onKeyDown = (e) => {
    if (e.key === "Escape") setActiveTile(null);
  };
  window.addEventListener("keydown", onKeyDown);
  return () => window.removeEventListener("keydown", onKeyDown);
}, []);


  return (
    <div className="dashboard-wrapper">
      <ScrollContainer >
         <div
    className={`overlay ${hasOpen ? "show" : ""}`}
    onClick={() => setActiveTile(null)}
  />
        {/* PANEL 1 */}
        <section className="panel">
          <TileAbout active={activeTile} setActive={setActiveTile} />
          <TileFeatured active={activeTile} setActive={setActiveTile} />
          <TileFrontend  active={activeTile} setActive={setActiveTile} />
          <TileBackend  active={activeTile} setActive={setActiveTile}/>
          <TileFullstack active={activeTile} setActive={setActiveTile}/>
          <TileSkills active={activeTile} setActive={setActiveTile} />
          <TileAPI active={activeTile} setActive={setActiveTile}/>
          <TileEducation active={activeTile} setActive={setActiveTile}/>
        </section>
  
        {/* PANEL 2 */}
        <section className="panel panel-2">
          <TileResume active={activeTile} setActive={setActiveTile}/>
          <TileContact active={activeTile} setActive={setActiveTile}/>
          <TileDemos active={activeTile} setActive={setActiveTile}/>
          <TileMiniTools active={activeTile} setActive={setActiveTile}/>
          <TileCertifications active={activeTile} setActive={setActiveTile}/>
          <TileGithub active={activeTile} setActive={setActiveTile}/>
          <TileTestimonials active={activeTile} setActive={setActiveTile}/>
          
        </section>
    
      </ScrollContainer>
    </div>
  );
}
