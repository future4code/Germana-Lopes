import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
// import { useState } from 'react'
// import { useHistory } from 'react-router'

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


const PostPage = () => {

    return (
        <LoginStyle>
            <PostCard />
        </LoginStyle>
    )
}
export default PostPage