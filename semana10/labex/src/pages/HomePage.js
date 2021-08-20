import React from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`


const MainTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;
flex-direction: column;
`

const HomeButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 20px;
    padding: 10px;
}
`

const HomePage = () => {

    const history = useHistory()

    const goToTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <MainContainer>
            <MainTitle>
                <h1>Aqui começa sua aventura! Veja nossas viagens ou faça Login para continuar!</h1>
                <h4>Pensando em sair desse planeta? Você sente que não é daqui? Ou apenas quer dar uma volta por aí?</h4>
                <h4>Seja um café da manhã em Plutão ou uma namoradinha em Vênus, nós temos o pacote de viagem ideal!</h4>
            </MainTitle>

            <HomeButtons>
                <button onClick={goToTripsPage}>Ver Viagens</button>
                <button onClick={goToLoginPage}>Login</button>
            </HomeButtons>

        </MainContainer>
    )
}

export default HomePage;