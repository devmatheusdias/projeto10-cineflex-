// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom"
import Seat from "./Seat";
import Button from "../GlobalComponents/Button";
import { useEffect, useState } from "react";
import Loading from "../../assets/img/loading.gif"
import axios from "axios";
import Footer from "../Footer/Footer";


export default function SeatList({ setShopperName, setShopperCpf, selectedSeats, setSelectedSeats, movie, session, sessionHour, weekday }) {

    const [seats, setSeats] = useState([]);
    const params = useParams();
    const navigate = useNavigate()


    const [inputName, setInputName] = useState("");
    const [inputCpf, setInputCpf] = useState("");


    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSession}/seats`)
            .then(res => setSeats(res.data))
            .catch(err => console.log(err));
    }, []);

    if (seats.length === 0) {
        return <img src={Loading} alt="" />
    }


    function reservar(event) {
        event.preventDefault();

        if (selectedSeats.length == 0) {
            return alert('Você precisa selecionar no minimo 1 assento');
        } else {

            const selectedSeatsId = [];
            selectedSeats.map((selectedSeats) => selectedSeatsId.push(selectedSeats.id));


            const pedido = {
                ids: selectedSeatsId,
                name: inputName,
                cpf: inputCpf
            }

            const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many"

            axios.post(url, pedido).then(res => console.log('reservado!')).catch(err => console.log(err));

            setShopperName(inputName);
            setShopperCpf(inputCpf);
            navigate("/success")
        }
    }

    return (
        <>
            <ContainerSeatList>
                <p>Selecione o(s) assento(s)</p>
                {seats.seats.map((seat) => <Seat seat={seat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}></Seat>)}
            </ContainerSeatList>
            <ContainerForms>
                <form action="" onSubmit={reservar}>
                    <label htmlFor="">Nome do comprador:</label>
                    <Input data-test="client-name" type="text" placeholder="Digite seu nome..." minLength={3} onChange={(e) => setInputName(e.target.value)} required />

                    <label htmlFor="">CPF do comprador:</label>
                    <Input data-test="client-cpf" type="text" placeholder="Digite seu CPF..." minLength={11} onChange={(e) => setInputCpf(e.target.value)} required />

                    <Button data-test="book-seat-btn" titleButton={'Reservar assento(s)'}></Button>
                </form>
            </ContainerForms>
            <Footer data-test="footer" movie={movie} session={session} weekday={weekday} sessionHour={sessionHour}></Footer>
        </>
    );
}

const ContainerSeatList = styled.div`
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    p{
        width: 100%;
        padding: 30px 0px;
        box-sizing: border-box;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13pxs;
    }
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
