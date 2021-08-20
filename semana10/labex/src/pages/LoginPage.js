import { React, useState } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import axios from 'axios'
import { baseUrl } from '../hooks/useRequestData'
import useForm from "../hooks/useForm"

const MainContainer = styled.div`
height: 100vh;
`

const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
`

const LoginStyle = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 25px;
    padding: 5px;
    border-radius: 20px;
}
input {
    padding: 7px;
    border-radius: 20px;
}
`

const LoginPage = () => {

    const history = useHistory()
    const [progress, setProgress] = useState(false)

    const [form, handleForm] = useForm({
        email: "",
        password: "",
    })


    const goToTripsPage = () => {
        history.push(`trips`)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        login()
    }


    const login = () => {
        setProgress(true)
        axios.post(`${baseUrl}/login`, form)
            .then(response => {
                setProgress(false)
                localStorage.setItem('token', response.data.token)
                goToAdminPage()
            }).catch(error => {
                console.log(error.message)
                window.alert("E-mail ou senha inválidos!")
                setProgress(false)
            })
    }

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }


    return (
        progress ? <progress /> :
            <MainContainer>
                <MainTitle>
                    <h2>Faça seu login para continuar!</h2>
                </MainTitle>
                <LoginStyle onSubmit={onSubmitForm}>
                    <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="email"
                    placeholder="Email"></input>
                    <input
                    required
                    name="password"
                    value={form.pasword}
                    onChange={handleForm}
                    type="password"
                    placeholder="Senha"></input>
                    <button>Entrar</button>
                </LoginStyle>

            </MainContainer>


    )
}

export default LoginPage;