import styled from 'styled-components'

const StyledSectionContainer = styled("section")`


`;

// eslint-disable-next-line react/prop-types
export default function SectionContainer({ bg, children, ...props}) {

    return <StyledSectionContainer 
        style={{ background: bg }} 
        {...{ props }}
    >
        {children}
    </StyledSectionContainer>
}