import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../hooks/useForm'
import { login } from "../services/user"
import logo from "../images/logo.jpg"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
background-color: white;
color: black;
align-items: center;
justify-content: space-around;
img {
    width: 80px;
    }
h1, h2 {
        font-family: 'Risque', cursive;
    }
`

const LoginStyle = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
margin-top: 100px;
gap: 30px;
padding-left: 30px;
align-items: center;
input {
    width: 250px;
    padding: 15px;
}
button {
    width: 200px;
    padding: 10px;
}
h2 {
    font-family: 'Risque', cursive;
}
`

const FormStyle = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`


const LoginPage = () => {

    const [form, handleForm] = useForm(
        {
            email: "",
            password: ""
        }
    )
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, history)
    }

    const goToSignIn = () => {
        history.push("/signup")
    }

    return (
        <div>
            <HeaderStyle>
                <img src={logo} alt="some text" />
                <h1>LabEddit</h1>
                <h2>Fale sobre o que você quiser!</h2>
            </HeaderStyle>
            <LoginStyle>
                <h2>Faça seu login ou cadastre-se!</h2>
                <FormStyle onSubmit={onSubmitForm}>
                    <TextField
                        required
                        id="filled-required"
                        label="E-mail"
                        variant="filled"
                        type="email"
                        variant="outlined"
                        name="email"
                        value={form.email}
                        onChange={handleForm} />
                    <TextField
                        required
                        id="filled-required"
                        placeholder="Senha"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        name="password"
                        value={form.password}
                        onChange={handleForm} />
                    <Button variant="contained" color="primary" type="submit">Me deixa entrar!</Button>
                </FormStyle>
                <Button color="primary" size="large" onClick={goToSignIn}>Clique aqui e faça seu cadastro!</Button>
            </LoginStyle>
        </div>
    )
}
export default LoginPage