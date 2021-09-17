import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const CardContainer = styled.div`
display: flex;
width: 100vw;
flex-wrap: wrap;
gap: 20px;
margin-left: 30px;
`

const ImageSize = styled.image`
width: 68px;
height: 128px;
`

const ButtonStyle = styled.div`
display: flex;
margin-top: 30px;
margin-left: 500px;
padding: 10px;
margin-bottom: 30px;
`

const DialogStyled = styled.div`
display: flex;
flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 400px;
img {
    margin: 0 auto;
}  
`;

const HomePage = () => {

    const [image, setImage] = useState("")
    const [data, setData] = useState(undefined)
    const [frontCard, setFrontCard] = useState(true)
    const [cards, setCards] = useState([])
    const [pickedCard, setPickedCard] = useState([])
    const [open, setOpen] = useState(false);

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const pickCard = (card) => {
        setPickedCard(card)
        handleClickOpen(card)
    }

    const showCards = cards && cards.map((card) => {
        return (
            <div onClick={() => { pickCard(card) }}>
                <ImageSize>
                    <img src={frontCard ? `${data.imagesUrl}${card.image}` : data.imageBackCard} />
                </ImageSize>
            </div>
        )
    })

    return (
        <div>
            <ButtonStyle>
                <Button color="primary" variant="contained" onClick={flipCard}>
                    Clique aqui para escolher uma carta!
                </Button>
            </ButtonStyle>
            <CardContainer>
                {showCards}
            </CardContainer>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogStyled>
                    <DialogTitle id="alert-dialog-title">{pickedCard.name}</DialogTitle>
                    <DialogContentText id="alert-dialog-description">
                        {data && <img src={`${data.imagesUrl}${pickedCard.image}`} />}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        O Tarot é um baralho de uso esotérico, geralmente composto por 78 cartas. Há relatos de uso pela nobreza italiana desde o período do Renascimento!
                    </DialogContentText>
                </DialogStyled>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default HomePage