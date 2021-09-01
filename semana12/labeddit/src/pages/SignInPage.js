import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../hooks/useForm'
import { signUp } from '../services/user'

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
    )
}
export default SignInPage