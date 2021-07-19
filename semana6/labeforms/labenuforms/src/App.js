import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';
import styled from 'styled-components';


const Botao = styled.button`
margin-top:20px;
`


class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    if (this.state.etapa)
      this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {
    return (
      <div className="App">
        {this.renderizarEtapa()}
        {this.state.etapa !== 4 && 
        <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>}  
      </div>
    );
  }
}

export default App;