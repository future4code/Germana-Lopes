import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";


const HeaderStyle = styled.div`
display: flex;
justify-content: space-around;
height: 6%;
width: 100%;
background-color: black;
color: #E40062;
`

const ButtonStyle = styled.div`
display: flex; 
align-items: center;
gap: 50px;
button {
    padding: 8px;
    color: #E40062;
}
`


function Header() {
    return (
        <HeaderStyle>
        <h2> ❤️ AstroMatch ❤️ </h2>
        <ButtonStyle>
        <button>Ver Matches</button>
        <button>Limpar Matches</button>
        </ButtonStyle>
    
    </HeaderStyle>
    );
  }
  
  export default Header;
  