// import SectionContainer from "src/components/SectionContainer";

import BtnJogar from "src/components/BtnJogar";
import { FormRegister } from "src/components/FormRegister";
import SectionContainer from "src/components/SectionContainer";
import styled from "styled-components";

const StyleDivider = styled("div")`
    min-height: 110px;
    background: #F0C06C;

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


export default function Section3({ ...props }) {

    return <SectionContainer {...{ ...props }} bg="#F6D0B0">
        
        <StyleDivider>
            <p>EXPERIMENTE GRATUITAMENTE!</p>
            <BtnJogar />
        </StyleDivider>


        <FormRegister/>

    </SectionContainer>
}





