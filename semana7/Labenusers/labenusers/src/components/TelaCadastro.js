import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const EstiloGeral = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
box-sizing: border-box;
button {
    margin-top: 20px;
}
align-items: center;
border: 2px solid red;
margin-top: 30px;
margin-left: 30px;
padding: 20px;
`



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
};


class TelaCadastro extends React.Component {

    state = {
        inputNome: "",
        inputEmail: "",

    }

    digitaInputNome = (event) => {
        this.setState({
            inputNome: event.target.value

        })
    }

    digitaInputEmail = (event) => {
        this.setState({
            inputEmail: event.target.value

        })
    }

    criarUsuario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail,
        }

        axios
            .post(url, body, headers)
            .then((response) => {
                alert("Usuário adicionado com sucesso!");
                this.setState({ inputNome: "", inputEmail: "" });

            })
            .catch((error) => {
                alert("Vixe, deu ruim");
                console.log(error.response.data.message)
            });
    }

    render() {
        return (
            <EstiloGeral>
                <h2>Tela de cadastro</h2>
                <p>Nome:</p>
                <input
                    value={this.state.inputNome}
                    onChange={this.digitaInputNome}
                />
                <p>E-mail:</p>
                <input
                    value={this.state.inputEmail}
                    onChange={this.digitaInputEmail}
                />
                <button onClick={this.criarUsuario}>Enviar</button>

            </EstiloGeral>
        );
    }
}


export default TelaCadastro;