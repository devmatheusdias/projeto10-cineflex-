import styled from "styled-components";
import { GRAY_AVAILABLE } from "../../constants/colors";

export default function Seat(){
    return(
        <ContainerSeat>
            01
        </ContainerSeat>
    );
}

const ContainerSeat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: ${GRAY_AVAILABLE};
    border: 1px solid #808f9d;
    margin: 2px;
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.89px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`