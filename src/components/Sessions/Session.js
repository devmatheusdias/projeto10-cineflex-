
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { ORANGE_BTN } from "../../constants/colors";
import { Link } from "react-router-dom";


export default function Session({ session }) {

    const { weekday, date, showtimes } = session;

    return (
        <ContainerSession>
            <p>{weekday} : {date}</p>
            <div>
                <Link to={`seats/${showtimes[0].id}`}>
                    <button>{showtimes[0].name}</button>
                </Link>

                <Link to={`seats/${showtimes[1].id}`}>
                    <button>{showtimes[1].name}</button>
                </Link>

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
        cursor: pointer;
    }
`