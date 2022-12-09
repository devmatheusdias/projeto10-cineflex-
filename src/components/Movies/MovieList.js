import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";


export default function MovieList(){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
        .then(res => setMovies(res.data))
        .catch(err => console.log(err));
    }, []);

    console.log(movies[0])

    return(
        <ContainerMoveList>
            {movies.map((movie) => <Movie movieAPI={movie}></Movie>)}
        </ContainerMoveList>
    );
}

const ContainerMoveList = styled.div`
    height: 733px;
    border: 1px solid black;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding: 38px;
    overflow-y: auto;
`