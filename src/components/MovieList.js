import styled from "styled-components";
import Movie from "./Movie";

export default function MovieList(){
    return(
        <ContainerMoveList>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
        </ContainerMoveList>
    );
}

const ContainerMoveList = styled.div`
    height: 733px;
    border: 1px solid black;
    background-color: aliceblue;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding: 38px;
    overflow-y: auto;
`