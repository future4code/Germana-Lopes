import React from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";


const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
`

const HomeButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
button {
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
        <div>
            <MainTitle>
                <h2>Aqui começa sua aventura! Veja nossas viagens ou faça Login para continuar!</h2>
            </MainTitle>

            <HomeButtons>
                <button onClick={goToTripsPage}>Ver Viagens</button>
                <button onClick={goToLoginPage}>Login</button>
            </HomeButtons>

        </div>
    )
}

export default HomePage;