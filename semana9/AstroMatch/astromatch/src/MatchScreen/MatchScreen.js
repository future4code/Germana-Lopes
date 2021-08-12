import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios"

const MatchStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: flex-start;
margin-left: 60px;
gap: 30px;
margin-top: 30px;
`

const EachMatch = styled.div`
display: flex;
align-items: center;
gap: 30px;
`

const Img = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
`

function MatchScreen() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [matches])

    const getMatches = () => {
        axios
        .get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
        )
        .then((response) => {
          setMatches(response.data.matches);
        })
        .catch((error) => {
          console.log(error.message);
        }); 

    }

    return (
        <MatchStyle> 
             {matches.map((match) => {
            return (
              <EachMatch>
                <Img src={match.photo} alt={"foto perfil"} />
                <h3>{match.name}</h3>
                </EachMatch>
            );
        })}
             </MatchStyle>
    );
}

export default MatchScreen;
