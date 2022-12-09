import styled from "styled-components"

export default function Movie({movieAPI}){

    const {posterURL} = movieAPI

    return(
        <ContainerMovie>
            <img src={posterURL} alt="" />
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