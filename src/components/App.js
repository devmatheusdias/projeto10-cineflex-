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

  const [shopperName,setShopperName] = useState("");
  const [shopperCpf,setShopperCpf] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);



  return (
    <AppContainer>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MovieList></MovieList>} />
          
          <Route path='/sessions/:idMovie' element={<SessionsList></SessionsList>}/>
          
          <Route path='sessions/:idMovie/seats/:idSession' element={<SeatList  setShopperName={setShopperName} setShopperCpf={setShopperCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}></SeatList>}/>
          
          <Route path='/success' element={<Success shopperName={shopperName} shopperCpf={shopperCpf} selectedSeats={selectedSeats}></Success>}/>
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
