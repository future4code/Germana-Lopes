import React from "react";
import axios from 'axios'
import styled from 'styled-components'
import tarot from "../tarot.json"


const HomePage = () => {

    const showCards = tarot.cards.map((card) => {
        return (
            <p>{card.name}</p>
        )
    })

    return (

        <div>
            <h2>Ouça o que o Tarot tem a dizer!</h2>
            {showCards}
            
        </div>




    )
}

export default HomePage