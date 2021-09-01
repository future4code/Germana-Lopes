import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import useForm from '../hooks/useForm'
import { login } from "../services/user"

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
        <LoginStyle>
            <h3>Faça seu login ou cadastre-se!</h3>
            <form onSubmit={onSubmitForm}>
                <input required
                    id="outlined-required"
                    placeholder="E-mail"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onChange={handleForm} ></input>
                <input required
                    id="outlined-password-input"
                    placeholder="Senha"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    name="password"
                    value={form.password}
                    onChange={handleForm}></input>
                <button type="submit">Me deixa entrar!</button>
            </form>
            <button onClick={goToSignIn}>Faça seu cadastro!</button>

        </LoginStyle>
    )
}
export default LoginPage