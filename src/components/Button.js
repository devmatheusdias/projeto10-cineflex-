import styled from "styled-components";
import { ORANGE_BTN } from "../constants/colors";

export default function Button({titleButton}){
   return(
    <StyledButton>{titleButton}</StyledButton>
   ); 
}

const StyledButton = styled.button`
    width: 225px;
    height: 42px;
    border-radius: 3px;
    background-color: ${ORANGE_BTN};
    color: #FFFFFF;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
`