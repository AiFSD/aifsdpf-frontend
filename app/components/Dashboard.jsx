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

import TileDemos from "./tiles/TileDemos";
import TileMiniTools from "./tiles/TileMiniTools";
import TileCertifications from "./tiles/TileCertifications";
import TileGithub from "./tiles/TileGithub";
import TileTestimonials from "./tiles/TileTestimonials";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <ScrollContainer>
        {/* PANEL 1 */}
        <section className="panel">
          <TileAbout />
          <TileFeatured />
          <TileFrontend />
          <TileBackend />
          <TileFullstack />
          <TileSkills />
          <TileAPI />
          <TileEducation />
        </section>

        {/* PANEL 2 */}
        <section className="panel panel-2">
          <TileResume />
          <TileContact />
          <TileDemos />
          <TileMiniTools />
          <TileCertifications />
          <TileGithub />
          <TileTestimonials />
        </section>
      </ScrollContainer>
    </div>
  );
}
