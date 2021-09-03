import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { goToPost } from '../routes/coordinator'
import Button from '@material-ui/core/Button'


const MainCard = styled.div`
display: flex;
flex-direction: column;
width: 300px;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
border: solid 1px black;
`

const NameUser = styled.div`
display: flex;
border-bottom: solid black 2px;
height: 40px;
gap: 10px;
justify-content: space-between;
align-items: center;
padding-left: 10px;
padding-right: 5px;
button {
    height: 30px;
    width: 100px;
    padding: 5px;
}
`

const ShowPost = styled.div`
min-height: 100px;
padding-left: 10px;
`

const Votes = styled.div`
display: flex;
height: 50px;
align-items: center;
border-top: solid black 2px;
padding-left: 10px;
button {
    width: 10px;
    height: 25px;    
}
`

const Comments = styled.div`
display: flex;
align-items: flex-end;
`

const PostCard = (props) => {

    const history = useHistory()

    return (
        <MainCard>
            <NameUser>
                <h4>{props.post.username}</h4>
                {props.showButton &&
                    <Button variant="contained" color="primary" size="small" onClick={() => goToPost(history, props.post.id)}>Detalhes</Button>
                }
            </NameUser>

            <ShowPost>
                <p>{props.post.title}</p>
                <p>{props.post.body}</p>
            </ShowPost>

            <Votes>
                <button>⬆</button>
                <p>0</p>
                <button>⬇</button>
                <Comments>
                <p>0 comentários</p>
                </Comments>
            </Votes>
        </MainCard>
    )
}
export default PostCard