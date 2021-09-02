import React from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import { baseUrl, useRequestData } from "../hooks/useRequestData"
import axios from 'axios'

const MainTitle = styled.div`
display: flex;
justify-content: center;
padding-top: 50px;
`

const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 25px;
    padding: 5px;
}
`

const TripsList = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
border-radius: 20px;
background-color: #D3D3D3;
-webkit-box-shadow: 7px 7px 30px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
width: 400px;
margin-left: 450px;
margin-top: 20px;
padding-left: 10px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 25px;
    padding: 5px;
}
`

const AdminHomePage = () => {

    const tripsData = useRequestData(`${baseUrl}/trips`, undefined)

    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripDetails = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const deleteTrip = (id) => {

        const requestHeaders = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios.delete(`${baseUrl}/trips/${id}`, requestHeaders)
            .then(() => {
                window.alert("Viagem deletada com sucesso!")

            })
            .catch((error) => {
                console.log(error);
                window.alert("Vixe, deu ruim. Clique novamente novamente!")
            });
    }


    const tripList = tripsData && tripsData.trips.map((trip) => {

        return (
            <TripsList key={trip.id}>
                <p><strong>Nome: </strong> {trip.name}</p>
                <button onClick={() => goToTripDetails(trip.id)}>Ver detalhes</button>
                <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
            </TripsList>
        )

    }

    )

    return (
        <div>
            <MainTitle>
                <h2>Painel administrativo</h2>
            </MainTitle>

            <Buttons>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToCreateTrip}>Criar viagem</button>
                <button onClick={goToLoginPage}>Logout</button>
            </Buttons>
            {tripList}
        </div>
    )
}

export default AdminHomePage;