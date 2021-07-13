import React from 'react';
import styled from "styled-components"

const BigcardContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}
`

const ContainerEspecifico = styled.div`
display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const Titulo = styled.h4`
margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <img src={ props.imagem } />
            <ContainerEspecifico>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </ContainerEspecifico>
        </BigcardContainer>
    )
}

export default CardGrande;