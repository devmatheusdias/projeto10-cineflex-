// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom"
import Seat from "./Seat";
import Button from "../GlobalComponents/Button";
// import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../../assets/img/loading.gif"
import axios from "axios";


    export default function SeatList({setShopperName,setShopperCpf, selectedSeats, setSelectedSeats}) {

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

    function reservar(event){
        event.preventDefault();
        setShopperName(inputName);
        setShopperCpf(inputCpf);
        navigate("/success")
    }

    return (
        <>
            <ContainerSeatList>
                {seats.seats.map((seat) => <Seat seat={seat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}></Seat>)}
            </ContainerSeatList>
            <ContainerForms>
                <form action="" onSubmit={reservar}>
                    <label htmlFor="">Nome do comprador:</label>
                    <Input type="text" placeholder="Digite seu nome..." onChange={(e) => setInputName(e.target.value)} required/>

                    <label htmlFor="">CPF do comprador:</label>
                    <Input type="text" placeholder="Digite seu CPF..." onChange={(e) => setInputCpf(e.target.value)} required/>

                    <Button titleButton={'Reservar assento(s)'}></Button>

                </form>
            </ContainerForms>
        </>
    );
}



{/* <ContainerForms>
                <form action="" onSubmit={reservar}>
                    <label htmlFor="input-name">Nome do comprador: </label>
                    <Input type="text" id="input-name" placeholder="Digite o seu nome" onChange={(e) => setBuyerName(e.target.value)} required />

                    <label htmlFor="input-cpf">CPF do comprador: </label>
                    <Input type="text" id="input-cpf" minLength={10} placeholder="Digite o seu CPF..." onChange={(e) => setBuyerCPF(e.target.value)} required />

                    <Button type="submit" titleButton={'Reservar assentos(s)'}></Button>
                </form>
            </ContainerForms>
            <Footer session={session}></Footer> */}

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
