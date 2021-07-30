import React from 'react';
import axios from "axios";
import styled from 'styled-components';

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
};


class AddTracks extends React.Component {
    state = {
        artistNameInput: "",
        musicNameInput: "",
        urlInput: "",
    }

    onChangeArtist = (event) => {
        this.setState({
            artistNameInput: event.target.value
    
        })
    }

    onChangeMusic = (event) => {
        this.setState({
            musicNameInput: event.target.value
    
        })
    }

    onChangeUrl = (event) => {
        this.setState({
            urlInput: event.target.value
    
        })
    }

    addTrackPlaylist = (playlistId) => {
        const body = {
            name: this.state.musicNameInput,
            artist: this.state.artistNameInput,
            url: this.state.urlInput,
        }
    
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, headers)
            .then((response) => {
                alert("Música adicionada");
                this.setState({ musicNameInput: "" , artistNameInput: "" , urlInput: ""});
    
            })
            .catch((error) => {
                alert(error.response.data.message);
                console.log(error.response.data.message)
            });
    }

render() {
        return (

	<div> 
        <input 
        placeholder = "Artista"
        value={this.state.artistNameInput}
        onChange={this.onChangeArtist}
        />
        <input
        placeholder = "Nome da música"
        value={this.state.musicNameInput}
        onChange={this.onChangeMusic}
        />
        <input
        placeholder = "URL da música"
        value={this.state.urlInput}
        onChange={this.onChangeUrl}
        />
        <button onClick={() => this.addTrackPlaylist(this.props.playlistId)}>Adicionar</button>

	</div>

     );
    }
}


export default AddTracks;