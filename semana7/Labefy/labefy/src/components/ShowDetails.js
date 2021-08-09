import React from 'react';
import axios from "axios";
import styled from 'styled-components';


const MusicCard = styled.div`
background-color: #1ED760;
color: black;
-webkit-box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
border-radius: 10px;
padding: 10px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
`

const headers = {
    headers: {
        Authorization: "germana-etges-lovelace"
    }
}


class ShowDetails extends React.Component {
    

render() {
        return (

	<MusicCard> 
            <h3>{this.props.track.name}</h3>
            <p>by {this.props.track.artist}</p>
            <audio src={this.props.track.url} controls /> 

	</MusicCard>

     );
    }
}


export default ShowDetails;