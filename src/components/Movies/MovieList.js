import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { Link, useParams } from "react-router-dom"


export default function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
            .then(res => setMovies(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <ContainerMoveList>
            {movies.map((movie) =>
                <Link to={`/sessions/${movie.id}`}>
                    <Movie movieAPI={movie} />
                </Link>
            )}
        </ContainerMoveList>
    );
}

const ContainerMoveList = styled.div`
    height: 733px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding: 38px;
    overflow-y: auto;
`