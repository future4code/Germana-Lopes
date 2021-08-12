import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";


const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
// background-color: black;
color: #E40062;
h2 {
    font-family: 'Cabin Sketch', cursive;
    color: black;
}
`

const ButtonStyle = styled.div`
display: flex; 
align-items: center;
gap: 20px;
margin-left: 20px;
button {
    padding: 8px;
    color: #E40062;
}
`


function Header(props) {

    const [clear, setClearMatches] = useState([]);



    const deleteMatches = () => {
        axios
            .put(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
            )
            .then((response) => {
                alert("Matches deletados! Boa sorte na nova procura =)")
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <HeaderStyle>
                <h2> ❤️ AstroMatch ❤️ </h2>
                <ButtonStyle>

                    <button onClick={() => { deleteMatches() }}>Limpar Matches</button>
                    <button onClick={() => props.changeScreen("VerMatches")}>Ver Matches</button>

                </ButtonStyle>
            </HeaderStyle>
            <hr></hr>
        </div>
    );
}

export default Header;
