import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
// import { useState } from 'react'
// import { useHistory } from 'react-router'

const MainCard = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 350px;
border: solid black 2px
`

const NameUser = styled.div`
border-bottom: solid black 2px;
height: 40px;
`

const ShowPost = styled.div`
height: 300px;
`

const Votes = styled.div`
height: 50px;
border-top: solid black 2px;
`



const PostCard = () => {

    return (
        <MainCard>
            <NameUser>
                <p>nome.do.usuario</p>
            </NameUser>
            <ShowPost>
                <p>Texto do Post</p>
            </ShowPost>
            <Votes>
                <p>⬆ 0 ⬇ Comentários</p>
            </Votes>


        </MainCard>
    )
}
export default PostCard