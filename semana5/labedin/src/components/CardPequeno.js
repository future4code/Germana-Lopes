import React from 'react';
import styled from "styled-components"

const MenorCard = styled.div`
display: flex;
img {
    width: 50px;
}
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
width: 40vw;
gap: 5px;

`

function CardPequeno(props) {
    return (
        <MenorCard>
            <img src={props.imagem} />
           <strong><p>{props.tituloDescricao}</p> </strong> 
            <p>{props.descricao}</p>
            
        </MenorCard>
    )
}

export default CardPequeno;