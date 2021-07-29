import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import TelaDetalhes from "./TelaDetalhes"

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
}

const LinhaUsuario = styled.div`
display: flex;
justify-content: space-between;
gap: 500px;
border: 2px solid red;
width: 50vw;
margin-left: 30px;
padding-left: 30px;
p {
    &:hover {
            cursor: pointer;
        }
}
`


const MostraListaUsuario = styled.div`
display: flex;
flex-direction: column;
// border: 2px solid black;
gap: 10px;
h2 {
    display: flex;
    margin-left: 30px;
}
`

class TelaUsuario extends React.Component {

    state = {
        usuarios: [],
        usuarioEscolhido: undefined 
    }

    componentDidMount() {
        this.mostrarUsuario();
    }

    mostrarUsuario = () => {
        axios
            .get(url, headers)
            .then((response) => {
                this.setState({ usuarios: response.data });
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error.response.data.message)
            });
    }

    deletarUsuario = (id) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
            .then((response) => {
                alert("Usuário deletado!")
                this.mostrarUsuario()
                console.log(response.data)

            })
            .catch((error) => {
                alert("Vixe, deu ruim.")
                console.log(error.response.data.message)
            });
    }

    confirmaDeletar = (id) => {
        if (window.confirm("Tem certeza que quer deletar?")) {
            this.deletarUsuario(id)
        }
    }

    verDetalhes = (id) => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
            .then((response) => {
                this.setState({ usuarioEscolhido: response.data });
                console.log(response.data)
                
            })
            .catch((error) => {
                alert("Vixe, deu ruim.")
                console.log(error.response.data.message)
            });
    }

    render() {

        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return (
                <LinhaUsuario>
                    <p onClick={() => this.verDetalhes(usuario.id)} key={usuario.id}>{usuario.name}</p>
                    <button onClick={() => this.confirmaDeletar(usuario.id)}> &#10008; </button>
                </LinhaUsuario>

            )
        });

        return (
            <MostraListaUsuario>
                <h2>Usuárias:</h2>
                {/* {listaUsuarios} */}
                {this.state.usuarioEscolhido ? 
                <TelaDetalhes 
                deletarUsuario={this.confirmaDeletar}
                usuario={this.state.usuarioEscolhido}/> : listaUsuarios}
                
            </MostraListaUsuario>

        );
    }
}

export default TelaUsuario;