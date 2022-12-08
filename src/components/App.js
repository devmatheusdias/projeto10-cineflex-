import styled from 'styled-components'
import Header from './Header';
// import MovieList from './MovieList';
import SessionsList from './SessionList';
import Seat from './Seat';
import Footer from './Footer';
import SeatList from './SeatList';
import Success from './Sucess';

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <SeatList></SeatList>
      {/* <Success></Success> */}
      <Footer></Footer>
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
