import ReactLogo  from "../../assets/images/logo.svg?react";
import Button from "../Button";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <ReactLogo style={{width:'220px', height: "90px"}}/>
      <tab>
        <a>Home</a>
        <a>SOBRE O JOGO</a>
        <a> INSCREVA-SE</a>
        <a>SOBRE</a>
      </tab>
        <Button action={() => {}}>JOGUE AGORA</Button>
    </header>
  );
}
