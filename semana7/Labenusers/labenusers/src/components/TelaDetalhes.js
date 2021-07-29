import React from 'react';
import axios from "axios";
import styled from 'styled-components';



class TelaDetalhes extends React.Component {

    

render() {
        return (
            <div>
        <h2>Detalhes da usuária:</h2>
        <p>Nome: {this.props.usuario.name}</p>
        <p>Email: {this.props.usuario.email}</p>
        <button>Editar</button>
        <button onClick={() => this.props.deletarUsuario(this.props.usuario.id)}> &#10008; </button>
        </div>
     );
    }
}


export default TelaDetalhes;