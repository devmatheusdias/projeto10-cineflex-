import { useEffect, useState } from "react";
import styled from "styled-components";
import Session from "./Session";
import axios from "axios";

export default function SessionsList() {

    const [session, setSession] = useState({});
    const {days} = session;

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`)
            .then(res => setSession(res.data))
            .catch(err => console.log(err));
            alert(session.title)
    }, []);


    return (
        <ContainerSessionsList>
            {days.map((session) => <Session session={session}></Session>)}
        </ContainerSessionsList>
    );
}

const ContainerSessionsList = styled.div`
    height: 700px;
    background-color: aliceblue;
    overflow-y: auto;
`