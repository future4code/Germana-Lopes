import './App.css';
import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import ShowAllPlaylists from './components/ShowAllPlaylists';
import logo from "./imgs/logo.jpg"

const MainContainer = styled.div`
background-color: #2941AB;
min-height: 100vh;
font-family: spotify-circular, Helvetica, Arial, sans-serif;
`

const Header = styled.div`
background-color: black;
height: 15vh;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 50px;
`

const AddButton = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: 50px;
gap: 5px;
button {
    background-color: #1ED760;
    padding: 7px;
    border-radius: 10px;
    -webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);

    &:hover {
            cursor: pointer;
            background-color: #2941AB;
            color: white;
        }
}

`

const NameLogo = styled.div`
display: flex;
img {
    width: 80px;
}
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
};


class App extends React.Component {
    state = {
        playlistName: ""
    }

    onChangePlaylist = (event) => {
        this.setState({
            playlistName: event.target.value

        })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistName
        }

        axios
            .post(url, body, headers)
            .then((response) => {
                alert("Playlist criada!");
                this.setState({ playlistName: "" });

            })
            .catch((error) => {
                alert(error.response.data.message);
                console.log(error.response.data.message)
            });
    }

    render() {
        return (

            <MainContainer>
                <Header>
                    <NameLogo>
                        <img src={logo} />
                        <h1>Labefy da Gê</h1>
                    </NameLogo>
                    <AddButton>
                        <h4>Crie uma playlist aqui: </h4>
                        <input
                            value={this.state.playlistName}
                            onChange={this.onChangePlaylist}
                        />
                        <button onClick={this.createPlaylist}>Criar playlist</button>
                    </AddButton>
                </Header>


                <ShowAllPlaylists />
            </MainContainer>

        );
    }
}


export default App;