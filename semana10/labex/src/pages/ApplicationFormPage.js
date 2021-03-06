import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from 'react-router-dom'
import useForm from "../hooks/useForm"
import axios from 'axios'
import { baseUrl, useRequestData } from "../hooks/useRequestData"

const MainForms = styled.form`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
align-items: center;
gap: 20px;

input {
    width: 400px;
    padding: 10px;
    border-radius:20px;
}
select {
    width: 420px;
    padding: 10px;
    border-radius:20px;
}
`

const Buttons = styled.div`
display: flex;
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
justify-content: center;
margin-top: 30px;
`


const ApplicationFormPage = () => {

    const tripsData = useRequestData(`${baseUrl}/trips`, undefined)

    const history = useHistory()

    const goToTripsPage = () => {
        history.push("/trips/list")
    }

    const pathParams = useParams()

    const [form, handleForm] = useForm({
        trip: "",
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "Selecione o seu país"
    })



    const applyToTrip = (body, headers) => {
        console.log(`chamou função`, form.trip)
        axios.post(`${baseUrl}/trips/${form.trip}/apply`, body, headers)
            .then(() => {
                alert("Partiu viajar!")
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        const requestHeaders = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        applyToTrip(body, requestHeaders)
    }

    const tripSelect = tripsData && tripsData.trips.map((trip) => {

        return (<option name="trip" value={trip.id}>{trip.name}</option>)
    }

    )

    return (
        <div>
            <MainForms onSubmit={onSubmitForm}>
                <h1>Inscreva-se para uma viagem!</h1>
                <select name="trip" value={form.trip} onChange={handleForm}>
                    <option value="Selecione" selected="selected">Selecione a viagem</option>
                    {tripSelect}
                </select>
                <input required
                    pattern='[a-zA-ZsÀ-ú ]{3,}'
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    placeholder="Nome"
                    type="text"></input>
                <input required
                    name="age"
                    value={form.age}
                    onChange={handleForm}
                    placeholder="Idade"
                    type="number"
                    min="18"></input>
                <input required
                    pattern='^.{30,}'
                    name="applicationText"
                    value={form.applicationText}
                    onChange={handleForm}
                    placeholder="Mensagem"
                    type="text"></input>
                <input required
                    name="profession"
                    value={form.profession}
                    onChange={handleForm}
                    placeholder="Profissão"
                    type="text"></input>
                <select name="country" value={form.country} onChange={handleForm}>
                    <option value="Selecione" selected="selected">Selecione seu país</option>
                    <option value="Afeganistão">Afeganistão</option>
                    <option value="África do Sul">África do Sul</option>
                    <option value="Albânia">Albânia</option>
                    <option value="Alemanha">Alemanha</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antilhas Holandesas">Antilhas Holandesas</option>
                    <option value="Antárctida">Antárctida</option>
                    <option value="Antígua e Barbuda">Antígua e Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Argélia">Argélia</option>
                    <option value="Armênia">Armênia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Arábia Saudita">Arábia Saudita</option>
                    <option value="Austrália">Austrália</option>
                    <option value="Áustria">Áustria</option>
                    <option value="Azerbaijão">Azerbaijão</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrein">Bahrein</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belize">Belize</option>
                    <option value="Benim">Benim</option>
                    <option value="Bermudas">Bermudas</option>
                    <option value="Bielorrússia">Bielorrússia</option>
                    <option value="Bolívia">Bolívia</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brasil">BRASIL</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgária">Bulgária</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Butão">Butão</option>
                    <option value="Bélgica">Bélgica</option>
                    <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Camarões">Camarões</option>
                    <option value="Camboja">Camboja</option>
                    <option value="Canadá">Canadá</option>
                    <option value="Catar">Catar</option>
                    <option value="Cazaquistão">Cazaquistão</option>
                    <option value="Chade">Chade</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Chipre">Chipre</option>
                    <option value="Colômbia">Colômbia</option>
                    <option value="Comores">Comores</option>
                    <option value="Coreia do Norte">Coreia do Norte</option>
                    <option value="Coreia do Sul">Coreia do Sul</option>
                    <option value="Costa do Marfim">Costa do Marfim</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croácia">Croácia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Dinamarca">Dinamarca</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Egito">Egito</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Emirados Árabes Unidos">Emirados Árabes Unidos</option>
                    <option value="Equador">Equador</option>
                    <option value="Eritreia">Eritreia</option>
                    <option value="Escócia">Escócia</option>
                    <option value="Eslováquia">Eslováquia</option>
                    <option value="Eslovênia">Eslovênia</option>
                    <option value="Espanha">Espanha</option>
                    <option value="Estados Federados da Micronésia">Estados Federados da Micronésia</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Estônia">Estônia</option>
                    <option value="Etiópia">Etiópia</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Filipinas">Filipinas</option>
                    <option value="Finlândia">Finlândia</option>
                    <option value="França">França</option>
                    <option value="Gabão">Gabão</option>
                    <option value="Gana">Gana</option>
                    <option value="Geórgia">Geórgia</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Granada">Granada</option>
                    <option value="Gronelândia">Gronelândia</option>
                    <option value="Grécia">Grécia</option>
                    <option value="Guadalupe">Guadalupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernesei">Guernesei</option>
                    <option value="Guiana">Guiana</option>
                    <option value="Guiana Francesa">Guiana Francesa</option>
                    <option value="Guiné">Guiné</option>
                    <option value="Guiné Equatorial">Guiné Equatorial</option>
                    <option value="Guiné-Bissau">Guiné-Bissau</option>
                    <option value="Gâmbia">Gâmbia</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungria">Hungria</option>
                    <option value="Ilha Bouvet">Ilha Bouvet</option>
                    <option value="Ilha de Man">Ilha de Man</option>
                    <option value="Ilha do Natal">Ilha do Natal</option>
                    <option value="Ilha Heard e Ilhas McDonald">Ilha Heard e Ilhas McDonald</option>
                    <option value="Ilha Norfolk">Ilha Norfolk</option>
                    <option value="Ilhas Cayman">Ilhas Cayman</option>
                    <option value="Ilhas Cocos (Keeling)">Ilhas Cocos (Keeling)</option>
                    <option value="Ilhas Cook">Ilhas Cook</option>
                    <option value="Ilhas Feroé">Ilhas Feroé</option>
                    <option value="Ilhas Geórgia do Sul e Sandwich do Sul">Ilhas Geórgia do Sul e Sandwich do Sul</option>
                    <option value="Ilhas Malvinas">Ilhas Malvinas</option>
                    <option value="Ilhas Marshall">Ilhas Marshall</option>
                    <option value="Ilhas Menores Distantes dos Estados Unidos">Ilhas Menores Distantes dos Estados Unidos</option>
                    <option value="Ilhas Salomão">Ilhas Salomão</option>
                    <option value="Ilhas Virgens Americanas">Ilhas Virgens Americanas</option>
                    <option value="Ilhas Virgens Britânicas">Ilhas Virgens Britânicas</option>
                    <option value="Ilhas Åland">Ilhas Åland</option>
                    <option value="Indonésia">Indonésia</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="Índia">Índia</option>
                    <option value="Iraque">Iraque</option>
                    <option value="Irlanda do Norte">Irlanda do Norte</option>
                    <option value="Irlanda">Irlanda</option>
                    <option value="Irã">Irã</option>
                    <option value="Islândia">Islândia</option>
                    <option value="Israel">Israel</option>
                    <option value="Itália">Itália</option>
                    <option value="Iêmen">Iêmen</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japão">Japão</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordânia">Jordânia</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Laos">Laos</option>
                    <option value="Lesoto">Lesoto</option>
                    <option value="Letônia">Letônia</option>
                    <option value="Libéria">Libéria</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lituânia">Lituânia</option>
                    <option value="Luxemburgo">Luxemburgo</option>
                    <option value="Líbano">Líbano</option>
                    <option value="Líbia">Líbia</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedônia">Macedônia</option>
                    <option value="Madagáscar">Madagáscar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Maldivas">Maldivas</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Malásia">Malásia</option>
                    <option value="Marianas Setentrionais">Marianas Setentrionais</option>
                    <option value="Marrocos">Marrocos</option>
                    <option value="Martinica">Martinica</option>
                </select>
                <Buttons>
                    <button onClick={goToTripsPage}>Voltar</button>
                    <button type="submit">Enviar</button>
                </Buttons>
            </MainForms>


        </div>

    )
}

export default ApplicationFormPage;