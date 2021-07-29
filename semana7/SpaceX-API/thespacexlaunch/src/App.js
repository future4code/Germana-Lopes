import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import ShowLaunch from './components/ShowLaunch';

const StyledMainContainer = styled.div`
background-image: linear-gradient(175deg, #ffc6e7 0, #ffc6db 3.33%, #ffc7d0 6.67%, #ffc9c5 10%, #ffcbba 13.33%, #ffceb1 16.67%, #ffd1a8 20%, #ffd5a1 23.33%, #ffd89b 26.67%, #ffdc96 30%, #ffe093 33.33%, #ffe491 36.67%, #fae892 40%, #eeec94 43.33%, #e2ef98 46.67%, #d5f29d 50%, #c8f5a4 53.33%, #baf7ac 56.67%, #adf9b5 60%, #9ffbc0 63.33%, #90fccb 66.67%, #82fdd6 70%, #73fee2 73.33%, #65feee 76.67%, #58fefa 80%, #4dfeff 83.33%, #46fdff 86.67%, #46fcff 90%, #4dfbff 93.33%, #59f9ff 96.67%, #69f6ff 100%);
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`

const StyledLines = styled.div`
display: flex;
// flex-direction: column;
h3 {
  &:hover {
          cursor: pointer;
      }
}
border: 2px solid black;
padding-left: 20px;
margin-left: 5px;
width: 200px;
margin-top: 10px;
color: #45574b;
`


class App extends React.Component {

  state = {
    homeScreen: true,
    launches: [],
    selectedLaunch: undefined,

  }

  changeScreen = () => {
    this.setState({
      homeScreen: !this.state.homeScreen
    })
  }

  getAllLaunches = () => {
    axios.get("https://api.spacexdata.com/v3/launches/?limit=11")
      .then((response) => {
        this.setState({ launches: response.data });
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getAllLaunches();
  }

  showLaunchDetail = (flightNumber) => {
    axios.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
      .then((response) => {
        this.setState({ selectedLaunch: response.data , homeScreen: !this.state.homeScreen });

        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
  }


  render() {

    const launchList = this.state.launches.map((launch) => {
      return (
        <StyledLines key={launch.flight_number}>
          <h3 onClick={() => this.showLaunchDetail(launch.flight_number)}> {launch.mission_name}</h3>
        </StyledLines>

      )
    });

    return (

      <StyledMainContainer>
        <h1>Space X - Site espacial educativo!</h1>
        <h2>{this.state.homeScreen ? "Clique em uma missão para ver mais detalhes!" : "Detalhes da missão:"}</h2>
        {this.state.homeScreen ? launchList : <ShowLaunch
        launch={this.state.selectedLaunch}
        changeScreen={this.changeScreen}
        />

        }
        
      </StyledMainContainer>

    );
  }
}


export default App;
