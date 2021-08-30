import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components'
import LoginPage from './pages/LoginPage';

const MainStyle = styled.div`
background-color: #DAE0E6;
`

function App() {
  return (
    <MainStyle>
    <Header />
    <LoginPage />
    </MainStyle>
  );
}

export default App;
