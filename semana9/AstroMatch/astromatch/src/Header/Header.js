import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
justify-content: space-evenly;
h2 {
    font-family: 'Cabin Sketch', cursive;
    color: #494949;
}
border-bottom: 1px solid black;
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

        <HeaderStyle>

            <Tooltip title="Deletar Matches">
                <IconButton
                    onClick={() => { deleteMatches() }}
                    color="primary" aria-label="add to shopping cart">
                    <DeleteForeverIcon color="primary" fontSize="large" />
                </IconButton>
            </Tooltip>
            <h2> ❤️ astromatch ❤️ </h2>
            
                <Tooltip title="Ver Matches">
                    <IconButton
                        onClick={() => props.changeScreen("VerMatches")}
                        color="primary" aria-label="add to shopping cart">
                        <GroupAddIcon color="primary" fontSize="large" />
                    </IconButton>
                </Tooltip>
          
        </HeaderStyle>


    );
}

export default Header;
