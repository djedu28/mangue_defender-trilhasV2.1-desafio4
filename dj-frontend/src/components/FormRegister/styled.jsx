import styled from "styled-components";

export const StyledForm = styled("form")`
    width: 100%;
    max-width: 550px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 15px;
    gap: 25px; 

    background: #FF850B;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 22px;

    h2 {
        /* INSCREVA-SE */
        font-family: 'Playground';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 59px;
        text-align: center;

        color: #FFFFFF;

        /* Inside auto layout */
        flex: none;
        flex-grow: 0;
    }
    
    .container-input-form {
        /* Auto layout */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;

        flex: none;
        flex-grow: 0;
    }

    .form-actions{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        gap: 2rem;
    }
    button {
        
        margin-top: 10px;
        background: #FFFFFF;
        border-radius: 8px;
        padding: 0.6rem;
        border: 1px solid gray;
               
        cursor: pointer;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;

        color: #112B38;

        flex-grow: 1;


    }

    button:hover {
        font-weight: bold;
        color: black;
        outline: auto;
    }
`;
export const StyledInputContainer = styled("label")`

    width: 100%;
    padding: 0 1rem;

    
    flex: none;
    flex-grow: 0;

    display: flex;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    border: 2px solid #FFFFFF;
    &, input {
        border-radius: 16px;
    }
    

    &, label, input {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
    label {
        color: #8f8f8f;
        padding-right: 1rem;
    }

    input {
        flex: 1;
        /* text-align: center; */
        height: 100%;
        width: 100%;

        border: none;
        background: none;
        padding: 1rem 0;
    }
    input:focus,
    input:focus-visible,
    input:focus-within {
        outline: none;
    }
    &:focus,
    &:focus-visible,
    &:focus-within {
        outline: auto;
    }

    a {
        font-weight: bold;
    }
    
`;

export const FormHelperText = styled("p")`
    padding: 0;
    margin-left: 1rem;
    font-size: 1rem;
    color: #5c000f ;
`;


export const StyledBoxLaranja = styled("form")`
    /* width: 550px; */

    min-height: 625px;
    z-index:6!important;
    flex:content;

    width: 100%;
    min-width: min-content;
    max-width: 550px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* justify-content: space-between; */
    align-items: center;
    padding: 40px 15px;
    gap: 25px; 

    background: #FF850B;
    mix-blend-mode: normal;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    &:hover {
        z-index: 9!important;
    }
    h2 {
        /* INSCREVA-SE */
        font-family: 'Playground';
        font-style: normal;
        font-weight: 400;
        font-size: 3.5rem;
        line-height: 59px;
        text-align: center;

        color: #FFFFFF;

        /* Inside auto layout */
        flex: none;
        flex-grow: 0;
    }
    .container-text-success {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;

        /* Inscrição realizada com sucesso! Clique abaixo para baixar o jogo no seu android */
        font-family: 'Acme';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        text-align: center;

        color: #FFFFFF;


        /* Inside auto layout */
        flex: none;
        align-self: stretch;
        flex-grow: 0;
    }
`;