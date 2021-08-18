import React from "react";
import { useHistory } from 'react-router-dom'

const TripDetailsPage = () => {

    const history = useHistory()

    const goToAdminPage = () => {
        history.push("/admin/trips/list")
    }


    return (
        <div>
            <p>aqui fica o card da viagem</p>

            <button onClick={goToAdminPage}>Voltar</button>

            <p> Aqui ficam as candidatas pendentes!! </p>

        </div>
    )
}

export default TripDetailsPage;