import axios from 'axios';
import { BASE_URL } from "../constants/requestConfigs";

export const createPost = (body, getData) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    axios.post(`${BASE_URL}/posts`, body, headers)
        .then(() => {
            window.alert("Sua ideia foi pro mundo!")
            getData()
        })
        .catch(error => {
            console.log(error.message)
        })
}

export const createComment = (body, postId, getData) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    axios.post(`${BASE_URL}/posts/${postId}/comments`, body, headers)
        .then(() => {
            window.alert("Sua opinião foi publicada!")
            getData()
        })
        .catch(error => {
            console.log(error.message)
        })
}

export const postVote = (direction, postId, getData) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }

    axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
        .then(() => {
            getData()

        })
        .catch(error => {
            console.log(error.message)
        })
}