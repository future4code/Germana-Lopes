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
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

const LoginStyle = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
margin-top: 50px;
gap: 30px;
align-items: center;

`


const HeaderStyle = styled.div`
display: flex;
height: 4%;
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

const CommentSection = styled.div`
display: flex;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
width: 350px;
border: solid black 1px;
padding-left: 10px;
border-radius: 20px;
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
                <h1>LabEddit</h1>
                <h2>Fale sobre o que você quiser!</h2>
                <Button variant="contained" color="primary" size="small" onClick={() => goBack(history)}>Voltar</Button>
            </HeaderStyle>
            <LoginStyle>
                {showPost &&
                    <PostCard
                        post={showPost[0]}
                    />}
                <form onSubmit={onSubmitForm}>

                    <TextField label="Size"
                        id="standard-size-small"
                        defaultValue="Small"
                        size="small"
                        id="outlined-basic"
                        label="Comente aqui"
                        variant="outlined"
                        required
                        name="body"
                        value={form.body}
                        onChange={handleForm} />
                    <Button variant="contained" color="primary" size="small" type="submit">Comentar</Button>
                </form>
                <CommentSection>
                    <CommentList />
                </CommentSection>
            </LoginStyle>
        </div>
    )
}
export default PostPage