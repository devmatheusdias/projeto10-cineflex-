import styled from "styled-components";

export default function Success({movie, shopperName, shopperCpf, selectedSeats, session, sessionDate, sessionHour}){
    return(
        <ContainerSucess>
            <div>
                <h5>Filme e sessão</h5>
                <p>{movie.title}</p>
                <p>{sessionDate} - {sessionHour}</p>
            </div>

            <div>
                <h5>Ingressos</h5>
                {selectedSeats.map((selectedSeat) => <p>Assento: {selectedSeat.name}</p>)}
            </div>

            <div>
                <h5>Comprador</h5>
                <p>Nome: {shopperName}</p>
                <p>CPF: {shopperCpf}</p>
            </div>
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
`

