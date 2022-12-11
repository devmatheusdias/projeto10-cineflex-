import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Session from "./Session";
import Footer from "../Footer/Footer";
import Loading from "../../assets/img/loading.gif"
import { useParams } from "react-router-dom"


export default function SessionsList() {

    const [session, setSession] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idMovie}/showtimes`)
            .then(res => setSession(res.data))
            .catch(err => console.log(err));

    }, []);

    if (session.length === 0) {
        return <img src={Loading} alt="" />
    }

    return (
        <>
            <ContainerSessionsList>
                {session.days.map((session) => <Session session={session}></Session>)}
            </ContainerSessionsList>
            {/* <Footer session={session} date={date} showTime={showTime}></Footer> */}
        </>
    );
}

const ContainerSessionsList = styled.div`
    height: 700px;
    overflow-y: auto;
    img{
        width: 20px;
        height: 20px;
    }
`