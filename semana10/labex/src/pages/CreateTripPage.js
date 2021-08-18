import React from "react";
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
gap: 20px;
input {
    width: 400px;
    padding: 5px;
}
`
const Buttons = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 40px;
button {
    padding: 10px;
}
`


const CreateTripPage = () => {

    const history = useHistory()

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }


    return (
        <div>
            <MainTitle>
                <h2>Crie uma viagem!</h2>
            </MainTitle>
            <Inputs>
                <input placeholder="Qual sua viagem?"></input>
                <input type="date" id="date" name="date" placeholder="Data"></input>
                <input placeholder="Descrição"></input>
                <input placeholder="Duração em dias"></input>
                <select name="planetas" id="planetas">
                    <option value="Selecione" selected="selected">Selecione o planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                </select>
            </Inputs>

            <Buttons>
                <button onClick={goToAdminPage}>Voltar</button>
                <button>Criar</button>
            </Buttons>

        </div>
    )
}

export default CreateTripPage;