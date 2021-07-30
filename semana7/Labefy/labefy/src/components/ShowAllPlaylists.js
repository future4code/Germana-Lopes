import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import ShowDetails from './ShowDetails';
import AddTracks from './AddTracks';


const ContainerLista = styled.div`
width: 50%;
color: black;
h1 {
    padding-left: 40px;
}
`

const MainContainer = styled.div`
display: flex;
`

const CardPlaylist = styled.div`
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
width: 300px;
background-color: #1ED760;
color: black;
padding: 10px;
padding-left: 20px;
margin-top: 20px;
p {
    &:hover {
            cursor: pointer;
        }
}
border-radius: 20px;
margin-left: 30px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
button {
    padding: 5px;
}
`

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
};

class ShowAllPlaylists extends React.Component {
    state = {
        playlists: [],
        tracks: [],
        selectedPlaylist: undefined,
        addMusicVisible: false,
    }

    componentDidMount() {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {
        axios
            .get(url, headers)
            .then((response) => {
                this.setState({ playlists: response.data.result.list });
                console.log(response.data.result.list)

            })
            .catch((error) => {
                console.log(error.response.data.message)
            });
    }

    deletePlaylist = (id) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, headers)
            .then((response) => {
                alert("Adeus Playlist!")
                this.getAllPlaylists()
                console.log(response.data)

            })
            .catch((error) => {
                alert("Vixe, deu ruim.")
                console.log(error.response.data.message)
            });
    }

    getTracks = (playlist) => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, headers)
            .then((response) => {
                this.setState({ tracks: response.data.result.tracks, selectedPlaylist: playlist.name });
                console.log(response.data.result.tracks)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            });
    }

    handleAddMusic = () => {
        this.setState({addMusicVisible: !this.state.addMusicVisible})
    }

    render() {

        const showPlaylists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylist>
                    <p onClick={() => this.getTracks(playlist)} key={playlist.id}>{playlist.name}</p>
                    <button onClick={this.handleAddMusic}>Adicionar músicas</button>
                    <button onClick={() => this.deletePlaylist(playlist.id)}> Deletar playlist </button>
                    {this.state.addMusicVisible && 
                    <AddTracks playlistId={playlist.id}/>
                    }
                    

                </CardPlaylist>

            )
        });

        const showTracks = this.state.tracks.map((track) => {
            return (
                <ShowDetails track={track} />
            )
        })

        return (

            <MainContainer>
                <ContainerLista>
                    <h1> 🎶 Suas Playlists 🎶 </h1>
                    <div>
                    <h3>{showPlaylists}</h3>
                    </div>
                </ContainerLista>
                <div>
                    <h1>{this.state.selectedPlaylist}</h1>
                    {showTracks}
                </div>
            </MainContainer>

        );
    }
}


export default ShowAllPlaylists;