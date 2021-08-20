import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import Header from './Header/Header';
import HomeScreen from './HomeScreen/HomeScreen';
import Background from "./images/background.jpg"
import MatchScreen from './MatchScreen/MatchScreen';
import {ThemeProvider } from '@material-ui/core/styles'
import { theme }  from "./theme"


const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 500px;
min-height: 100vh;
border: 2px solid black;
margin-left: 400px;
align-items: center;
// background-image: url(${Background})
// background: #FFFFFF url(${Background}) no-repeat;
background-color: #efefef;
`
// const Background = styled.div`

// `

function App() {

  const [screen, setScreen] = useState("HomeScreen")

  const renderScreen = () => {
		switch (screen) {
			case "HomeScreen":
				return <HomeScreen />;

			case "VerMatches":
				return <MatchScreen />;
    }
  }

  const changeScreen = (screen) => {
    setScreen(screen)

  }

  return (
    <ThemeProvider theme={theme}>
    <MainContainer>
     <Header changeScreen={changeScreen} screen={screen}/>
     {renderScreen()}
     {/* <HomeScreen /> */}
     {/* <MatchScreen /> */}
    </MainContainer>
    </ThemeProvider>
  );
}

export default App;
