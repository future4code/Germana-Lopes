import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";

const CardStyle = styled.div`
display: flex,
width: 200px;
flex-direction: column;
align-items: center;
// margin-left: 200px;
margin-top: 30px;
img {
    width: 300px;
    height: 400px;
    border: 1px solid black;
}
h3 {
    display: flex;
    justify-content: center;
}
h5 {
    display: flex;
    justify-content: center;
    color: red;
    width: 300px;
    
}
`
const Buttons = styled.div`
display:flex;
justify-content:center;
margin-top:20px;
gap: 50px;
margin-bottom: 20px;
`

const Skip = styled.div`
background-color:#d6d6d6;
width:50px;
height:50px;
padding:8px;
font-size:28px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
margin-left:60px;
color:green;
border:1px solid green;
cursor: pointer;
transition:300ms;
:hover{
  color:white;
  background-color:red;
}
 `

const Like = styled.div`
background-color:#d6d6d6;
margin-right:60px;
width:50px;
height:50px;
padding:8px;
font-size:28px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
color:red;
border:1px solid green;
cursor: pointer;
transition:300ms;
:hover{
  color:white;
  background-color:purple;
}
 `


function HomeScreen() {

    const [profile, setProfile] = useState({})
    const [choose, setChoose] = useState(false)

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = () => {
        axios
            .get(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
            )
            .then((response) => {
                setProfile(response.data.profile);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const choosePerson = () => {
        const body = { id: profile.id, choice: true }
        axios
            .post(
                "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
                body
            )
            .then((response) => {
                setChoose(response.data);
                getProfile();
                
            })
            .catch((error) => {
                console.log(error);
                alert("Opa, algo deu errado!");
            });
    }

    return (
        <div>
            <CardStyle>
                <img src={profile.photo} />
                <h3>{profile.name}</h3>
                <h5>{profile.bio}</h5>
            </CardStyle>
            <Buttons>
                <Skip>
                    <button onClick={() => { getProfile(); }}> X </button>
                </Skip>
                <Like>
                    <button onClick={() => { choosePerson(); }}> ❤️ </button>
                </Like>
            </Buttons>
        </div>
    );
}

export default HomeScreen;
