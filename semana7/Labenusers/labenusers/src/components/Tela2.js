import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
}

const LinhaUsuario = styled.div`
display: flex;
justify-content: center;
gap: 100px;
`

const MostraListaUsuario = styled.div`
width: 50vw;
`

class Tela2 extends React.Component {

    state = {
        usuarios: []
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
                <MostraListaUsuario>
                    <LinhaUsuario>
                        <p key={usuario.id}>{usuario.name}</p>
                        <button onClick={() => this.deletarUsuario(usuario.id)}> X </button>
                    </LinhaUsuario>
                    <hr></hr>
                </MostraListaUsuario>
            )
        });

        return (
            <div>
                <h2>Usuários cadastrados:</h2>
                {listaUsuarios}

            </div>
        );
    }
}

export default Tela2;