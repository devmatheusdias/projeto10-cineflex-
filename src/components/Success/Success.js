import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../GlobalComponents/Button";

export default function Success({movie, shopperName, shopperCpf, selectedSeats, session, sessionDate, sessionHour}){

    const navigate = useNavigate();

    function goToHome(){
        navigate("/")
    }

    return(
        <ContainerSucess>

            <p className="page-title">Pedido feito com sucesso!</p>

            <div data-test="movie-info">
                <h5>Filme e sessão</h5>
                <p>{movie.title}</p>
                <p>{sessionDate} - {sessionHour}</p>
            </div>

            <div data-test="seats-info">
                <h5>Ingressos</h5>
                {selectedSeats.map((selectedSeat) => <p>Assento: {selectedSeat.name}</p>)}
            </div>

            <div data-test="client-info">
                <h5>Comprador</h5>
                <p>Nome: {shopperName}</p>
                <p>CPF: {shopperCpf}</p>
            </div>

            <Button data-test="go-home-btn" titleButton={"Voltar pra Home"} funcao={goToHome}></Button>
        </ContainerSucess>
    );
}


const ContainerSucess = styled.div`

    padding: 28px;

    div{
        margin-bottom: 28px;
    }
    h5{
        font-size: 24px;
        font-weight: 700;
        line-height: 28.13px;
        letter-spacing: 0.04em;
    }

    p{
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
    }

    button{
        margin: 70px 50px;
    }

    .page-title{
        color: #247A6B;
        width: 170px;
        text-align: center;
        margin: 15px auto 60px auto; 
        font-size: 24px;
        font-weight: 700;
        line-height: 28.13px;
;
    }

`

