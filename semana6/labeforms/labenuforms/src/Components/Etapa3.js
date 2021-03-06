import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

class Etapa3 extends React.Component {
 state = {   
        opcaoSelecionada: "Nenhum"
    }

    render() {
        const opcoes = [
            "Nenhum", 
            "Curso técnico", 
            "Curso de inglês"
        ]

        return (
        <div>
            <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <PerguntaAberta pergunta={'5. Porque você não terminou um curso de graduação?'}/>
            <PerguntaFechada pergunta={'6. Você já fez algum curso complementar?'}
            opcoes={opcoes}/>
          </div>
        );
      }
}






export default Etapa3;