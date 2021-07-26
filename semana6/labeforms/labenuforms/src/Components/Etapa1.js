import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

class Etapa1 extends React.Component {


    state = {
        opcaoSelecionada: "Ensino Médio Incompleto",
    }


    render() {
        const opcoes = [
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
        ]


        return (
            <div>
                <h3>ETAPA 1 - DADOS PESSOAIS</h3>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"1. Qual o seu email?"} />

                <PerguntaFechada pergunta={"4.Qual a sua escolaridade?"}
                    onChange={event =>
                        this.setState({ opcaoSelecionada: event.target.value })
                    }
                    opcoes={opcoes} />

            </div>
        );
    }
}




export default Etapa1;