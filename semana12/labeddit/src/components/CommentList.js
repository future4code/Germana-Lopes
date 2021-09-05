import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PostCard from '../components/PostCard'
import { useParams } from "react-router"
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/requestConfigs";
import { createComment } from '../services/posts'
import useForm from '../hooks/useForm'
import { useState, useEffect } from "react";

const CommentSection = styled.div`
// border: solid black 2px;
`


const CommentList = (props) => {

    const params = useParams();

    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    const { data, getData } = useRequestData(`${BASE_URL}/posts/${params.postId}/comments`, headers, undefined)

    const showComments = data && data.map((comment) => {
        return (
            <CommentSection>
                <h4>{comment.username} comentou:</h4>
                <p>{comment.body}</p>
            </CommentSection>
        )
    })


    return (
        <div>
            {showComments}
        </div>

    )

}
export default CommentList