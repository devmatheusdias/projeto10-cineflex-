import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Session from "./Session";
import Footer from "../Footer/Footer";
import Loading from "../../assets/img/loading.gif"
import { useParams } from "react-router-dom"


export default function SessionsList({movie, session, setSession,  setSessionDate, setSessionHour, setWeekday}) {

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
                <p className="page-title">Selecione o horário</p>
                {session.days.map((session) => <Session session={session} setSessionDate={setSessionDate} setSessionHour={setSessionHour} setWeekday={setWeekday}></Session>)}
            </ContainerSessionsList>
            <Footer data-test="footer" movie={movie} session={''} sessionHour={''}></Footer>
        </>
    );
}

const ContainerSessionsList = styled.div`
    height: 700px;
    overflow-y: auto;
    .page-title{
        width: 100%;
        padding: 30px 0px;
        box-sizing: border-box;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13pxs;
    }
    
    img{
        width: 20px;
        height: 20px;
    }
`