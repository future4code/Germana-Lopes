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

function App() {
  return (
    <div>
      <Header />
     <Router />
    </div>
  );
}

export default App;
