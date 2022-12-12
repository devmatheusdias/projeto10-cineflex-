import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { Link, useParams } from "react-router-dom"


export default function MovieList({setMovie}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <ContainerMovieList>
            {movies.map((movie) =>
                <Movie movie={movie} setMovie={setMovie}/>
            )}
        </ContainerMovieList>
    );
}

const ContainerMovieList = styled.div`
    height: 733px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding: 38px;
    overflow-y: auto;
`