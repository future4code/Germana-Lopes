import React from 'react';
import styled from 'styled-components';

class Etapa1 extends React.Component {




    render() {
        return (
            <div>
                <h3>ETAPA 1 - DADOS PESSOAIS</h3>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu e-mail?</p>
                <input></input>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option selected value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>

            </div>
        );
    }
}












export default Etapa1;