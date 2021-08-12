import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import Header from './Header/Header';
import HomeScreen from './HomeScreen/HomeScreen';
import Background from "./images/background.jpg"
import MatchScreen from './MatchScreen/MatchScreen';

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
background-image: radial-gradient(circle at 37.72% 119.64%, #de9c2c 0, #e5922a 8.33%, #ea852b 16.67%, #ee772d 25%, #f16731 33.33%, #f35436 41.67%, #f23c3c 50%, #f01843 58.33%, #ed004c 66.67%, #e90057 75%, #e30064 83.33%, #db0071 91.67%, #d10080 100%);
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
    <MainContainer>
     <Header changeScreen={changeScreen} screen={screen}/>
     {renderScreen()}
     {/* <HomeScreen /> */}
     {/* <MatchScreen /> */}
    </MainContainer>
  );
}

export default App;
