import styled from 'styled-components'
import Header from './Header/Header';
import MovieList from '../components/Movies/MovieList';
import Footer from './Footer/Footer';
import SeatList from '../components/Seats/SeatList';
import SessionsList from './Sessions/SessionList';
import Success from './Success/Success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [buyerCPF, setBuyerCPF] = useState('');
  const [buyerName, setBuyerName] = useState('');


  return (
    <AppContainer>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MovieList></MovieList>} />
          <Route path='/sessions/:idSession' element={<SessionsList></SessionsList>}/>
          <Route path='/seats' element={<SeatList buyerCPF={buyerCPF} setBuyerCPF={setBuyerCPF} buyerName={buyerName} setBuyerName={setBuyerName}></SeatList>}/>
          <Route path='/success' element={<Success buyerCPF={buyerCPF} buyerName={buyerName}></Success>}/>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 375px;
  height: 877px;
  margin: 30px auto;
  position: relative;
`
export default App;
