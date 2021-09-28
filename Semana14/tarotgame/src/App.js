import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Background from "./images/background.jpg"
import styled from 'styled-components'

const MainContainer = styled.div`
width: '100vw';
height: '800px';
background-size: 'cover';
`


 


function App() {
  return (
    <MainContainer style={{ backgroundImage: `url(${Background})` }} >
      <Header />
      <HomePage />
    </MainContainer>
  );
}

export default App;
