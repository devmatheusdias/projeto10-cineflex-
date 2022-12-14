import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header/Header';
import MovieList from '../components/Movies/MovieList';
import SeatList from '../components/Seats/SeatList';
import SessionsList from './Sessions/SessionList';
import Success from './Success/Success';

function App() {

  const [shopperName,setShopperName] = useState("");
  const [shopperCpf,setShopperCpf] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [session, setSession] = useState([]);
  const [sessionDate, setSessionDate] = useState("");
  const [sessionHour, setSessionHour] = useState("");
  const [weekday, setWeekday] = useState("");

  return (
    <AppContainer>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MovieList setMovie={setMovie} ></MovieList>} />
          
          <Route path='/sessions/:idMovie' element={<SessionsList movie={movie} session={session} setSession={setSession} setSessionDate={setSessionDate} setSessionHour={setSessionHour} setWeekday={setWeekday} ></SessionsList>} />
          
          <Route path='sessions/:idMovie/seats/:idSession' element={<SeatList  setShopperName={setShopperName} setShopperCpf={setShopperCpf} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} movie={movie} session={session} sessionHour={sessionHour} weekday={weekday}></SeatList>}/>
          
          <Route path='/success' element={<Success shopperName={shopperName} shopperCpf={shopperCpf} selectedSeats={selectedSeats} movie={movie} session={session} sessionDate={sessionDate} sessionHour={sessionHour}></Success>}/>
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
