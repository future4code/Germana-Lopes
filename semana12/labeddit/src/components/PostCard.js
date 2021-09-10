import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { goToPost } from '../routes/coordinator'
import Button from '@material-ui/core/Button'
import { postVote } from '../services/posts'
import { BASE_URL } from "../constants/requestConfigs";
import { useRequestData } from "../hooks/useRequestData";
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


const MainCard = styled.div`
display: flex;
flex-direction: column;
width: 400px;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
border-radius: 20px;
`

const NameUser = styled.div`
display: flex;
-webkit-box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.79); 
box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.79);
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
gap: 15px;
-webkit-box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.79); 
box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.79);
padding-left: 10px;
button {
    width: 10px;
    height: 25px;    
}
`

const Comments = styled.div`
display: flex;
margin-left: 50px;
`

const PostCard = (props) => {

    const history = useHistory()

    const voteCount = props.post.voteSum === null ? 0 : props.post.voteSum

    const commentCount = props.post.commentCount === null ? 0 : props.post.commentCount

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

                <IconButton onClick={() => postVote(1, props.post.id, props.getData)}>
                    <ArrowUpwardIcon color="primary" />
                </IconButton>
                <p>{voteCount}</p>
                <IconButton onClick={() => postVote(-1, props.post.id, props.getData)}>
                    <ArrowDownwardIcon color="primary" />
                </IconButton>
                <Comments>
                    <p>{commentCount} comentário(s)</p>
                </Comments>
            </Votes>
        </MainCard>
    )
}
export default PostCard