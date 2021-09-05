import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import LoginPage from './pages/LoginPage';
import Router from "./routes/Router"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./constants/theme"

const MainStyle = styled.div`
background-color: #DAE0E6;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStyle>
        <Router />
      </MainStyle>
    </ThemeProvider>
  );
}

export default App;
