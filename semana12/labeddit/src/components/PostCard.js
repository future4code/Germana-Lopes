import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { goToPost } from '../routes/coordinator'
// import { useState } from 'react'
// import { useHistory } from 'react-router'

const MainCard = styled.div`
display: flex;
flex-direction: column;
width: 300px;
// height: 350px;
border: solid black 2px
`

const NameUser = styled.div`
display: flex;
border-bottom: solid black 2px;
height: 40px;
gap: 10px;
justify-content: space-between;
align-items: center;
button {
    height: 30px;
    width: 70px;
    padding: 5px;
}
`

const ShowPost = styled.div`
min-height: 100px;
`

const Votes = styled.div`
height: 50px;
border-top: solid black 2px;
`

const PostCard = (props) => {

    const history = useHistory()

    return (
        <MainCard>
            <NameUser>
                <p>{props.post.username}</p>
                {props.showButton &&
                    <button onClick={() => goToPost(history, props.post.id)}>Detalhes</button>
                }
            </NameUser>

            <ShowPost>
                <p>{props.post.title}</p>
                <p>{props.post.body}</p>
            </ShowPost>
            <Votes>
                <p>⬆ 0 ⬇ Comentários</p>
            </Votes>


        </MainCard>
    )
}
export default PostCard