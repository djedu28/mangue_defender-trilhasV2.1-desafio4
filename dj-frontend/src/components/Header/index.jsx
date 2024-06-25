
import ReactLogo  from "../../assets/images/logo.svg?react";
import {useState} from 'react'
import Button from "../Button";
import "./styles.css";


export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ReactLogo style={{maxWidth:'200px', width: "40%", height: "91px"}}/>
      <nav className={open ? 'nav open' : 'nav'}>
        <a href="#section1">Home</a>
        <a href="#section2">SOBRE O JOGO</a>
        <a href="#section3"> INSCREVA-SE</a>
        <a href="#section4">SOBRE NÓS</a>
      </nav>
        <Button action={() => {}}>JOGUE AGORA</Button>
    </header>
  );
}

