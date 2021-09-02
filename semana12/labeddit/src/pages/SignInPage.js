import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../hooks/useForm'
import { signUp } from '../services/user'
import logo from "../images/logo.jpg"
import { goBack, goToLogin } from '../routes/coordinator'

const LoginStyle = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
margin-top: 100px;
gap: 30px;
align-items: center;
input {
    width: 250px;
    padding: 15px;
}
button {
    width: 200px;
    padding: 10px;
}
`

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
`


const SignInPage = () => {

    const [form, handleForm] = useForm(
        {
            username: "",
            email: "",
            password: ""
        }
    )
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, history)
    }

    return (
        <div>
        <HeaderStyle>
                <img src={logo} alt="some text" />
                <h2>Labeddit</h2>
                <h3>Fale sobre o que você quiser!</h3>
                <button onClick={() => goBack(history)}>Voltar</button>
            </HeaderStyle>
        <LoginStyle>
            <form onSubmit={onSubmitForm}>
                <input
                    required
                    id="outlined-required"
                    placeholder="Nome de usuári@"
                    type="name"
                    variant="outlined"
                    name="username"
                    value={form.username}
                    onChange={handleForm}></input>
                <input required
                    id="outlined-required"
                    placeholder="E-mail"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={handleForm}></input>
                <input required
                    id="outlined-password-input"
                    placeholder="Senha"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    name="password"
                    value={form.password}
                    onChange={handleForm}></input>
                <button>Cadastrar</button>
            </form>
        </LoginStyle>
        </div>
    )
}
export default SignInPage