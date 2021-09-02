import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
background-color: black;
color: white;
// padding-left: 50px;
align-items: center;
justify-content: space-around;
`

const Header = () => {


    return (
        <HeaderStyle>
            <h1>labeX</h1>
            <h3>Você sonha, a gente te leva!</h3>

        </HeaderStyle>
    )
}

export default Header;