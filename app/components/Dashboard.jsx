import ScrollContainer from "./ScrollContainer";
import TileAbout from "./tiles/TileAbout";
import TileFeatured from "./tiles/TileFeatured";
import TileFrontend from "./tiles/TileFrontend";


import TileSkills from "./tiles/TileSkills";
import TileAPI from "./tiles/TileAPI";
import TileEducation from "./tiles/TileEducation";
import TileResume from "./tiles/TileResume";
import TileContact from "./tiles/TileContact";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <ScrollContainer>
        <TileAbout />
        <TileFeatured />
        <TileFrontend />
        
       
        <TileSkills />
        <TileAPI />
        <TileEducation />
        <TileResume />
        <TileContact />
      </ScrollContainer>
    </div>
  );
}
