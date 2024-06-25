import Hero  from "../../assets/images/hero.svg?react";
import '../styles/Section1.css'

import SectionContainer from "src/components/SectionContainer";

export default function Section1() {

    return <SectionContainer style={{backgroundColor: "#E3AE79"}}>
            <Hero style={{width:"65%"}}/>
    </SectionContainer>
}