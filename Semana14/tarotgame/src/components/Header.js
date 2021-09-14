import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-image: linear-gradient(20deg, #00ffff 0, #04ecff 25%, #3cb5f2 50%, #3f81ac 75%, #36556e 100%);
height: 70px;
`


const Header = () => {
    return (
        <HeaderStyle>

            <h1>Ouça o que o Tarot tem pra dizer!</h1>

        </HeaderStyle>
    )
}

export default Header