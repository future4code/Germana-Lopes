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
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
                <h1>LabEddit</h1>
                <h2>Fale sobre o que você quiser!</h2>
                <Button variant="contained" color="primary" size="small" onClick={() => goBack(history)}>Voltar</Button>
            </HeaderStyle>
            <LoginStyle>
                <FormStyle onSubmit={onSubmitForm}>
                    <TextField label="Size"
                        id="standard-size-small"
                        defaultValue="Small"
                        size="small"
                        id="outlined-basic"
                        label="Título do Post"
                        variant="outlined"
                        required
                        name="title"
                        value={form.title}
                        onChange={handleForm} />
                    <TextareaAutosize aria-label="minimum height" minRows={10} placeholder="Escreva seu post aqui!" required
                        name="body"
                        value={form.body}
                        onChange={handleForm} />
                    <Button variant="contained" color="primary" type="submit">Postar</Button>
                </FormStyle>

                {!data && "Carregando..."}
                {data && data.map((post) => {
                    return (
                        <PostCard showButton
                            key={post.id}
                            post={post}
                            getData={getData}
                        />
                    )
                }
                )}

            </LoginStyle>
        </div>
    )
}
export default FeedPage