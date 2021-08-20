
import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useForm from "../hooks/useForm"
import { baseUrl, useRequestData } from "../hooks/useRequestData"
import styled from "styled-components";

const MainContainer = styled.div`
height: 100vh;
`

const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 70px;
`

const Inputs = styled.form`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
gap: 20px;
input {
    width: 400px;
    padding: 10px;
    border-radius: 20px;
}
select {
    width: 400px;
    padding: 10px;
    border-radius: 20px;
}
`
const Buttons = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 40px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 25px;
    padding: 5px;
}
`


const CreateTripPage = () => {

    const history = useHistory()

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }

    const [form, handleForm] = useForm({
        name: "",
        description: "",
        date: "",
        durationInDays: "",
        planet: "Selecione o planeta"
    })


    const createTrip = (body, headers) => {
        axios.post(`${baseUrl}/trips`, body, headers)
            .then(() => {
                window.alert("Viagem criada com sucesso!")

            })
            .catch((error) => {
                console.log(error);
                window.alert("Vixe, deu ruim. Preencha novamente!")
            });
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            name: form.name,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
            planet: form.planet,
        }

        const requestHeaders = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        createTrip(body, requestHeaders)
    }



    return (
        <MainContainer>
            <MainTitle>
                <h1>Crie uma viagem!</h1>
            </MainTitle>
            <Inputs onSubmit={onSubmitForm}>
                <input
                    required
                    pattern='[a-zA-ZsÀ-ú ]{5,}'
                    name='name'
                    value={form.name}
                    onChange={handleForm}
                    placeholder="Qual a sua viagem?"></input>
                <input
                    required
                    name='date'
                    value={form.date}
                    onChange={handleForm}
                    placeholder="Data"
                    type="date"></input>
                <input
                    required
                    pattern='^.{30,}'
                    name='description'
                    value={form.description}
                    onChange={handleForm}
                    placeholder="Descrição"></input>
                <input
                    required
                    name='durationInDays'
                    value={form.durationInDays}
                    onChange={handleForm}
                    placeholder="Duração (em dias)"
                    type="number"></input>
                <select name="planet" value={form.planet} onChange={handleForm}>
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
                <Buttons>
                    <button onClick={goToAdminPage}>Voltar</button>
                    <button>Criar</button>
                </Buttons>
            </Inputs>
        </MainContainer>
    )
}

export default CreateTripPage;