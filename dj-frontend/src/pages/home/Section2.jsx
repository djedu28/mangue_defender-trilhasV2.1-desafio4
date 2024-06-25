import Roots from "src/assets/images/roots.svg?react";
import SectionContainer from "src/components/SectionContainer";
import Plate from "src/assets/images/plate.svg?react";
import About from "src/assets/images/about.svg?react";
import AboutMobile from "src/assets/images/about_mobile.svg?react";
import Button from "src/components/Button";

import "../styles/Section2.css";
export default function Section2() {
  return (
    <SectionContainer style={{ backgroundColor: "#91FE96" }} id="section2">
      <Roots
        style={{
          position: "absolute",
          top: "-17vh",
          left: "0",
          width: "70%",
          zIndex: "1",
        }}
      />
      <div className="content">
        <div className="about">
          <div id="image_about">
            <Plate style={{ width: "100%", height: "70%" }} />
          </div>
          <About style={{ width: "100%", height: "90%", zIndex: "2" }} />
        </div>
        <div className="about_mobile">
          <AboutMobile style={{ width: "100%", height: "100%", zIndex: "2" }} />
        </div>
      </div>
    </SectionContainer>
  );
}
