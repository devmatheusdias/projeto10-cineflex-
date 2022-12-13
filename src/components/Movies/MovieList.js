import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";

export default function MovieList({ setMovie }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <ContainerMovieList>
            <p className="page-title">Selecione o filme</p>
            {movies.map((movie) =>
                <Movie movie={movie} setMovie={setMovie} />
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

    .page-title{
        width: 100%;
        padding: 0px 0px 30px 0px;
        box-sizing: border-box;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13pxs;
    }
    
`