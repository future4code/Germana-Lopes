import React from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
`

const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
button {
    padding: 10px;
}
`

const AdminHomePage = () => {

const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <MainTitle>
            <h2>Painel administrativo</h2>
            </MainTitle>

            <Buttons>
            <button onClick={goToHomePage}>Voltar</button>
            <button onClick={goToCreateTrip}>Criar viagem</button>
            <button onClick={goToLoginPage}>Logout</button>
            </Buttons>

            <p>aqui embaixo chama as viagens com a API</p>

        </div>
    )
}

export default AdminHomePage;