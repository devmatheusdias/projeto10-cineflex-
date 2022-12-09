import styled from "styled-components";
import Session from "./Session";

export default function SessionsList() {
    return (
        <ContainerSessionsList>
            <Session></Session>
            <Session></Session>
            <Session></Session>
            <Session></Session>
            <Session></Session>
            <Session></Session>
            <Session></Session>
        </ContainerSessionsList>
    );
}

const ContainerSessionsList = styled.div`
    height: 700px;
    background-color: aliceblue;
    overflow-y: auto;
`