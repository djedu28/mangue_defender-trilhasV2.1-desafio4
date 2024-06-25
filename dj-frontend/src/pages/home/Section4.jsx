// import SectionContainer from "src/components/SectionContainer";

import SectionContainer from "src/components/SectionContainer";
import styled from "styled-components";

const StyleSection4 = styled("div")`
    background: linear-gradient(180deg, #135D42 0%, #1D8F65 15.5%, #28C38A 44.76%, #28C38A 71.61%);
`
export default function Section4({ ...props }) {

    return <StyleSection4 >
        <SectionContainer {...{ ...props }}>
            
        </SectionContainer>
    </StyleSection4>
}