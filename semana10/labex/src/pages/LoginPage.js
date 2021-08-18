import React from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
`

const LoginStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
button {
    padding: 10px;
}
input {
    padding: 7px;
}
`

const LoginPage = () => {

    const history = useHistory()

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }


    return (

        <div>
            <MainTitle>
                <h2>Faça seu login para continuar!</h2>
            </MainTitle>
            <LoginStyle>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            <button onClick={goToAdminPage}>Entrar</button>
            </LoginStyle>

        </div>
    )
}

export default LoginPage;