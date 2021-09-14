import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'

const CardContainer = styled.div`
display: flex;
width: 100vw;
flex-wrap: wrap;
gap: 20px;
margin-left: 30px;
`

const CardName = styled.div`
display: flex;
color: red;
justify-content: center;
font-size: small;
`

const ImageSize = styled.image`
width: 68px;
height: 128px;
`

const ButtonStyle = styled.button`
display: flex;
margin-top: 30px;
margin-left: 500px;
padding: 10px;
margin-bottom: 30px;
`


const HomePage = () => {

    const [image, setImage] = useState("")
    const [data, setData] = useState(undefined)
    const [frontCard, setFrontCard] = useState(true)
    const [cards, setCards] = useState([])
    const [pickedCard, setPickedCard] = useState([])

    console.log(pickedCard)

    const getData = () => {
        axios
            .get("tarot.json")
            .then((response) => {
                setData(response.data);
                setCards(response.data.cards)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    useEffect(() => {
        getData()
    }, []);

    const flipCard = () => {
        setFrontCard(!frontCard)
        shuffleCards()
    }

    const shuffleCards = () => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        setCards(cards)
    }

    const pickCard = (card) => {
        setPickedCard(card)
    }

    const showCards = cards && cards.map((card) => {
        return (
            <div onClick={() => {pickCard(card)} }>
                <CardName>
                    <p><strong>{card.name}</strong></p>
                </CardName>
                <ImageSize>
                    <img src={frontCard ? `${data.imagesUrl}${card.image}` : data.imageBackCard} />
                </ImageSize>
            </div>
        )
    })

    return (
        <div>
            <ButtonStyle onClick={flipCard}>
                Clique aqui para escolher uma carta!
            </ButtonStyle>
            <CardContainer>
                {showCards}
            </CardContainer>
        </div>
    )
}

export default HomePage