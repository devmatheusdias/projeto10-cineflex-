import styled from "styled-components";
import { AVAILABLE } from "../../constants/colors";
import { BORDER_AVAILABLE } from "../../constants/colors"
import { UNAVAILABLE } from "../../constants/colors";
import {BORDER_UNAVAILABLE} from "../../constants/colors"
import { SELECTED } from "../../constants/colors";
import { BORDER_SELECTED } from "../../constants/colors"


import "../../styles/style.css"

export default function Seat({ seat, selectedSeats, setSelectedSeats }) {

    const { name, isAvailable } = seat;


    function selecionar(seat) {
        if (!seat.isAvailable) {
            return;
        }

        seat.selected = !seat.selected;

        if (!seat.selected) {
            const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
            setSelectedSeats([...filteredSeats]);
            return;
        }

        setSelectedSeats([...selectedSeats, seat]);
        console.log(selectedSeats)
        return;
    }

    return (
        <>
            <ContainerSeat data-test="seat" isAvailable={isAvailable} selectedSeats={!selectedSeats.includes(seat)} onClick={() => { selecionar(seat) }} >
                {name}
            </ContainerSeat>
        </>

    );
}

const ContainerSeat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: ${(props) => props.isAvailable ? props.selectedSeats ? AVAILABLE : SELECTED : UNAVAILABLE};
    border: 1px solid ${(props) => props.isAvailable ? props.selectedSeats ? BORDER_AVAILABLE : BORDER_SELECTED : BORDER_UNAVAILABLE};
    margin: 2px;
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.89px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${(props) => props.isAvailable ? 'pointer' : 'auto'};
`
