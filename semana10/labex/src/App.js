import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AdminHomePage from "./pages/AdminHomePage"
import ApplicationFormPage from "./pages/ApplicationFormPage"
import CreateTripPage from "./pages/CreateTripPage"
import ListTripsPage from "./pages/ListTripsPage"
import LoginPage from "./pages/LoginPage"
import TripDetailsPage from "./pages/TripDetailsPage"
import Header from './components/Header';
import { Router } from './router/Router';
import styled from 'styled-components';


const MainPage = styled.div`
background-color: background-color: #e9bcb7;
background-image: linear-gradient(315deg, #e9bcb7 0%, #29524a 74%);;

`

function App() {
  return (
    <MainPage>
      <Header />
     <Router />
    </MainPage>
  );
}

export default App;
