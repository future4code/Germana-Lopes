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
button {
    padding: 10px;
}
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
                    <div>
                        {trip.name}

                        {/* key={trip.id}
                        id={trip.id}
                        name={trip.name}
                        planet={trip.planet}
                        date={trip.date}
                        duration={`${trip.durationInDays} dias`} */}
                    </div>
                )
            })}
            <p>aqui vão aparecer as viagens</p>

        </div>
    )
}

export default ListTripsPage;