import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button {
        width: 70px;
        h1 {
                margin: 0;
        }
}
border: 2px solid black;
padding: 20px;
color: #45574b;
` 


class ShowLaunch extends React.Component {

        render() {
                return (
                        <MainContainer>
                                <h3>Nome da missão: {this.props.launch.mission_name}</h3>
                                <h3>Ano de lançamento: {this.props.launch.launch_year}</h3>
                                <h3>Nome do foguete: {this.props.launch.rocket.rocket_name}</h3>
                                <h3>Tipo de foguete: {this.props.launch.rocket.rocket_type}</h3>
                                <hr></hr>
                                <button onClick={this.props.changeScreen}><h1>&#8592;</h1></button>
                        </MainContainer>
                );
        }
}


export default ShowLaunch;