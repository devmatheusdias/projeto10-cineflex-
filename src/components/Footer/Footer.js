import styled from "styled-components";

export default function Footer(){
    return(
        <ContainerFooter>
            <img src="https://images2.imgbox.com/57/17/0JGhDyKv_o.png" alt="" />
            <div>
            <p>Enola Holmes</p>
            <p>Quinta-feira - 15:00</p>
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