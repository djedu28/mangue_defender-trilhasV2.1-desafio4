// import SectionContainer from "src/components/SectionContainer";

import BtnJogar from "src/components/BtnJogar";
import { FormRegister } from "src/components/FormRegister";
import SectionContainer from "src/components/SectionContainer";
import { ChaoPedras } from "src/components/svgs/ChaoPedras";
import SvgLagosta from "src/components/svgs/SvgLagosta";
import styled from "styled-components";

const StyleDivider = styled("div")`
    background: #F0C06C;
    padding: 20px 0;

    display: flex;
    place-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap:wrap;
    
    p {
        /* EXPERIMENTE GRATUITAMENTE! */
        /* width: 433px; */

        font-family: 'Playground';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 28px;
        /* identical to box height */
        color: #FFFFFF;
    }

`;

const StyledSection3 = styled("div")`
    position: relative;
    /* height: 100%; */
    /* min-height: 1024px; */
    max-width: 2456px;
    overflow: hidden;
    display: block;
    
    .div-form {
        margin: 0 auto;
        min-width: fit-content;
        max-width: 1440px;
        /* position: absolute;
        right: 172px;
        top: 126px;

        mix-blend-mode: normal; */
        /* padding-top: 12px */
        display: flex;
        justify-content: right;
        padding-top: 20px;
        padding-right: 161px;
        padding-bottom: 110px;

        form {
            z-index: 9;
        }
    }
    @media (max-width:600px){
        .div-form {padding-right: 2rem;}
    }
`;
export default function Section3({ ...props }) {

    return <SectionContainer {...{ ...props }} bg="#F6D0B0">
        <StyleDivider>
            <p>EXPERIMENTE GRATUITAMENTE!</p>
            <BtnJogar />
        </StyleDivider>
        <StyledSection3 className="container">

            <div className="div-form">
                <FormRegister/>
            </div>

            <Section3Decoration/>

        </StyledSection3>
    </SectionContainer>
}


function Section3Decoration(){

    return (
        <Section3DecorationStyled>
            <div className="lagosta"><SvgLagosta /></div>
            <ChaoPedras/>
        </Section3DecorationStyled>
    )
}
const Section3DecorationStyled = styled("div")`
    position: absolute;
    /* z-index: 0; */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    .lagosta {
        /* pngwing.com (2) 1 */

        position: absolute;
        left: 64px;
        bottom: 82px;

        display: flex;
        /* z-index: -1; */
    }
`;


