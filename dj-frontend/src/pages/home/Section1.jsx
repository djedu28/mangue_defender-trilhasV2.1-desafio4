import Hero from "src/assets/images/hero.svg?react";
import Bubbles from "src/assets/images/bubble2.svg?react";
import Bubble from "src/assets/images/bubble1.svg?react";
import "../styles/Section1.css";

import SectionContainer from "src/components/SectionContainer";
import Button from "src/components/Button";

export default function Section1() {
  return (
    <SectionContainer style={{ backgroundColor: "#E3AE79"}} id="section1">
      <Hero style={{ width: "100%", height: "870px", zIndex: "2", maxWidth: "870px", margin:"auto", marginBottom: "-230px" }} />
      <Bubble  style={{
          position: "absolute",
          width: "50px",
          left: "5%",
          top: "10%",
        }} />
      <Bubble  style={{
          position: "absolute",
          width: "50px",
          right: "5%",
          top: "40%",
        }} />
      <Bubble  style={{
          position: "absolute",
          width: "50px",
          left: "1%",
          top: "40%",
        }} />
      <Bubbles
        style={{
          position: "absolute",
          width: "100px",
          zIndex: "1",
          right: "37%",
          top: "-20px",
        }}
      />
      <Bubbles
        style={{
          position: "absolute",
          width: "50px",
          zIndex: "1",
          right: "20%",
          top: "10px",
          transform: "rotate(90deg)"
        }}
      />
      <Bubbles
        style={{
          position: "absolute",
          width: "100px",
          zIndex: "1",
          left: "18%",
          top: "10%",
        }}
      />
        <Bubbles
        style={{
          position: "absolute",
          width: "50px",
          zIndex: "3",
          right: "50%",
          bottom: "-9%",
          transform: "rotate(90deg)"
        }}
      />
        <Bubbles
        style={{
          position: "absolute",
          width: "50px",
          zIndex: "3",
          left: "20%",
          top: "60%",
          transform: "rotate(90deg)"
        }}
      />
      <div className="section1_footer">
        <img src="src/assets/images/google_play.png"/>
        <Button style={{backgroundColor: "#F08C28", borderColor:"#FF850B"}}>
            inscrever-me
        </Button>
      </div>
}
