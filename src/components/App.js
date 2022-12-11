import styled from 'styled-components'
import Header from './Header/Header';
import MovieList from '../components/Movies/MovieList';
import Footer from './Footer/Footer';
import SeatList from '../components/Seats/SeatList';
import SessionsList from './Sessions/SessionList';
import Success from './Success/Success';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <AppContainer>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MovieList></MovieList>} />
          
          <Route path='/sessions/:idMovie' element={<SessionsList></SessionsList>}/>
          
          <Route path='sessions/:idMovie/seats/:idSession' element={<SeatList></SeatList>}/>
          
          <Route path='/success' element={<Success ></Success>}/>
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
