import styled from 'styled-components'
import Header from './Header/Header';
import MovieList from '../components/Movies/MovieList';
import Footer from './Footer/Footer';
import SeatList from '../components/Seats/SeatList';
import SessionsList from './Sessions/SessionList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<MovieList></MovieList>} />
          <Route path='/sessoes' element={<SessionsList></SessionsList>}/>
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
