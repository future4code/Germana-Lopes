import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from "styled-components";
import { baseUrl, useRequestData } from "../hooks/useRequestData"
import axios from 'axios'

const MainContainer = styled.div`
height: 100vh;
h1 {
  margin-left: 420px;
}
`

const CandidateList = styled.div`
display: flex;
flex-direction: column;
background-color: #D3D3D3;
border-radius: 20px;
-webkit-box-shadow: 7px 7px 30px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
width: 400px;
height: 250px;
margin-top: 20px;
padding: 10px;
`

const TripsDetails = styled.div`
display: flex;
flex-direction: column;
background-color: #D3D3D3;
border-radius: 20px;
-webkit-box-shadow: 7px 7px 30px 1px rgba(0,0,0,0.79); 
box-shadow: 7px 7px 15px 1px rgba(0,0,0,0.79);
width: 400px;
height: 250px;
margin-left: 400px;
padding-left: 10px;
padding-bottom: 10px;
button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
button {
    width: 70px;
    border-radius: 25px;
    padding: 5px;
    margin-top: 20px;
}
`

const TripDetailsPage = () => {

  const pathParams = useParams()

  const [trip, setTrip] = useState(undefined)

  const history = useHistory()

  const goToAdminPage = () => {
    history.push("/admin/trips/list")
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    token ? getTripDetails() : history.push('/login')
  }, [history])

  const getTripDetails = () => {
    axios
      .get(
        `${baseUrl}/trip/${pathParams.id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const decideCandidate = (approve, headers) => {

    const body = {
      approve: approve,
    }
    axios.put(`${baseUrl}/trips//candidates/:candidateId/decide`, body, headers)
      .then(() => {
        window.alert("Viagem criada com sucesso!")

      })
      .catch((error) => {
        console.log(error);
        window.alert("Vixe, deu ruim. Preencha novamente!")
      });
  }

  const candidatesList = trip && trip.candidates.map((candidate) => {
    return (

      <div key={candidate.id}>
        <h5>Lista de candidatas</h5>
        <p>{candidate.name}</p>
        <button>Reprovar</button>
        <button>Aprovar</button>
      </div>
    )
  })



  return (
    trip ?
      <MainContainer>
        <h1> Detalhes da sua viagem!</h1>
        <TripsDetails>
          <p><strong>Nome:</strong> {trip.name}</p>
          <p><strong>Vai pa onde?</strong> {trip.planet}</p>
          <p><strong>Como vai ser?</strong> {trip.description}</p>
          <p><strong>E quando é?</strong> {trip.date}</p>
          <p><strong>Fico fora quanto tempo?</strong> {trip.durationInDays} dias</p>
          <button onClick={goToAdminPage}>Voltar</button>
          <CandidateList>
            {candidatesList}
          </CandidateList>

        </TripsDetails>
      </MainContainer>
      :
      null
  )
}

export default TripDetailsPage;