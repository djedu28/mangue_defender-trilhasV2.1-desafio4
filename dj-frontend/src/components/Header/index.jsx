import styled from "styled-components"
import Logo from "../Logo"
import { Link } from "react-router-dom";
import BtnJogar from "../BtnJogar";


const StyleHeader = styled("div")`
    /* backgrounrgba(255, 133, 11, 0.37)37); */
    background: #ed9f50;

    .container {
        display: flex;
        /* place-items:center; */
        align-items: center;
        justify-content: space-between;
        min-height: 112px;
    }

    nav {
        font-family: 'Playground';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;

        color: #FFFFFF;

        display: flex;
        gap:25px;
        justify-content: space-between


    }


`;
export default function Header(){

    return <StyleHeader >
        <div className="container">
            <Logo/>
            
            <nav>
                <Link to="#HOME"> HOME </Link>
                <Link to="#SOBRE-O-JOGO"> SOBRE O JOGO </Link>
                <Link to="#INSCREVA"> INSCREVA-SE </Link>
                <Link to="#SOBRE-NOS"> SOBRE NÓS </Link>
            </nav>

            <BtnJogar/>
        </div>
    </StyleHeader>
}