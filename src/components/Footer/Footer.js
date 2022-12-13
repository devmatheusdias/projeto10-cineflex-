import styled from "styled-components";

export default function Footer({ movie, weekday, sessionHour }) {

    const { title, posterURL } = movie;

    return (
        <ContainerFooter>
            <img src={posterURL} alt="" />
            <div>
                <p>{title}</p>
                <p>{weekday} {sessionHour}</p>
            </div>
        </ContainerFooter>
    );
}

const ContainerFooter = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    box-sizing: border-box;
    padding: 14px 10px;
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;

    img{
        width: 64px;
        height: 89px;
        border-radius: 2px;
        background-color: #FFFFFF;
        padding: 8px;
        box-sizing: border-box;
        margin-right: 15px;
    }
    p{
        font-size: 26px;
        font-weight: 400;
        line-height: 30.47px;
    }
`