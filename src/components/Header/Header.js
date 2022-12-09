import styled from 'styled-components'
import { ORANGE_BTN } from '../../constants/colors';

export default function Header(){
    return(
        <HeaderContainer>
            <p>CINEFLEX</p>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 34px;
    line-height: 39.84px;
    color: ${ORANGE_BTN};
`