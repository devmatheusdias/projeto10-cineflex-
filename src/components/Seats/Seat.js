import styled from "styled-components";
import { AVAILABLE } from "../../constants/colors";
import { UNAVAILABLE } from "../../constants/colors";
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
            console.log(selectedSeats)
            return;
        }

        setSelectedSeats([...selectedSeats, seat]);

        console.log(selectedSeats)

        return;

        // if (!selectedSeats.includes(seat)) {
        //     setSelectedSeats([...selectedSeats, seat]);
        // } else {
        //     alert(`${seat.name} ja selecionado!`)
        // }

    }



    return (
        <>
            <ContainerSeat isAvailable={isAvailable} selectedSeats={!selectedSeats.includes(seat)} onClick={() => { selecionar(seat) }} >
                {name}
            </ContainerSeat>
        </>

    );
}

const ContainerSeat = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: ${(props) => props.isAvailable ? AVAILABLE : UNAVAILABLE};
    border: 1px solid #808f9d;
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
