import styled from "styled-components"

const StyledBtnGooglePlay = styled("a")`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    
    ${({ modo }) => modo=="ligth"
        ?`
            --cor-texto: #f0eded;
            --cor-fundo: black;
            --cor-fundo-contraste: #222020;
        ` : `
            --cor-texto: black;
            --cor-fundo: #f0eded;
            --cor-fundo-contraste: #ffffff;
        `
    }

    background-color: var(--cor-fundo);
    color: var(--cor-texto);

    padding: 1rem 2rem ;
    font-style: normal;
    font-weight: 700;
    font-family: 'Poppins';
    font-size: 22px;

    .btngoogleplay-p-small {
        font-family: 'Poppins';
        font-size: 18px;
        line-height: 27px;
    }
    &:hover {
        outline: 2px solid var(--cor-texto);
    }
    &:active {
        outline: 4px solid var(--cor-texto);
        background-color: var(--cor-fundo-contraste);
    }
`;

export default function BtnGooglePlay({ ligth }) {
    
    return (
        <StyledBtnGooglePlay modo={(!!ligth || Math.random() > 0.5) ? "ligth":""} href="https://play.google.com/store/search?q=mangue%20defender&c=apps" target="none">
            <SvgGplay/>
            <div>
                <p className="btngoogleplay-p-small">Disponível no</p>
                <p> Google Play </p>
            </div>
        </StyledBtnGooglePlay>
    )
}

const SvgGplay = (props)=>(
    <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <path fill="url(#pattern0_301_3198)" d="M0 0H48V48H0z" />
        <defs>
            <pattern
                id="pattern0_301_3198"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use xlinkHref="#image0_301_3198" transform="scale(.02083)" />
            </pattern>
            <image
                id="image0_301_3198"
                width={48}
                height={48}
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
)