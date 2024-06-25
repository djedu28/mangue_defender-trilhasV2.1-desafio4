import { Link } from "react-router-dom"
import styled from "styled-components"


const StyledBtnJogar = styled("button")`
    /* Rectangle 11 */

    /* 
    width: 236px;
    height: 65px; 
    */
    font-family: 'Playground';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;

    color: #FFFFFF;

    background-color: #22EC37;
    border: 1px solid #10A959;
    border-radius: 25px;
    
    padding: 7px 8px;

    div {
        padding: 10px 12px;
        background-color: #73F980;
        border: 1px solid #10A959;
        border-radius: 25px;
    }
    
    &:hover {
        background-color: #10A959;
        border-radius: 50px;
        
        div {
            background-color: #22EC37;
        }
    }


`
export default function BtnJogar(){

    return (
        <Link to="#jogar">
            <StyledBtnJogar href="#jogar">
                <div>
                    JOGUE AGORA
                </div>
            </StyledBtnJogar>
        </Link>
    )
}