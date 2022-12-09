import styled from "styled-components";
import Seat from "./Seat";
import Button from "../GlobalComponents/Button";

export default function SeatList() {
    return (
        <>
            <ContainerSeatList>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>

                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>

                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>

                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>

                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
                <Seat></Seat>
            </ContainerSeatList>

            <ContainerForms>
                <form action="">
                    <label htmlFor="input-name">Nome do comprador: </label>
                    <Input type="text" id="input-name" placeholder="Digite o seu nome" />

                    <label htmlFor="input-name">CPF do comprador: </label>
                    <Input type="text" id="input-names" placeholder="Digite o seu CPF..." />
                
                    <Button type="submit" titleButton={'Reservar assentos(s)'}></Button>
                </form>

            </ContainerForms>
        </>
    );
}


const ContainerSeatList = styled.div`
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ContainerForms = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;

        label{
            font-size: 18px;
            font-weight: 400;
            line-height: 21.09px;
            margin-bottom: 5px;
            margin-right: auto;
        }

    }
`
const Input = styled.input`
    width: 327px;
    height: 51px;
    border-radius: 3px;
    border: 1px solid #D5D5D5;
    background-color: #FFFFFF;
    padding-left: 15px;
    margin-bottom: 15px;

    ::placeholder{
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
    }
`
