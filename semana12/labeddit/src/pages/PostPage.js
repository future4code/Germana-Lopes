import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
import { useParams } from "react-router"
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/requestConfigs";
import { createComment } from '../services/posts'
import useForm from '../hooks/useForm'
import CommentList from '../components/CommentList'
import logo from "../images/logo.jpg"
import { goBack } from '../routes/coordinator'
import { useHistory } from 'react-router'

const LoginStyle = styled.div`
height: 100vh;
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


const PostPage = () => {

    const history = useHistory()

    const params = useParams();

    const [form, handleForm, clear] = useForm(
        {
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
        createComment(form, params.postId, getData)
        clear()
    }

    const showPost = data && data.filter((post) => {
        return post.id === params.postId
    })

    return (
        <div>
        <HeaderStyle>
                <img src={logo} alt="some text" />
                <h2>Labeddit</h2>
                <h3>Fale sobre o que você quiser!</h3>
                <button onClick={() => goBack(history)}>Voltar</button>
            </HeaderStyle>
        <LoginStyle>
            {showPost &&
                <PostCard
                    post={showPost[0]}
                />}
            <form onSubmit={onSubmitForm}>
                <input required
                    placeholder="Comente aqui!"
                    name="body"
                    value={form.body}
                    onChange={handleForm}></input>
                <button type="submit">Postar</button>
            </form>
            <CommentList />
        </LoginStyle>
        </div>
    )
}
export default PostPage