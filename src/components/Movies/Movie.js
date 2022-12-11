import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Movie({ movie }) {

    const { posterURL } = movie

    return (
        <ContainerMovie>
            <Link to={`/sessions/${movie.id}`}>
                <img src={posterURL} alt="" />
            </Link>
        </ContainerMovie>
    );
}

const ContainerMovie = styled.div`
    width: 129px;
    height: 193px;
    background-color: aquamarine;
    margin-bottom: 27px;

    img{
        width: 129px;
        height: 193px;
        cursor: pointer;
    }
`