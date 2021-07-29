import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import TelaCadastro from "./components/TelaCadastro"
import TelaUsuario from "./components/TelaUsuario"


const Botao = styled.button`
display:flex;
margin-top: 20px;
margin-left: 30px;
`


class App extends React.Component {
  state = {
    telaCadastro: true
  }

  mudarTela = () => {
    this.setState({
      telaCadastro: !this.state.telaCadastro
    })
  }

  render() {

    return (
      <div className="App">

        <Botao onClick={this.mudarTela}> {this.state.telaCadastro ? "Ir para página de listas" : "Ir para página de registro"}

        </Botao>
        {this.state.telaCadastro ? <TelaCadastro /> : <TelaUsuario />}
      </div>
    );
  }
}

export default App;
