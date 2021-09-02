import React from "react";
import { useHistory } from 'react-router-dom'
import { baseUrl, useRequestData } from '../hooks/useRequestData'
import styled from "styled-components";


const HomeButtons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 70px;
gap: 50px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 25px;
    padding: 10px;
}
`

const TripsList = styled.div`
display: flex;
flex-direction: column;
background-color: #D3D3D3;
-webkit-box-shadow: 7px 7px 30px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
width: 400px;
height: 250px;
margin-left: 400px;
margin-top: 50px;
padding-left: 10px;
border-radius: 15px;
`

const ListTripsPage = () => {

    const history = useHistory()

    const tripsData = useRequestData(`${baseUrl}/trips`, undefined)

    const goToHomePage = () => {
        history.push("/")
    }

    const goToApplicationPage = () => {
        history.push("/trips/application")
    }


    return (
        <div>
            <HomeButtons>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToApplicationPage}>Inscrição</button>
            </HomeButtons>

            {tripsData && tripsData.trips.map((trip) => {
                return (
                    <TripsList>
                        <p><strong>Nome:</strong> {trip.name}</p>
                        <p><strong>Qual a viagem?</strong>  {trip.description}</p> 
                        <p><strong>Duração:</strong> {trip.durationInDays} dias</p> 
                        <p><strong>Planeta:</strong> {trip.planet}</p> 

                    </TripsList>
                )
            })}
           

        </div>
    )
}

export default ListTripsPage;