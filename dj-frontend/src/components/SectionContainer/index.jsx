import styled from 'styled-components'

const StyledSectionContainer = styled("section")`
min-height: 50vh;

`;

// eslint-disable-next-line react/prop-types
export default function SectionContainer({ bg, children, style={}, ...props}) {

    return <StyledSectionContainer 
        style={{ 
            ...style,  
            background: bg || style?.backgroundColor,
        }} 
        // {...{ props }}
    >
        {children}
    </StyledSectionContainer>
}