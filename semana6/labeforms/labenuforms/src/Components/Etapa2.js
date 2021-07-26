import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

class Etapa2 extends React.Component {




    render() {
        return (
            <div>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <PerguntaAberta pergunta={"5. Qual curso?"} />
                <PerguntaAberta pergunta={"6. Qual unidade de ensino?"} />
            </div>
        );
    }
}






export default Etapa2;