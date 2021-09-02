import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components'
import LoginPage from './pages/LoginPage';
import Router from "./routes/Router"

const MainStyle = styled.div`
background-color: #DAE0E6;
`

function App() {
  return (
    <MainStyle>
      {/* <Header /> */}
      <Router />
    </MainStyle>
  );
}

export default App;
