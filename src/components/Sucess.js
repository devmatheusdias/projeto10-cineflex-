import styled from "styled-components";

export default function Success(){
    return(
        <ContainerSucess>
            <div>
                <h5>Filme e sessão</h5>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>

            <div>
                <h5>Ingressos</h5>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>

            <div>
                <h5>Comprador</h5>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
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

