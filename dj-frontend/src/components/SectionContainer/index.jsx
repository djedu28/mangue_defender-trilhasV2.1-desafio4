import styled from 'styled-components'

const StyledSectionContainer = styled("section")`


`;

// eslint-disable-next-line react/prop-types
export default function SectionContainer({children}) {

    return <StyledSectionContainer>
        {children}
    </StyledSectionContainer>
}