import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
import { useState } from 'react';
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/requestConfigs";
import { createPost } from '../services/posts';
import useForm from '../hooks/useForm'
import { useHistory } from 'react-router'
import logo from "../images/logo.jpg"
import { goBack } from '../routes/coordinator'

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

const LoginStyle = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
margin-top: 50px;
gap: 30px;
align-items: center;
input {
    width: 250px;
    padding: 15px;
}
button {
    width: 80px;
    padding: 10px;
}
`

const FormStyle = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`


const FeedPage = () => {

    const history = useHistory()

    const [form, handleForm, clear] = useForm(
        {
            title: "",
            body: ""
        }
    )

    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const { data, getData } = useRequestData(`${BASE_URL}/posts`, headers, undefined)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, getData)
        clear()
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
            <FormStyle onSubmit={onSubmitForm}>
                <input required
                    placeholder="Título do Post"
                    name="title"
                    value={form.title}
                    onChange={handleForm}></input>
                <input required
                    placeholder="Escreva seu post"
                    name="body"
                    value={form.body}
                    onChange={handleForm}></input>
                <button type="submit">Postar</button>
            </FormStyle>

            {!data && "Carregando..."}
            {data && data.map((post) => {
                return (
                    <PostCard showButton
                        key={post.id}
                        post={post}
                    />
                )
            }
            )}

        </LoginStyle>
        </div>
    )
}
export default FeedPage