import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import Tela1 from "./components/Tela1"
import Tela2 from "./components/Tela2"


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
        {this.state.telaCadastro ? <Tela1 /> : <Tela2 />}
      </div>
    );
  }
}

export default App;
