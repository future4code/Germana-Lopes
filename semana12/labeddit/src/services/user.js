import axios from 'axios';
import { BASE_URL } from "../constants/requestConfigs";
import { goToFeed } from "../routes/coordinator"

export const signUp = (body, history) => {
    console.log(body)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)

            window.alert("Cadastro efetuado com sucesso!")
        })
        .catch(error => {
            console.log(error.response.data.errors)
        })
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
        })
        .catch(error => {
            console.log(error.message)
            window.alert("Opa, tente novamente!")
        })
}