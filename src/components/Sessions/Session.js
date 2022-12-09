import styled from "styled-components";
import { ORANGE_BTN } from "../../constants/colors";

export default function Session() {
    return (
        <ContainerSession>
            <p>Quinta-feira - 24/06/2021</p>
            <div>
                <button>15:00</button>
                <button>19:00</button>
            </div>
        </ContainerSession>
    );
}

const ContainerSession = styled.div`
    padding: 23px;

    p{
        font-size: 20px;
        font-weight: 400;
        line-height: 23.44px;
        letter-spacing: 0.02em;
        margin-bottom: 23px;
    }

    button{
        width: 83px;
        height: 43px;
        border-radius: 3px;
        border: none;
        color: #FFFFFF;
        background-color: ${ORANGE_BTN};
        font-size: 18px;
        line-height: 21.09px;
        margin-right: 9px;
    }
`