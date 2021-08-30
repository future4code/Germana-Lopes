
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import { useState } from 'react'
// import { useHistory } from 'react-router'


const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
background-color: white;
color: black;
align-items: center;
justify-content: space-around;
`

   
const Header = () => {

    return (
        <HeaderStyle>
            <h2>Labeddit</h2>
            <h3>Dive into anything you can imagine!</h3>
        </HeaderStyle>
    )
}
export default Header